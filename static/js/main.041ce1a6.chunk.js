(this["webpackJsonptest-task-pokemon"]=this["webpackJsonptest-task-pokemon"]||[]).push([[0],{26:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),o=a(25),s=a(3),i=a(5),m=a.n(i),u=a(2),d=function(e){return e.filter},E={filterType:null,filters:[]},p=function(){var e=Object(s.c)(d).filters,t=Object(s.b)(),a=l.a.useState(null),n=Object(o.a)(a,2),c=n[0],r=n[1],i=l.a.useCallback((function(e){t(function(e){return{type:"FILTERS/SET_FILTER",payload:e}}(e)),r(e)}),[]);return l.a.useEffect((function(){t((function(e){var t=[];m.a.get("https://pokeapi.co/api/v2/type?limit=999").then((function(a){var n=a.data;t=n.results.map((function(e){return e.name})),e({type:"FILTERS/SET_FILTERS",payload:t})})).catch((function(e){return console.log(e)}))}))}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"filter-list"},0===e.length?l.a.createElement("p",null,"Loading filters..."):l.a.createElement("ul",null,l.a.createElement("li",{className:"".concat(null===c?"active":""),onClick:function(){return i(null)}},"All"),e.length&&e.map((function(e,t){return l.a.createElement("li",{className:"".concat(c===e?"active":""),key:"".concat(e,"_").concat(t),onClick:function(){return i(e)}},e)})))))},f=a(23),h=function(){return l.a.createElement(f.a,{speed:2,width:185,height:290,viewBox:"0 0 185 290",backgroundColor:"#ebeaea",foregroundColor:"#ecebeb"},l.a.createElement("circle",{cx:"73",cy:"57",r:"55"}),l.a.createElement("rect",{x:"23",y:"121",rx:"0",ry:"0",width:"102",height:"22"}),l.a.createElement("rect",{x:"24",y:"154",rx:"0",ry:"0",width:"43",height:"18"}),l.a.createElement("rect",{x:"84",y:"154",rx:"0",ry:"0",width:"43",height:"18"}))},k=l.a.memo((function(e){var t=e.onClickHendler,a=e.disabled;return l.a.createElement("button",{disabled:a,onClick:t,className:"load-more-btn"},"Load More")})),v=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},y=["yellow","orange"],g=l.a.memo((function(e){var t=e.name,a=e.imgUrl,n=e.types,c=e.onClickHendler;return l.a.createElement("div",{className:"pokemon-item"},l.a.createElement("div",{onClick:c,className:"pokemon-item-img"},l.a.createElement("img",{src:a,alt:"".concat(t,"_pokemon")})),l.a.createElement("div",{className:"pokemon-item-name"},v(t)),l.a.createElement("div",{className:"pokemon-item-types"},n.map((function(e,t){return l.a.createElement("div",{key:"".concat(e,"_").concat(t),className:"pokemon-type ".concat(y[t])},e)}))))})),b=l.a.memo((function(e){var t=e.imgUrl,a=e.name,n=e.totalMoves,c=e.hp,r=e.weight,o=e.spAttack,s=e.spDefense,i=e.speed,m=e.defense,u=e.attack,d=e.types;return l.a.createElement("div",{className:"pokemon-selected-item"},l.a.createElement("div",{className:"pokemon-selected-item-img"},l.a.createElement("img",{src:t,alt:"".concat(a,"_pokemon")})),l.a.createElement("div",{className:"pokemon-selected-item-name"},v(a)),l.a.createElement("div",{className:"pokemon-selected-item-characteristics"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Type"),l.a.createElement("td",null,d[0])),l.a.createElement("tr",null,l.a.createElement("td",null,"Attack"),l.a.createElement("td",null,u)),l.a.createElement("tr",null,l.a.createElement("td",null,"Defense"),l.a.createElement("td",null,m)),l.a.createElement("tr",null,l.a.createElement("td",null,"HP"),l.a.createElement("td",null,c)),l.a.createElement("tr",null,l.a.createElement("td",null,"SP Attack"),l.a.createElement("td",null,o)),l.a.createElement("tr",null,l.a.createElement("td",null,"SP Defense"),l.a.createElement("td",null,s)),l.a.createElement("tr",null,l.a.createElement("td",null,"Speed"),l.a.createElement("td",null,i)),l.a.createElement("tr",null,l.a.createElement("td",null,"Weight"),l.a.createElement("td",null,r)),l.a.createElement("tr",null,l.a.createElement("td",null,"Total moves"),l.a.createElement("td",null,n))))))})),O=a(12),_=function(e){return e.pokemons},N={pokemons:[],selectedPokemon:null},S=function(e){return e.app},w={showLoader:!1},T=function(e){return{type:"APP/SHOW_LOADER",payload:e}},j=function(e){return function(t){var a="https://pokeapi.co/api/v2/pokemon?offset=".concat(e,"&limit=12"),n=[];t(T(!0)),m.a.get(a).then((function(e){var a=e.data,l=a.results.map((function(e){return m.a.get(e.url)}));m.a.all(l).then((function(e){for(var l=0;l<a.results.length;l++){var c={name:a.results[l].name,types:e[l].data.types.map((function(e){return e.type.name})),imgUrl:e[l].data.sprites.front_default,attack:e[l].data.stats.find((function(e){return"attack"===e.stat.name})).base_stat,defense:e[l].data.stats.find((function(e){return"defense"===e.stat.name})).base_stat,hp:e[l].data.stats.find((function(e){return"hp"===e.stat.name})).base_stat,spAttack:e[l].data.stats.find((function(e){return"special-attack"===e.stat.name})).base_stat,spDefense:e[l].data.stats.find((function(e){return"special-defense"===e.stat.name})).base_stat,speed:e[l].data.stats.find((function(e){return"speed"===e.stat.name})).base_stat,weight:e[l].data.weight,totalMoves:e[l].data.moves.length};n.push(c)}t({type:"POKEMONS/SET_POKEMONS",payload:n}),t(T(!1))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}},L=function(){var e=Object(s.c)(_),t=e.pokemons,a=e.selectedPokemon,n=Object(s.c)(S).showLoader,c=Object(s.c)(d).filterType,r=Object(s.b)(),o=l.a.useCallback((function(e){r({type:"SELECT_POKEMON",payload:e})}),[]);l.a.useEffect((function(){r(j(t.length))}),[]);var i,m,u=(i=t,null===(m=c)?i:i.filter((function(e){return e.types.includes(m)})));return l.a.createElement("section",{className:"main-content"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"main-content__inner"},n?l.a.createElement("div",{className:"pokemons-list"},Array(12).fill(0).map((function(e,t){return l.a.createElement(h,{key:t})}))):l.a.createElement("div",{className:"pokemons-list"},0===u.length&&t.length&&l.a.createElement("p",{className:"no-filtered-items"},"There are not any ",c," pokemons in this chunk, load more please :)"),u.map((function(e,t){return l.a.createElement(g,{key:"".concat(e.name,"_").concat(t),onClickHendler:function(){return o(e)},name:e.name,imgUrl:e.imgUrl,types:e.types})})),t.length&&t.length<1050&&l.a.createElement(k,{disabled:n,onClickHendler:function(){r(j(t.length))}})),l.a.createElement("div",{className:"pokemon-selected-view"},null!==a&&l.a.createElement(b,a)))))},P=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header__inner"},l.a.createElement("h1",{className:"header__text"},"Pokedex"))))},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null),l.a.createElement(p,null),l.a.createElement(L,null))};a(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(4),A=a(24),M=Object(x.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SHOW_LOADER":return Object(u.a)(Object(u.a)({},e),{},{showLoader:t.payload});default:return e}},pokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMONS/SET_POKEMONS":return Object(u.a)(Object(u.a)({},e),{},{pokemons:[].concat(Object(O.a)(e.pokemons),Object(O.a)(t.payload))});case"SELECT_POKEMON":return Object(u.a)(Object(u.a)({},e),{},{selectedPokemon:t.payload});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTERS/SET_FILTER":return Object(u.a)(Object(u.a)({},e),{},{filterType:t.payload});case"FILTERS/SET_FILTERS":return Object(u.a)(Object(u.a)({},e),{},{filters:t.payload});default:return e}}}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,I=Object(x.e)(M,R(Object(x.a)(A.a)));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,{store:I},l.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.041ce1a6.chunk.js.map