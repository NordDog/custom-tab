<template>
  <v-app style="width:40%;">
    <v-form class="pa-5">
      <v-btn-toggle v-model="toggle_exclusive" class="mb-5" rounded>
        <v-btn v-for="btn of btnPanelElems.items" :key="btn.ID" small @click="changeBtnValue(btn.ID)">
          {{btn.VALUE}}
        </v-btn>
      </v-btn-toggle>
      <div v-for="(field, key) of allfields" :key="field.id">
        <fields-block
          :name=key
          :fields=field
        />
      </div>
      <fields-block/>
    </v-form>
  </v-app>
</template>

<script>

import FieldsBlock from './components/fieldsBlock';
import {mapGetters} from 'vuex'; 

export default {
  name: 'App',

  components: {
    FieldsBlock
  },

  data() {
    return{
      toggle_exclusive: 0,
      btn:'1'
    }
  },
  methods:{
    changeBtnValue(val){
      this.btn = val;
      this.$store.dispatch('CHANGE_SELECTED_BTN', {val: val});
    }
  },
  computed:{
    ...mapGetters({
      allfields: 'GET_ALL_FIELDS',
      btnPanelElems: 'GET_BUTTONS_FOR_PANEL',
      btnPanelValue: 'GET_SELECTED_BUTTON'
    })
  },
  mounted(){
    this.$store.dispatch('GET_ALL_FIELDS_FROM_SERVER')
  }
};

</script>