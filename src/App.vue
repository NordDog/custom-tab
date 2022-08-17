<template>
  <v-app>
    <div class="pa-5" style="position:relative;padding-bottom: 50px !important;">
      <v-btn @click="()=>{this.$store.dispatch('DIALOG_TOGGLE')}" v-if="entity == 'claim'">
        Консультация
      </v-btn>
      <v-btn 
        class="ml-5" 
        :disabled="data.STAGE_ID != 'DT140_2:SUCCESS'"
        v-if="entity == 'claim'" 
        @click="openApp()"
      >
        Создать заявку
      </v-btn>
      <p class="mwsChange" :class="{hide:!readOnly}">
        <span @click="toggler">Изменить</span>
      </p>
      <div v-for="(item, index) of allfields" :key="index">
        <fields-block v-if="item.blockName"
          :name=item.blockName
          :fields=item.fields
        />
        <fields-father v-else
          :key="item.code"
          :fieldDesc="item"
        />
      </div>
      <div class="mwsbtnsfooter" v-if="!readOnly">
        <v-btn
          color="green"
          dark
          @click="saveElem"
        >сохранить</v-btn>
        <v-btn class="ml-5" @click="toggler">Отменить</v-btn>
      </div>
      <app-dialog/>
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
    >
      Заявка на консультацию создана!
    </v-snackbar>
  </v-app>
</template>

<script>

import FieldsBlock from './components/fieldsBlock';
import fieldsFather from './components/fieldsFather';
import {mapGetters} from 'vuex'; 
import axios from 'axios';
import appDialog from './components/app_dialog';

export default {
  name: 'App',
  components: {
    FieldsBlock,
    fieldsFather,
    appDialog,
  },
  data() {
    return{
      toggle_exclusive: 0,
      btn:'1',
      id: 0
    }
  },
  methods:{
    saveElem(){
      console.log(this.elem)
      let id = window.location.href.split('/').reverse()[1];
      let data = new FormData();
      let reqFields = [];
      let files = this.$store.getters.GET_FILES;
      let oldFiles = this.$store.getters.GET_FIELD_VALUE('UF_CRM_1_1642580600');
      let filesFields = Object.keys(files);
      if(!this.elem.UF_CRM_1_1642580354){
        reqFields.push('Объект');
      }
      if(!filesFields.includes('UF_CRM_1_1642580600') && oldFiles.length == 0){
        reqFields.push('Вложение');
      }
      if(this.elem.UF_CRM_1_1642580108 == '2818' && !this.elem.UF_CRM_1_1642580140){
        reqFields.push('Контрагент.Поставщик');
      }
      if(this.elem.UF_CRM_1_1642580108 == '2819'){
        if(!this.elem.UF_CRM_1_1642580177){
          reqFields.push('Контрагент.Наименование');
        }
        if(!this.elem.UF_CRM_1_1642580195){
          reqFields.push('Контрагент.ИНН');
        }
      }
      if(reqFields.length > 0){
        alert('Заполните обязательные поля: ' + reqFields.join(', '));
        return;
      }
      if(id>0){
        data.append('action', 'updateElement');
        data.append('id', id);
      }else{
        let string = window.location.href;
        let url = new URL(string);
        let category = url.searchParams.get('categoryId');
        data.append('type', category?category:1);
        data.append('action', 'create');
      }
      data.append('key', 'j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc');
      data.append('fields', JSON.stringify(this.elem));
      for(let key in files){
        let n=0;
        for(let file of files[key]){
          data.append(key+'['+n+']', file);
          n++;
        }
      }
      axios({
        method:'post',
        url:'https://btrx.site/local/custom-tab/ajax.php',
        data,
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(response=>{
          if(response.status !== 200){
            alert('При сохранении произошла ошибка! Сообщите разработчику.');
            return;
          }
          if(id==0)window.location.href='https://btrx.site/page/pretenzii/pretenzii_akty/type/140/details/'+response.data+'/';
          else{
            this.$store.dispatch('TOGGLE');
            this.$store.dispatch('GET_ALL_FIELDS_FROM_SERVER');
          }

        }
      )
    },
    toggler(){
      if(this.readOnly === false && this.entityId == 0) {
        this.$store.dispatch('TOGGLE');
        BX.SidePanel.Instance.close();
      }
      this.$store.dispatch('TOGGLE');
      if(this.readOnly)this.$store.dispatch('GET_ALL_FIELDS_FROM_SERVER');
    },
    openApp(){
      let id = window.location.href.split('/').reverse()[1];
      let data = new FormData();
      if(id != 0){
        data.append('key', 'j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc');
        data.append('action', 'openApp');
        data.append('query', JSON.stringify({id: id, userid: BX.message('USER_ID')}));
        axios({
          method:'post',
          url:'https://btrx.site/local/custom-tab/ajax.php',
          data,
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
        })
      }
    }
  },
  computed:{
    ...mapGetters({
      allfields: 'GET_ALL_FIELDS',
      elem: 'GET_DATA',
      readOnly:'GET_READONLY',
      snackbar:'GET_SNACKBAR',
      entity: 'GET_ENTITY',
      data: 'GET_DATA',
      entityId: 'GET_ENTITY_ID'
    })
  },
  mounted(){
    this.$store.dispatch('GET_ALL_FIELDS_FROM_SERVER');
  }
};
</script>
<style scoped>
.mwsChange{
    text-align: right;
    padding: 0px;
    margin: 0px;
}
.mwsChange > span{
    text-decoration: underline;
    opacity: 0.3;
    cursor: pointer;
    font-size: smaller;
}
.mwsbtnsfooter{
  text-align: right;
  position: fixed;
  width: 100%;
  z-index: 100000;
  left: 0;
  bottom: 0;
  background-color: white;
  height: 60px;
  padding: 12px;
}
.hide{
  visibility: hidden;
}
</style>