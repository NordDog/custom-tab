(function(e){function t(t){for(var a,r,o=t[0],s=t[1],u=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&f.push(l[r][0]),l[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==l[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ac1f"),n("466d"),n("d3b7");var a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticStyle:{background:"transparent !important"}},[n("div",{staticClass:"pa-5"},[n("buttons-panel",{attrs:{buttons:e.btnPanelElems.items}}),e._l(e.allfields,(function(e,t){return n("div",{key:e.id},[n("fields-block",{attrs:{name:t,fields:e}})],1)}))],2)])},i=[],r=n("5530"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mwswrap"},[n("span",{staticClass:"mwsblock-title"},[e._v(e._s(e.name))]),e._l(e.fields,(function(e){return n("fields-father",{key:e.id,attrs:{fieldDesc:e}})}))],2)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return(e.fieldDesc.binding.includes(e.selectTab)||""==e.fieldDesc.binding[0])&&e.fieldsTypes[e.fieldDesc.type]?n("div",{staticStyle:{position:"relative"}},[n(e.fieldsTypes[e.fieldDesc.type].content,e._b({tag:"component"},"component",e.fieldsTypes[e.fieldDesc.type].props,!1))],1):e._e()},c=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"position:relative;"},[n("v-text-field",{attrs:{label:e.fieldData.title,dense:"",outlined:""},model:{value:e.value[0],callback:function(t){e.$set(e.value,0,t)},expression:"value[0]"}}),e.value.length>1?n("div",[e._l(e.value.length-1,(function(t){return n("v-text-field",{key:t,staticClass:"mwsaddit",attrs:{dense:"",outlined:""},model:{value:e.value[t],callback:function(n){e.$set(e.value,t,n)},expression:"value[num]"}})})),e.fieldData.multiple?n("p",{staticClass:"fakelink",on:{click:function(t){return e.value.push([])}}},[e._v(" добавить ")]):e._e()],2):e._e()],1)},f=[],p={name:"string",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){var e=this.$store.getters.GET_FIELD_VALUE(this.fieldData.code),t=[];return"string"==typeof e?t.push.res:Array.isArray(e)&&(t=e),t}}},_=p,v=(n("ee5c"),n("2877")),m=n("6544"),E=n.n(m),b=n("8654"),h=Object(v["a"])(_,d,f,!1,null,"00801db3",null),D=h.exports;E()(h,{VTextField:b["a"]});var T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-autocomplete",{attrs:{multiple:e.fieldData.multiple,label:e.fieldData.title,items:e.fieldData.items,"item-value":"value","item-text":"text",dense:"",outlined:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},L=[],y={name:"autocomplete",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return String(this.$store.getters.GET_FIELD_VALUE(this.fieldData.code))}}},g=y,x=n("c6a6"),O=Object(v["a"])(g,T,L,!1,null,null,null),S=O.exports;E()(O,{VAutocomplete:x["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-checkbox",{attrs:{label:e.fieldData.title},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},k=[],j={name:"boolean",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code)}}},w=j,F=n("ac7c"),V=Object(v["a"])(w,A,k,!1,null,null,null),I=V.exports;E()(V,{VCheckbox:F["a"]});var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,l=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{value:e._f("dateToLocal")(e.date),label:e.fieldData.title,"prepend-icon":"mdi-calendar",readonly:"",dense:"",outlined:""}},"v-text-field",l,!1),a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"ru-RU","first-day-of-week":"1"},on:{input:function(t){e.menu=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)},U=[],$=(n("a15b"),n("1276"),{name:"date",props:{fieldData:Object},data:function(){return{menu:!1}},filters:{dateToLocal:function(e){return e.split("-").reverse().join(".")}},computed:{date:{get:function(){return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code).split(".").reverse().join("-")},set:function(e){this.$store.dispatch("FIELD_VALUE_SETTER",{name:this.fieldData.code,value:e.split("-").reverse().join(".")})}}},methods:{saveData:function(){}}}),B=$,G=n("2e4b"),N=n("e449"),P=Object(v["a"])(B,C,U,!1,null,null,null),R=P.exports;E()(P,{VDatePicker:G["a"],VMenu:N["a"],VTextField:b["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-textarea",{attrs:{label:e.fieldData.title,dense:"",outlined:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},H=[],J={name:"app_textarea",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code)}}},W=J,q=n("a844"),z=Object(v["a"])(W,M,H,!1,null,null,null),Q=z.exports;E()(z,{VTextarea:q["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-select",{attrs:{multiple:e.fieldData.multiple,label:e.fieldData.title,items:e.fieldData.items,"item-text":"VALUE","item-value":"ID",outlined:"",dense:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},Z=[],K={name:"app_select",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return String(this.$store.getters.GET_FIELD_VALUE(this.fieldData.code))}}},X=K,ee=n("b974"),te=Object(v["a"])(X,Y,Z,!1,null,null,null),ne=te.exports;E()(te,{VSelect:ee["a"]});var ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-file-input",{attrs:{label:e.fieldData.title,dense:"",outlined:"",multiple:e.fieldData.multiple}}),e._l(e.value.links,(function(t){return n("span",{key:t.name,staticClass:"mwsfakelink",on:{click:function(n){return e.downloadFile(t.link)}}},[e._v(e._s(t.name))])}))],2)},le=[],ie={name:"app_file",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code)}},methods:{downloadFile:function(e){window.open(e,"_blank")}}},re=ie,oe=(n("9553"),n("23a7")),se=Object(v["a"])(re,ae,le,!1,null,"94cc1fcc",null),ue=se.exports;E()(se,{VFileInput:oe["a"]});var ce=n("2f62"),de={name:"fieldsFather",components:{string:D,autocomplete:S,boolean:I,date:R,app_textarea:Q,app_select:ne,app_file:ue},props:{fieldDesc:Object},data:function(){return{fieldsTypes:{string:{content:"string",props:{fieldData:this.fieldDesc}},autocomplete:{content:"autocomplete",props:{fieldData:this.fieldDesc}},boolean:{content:"boolean",props:{fieldData:this.fieldDesc}},date:{content:"date",props:{fieldData:this.fieldDesc}},app_textarea:{content:"app_textarea",props:{fieldData:this.fieldDesc}},app_select:{content:"app_select",props:{fieldData:this.fieldDesc}},app_file:{content:"app_file",props:{fieldData:this.fieldDesc}}}}},computed:Object(r["a"])({},Object(ce["b"])({selectTab:"GET_SELECTED_BUTTON"})),mounted:function(){}},fe=de,pe=Object(v["a"])(fe,u,c,!1,null,null,null),_e=pe.exports,ve={components:{fieldsFather:_e},name:"fieldsBlock",props:{name:String,fields:Array}},me=ve,Ee=(n("9f82"),Object(v["a"])(me,o,s,!1,null,"1d9532cc",null)),be=Ee.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mwsbtn-group"},e._l(e.buttons,(function(t){return n("button",{key:t.ID,style:{width:e.autoWidth},attrs:{small:""},on:{click:function(n){return e.changeBtnValue(t.ID)}}},[e._v(" "+e._s(t.VALUE)+" ")])})),0)},De=[],Te={name:"buttonsPanel",props:{buttons:Array},data:function(){return{}},methods:{changeBtnValue:function(e){this.btn=e,this.$store.dispatch("CHANGE_SELECTED_BTN",{val:e})}},computed:{autoWidth:function(){return 100/this.buttons.length+"%"}}},Le=Te,ye=(n("e313"),Object(v["a"])(Le,he,De,!1,null,"9e9760a0",null)),ge=ye.exports,xe={name:"App",components:{FieldsBlock:be,buttonsPanel:ge},data:function(){return{toggle_exclusive:0,btn:"1"}},computed:Object(r["a"])({},Object(ce["b"])({allfields:"GET_ALL_FIELDS",btnPanelElems:"GET_BUTTONS_FOR_PANEL",btnPanelValue:"GET_SELECTED_BUTTON"})),mounted:function(){this.$store.dispatch("GET_ALL_FIELDS_FROM_SERVER")}},Oe=xe,Se=n("7496"),Ae=Object(v["a"])(Oe,l,i,!1,null,null,null),ke=Ae.exports;E()(Ae,{VApp:Se["a"]});var je=n("f309");a["a"].use(je["a"]);var we=new je["a"]({}),Fe=n("1da1"),Ve=(n("96cf"),n("b0c0"),n("bc3a")),Ie=n.n(Ve);a["a"].use(ce["a"]);var Ce=new ce["a"].Store({state:{testFields:[],buttonPanel:{},selectedBtn:1,data:{}},mutations:{CHANGE_SELECTED_BTN_IN_STATE:function(e,t){e.selectedBtn=t},SET_FIELDS:function(e,t){e.testFields=t},SET_BTNPNL:function(e,t){e.buttonPanel=t},AUTOSELECT_TAB:function(e,t){e.selectedBtn=t},SET_DATA:function(e,t){e.data=t},SET_FIELD_VALUE:function(e,t){e.data[t.name]=t.value}},actions:{CHANGE_SELECTED_BTN:function(e,t){var n=e.commit;n("CHANGE_SELECTED_BTN_IN_STATE",t.val)},GET_ALL_FIELDS_FROM_SERVER:function(e){return Object(Fe["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,a=new FormData,a.append("key","j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc"),a.append("action","getAllFields"),Ie()({method:"post",url:"https://spets.company/local/custom-tab/ajax.php",data:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){n("SET_FIELDS",e.data.blocks),n("SET_BTNPNL",e.data.btns),n("SET_DATA",e.data.data),n("AUTOSELECT_TAB",e.data.btns.items[0].ID)}));case 5:case"end":return t.stop()}}),t)})))()},FIELD_VALUE_SETTER:function(e,t){var n=e.commit;n("SET_FIELD_VALUE",t)}},getters:{GET_ALL_FIELDS:function(e){return e.testFields},GET_BUTTONS_FOR_PANEL:function(e){return e.buttonPanel},GET_SELECTED_BUTTON:function(e){return e.selectedBtn},GET_FIELD_VALUE:function(e){return function(t){return e.data[t]}}}});a["a"].config.productionTip=!1,a["a"].prototype.myAwesomeType=function(e){return{}.toString.call(e).match(/\s([^\]]+)/)[1].toLowerCase()},new a["a"]({vuetify:we,store:Ce,render:function(e){return e(ke)}}).$mount("#app")},"68a5":function(e,t,n){},"79e3":function(e,t,n){},9553:function(e,t,n){"use strict";n("68a5")},"9f82":function(e,t,n){"use strict";n("f647")},e313:function(e,t,n){"use strict";n("79e3")},ee5c:function(e,t,n){"use strict";n("f17f")},f17f:function(e,t,n){},f647:function(e,t,n){}});
//# sourceMappingURL=app.4bb79698.js.map