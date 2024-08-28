function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,n={},r={},i=t.parcelRequirede9c;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequirede9c=i),(0,i.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,r=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.1a900372.js","eyyUD","icons.c14567a0.svg","hfd23","icons.c14567a0.svg"]'));const s="https://forkify-api.herokuapp.com/api/v2/recipes",a="54ad013e-315e-4c1e-9837-21138cf7ff81",o=function(e){return new Promise(function(t,n){setTimeout(function(){n(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},c=async function(e){try{let t=await Promise.race([fetch(e),o(7)]),n=await t.json();if(!t.ok)throw Error(`${n.message}(${t.status})`);return n}catch(e){throw e}},d=async function(e,t){try{let n=await Promise.race([fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),o(7)]),r=await n.json();if(!n.ok)throw Error(`${r.message}(${n.status})`);return r}catch(e){throw e}},l={recipe:{},search:{query:"",results:[],page:1},bookmark:[]},u=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},h=async function(e){try{let t=await c(`${s}/${e}?key=${a}`);l.recipe=u(t),l.bookmark.some(t=>t.id===e)?l.recipe.bookmarked=!0:l.recipe.bookmarked=!1}catch(e){throw e}},p=async function(e){try{l.search.query=e;let t=await c(`${s}?search=${e}&key=${a}`);l.search.page=1,console.log(t.data.recipes),l.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))}catch(e){throw e}},g=function(e=l.search.page){return l.search.page=e,l.search.results.slice((e-1)*10,10*e)},f=function(e){l.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/l.recipe.servings}),l.recipe.servings=e},_=function(){localStorage.setItem("bookmarks",JSON.stringify(l.bookmark))},v=function(e){l.bookmark.push(e),e.id===l.recipe.id&&(l.recipe.bookmarked=!0),_()},m=function(e){let t=l.bookmark.findIndex(e=>e.id===l.recipe.id);l.bookmark.splice(t,1),e.id===l.recipe.id&&(l.recipe.bookmarked=!1),_()};!function(){let e=localStorage.getItem("bookmarks");e&&(l.bookmark=JSON.parse(e))}();const w=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{if(ingArr=e[1].split(",").map(e=>e.trim()),3!==ingArr.length)throw Error("Wrong Ingredient Format!! Please use the correct format.");let[t,n,r]=ingArr;return{quantity:t?+t:null,unit:n,description:r}}),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await d(`${s}?key=${a}`,n);console.log(r),l.recipe=u(r),v(l.recipe)}catch(e){throw e}};var k={};k=new URL("icons.c14567a0.svg",import.meta.url).toString();var b={};!/**
 * @license Fraction.js v4.0.1 09/09/2015
 * http://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/function(e){var t={s:1,n:0,d:1};function n(e){var t=function(){var t=Error.apply(this,arguments);t.name=this.name=e,this.stack=t.stack,this.message=t.message},n=function(){};return n.prototype=Error.prototype,t.prototype=new n,t}var r=h.DivisionByZero=n("DivisionByZero"),i=h.InvalidParameter=n("InvalidParameter");function s(e,t){return isNaN(e=parseInt(e,10))&&a(),e*t}function a(){throw new i}var o=function(e,n){var i,o=0,c=1,d=1,l=0,u=0,h=0,p=1,g=1,f=0,_=1,v=1,m=1;if(null==e);else if(void 0!==n)d=(o=e)*(c=n);else switch(typeof e){case"object":"d"in e&&"n"in e?(o=e.n,c=e.d,"s"in e&&(o*=e.s)):0 in e?(o=e[0],1 in e&&(c=e[1])):a(),d=o*c;break;case"number":if(e<0&&(d=e,e=-e),e%1==0)o=e;else if(e>0){for(e>=1&&(g=Math.pow(10,Math.floor(1+Math.log(e)/Math.LN10)),e/=g);_<=1e7&&m<=1e7;){if(e===(i=(f+v)/(_+m))){_+m<=1e7?(o=f+v,c=_+m):m>_?(o=v,c=m):(o=f,c=_);break}e>i?(f+=v,_+=m):(v+=f,m+=_),_>1e7?(o=v,c=m):(o=f,c=_)}o*=g}else(isNaN(e)||isNaN(n))&&(c=o=NaN);break;case"string":if("-"===(_=e.match(/\d+|./g))[f]?(d=-1,f++):"+"===_[f]&&f++,_.length===f+1?u=s(_[f++],d):"."===_[f+1]||"."===_[f]?("."!==_[f]&&(l=s(_[f++],d)),(++f+1===_.length||"("===_[f+1]&&")"===_[f+3]||"'"===_[f+1]&&"'"===_[f+3])&&(u=s(_[f],d),p=Math.pow(10,_[f].length),f++),("("===_[f]&&")"===_[f+2]||"'"===_[f]&&"'"===_[f+2])&&(h=s(_[f+1],d),g=Math.pow(10,_[f+1].length)-1,f+=3)):"/"===_[f+1]||":"===_[f+1]?(u=s(_[f],d),p=s(_[f+2],1),f+=3):"/"===_[f+3]&&" "===_[f+1]&&(l=s(_[f],d),u=s(_[f+2],d),p=s(_[f+4],1),f+=5),_.length<=f){d=o=h+(c=p*g)*l+g*u;break}default:a()}if(0===c)throw new r;t.s=d<0?-1:1,t.n=Math.abs(o),t.d=Math.abs(c)},c=function(e,t,n){for(var r=1;t>0;e=e*e%n,t>>=1)1&t&&(r=r*e%n);return r},d=function(e,t){for(;t%2==0;t/=2);for(;t%5==0;t/=5);if(1===t)return 0;for(var n=10%t,r=1;1!==n;r++)if(n=10*n%t,r>2e3)return 0;return r},l=function(e,t,n){for(var r=1,i=c(10,n,t),s=0;s<300;s++){if(r===i)return s;r=10*r%t,i=10*i%t}return 0},u=function(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}};function h(e,n){if(!(this instanceof h))return new h(e,n);o(e,n),e=h.REDUCE?u(t.d,t.n):1,this.s=t.s,this.n=t.n/e,this.d=t.d/e}h.REDUCE=1,h.prototype={s:1,n:0,d:1,abs:function(){return new h(this.n,this.d)},neg:function(){return new h(-this.s*this.n,this.d)},add:function(e,n){return o(e,n),new h(this.s*this.n*t.d+t.s*this.d*t.n,this.d*t.d)},sub:function(e,n){return o(e,n),new h(this.s*this.n*t.d-t.s*this.d*t.n,this.d*t.d)},mul:function(e,n){return o(e,n),new h(this.s*t.s*this.n*t.n,this.d*t.d)},div:function(e,n){return o(e,n),new h(this.s*t.s*this.n*t.d,this.d*t.n)},clone:function(){return new h(this)},mod:function(e,n){return isNaN(this.n)||isNaN(this.d)?new h(NaN):void 0===e?new h(this.s*this.n%this.d,1):(o(e,n),0===t.n&&0===this.d&&h(0,0),new h(this.s*t.d*this.n%(t.n*this.d),t.d*this.d))},gcd:function(e,n){return o(e,n),new h(u(t.n,this.n),t.d*this.d/u(t.d,this.d))},lcm:function(e,n){return(o(e,n),0===t.n&&0===this.n)?new h:new h(t.n*this.n/u(t.n,this.n),u(t.d,this.d))},ceil:function(e){return(e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d))?new h(NaN):new h(Math.ceil(e*this.s*this.n/this.d),e)},floor:function(e){return(e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d))?new h(NaN):new h(Math.floor(e*this.s*this.n/this.d),e)},round:function(e){return(e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d))?new h(NaN):new h(Math.round(e*this.s*this.n/this.d),e)},inverse:function(){return new h(this.s*this.d,this.n)},pow:function(e){return e<0?new h(Math.pow(this.s*this.d,-e),Math.pow(this.n,-e)):new h(Math.pow(this.s*this.n,e),Math.pow(this.d,e))},equals:function(e,n){return o(e,n),this.s*this.n*t.d==t.s*t.n*this.d},compare:function(e,n){o(e,n);var r=this.s*this.n*t.d-t.s*t.n*this.d;return(0<r)-(r<0)},divisible:function(e,n){return o(e,n),!(!(t.n*this.d)||this.n*t.d%(t.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(e){var t,n="",r=this.n,i=this.d;return this.s<0&&(n+="-"),1===i?n+=r:(e&&(t=Math.floor(r/i))>0&&(n+=t+" ",r%=i),n+=r+"/"+i),n},toLatex:function(e){var t,n="",r=this.n,i=this.d;return this.s<0&&(n+="-"),1===i?n+=r:(e&&(t=Math.floor(r/i))>0&&(n+=t,r%=i),n+="\\frac{"+r+"}{"+i+"}"),n},toContinued:function(){var e,t=this.n,n=this.d,r=[];do r.push(Math.floor(t/n)),e=t%n,t=n,n=e;while(1!==t)return r},toString:function(){var e,t=this.n,n=this.d;if(isNaN(t)||isNaN(n))return"NaN";h.REDUCE||(e=u(t,n),t/=e,n/=e);var r=d(t,n),i=l(t,n,r),s=-1===this.s?"-":"";if(s+=t/n|0,t%=n,(t*=10)&&(s+="."),r){for(var a=i;a--;)s+=t/n|0,t%=n,t*=10;s+="(";for(var a=r;a--;)s+=t/n|0,t%=n,t*=10;s+=")"}else for(var a=15;t&&a--;)s+=t/n|0,t%=n,t*=10;return s}},"function"==typeof define&&define.amd?define([],function(){return h}):b=h}(0);class y{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._generateMarkup(),n=document.createRange().createContextualFragment(t).querySelectorAll("*"),r=this._parentElement.querySelectorAll("*");n.forEach((e,t)=>{let n=r[t];e.isEqualNode(n)||e.firstChild?.nodeValue.trim()===""||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach(e=>n.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`<div class="spinner">
                <svg>
                  <use href="${e(k)}#icon-loader"></use>
                </svg>
              </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(t=this._message){let n=`
                <div class="message">
                    <div>
                      <svg>
                        <use href="${e(k)}#icon-smile"></use>
                      </svg>
                    </div>
                    <p>${t}</p>
                  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}renderError(t=this._errorMessage){let n=`
            <div class="error">
                <div>
                  <svg>
                    <use href="${e(k)}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${t}</p>
              </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}}class $ extends y{_parentElement=document.querySelector(".recipe");_errorMessage="The recipe was not found, Please try another one!";_message;addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let n=t.target.closest(".btn--tiny");if(!n)return;let r=+n.dataset.goto;r>0&&e(r)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",t=>{t.target.closest(".btn--round")&&e(!this._data.bookmarked)})}_generateMarkup(){let t=this._data.servings;return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${e(k)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${e(k)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button data-goto = ${t-1} class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${e(k)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button data-goto=${t+1} class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${e(k)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${e(k)}#icon-user"></use>
            </svg> 
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${e(k)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
             ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${e(k)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateMarkupIngredient(t){return`  
          <li class="recipe__ingredient">
         <svg class="recipe__icon">
           <use href="${e(k)}#icon-check"></use>
         </svg>
          <div class="recipe__quantity">${t.quantity?new(e(b))(t.quantity).toFraction(!0).toString():""}

           </div>
         <div class="recipe__description">
           <span class="recipe__unit">${t.unit??""}</span>
           ${t.description}
         </div>
       </li>`}}var E=new $;class M{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var N=new M,S={};S=new URL("icons.c14567a0.svg",import.meta.url).toString();class H extends y{_parentElement=document.querySelector(".results");_errorMessage="No recipes found with this name! Please try again.";_message;_generateMarkup(){return this._data.map(this._generateMarkupPreview).join()}_generateMarkupPreview(t){let n=window.location.hash.slice(1);return` 
          <li class="preview">
            <a class="preview__link" ${t.id===n?"preview__link--active":""} href="#${t.id}">
              <figure class="preview__fig">
                <img src="${t.image} " alt="${t.title}" />
              </figure>
              <div class="preview__data">
              <h4 class="preview__title">${t.title}</h4>
              <p class="preview__publisher">${t.publisher}</p>
              </div>
              <div class="preview__user-generated ${t.key?"":"hidden"}">
                <svg>
                  <use href="${e(S)}#icon-user"></use>
                </svg>
            </div>
            </a>
          </li>`}}var q=new H;class L extends y{_parentElement=document.querySelector(".pagination");addHandlerPagination(e){this._parentElement.addEventListener("click",function(t){let n=t.target.closest(".btn--inline");n&&e(+n.dataset.goto)})}_generateMarkup(){let t=this._data.page,n=Math.ceil(this._data.results.length/10);return 1===t&&n>1?`
      <button data-goto ='${t+1}' class="btn--inline pagination__btn--next">
        <span>Page ${t+1}</span>
        <svg class="search__icon">
            <use href="${e(S)}#icon-arrow-right"></use>
        </svg>
      </button>`:t===n&&n>1?`<button data-goto ='${t-1}' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${e(S)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>`:t>1&&t<n?`
        <button data-goto ='${t-1}' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${e(S)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
        </button>
        <button data-goto ='${t+1}' class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
                <use href="${e(S)}#icon-arrow-right"></use>
            </svg>
        </button>`:"Page one and there are no other pages"}}var R=new L;class x extends y{_parentElement=document.querySelector(".bookmarks");_errorMessage="Bharosa rakh bhai m sab sahi kar sakta hun!";_message="Find you Faviorite Recipies to Bookmark.";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(this._generateMarkupPreview).join()}_generateMarkupPreview(t){let n=window.location.hash.slice(1);return` 
          <li class="preview">
            <a class="preview__link" ${t.id===n?"preview__link--active":""} href="#${t.id}">
              <figure class="preview__fig">
                <img src="${t.image} " alt="${t.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${t.title}</h4>
                <p class="preview__publisher">${t.publisher}</p>
                <div class="preview__user-generated ${t.key?"":"hidden"}">
                <svg>
                  <use href="${e(S)}#icon-user"></use>
                </svg>
            </div>
              </div>
            </a>
          </li>`}}var P=new x;class A extends y{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnAddRecipe=document.querySelector(".nav__btn--add-recipe");_btnCloseModal=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}toggleHiddenClass(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnAddRecipe.addEventListener("click",this.toggleHiddenClass.bind(this))}_addHandlerCloseWindow(){this._btnCloseModal.addEventListener("click",this.toggleHiddenClass.bind(this)),this._overlay.addEventListener("click",this.toggleHiddenClass.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){return""}}var C=new A;const T=async function(){try{let e=window.location.hash.slice(1);if(!e)return;E.renderSpinner(),q.update(g()),P.update(l.bookmark),await h(e),E.render(l.recipe)}catch(e){E.renderError(e),console.log(e)}},U=async function(){try{q.renderSpinner();let e=N.getQuery();if(!e)return;await p(e),q.render(g()),R.render(l.search)}catch(e){q.renderError(e)}},j=async function(e){try{E.renderSpinner(),await w(e),E.render(l.recipe),C.renderMessage(),P.render(l.bookmark),window.history.pushState(null,"",`#${l.recipe.id}`),setTimeout(function(){C.toggleHiddenClass()},2500)}catch(e){C.renderError(e.message)}location.reload()};P.addHandlerRender(function(){P.render(l.bookmark)}),E.addHandlerRender(T),N.addHandlerSearch(U),R.addHandlerPagination(function(e){q.render(g(e)),R.render(l.search)}),E.addHandlerUpdateServings(function(e){f(e),E.update(l.recipe)}),E.addHandlerBookmark(function(e){e?v(l.recipe):m(l.recipe),E.update(l.recipe),P.render(l.bookmark),0===l.bookmark.length&&P.renderMessage()}),C.addHandlerUpload(j);
//# sourceMappingURL=index.1a900372.js.map
