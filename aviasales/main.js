const fromSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    cheapestTicket = document.querySelector('#cheapest-ticket'),
    otherCheapTickets = document.querySelector('#other-cheap-tickets');

//data
const citiesApi = 'https://raw.githubusercontent.com/mltsk/aviasales/master/dataBase/cities.json',
    proxy = 'https://cors-anywhere.herokuapp.com/',
    API_KEY = 'e208abad79268c549ec706edc1bb940c',
    calendar = 'https://min-prices.aviasales.ru/calendar_preload',
    MAX_COUNT = 10;

let city = [];

//Функции 

const getData = (url, callback, reject = console.log()) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);
    
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) return;

        if(request.status === 200) {
            callback(request.response);
        }  else {
            console.log(request.status);
            alert('В этом направлении нет рейсов');
        }
    });

    request.send();
}



const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== '') {
        const filterCity = city.filter((item) => {
            const fixItem = item.name.toLocaleLowerCase();
            return fixItem.startsWith(input.value.toLocaleLowerCase());
    });

        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.tabIndex = 0;
            li.textContent = item.name;
            list.append(li);
        });
    }
};

const selectCity = (event, input, list) => {
    const target = event.target;

    if (target.tagName.toLocaleLowerCase() === 'li') {
        input.value = target.textContent;
        list.textContent = '';
    }
};

const getNameCity = (code) => {
    const objCity = city.find((item) => item.code === code);
    return  objCity.name;
}

const getDate = (date) => {
    return new Date(date).toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

const getChanges = (num) => {
    if (num) {
        return num === 1 ? 'C одной пересадкой' : 'С двумя пересадками';
    } else {
        return 'Без пересадок';
    }
};

const getLinkAviasales = (data) => {
    let link = 'https://aviasales.ru/search/';

    link += data.origin 

    const date = new Date(data.depart_date);

    const day = date.getDate();

    link += day < 10 ? '0' + day : day;

    const month = date.getMonth() +1;

    link += month < 10 ? '0' + month : month;

    link += data.destination;

    return link + 1;
}

const creatCard = (data) => {
    const ticket = document.createElement('article');
    ticket.classList.add('ticket');

    let deep = '';

    if (data) {
        deep = `
    <h3 class="agent">${data.gate}</h3>
    <div class="ticket__wrapper">
	    <div class="left-side">
		    <a href="${getLinkAviasales(data)}" target="_blank" class="button button__buy">Купить	за ${data.value}₽</a>
	    </div>
	    <div class="right-side">
		<div class="block-left">
			<div class="city__from">Вылет из города
				<span class="city__name">${getNameCity(data.origin)}</span>
			</div>
			<div class="date">${getDate(data.depart_date)}</div>
		</div>

		<div class="block-right">
			<div class="changes">${getChanges(data.number_of_changes)}</div>
			<div class="city__to">Город назначения:
				<span class="city__name">${getNameCity(data.destination)}</span>
			</div>
		</div>
	    </div>
    </div>
        `;
    } else {
        deep = '<h3>К сожалению на текущую дату билетов не нашлось!</h3>'
    }

    ticket.insertAdjacentHTML('afterbegin', deep);

    return ticket;
};

const renderCheapDay = (cheapTicket) => {
    cheapestTicket.style.display = 'block';
    cheapestTicket.innerHTML = '<h2>Самый дешевый билет на выбранную дату</h2>';

    const ticket = creatCard(cheapTicket[0]);
    cheapestTicket.append(ticket);
};

const renderCheapYear = (cheapTickets) => { 
    otherCheapTickets.style.display = 'block';
    otherCheapTickets.innerHTML = '<h2>Самые дешевые билеты на другие даты</h2>';
    cheapTickets.sort((a, b) =>  a.value - b.value);

    for(let i = 0; i < cheapTickets.length && i < MAX_COUNT; i++) {
        const ticket = creatCard(cheapTickets[i]);
        otherCheapTickets.append(ticket);

    }
};

const renderCheap = (data, date) => {
    const cheapTicketYear = JSON.parse(data).best_prices;
    
    const cheapTicketDay = cheapTicketYear.filter((item) => {
        return item.depart_date === date;
    });

    renderCheapDay(cheapTicketDay);
    renderCheapYear(cheapTicketYear);      
};

//обработчик событий

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesTo.addEventListener('click', (event) => {
    selectCity(event, inputCitiesTo, dropdownCitiesTo);
});

fromSearch.addEventListener('submit', (event) => {
    event.preventDefault();

    const cityFrom = city.find((item) => inputCitiesFrom.value === item.name);

    const cityTo = city.find((item) => inputCitiesTo.value === item.name);

    const formData = {
        from: cityFrom,
        to: cityTo,
        when: inputDateDepart.value,
    };

    if (formData.from && formData.to) {

       const requestData = `?depart_date=${formData.when}&origin=${formData.from.code}&destination=${formData.to.code}&one_way=true&token=${API_KEY}`

        getData(calendar + requestData, (response) => {
            renderCheap(response, formData.when)
        }, (e) => {
            alert('В этом направлении нет рейсов');
        });  
    } else {
        alert('Введите корректное название города!');
    }
});
 

getData(citiesApi, (data) => {
    city = JSON.parse(data).filter((item) => {
        return item.name;
    });

    city.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
    })
});

