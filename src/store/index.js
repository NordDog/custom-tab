import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testFields:[//TODO:name - название поля в битрикс, text - название поля в интерфейсе
    ],
    buttonPanel: {
      claim:[
        {
          text:'Причинение ущерба',
          name:'textAreaBtn',
          id:'1'
        },
        {
          text:'Нарушение',
          name:'secondBtd',
          id:'2'
        },
        {
          text:'Иное',
          name:'textAreaBtn',
          id:'3'
        },
      ],
      act:[
        {
          text:'С работника полностью',
          name:'firstBtn',
          id:'1'
        },
        {
          text:'На расходы объекта',
          name:'secondBtd',
          id:'2'
        },
        {
          text:'И на работника/сотрудника и на расходы объекта',
          name:'thirdBtn',
          id:'3'
        },
        {
          text:'С менеджера полностью',
          name:'fourthBtn',
          id:'4'
        },
      ]
    },
    selectedBtn: 1,
    type:'claim'
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
        commit('SET_FIELDS', response.data.fields);
        commit('SET_BTNPNL', response.data.btns)
      });
    }
  },
  getters: {
    GET_ALL_FIELDS(state){
      return state.testFields;
    },
    GET_BUTTONS_FOR_PANEL(state){
      return state.buttonPanel[state.type];
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