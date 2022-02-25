<template>
  <v-dialog
    v-model="show"
    width="600px"
  >
    <v-card>
      <v-card-title>
        <h3>Запрос на консультацию</h3>
      </v-card-title>
      <v-card-text>
        <v-textarea
          label="Текст вопроса"
          dense
          outlined
          v-model="string"
        >
        </v-textarea>
        <v-file-input
          chips
          multiple
          label="Вложения"
          v-model="files"
        ></v-file-input>
      </v-card-text>
      <v-card-actions style="display: block; text-align:right;">
        <v-btn @click="()=>{this.$store.dispatch('DIALOG_TOGGLE')}">Отменить</v-btn>
        <v-btn @click="createConsult()">Отправить</v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import {mapGetters} from 'vuex';
import axios from 'axios';

export default {
  name: 'appDialog',
  data() {
    return{
      string:'',
      files:[],
      showModal:false
    }
  },
  methods:{
    createConsult(){
      let data = new FormData();
      data.append('key', 'j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc');
      data.append('action', 'createConsult');
      data.append('fields', JSON.stringify({id:this.id, name: this.name, desc: this.string}));
      this.files.forEach(file=>{
        data.append('files[]', file);
      })
      //data.append('files', this.files);
      axios({
        method:'post',
        url:'https://spets.company/local/custom-tab/ajax.php',
        data,
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(response=>{
        if (response.status === 200) {
          this.$store.dispatch('DIALOG_TOGGLE');
          this.$store.dispatch('SHOW_SNACKBAR');
        }
        else {
          alert('Error!');
        }
      })
    }
  },
  computed:{
    ...mapGetters({
      show:'GET_SHOW_DIALOG',
    }),
    id(){
      return String(this.$store.getters.GET_FIELD_VALUE('ID'));
    },
    name(){
      return String(this.$store.getters.GET_FIELD_VALUE('TITLE'));
    }
  }
};
</script>
