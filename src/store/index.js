import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields:[
    ],
    buttonPanel: {
    },
    selectedBtn: 1,
    data: {},
    readOnly: true,
    show: false,
    files:{},
    currSelectValues:[],
    snackbar:false,
    entity:''
  },
  mutations: {
    CHANGE_SELECTED_BTN_IN_STATE(state, val){
      state.selectedBtn = val;
    },
    SET_FIELDS(state, fields){
      state.fields = fields;
    },
    SET_BTNPNL(state, btns){
      state.buttonPanel = btns;
    },
    AUTOSELECT_TAB(state, value){
      state.selectedBtn = value;
    },
    SET_DATA(state, value){
      state.data = value;
    },
    SET_FIELD_VALUE(state, data){
      state.data[data.name] = data.value;
    },
    READONLY_TOGGLE(state){
      state.readOnly = state.readOnly?false:true;
    },
    ADD_FILES(state, data){
      state.files[data.name] = data.value;
      //this.$set(state.files, data.name, data.value);
    },
    SET_CURR_SELECT_VALUES(state, data){
      state.currSelectValues = data;
    },
    ADD_ROW(state, field){
      state.data[field].push('/');
    },
    CANCEL_CHANGES(state){
      state.data = state.oldData;
    },
    SHOW_TOGGLE(state){
      state.show = state.show?false:true;
    },
    SHOW_SNACKBAR(state){
      state.snackbar = true;
    },
    SET_ENTITY(state, value){
      state.entity=value;
    }
  },
  actions: {
    CHANGE_SELECTED_BTN({commit}, val){
      commit('CHANGE_SELECTED_BTN_IN_STATE', val.val);
    },
    async GET_ALL_FIELDS_FROM_SERVER({commit}){
      let id = window.location.href.split('/').reverse()[1];
      let data = new FormData();
      if(id == 0){
        commit('READONLY_TOGGLE');
        var url = new URL(window.location.href);
        var entity = url.searchParams.get("categoryId");
        console.log(entity);
        if(entity == 2){
          commit('SET_ENTITY', 'claim');
          data.append('entity', 'claim');
        }
        else{
          commit('SET_ENTITY', 'act');
          data.append('entity', 'act')
        }
      }
      data.append('key', 'j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc');
      data.append('action', 'getAllFields');
      data.append('id', id);
      axios({
        method:'post',
        url:'https://btrx.site/local/custom-tab/ajax.php',
        data,
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(response=>{
        commit('SET_FIELDS', response.data.blocks);
        commit('SET_DATA', response.data.data);
        if(id > 0){
          if(response.data.entity) commit('SET_ENTITY', response.data.entity);
        }
        //commit('AUTOSELECT_TAB', String(response.data.data[response.data.btns.code]));//TODO: переписать 
        commit('SET_CURR_SELECT_VALUES', response.data.items);
        let elements = document.getElementsByClassName('ui-entity-section', 'ui-entity-section-control');
        if(elements.length > 0){
          elements[0].style = 'display:none;'
        }
      });
    },
    FIELD_VALUE_SETTER({commit}, data){
      commit('SET_FIELD_VALUE', data);
    },
    TOGGLE({commit}){
      commit('READONLY_TOGGLE');
    },
    DIALOG_TOGGLE({commit}){
      commit('SHOW_TOGGLE');
    },
    FILE_FIELD_VALUE_SETTER({commit}, data){
      commit('ADD_FILES', data);
    },
    ADDROW({commit}, data){
      commit('ADD_ROW', data.val);
    },
    CANCEL_CHANGES({commit}){
      commit('CANCEL_CHANGES');
    },
    SHOW_SNACKBAR({commit}){
      commit('SHOW_SNACKBAR');
    }
  },
  getters: {
    GET_ALL_FIELDS(state){
      return state.fields;
    },
    GET_BUTTONS_FOR_PANEL(state){
      return state.buttonPanel;
    },
    GET_SELECTED_BUTTON(state){
      return state.selectedBtn;
    },
    GET_FIELD_VALUE: state=>fieldName=>{
      return state.data[fieldName];
    },
    GET_DATA(state){
      return state.data;
    },
    GET_READONLY(state){
      return state.readOnly;
    },
    GET_FILES(state){
      return state.files;
    },
    GET_CURR_VALUE: state=>fieldName=>{
      return state.currSelectValues[fieldName];
    },
    GET_SHOW_DIALOG(state){
      return state.show;
    },
    GET_SNACKBAR(state){
      return state.snackbar;
    },
    GET_ENTITY(state){
      return state.entity;
    }
  }
})