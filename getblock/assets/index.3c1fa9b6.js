import{o as e,c as t,a as r,w as s,v as l,t as i,F as a,r as o,b as n,d as c,e as h}from"./vendor.f29777e1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var d="/getblock/assets/arrow-down.8191231d.svg",u=(e,t)=>{for(const[r,s]of t)e[r]=s;return e};const g="c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd",f={data:()=>({leftValue:0,leftSearch:"","leftСurrency":"BTC",leftUrlImage:"https://changenow.io/images/sprite/currencies/btc.svg",leftList:[],rightValue:0,rightSearch:"","rightСurrency":"ETH",rightUrlImage:"https://changenow.io/images/sprite/currencies/eth.svg",pair:"btc_eth",rightList:[],isError:!1,currencies:[]}),methods:{showList(e){const t=e.target.closest(".input"),r=t.nextElementSibling;t.classList.remove("flex"),t.classList.add("hidden"),r.classList.add("flex"),r.classList.remove("hidden"),r.querySelector("input").focus()},hideList(e){const t=e.target.closest(".search"),r=t.previousElementSibling;r.classList.remove("hidden"),r.classList.add("flex"),t.classList.add("hidden"),t.classList.remove("flex")},handleLeftListClick(e,t){const r=document.querySelector("#left-search"),s=document.querySelector("#left-input");s.classList.remove("hidden"),s.classList.add("flex"),r.classList.add("hidden"),r.classList.remove("flex"),this.leftСurrency=e.toUpperCase(),this.leftUrlImage=t,this.leftSearch=""},handleRightListClick(e,t){const r=document.querySelector("#right-search"),s=document.querySelector("#right-input");s.classList.remove("hidden"),s.classList.add("flex"),r.classList.add("hidden"),r.classList.remove("flex"),this.rightСurrency=e.toUpperCase(),this.rightUrlImage=t,this.rightSearch=""},getCurrencies(){fetch("https://api.changenow.io/v1/currencies?active=true",{method:"GET",redirect:"follow"}).then((e=>e.json())).then((e=>{this.currencies=e,this.leftList=e,this.rightList=e})).catch((e=>console.log("error",e)))},getEstimated(){fetch(`https://api.changenow.io/v1/exchange-amount/${this.leftValue}/${this.pair}?api_key=${g}`,{method:"GET",redirect:"follow"}).then((e=>e.json())).then((e=>{e.error?this.rightValue="-":this.rightValue=e.estimatedAmount})).catch((e=>{this.rightValue=0,console.log("error",e)}))},getMinExchangeAmount(){this.isError=!1,fetch(`https://api.changenow.io/v1/min-amount/${this.pair}?api_key=${g}`,{method:"GET",redirect:"follow"}).then((e=>e.json())).then((e=>{e.error&&(this.isError=!0),this.leftValue=e.minAmount})).catch((e=>console.log(e)))}},mounted(){this.getCurrencies(),this.getMinExchangeAmount()},watch:{"leftСurrency"(){this.pair=`${this.leftСurrency}_${this.rightСurrency}`,this.getMinExchangeAmount()},"rightСurrency"(){this.pair=`${this.leftСurrency}_${this.rightСurrency}`,this.getEstimated()},leftValue(){this.getEstimated()},leftSearch(e){if(!e)return void(this.leftList=this.currencies);const t=this.currencies.filter((({ticker:t,name:r})=>{const s=new RegExp(e,"i"),l=null!==t.match(s),i=null!==r.match(s);return l||i}));this.leftList=t},rightSearch(e){if(!e)return void(this.rightList=this.currencies);const t=this.currencies.filter((({ticker:t,name:r})=>{const s=new RegExp(e,"i"),l=null!==t.match(s),i=null!==r.match(s);return l||i}));this.rightList=t},isError(){const e=document.querySelector("#error");this.isError?e.classList.remove("hidden"):e.classList.add("hidden")}}},m={class:"flex flex-col items-center p-5 font-serif"},p=r("div",{class:"flex flex-col items-start lg:self-start"},[r("h2",{class:"text-4xl lg:text-5xl"},"Crypto Exchange"),r("h3",{class:"text-xl mt-3"},"Exchange fast and easy")],-1),x={class:"flex self-stretch flex-col mt-14"},b={class:"flex flex-col lg:flex-row"},y={id:"left-input",class:"input flex mt-4 lg:mt-0 px-4 bg-grey rounded-basic h-12 justify-around items-center flex-nowrap border border-gray-300 lg:w-1/2"},w=r("span",{class:"w-px h-7 bg-gray-300"},null,-1),v=["src"],L={class:"ml-4"},E=r("img",{class:"ml-auto",src:d,width:"16",height:"16"},null,-1),C={id:"left-search",class:"search hidden mt-4 lg:mt-0 lg:w-1/2 relative"},k={class:"flex w-full px-4 bg-grey rounded-t-basic h-12 justify-around items-center flex-nowrap border border-gray-300"},S={class:"flex absolute w-full top-full bg-grey rounded-b-basic justify-around items-center flex-nowrap border-b border-r border-l border-gray-300 z-10"},V={class:"flex flex-col flex-grow h-36 overflow-scroll overflow-x-hidden"},U=["onClick"],j=["src"],$={class:"pl-2"},T={class:"pl-3 text-gray-400"},q=r("div",{class:"self-end mt-4 cursor-pointer lg:self-start lg:mt-3 lg:mx-4 transform lg:rotate-90"},[r("img",{src:"/getblock/assets/swap.d21f91f9.svg",alt:"swap",width:"24",height:"24"})],-1),A={id:"right-input",class:"input flex mt-4 lg:mt-0 px-4 bg-grey rounded-basic h-12 justify-around items-center flex-nowrap border border-gray-300 lg:w-1/2"},I=r("span",{class:"w-px h-7 bg-gray-300"},null,-1),_=["src"],G={class:"ml-4"},M=r("img",{class:"ml-auto",src:d,width:"16",height:"16"},null,-1),N={id:"right-search",class:"search hidden mt-4 lg:mt-0 lg:w-1/2 relative"},R={class:"flex w-full px-4 bg-grey rounded-t-basic h-12 justify-around items-center flex-nowrap border border-gray-300"},B={class:"flex absolute w-full top-full bg-grey rounded-b-basic justify-around items-center flex-nowrap border-b border-r border-l border-gray-300 z-10"},z={class:"flex flex-col flex-grow h-36 overflow-scroll overflow-x-hidden"},H=["onClick"],F=["src"],K={class:"pl-2"},O={class:"pl-3 text-gray-400"},P=n('<div class="flex flex-col lg:flex-row lg:items-end"><div class="flex flex-col mt-12 lg:mt-6 lg:mr-8 lg:w-full"><label class="flex" for="ethereum-address">Your Ethereum address</label><div class="mt-2 lg:mt-0 px-4 bg-grey rounded-basic h-12 flex justify-around items-center flex-nowrap border border-gray-300"><input id="ethereum-address" class="bg-transparent flex-grow h-10 outline-none" type="text" value=""></div></div><div class="flex flex-col relative"><button class="flex items-center justify-center mt-5 h-12 rounded-basic bg-blue hover:bg-blue-hover text-white font-bold py-4 lg:w-64" type="submit">EXCHANGE</button><p id="error" class="hidden mt-2 text-red-600 absolute top-full left-1/2 transform -translate-x-1/2 w-64">This pair is disabled now</p></div></div>',1);var X=u(f,[["render",function(n,c,h,d,u,g){return e(),t("section",m,[p,r("form",x,[r("div",b,[r("div",y,[s(r("input",{class:"bg-transparent flex-grow h-10 outline-none",type:"text","onUpdate:modelValue":c[0]||(c[0]=e=>u.leftValue=e)},null,512),[[l,u.leftValue]]),w,r("div",{class:"w-44 h-10 flex items-center cursor-pointer",onClick:c[1]||(c[1]=(...e)=>g.showList&&g.showList(...e))},[r("img",{class:"ml-8",src:u.leftUrlImage,width:"20",height:"20"},null,8,v),r("span",L,i(u.leftСurrency),1),E])]),r("div",C,[r("div",k,[s(r("input",{class:"bg-transparent outline-none flex-grow h-10",type:"text",placeholder:"Search","onUpdate:modelValue":c[2]||(c[2]=e=>u.leftSearch=e)},null,512),[[l,u.leftSearch]]),r("img",{class:"ml-auto cursor-pointer",src:"/getblock/assets/close.503c26f8.svg",width:"16",height:"16",onClick:c[3]||(c[3]=(...e)=>g.hideList&&g.hideList(...e))})]),r("div",S,[r("ul",V,[(e(!0),t(a,null,o(u.leftList,(({ticker:s,name:l,image:a})=>(e(),t("li",{class:"flex p-3 cursor-pointer hover:bg-gray-200",onClick:e=>g.handleLeftListClick(s,a),key:s},[r("img",{src:a,alt:"BTC",width:"20",height:"20"},null,8,j),r("span",$,i(s.toUpperCase()),1),r("p",T,i(l),1)],8,U)))),128))])])]),q,r("div",A,[s(r("input",{class:"bg-transparent flex-grow h-10 outline-none",type:"text","onUpdate:modelValue":c[4]||(c[4]=e=>u.rightValue=e),readonly:""},null,512),[[l,u.rightValue]]),I,r("div",{class:"w-44 h-10 flex items-center cursor-pointer",onClick:c[5]||(c[5]=(...e)=>g.showList&&g.showList(...e))},[r("img",{class:"ml-8",src:u.rightUrlImage,width:"20",height:"20"},null,8,_),r("span",G,i(u.rightСurrency),1),M])]),r("div",N,[r("div",R,[s(r("input",{class:"bg-transparent outline-none flex-grow h-10",type:"text",placeholder:"Search","onUpdate:modelValue":c[6]||(c[6]=e=>u.rightSearch=e)},null,512),[[l,u.rightSearch]]),r("img",{class:"ml-auto cursor-pointer",src:"/getblock/assets/close.503c26f8.svg",width:"16",height:"16",onClick:c[7]||(c[7]=(...e)=>g.hideList&&g.hideList(...e))})]),r("div",B,[r("ul",z,[(e(!0),t(a,null,o(u.rightList,(({ticker:s,name:l,image:a})=>(e(),t("li",{class:"flex p-3 cursor-pointer hover:bg-gray-200",onClick:e=>g.handleRightListClick(s,a),key:s},[r("img",{src:a,alt:"BTC",width:"20",height:"20"},null,8,F),r("span",K,i(s.toUpperCase()),1),r("p",O,i(l),1)],8,H)))),128))])])])]),P])])}]]);h({setup:t=>(t,r)=>(e(),c(X))}).mount("#app");