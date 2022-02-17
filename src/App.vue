<template>
  <v-app>
    <div class="pa-5" style="position:relative;">
      <p class="mwsChange" v-if="readOnly">
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
    </div>
  </v-app>
</template>

<script>

import FieldsBlock from './components/fieldsBlock';
import fieldsFather from './components/fieldsFather';
import {mapGetters} from 'vuex'; 
import axios from 'axios';

export default {
  name: 'App',
  components: {
    FieldsBlock,
    fieldsFather
  },
  data() {
    return{
      toggle_exclusive: 0,
      btn:'1'
    }
  },
  methods:{
    saveElem(){
      let id = window.location.href.split('/').reverse()[1];
      let data = new FormData();
      /*
      if(id>0){
      */
        data.append('action', 'updateElement');
        data.append('id', id);
      /*
      }else{
        let string = window.location.href;
        let url = new URL(string);
        let category = url.searchParams.get('categoryId');
        data.append('type', category);
        data.append('action', 'create');
      }
      */
      data.append('key', 'j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc');
      data.append('fields', JSON.stringify(this.elem));
      let files = this.$store.getters.GET_FILES;
      for(let key in files){
        let n=0;
        for(let file of files[key]){
          data.append(key+'['+n+']', file);
          n++;
        }
      }
      axios({
        method:'post',
        url:'https://spets.company/local/custom-tab/ajax.php',
        data,
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(response=>{
          if(response.status !== 200){
            alert('При сохранении произошла ошибка! Сообщите разработчику.');
            return;
          }
          this.$store.dispatch('TOGGLE');
          this.$store.dispatch('GET_ALL_FIELDS_FROM_SERVER');
        }
      )
    },
    toggler(){
      this.$store.dispatch('TOGGLE');
    }
  },
  computed:{
    ...mapGetters({
      allfields: 'GET_ALL_FIELDS',
      elem: 'GET_DATA',
      readOnly:'GET_READONLY'
    })
  },
  mounted(){
    this.$store.dispatch('GET_ALL_FIELDS_FROM_SERVER')
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
</style>