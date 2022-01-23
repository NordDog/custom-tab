import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testFields:[//TODO:name - название поля в битрикс, text - название поля в интерфейсе
    ],
    buttonPanel: {
    },
    selectedBtn: 1,
    type:'Акт'
  },
  mutations: {
    CHANGE_SELECTED_BTN_IN_STATE(state, val){
      state.selectedBtn = val;
    },
    SET_FIELDS(state, fields){
      state.testFields = fields;
    },
    SET_BTNPNL(state, btns){
      state.buttonPanel = btns;
    },
    AUTOSELECT_TAB(state, value){
      state.selectedBtn = value;
    }
  },
  actions: {
    CHANGE_SELECTED_BTN({commit}, val){
      commit('CHANGE_SELECTED_BTN_IN_STATE', val.val);
    },
    async GET_ALL_FIELDS_FROM_SERVER({commit}){
      let data = new FormData();
      data.append('key','j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc');
      data.append('action','getAllFields');
      axios({
        method:'post',
        url:'https://spets.company/local/custom-tab/ajax.php',
        data,
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(response=>{
        commit('SET_FIELDS', response.data.blocks);
        commit('SET_BTNPNL', response.data.btns);
        commit('AUTOSELECT_TAB', response.data.btns.items[0].ID);//TODO: переписать на постановку выбранного в поле значения
      });
    }
  },
  getters: {
    GET_ALL_FIELDS(state){
      return state.testFields;
    },
    GET_BUTTONS_FOR_PANEL(state){
      return state.buttonPanel;
    },
    GET_SELECTED_BUTTON(state){
      return state.selectedBtn;
    }
  }
})
/** DESCRIPTION
 * поля могут иметь привязку
 *  тогда они отображаются только на выделенных табах
 * или не иметь привязку
 *  тогда они отображаются все время
 * TODO:при создании полей можно указать привязку к табу
 * набор табов зависит от типа сущности 
 * TODO:придумать как разводить, какой таб, к какой сущности относится
 */