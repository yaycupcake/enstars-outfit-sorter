(this["webpackJsonpenstars-outfit-sorter"]=this["webpackJsonpenstars-outfit-sorter"]||[]).push([[0],{10:function(t,e,a){t.exports=a(16)},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a.n(r),n=a(8),o=a.n(n),l=(a(15),a(9)),i=a(1),c=a(2),u=a(3),f=a(5),h=a(4);function p(t){var e=t.toggleValue();return s.a.createElement("div",{className:"sidebar"},s.a.createElement(m,{id:"attrOpts",optionsArr:t.attributes,toggleValue:e("selAttr")}),s.a.createElement(v,{id:"charaOpts",heading:"Character",optionsArr:t.characters,selected:t.selCharas,toggleValue:e("selCharas")}),s.a.createElement(v,{id:"outfitOpts",heading:"Outfit Type",optionsArr:t.outfitTypes,selected:t.selOutfits,toggleValue:e("selOutfits")}))}function m(t){var e=t.optionsArr.map((function(e){if(e)return s.a.createElement("div",{key:e},s.a.createElement("input",{type:"checkbox",value:e,onClick:t.toggleValue}),s.a.createElement("label",{htmlFor:e},e))}));return s.a.createElement("div",{className:"options",id:t.id},s.a.createElement("h3",null,"Stat Bonus"),e)}function v(t){var e=t.optionsArr.map((function(t){if(t)return s.a.createElement("option",{key:t,value:t},t)})),a=Array.from(t.selected).map((function(e){return s.a.createElement(d,{key:e,value:e,toggleValue:t.toggleValue})}));return s.a.createElement("div",{className:"options",id:t.id},s.a.createElement("h3",null,t.heading),s.a.createElement("select",{className:"options",onChange:t.toggleValue},e),s.a.createElement("div",null,a))}function d(t){return s.a.createElement("div",{className:"toggleOpt"},s.a.createElement("span",null,t.value),s.a.createElement("button",{className:"cancelBtn",value:t.value,onClick:t.toggleValue},"X"))}var g=a(6);var y="AIzaSyBYN0YVkl2lB5ps2CL_74JKIs5TOukXdm4",E="1JeHlN1zcBwyBbBkyfsDiiqDZpLotkn770ewa1JCsekU",b=function(t){Object(f.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).state={isLoaded:!1,outfits:[],status:""},r}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(t){var e=this;if(this.props.query!==t.query){fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(E,"/values/").concat("Stat Bonuses","?key=").concat(y)).then((function(t){return t.json()})).then((function(t){e.setState((function(a,r){var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.query||[],r=e.integers||!0,s=(e.inclusiveSearch,[]);if(t){for(var n=t.values[0],o=1;o<t.values.length;o++){for(var l=t.values[o],i={},c=!1,u=0;u<l.length;u++){var f=n[u],h=l[u];a.length&&(a.forEach((function(t){h.toLowerCase().indexOf(t.toLowerCase())>-1&&(c=!0)})),!0!==r||isNaN(h)||(h=Number(h))),i[f.toLowerCase()]=h}!0===c&&s.push(i)}return s}}(t,{query:e.props.stringQuery});if(e.props.selAttr.size>0)for(var n=s.length-1;n>=0;n--){var o,l=!1,i=Object(g.a)(e.props.selAttr);try{for(i.s();!(o=i.n()).done;){var c=o.value;if(s[n][c.toLowerCase()]){l=!0;break}}}catch(u){i.e(u)}finally{i.f()}l||s.splice(n,1)}return s.sort((function(t,a){var r,s=0,n=0,o=Object(g.a)(e.props.selAttr);try{for(o.s();!(r=o.n()).done;){var l=r.value;s+=t[l.toLowerCase()],n+=a[l.toLowerCase()]}}catch(u){o.e(u)}finally{o.f()}return n-s})),{isLoaded:!0,outfits:s,status:"".concat(s.length," outfits found")}}))}))}}},{key:"render",value:function(){var t=this,e=null;if(this.state.isLoaded){var a=this.state.outfits.map((function(e){return s.a.createElement(O,{key:e.character+e.outfit,props:e,attributes:t.props.attributes,selAttr:t.props.selAttr})}));e=s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"status"},this.state.status),a)}else e=s.a.createElement("p",{className:"status"},"Loading...");return s.a.createElement("div",{className:"outfitList"},e)}}]),a}(s.a.Component);function O(t){var e=t.props;return s.a.createElement("div",{className:"outfit"},s.a.createElement("span",null,"".concat(e.character," - ").concat(e.outfit)),s.a.createElement("hr",null),s.a.createElement(A,{attributes:t.attributes,props:t.props}),function(){if(t.selAttr.size>0){var a=Array.from(t.selAttr).reduce((function(t,a){return t+e[a.toLowerCase()]}),0);return s.a.createElement("span",null,"TOTAL BONUS: ".concat(a))}return null}())}function A(t){return s.a.createElement("div",{className:"attrList"},Object.keys(t.props).map((function(e){if(t.attributes.includes(e.charAt(0).toUpperCase()+e.slice(1)))return s.a.createElement("span",{key:e+t.props[e]},"".concat(e.charAt(0).toUpperCase()+e.slice(1),": ").concat(t.props[e]))})))}var C=function(t){Object(f.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).state={characters:[],outfitTypes:[],attributes:["Ac","Pa","Un","Sm","Te","Ch"],selCharas:new Set,selOutfits:new Set,selAttr:new Set},r.toggleValueInSet=r.toggleValueInSet.bind(Object(u.a)(r)),r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(E,"/values/").concat("Validation Lists","?key=").concat(y,"&majorDimension=COLUMNS")).then((function(t){return t.json()})).then((function(e){var a=e.values,r=a.filter((function(t){return"Character"===t[0]})),s=a.filter((function(t){return"Outfit Type"===t[0]}));t.setState({characters:r[0],outfitTypes:s[0]})}))}},{key:"toggleValueInSet",value:function(){var t=this;return function(e){return function(a){var r=t.state[e];t.state[e].has(a.target.value)?r.delete(a.target.value):r.add(a.target.value),t.setState(Object(l.a)({},e,r))}}}},{key:"render",value:function(){var t={characters:this.state.characters,outfitTypes:this.state.outfitTypes,attributes:this.state.attributes,selCharas:this.state.selCharas,selOutfits:this.state.selOutfits,toggleValue:this.toggleValueInSet},e={query:Array.from(this.state.selCharas).concat(Array.from(this.state.selOutfits),Array.from(this.state.selAttr)),stringQuery:Array.from(this.state.selCharas).concat(Array.from(this.state.selOutfits)),attributes:this.state.attributes,selCharas:this.state.selCharas,selOutfits:this.state.selOutfits,selAttr:this.state.selAttr};return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,e),s.a.createElement(p,t))}}]),a}(s.a.Component);var k=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b275bf9a.chunk.js.map