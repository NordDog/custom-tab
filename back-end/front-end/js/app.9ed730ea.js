(function(e){function t(t){for(var a,o,r=t[0],s=t[1],c=t[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&f.push(l[o][0]),l[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==l[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},l={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1952:function(e,t,n){"use strict";n("7b69")},"21d2":function(e,t,n){"use strict";n("86b0")},"4abe":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ac1f"),n("466d"),n("d3b7");var a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticStyle:{background:"transparent !important"}},[n("v-form",{staticClass:"pa-5"},[n("v-btn-toggle",{staticClass:"mb-5",attrs:{rounded:""},model:{value:e.toggle_exclusive,callback:function(t){e.toggle_exclusive=t},expression:"toggle_exclusive"}},e._l(e.btnPanelElems.items,(function(t){return n("v-btn",{key:t.ID,attrs:{small:""},on:{click:function(n){return e.changeBtnValue(t.ID)}}},[e._v(" "+e._s(t.VALUE)+" ")])})),1),e._l(e.allfields,(function(e,t){return n("div",{key:e.id},[n("fields-block",{attrs:{name:t,fields:e}})],1)})),n("fields-block")],2)],1)},i=[],o=n("5530"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("span",{staticClass:"block-title"},[e._v(e._s(e.name))]),e._l(e.fields,(function(e){return n("fields-father",{key:e.id,attrs:{fieldDesc:e}})}))],2)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return(e.fieldDesc.binding.includes(e.selectTab)||""==e.fieldDesc.binding[0])&&e.fieldsTypes[e.fieldDesc.type]?n("div",{staticStyle:{position:"relative"}},[n(e.fieldsTypes[e.fieldDesc.type].content,e._b({tag:"component"},"component",e.fieldsTypes[e.fieldDesc.type].props,!1))],1):e._e()},u=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"position:relative;"},[n("v-text-field",{attrs:{label:e.fieldData.title,dense:"",outlined:""},model:{value:e.value[0],callback:function(t){e.$set(e.value,0,t)},expression:"value[0]"}}),e._l(e.value.length-1,(function(t){return n("v-text-field",{key:t,staticClass:"addit",attrs:{dense:"",outlined:""},model:{value:e.value[t],callback:function(n){e.$set(e.value,t,n)},expression:"value[num]"}})})),e.fieldData.multiple?n("p",{staticClass:"fakelink",on:{click:function(t){return e.value.push([])}}},[e._v(" добавить ")]):e._e()],2)},f=[],p={name:"string",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){var e=this.$store.getters.GET_FIELD_VALUE(this.fieldData.code),t=[];return"string"==typeof e?t.push.res:Array.isArray(e)&&(t=e),t}}},_=p,v=(n("6a1b"),n("2877")),m=n("6544"),b=n.n(m),E=n("8654"),D=Object(v["a"])(_,d,f,!1,null,"634369cf",null),T=D.exports;b()(D,{VTextField:E["a"]});var h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-autocomplete",{attrs:{multiple:e.fieldData.multiple,label:e.fieldData.title,items:e.fieldData.items,"item-value":"value","item-text":"text",dense:"",outlined:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},L=[],g={name:"autocomplete",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return String(this.$store.getters.GET_FIELD_VALUE(this.fieldData.code))}}},x=g,y=n("c6a6"),O=Object(v["a"])(x,h,L,!1,null,null,null),S=O.exports;b()(O,{VAutocomplete:y["a"]});var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-checkbox",{attrs:{label:e.fieldData.title},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},A=[],j={name:"boolean",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code)}}},F=j,V=n("ac7c"),w=Object(v["a"])(F,k,A,!1,null,null,null),I=w.exports;b()(w,{VCheckbox:V["a"]});var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,l=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{value:e._f("dateToLocal")(e.date),label:e.fieldData.title,"prepend-icon":"mdi-calendar",readonly:"",dense:"",outlined:""}},"v-text-field",l,!1),a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"ru-RU","first-day-of-week":"1"},on:{input:function(t){e.menu=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)},U=[],B=(n("a15b"),n("1276"),{name:"date",props:{fieldData:Object},data:function(){return{menu:!1}},filters:{dateToLocal:function(e){return e.split("-").reverse().join(".")}},computed:{date:{get:function(){return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code).split(".").reverse().join("-")},set:function(e){this.$store.dispatch("FIELD_VALUE_SETTER",{name:this.fieldData.code,value:e.split("-").reverse().join(".")})}}},methods:{saveData:function(){}}}),$=B,G=n("2e4b"),N=n("e449"),P=Object(v["a"])($,C,U,!1,null,null,null),R=P.exports;b()(P,{VDatePicker:G["a"],VMenu:N["a"],VTextField:E["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-textarea",{attrs:{label:e.fieldData.title,dense:"",outlined:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},H=[],J={name:"app_textarea",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code)}}},q=J,z=n("a844"),Q=Object(v["a"])(q,M,H,!1,null,null,null),W=Q.exports;b()(Q,{VTextarea:z["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-select",{attrs:{multiple:e.fieldData.multiple,label:e.fieldData.title,items:e.fieldData.items,"item-text":"VALUE","item-value":"ID",outlined:"",dense:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},Z=[],K={name:"app_select",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return String(this.$store.getters.GET_FIELD_VALUE(this.fieldData.code))}}},X=K,ee=n("b974"),te=Object(v["a"])(X,Y,Z,!1,null,null,null),ne=te.exports;b()(te,{VSelect:ee["a"]});var ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-file-input",{attrs:{label:e.fieldData.title,dense:"",outlined:"",multiple:e.fieldData.multiple}}),e._l(e.value.links,(function(t){return n("span",{key:t,staticClass:"fakeLink",on:{click:function(n){return e.downloadFile(t.link)}}},[e._v(e._s(t.name))])}))],2)},le=[],ie={name:"app_file",props:{fieldData:Object},data:function(){return{}},computed:{value:function(){return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code)}},methods:{downloadFile:function(e){window.open(e,"_blank")}}},oe=ie,re=(n("21d2"),n("23a7")),se=Object(v["a"])(oe,ae,le,!1,null,"e855fb5a",null),ce=se.exports;b()(se,{VFileInput:re["a"]});var ue=n("2f62"),de={name:"fieldsFather",components:{string:T,autocomplete:S,boolean:I,date:R,app_textarea:W,app_select:ne,app_file:ce},props:{fieldDesc:Object},data:function(){return{fieldsTypes:{string:{content:"string",props:{fieldData:this.fieldDesc}},autocomplete:{content:"autocomplete",props:{fieldData:this.fieldDesc}},boolean:{content:"boolean",props:{fieldData:this.fieldDesc}},date:{content:"date",props:{fieldData:this.fieldDesc}},app_textarea:{content:"app_textarea",props:{fieldData:this.fieldDesc}},app_select:{content:"app_select",props:{fieldData:this.fieldDesc}},app_file:{content:"app_file",props:{fieldData:this.fieldDesc}}}}},computed:Object(o["a"])({},Object(ue["b"])({selectTab:"GET_SELECTED_BUTTON"})),mounted:function(){}},fe=de,pe=Object(v["a"])(fe,c,u,!1,null,null,null),_e=pe.exports,ve={components:{fieldsFather:_e},name:"fieldsBlock",props:{name:String,fields:Array},data:function(){return{}},mounted:function(){}},me=ve,be=(n("1952"),Object(v["a"])(me,r,s,!1,null,"edbb7938",null)),Ee=be.exports,De={name:"App",components:{FieldsBlock:Ee},data:function(){return{toggle_exclusive:0,btn:"1"}},methods:{changeBtnValue:function(e){this.btn=e,this.$store.dispatch("CHANGE_SELECTED_BTN",{val:e})}},computed:Object(o["a"])({},Object(ue["b"])({allfields:"GET_ALL_FIELDS",btnPanelElems:"GET_BUTTONS_FOR_PANEL",btnPanelValue:"GET_SELECTED_BUTTON"})),mounted:function(){this.$store.dispatch("GET_ALL_FIELDS_FROM_SERVER")}},Te=De,he=n("7496"),Le=n("8336"),ge=n("a609"),xe=n("4bd4"),ye=Object(v["a"])(Te,l,i,!1,null,null,null),Oe=ye.exports;b()(ye,{VApp:he["a"],VBtn:Le["a"],VBtnToggle:ge["a"],VForm:xe["a"]});var Se=n("f309");a["a"].use(Se["a"]);var ke=new Se["a"]({}),Ae=n("1da1"),je=(n("96cf"),n("b0c0"),n("bc3a")),Fe=n.n(je);a["a"].use(ue["a"]);var Ve=new ue["a"].Store({state:{testFields:[],buttonPanel:{},selectedBtn:1,data:{}},mutations:{CHANGE_SELECTED_BTN_IN_STATE:function(e,t){e.selectedBtn=t},SET_FIELDS:function(e,t){e.testFields=t},SET_BTNPNL:function(e,t){e.buttonPanel=t},AUTOSELECT_TAB:function(e,t){e.selectedBtn=t},SET_DATA:function(e,t){e.data=t},SET_FIELD_VALUE:function(e,t){e.data[t.name]=t.value}},actions:{CHANGE_SELECTED_BTN:function(e,t){var n=e.commit;n("CHANGE_SELECTED_BTN_IN_STATE",t.val)},GET_ALL_FIELDS_FROM_SERVER:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,a=new FormData,a.append("key","j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc"),a.append("action","getAllFields"),Fe()({method:"post",url:"https://spets.company/local/custom-tab/ajax.php",data:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){n("SET_FIELDS",e.data.blocks),n("SET_BTNPNL",e.data.btns),n("SET_DATA",e.data.data),n("AUTOSELECT_TAB",e.data.btns.items[0].ID)}));case 5:case"end":return t.stop()}}),t)})))()},FIELD_VALUE_SETTER:function(e,t){var n=e.commit;n("SET_FIELD_VALUE",t)}},getters:{GET_ALL_FIELDS:function(e){return e.testFields},GET_BUTTONS_FOR_PANEL:function(e){return e.buttonPanel},GET_SELECTED_BUTTON:function(e){return e.selectedBtn},GET_FIELD_VALUE:function(e){return function(t){return e.data[t]}}}});a["a"].config.productionTip=!1,a["a"].prototype.myAwesomeType=function(e){return{}.toString.call(e).match(/\s([^\]]+)/)[1].toLowerCase()},new a["a"]({vuetify:ke,store:Ve,render:function(e){return e(Oe)}}).$mount("#app")},"6a1b":function(e,t,n){"use strict";n("4abe")},"7b69":function(e,t,n){},"86b0":function(e,t,n){}});
//# sourceMappingURL=app.9ed730ea.js.map