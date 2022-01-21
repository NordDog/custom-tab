<template>
  <v-app style="width:40%; background-color: snow;">
    <v-form class="pa-5">
      <v-btn-toggle v-model="toggle_exclusive" class="mb-5" rounded>
        <v-btn v-for="btn of btnPanelElems.items" :key="btn.ID" small @click="changeBtnValue(btn.ID)">
          {{btn.VALUE}}
        </v-btn>
      </v-btn-toggle>
      <div v-for="field of allfields" :key="field.id">
        <fields-father
          :fieldDesc = field
          :selectTab = btn
        />
      </div>
    </v-form>
  </v-app>
</template>

<script>

import fieldsFather from './components/fields/fieldsFather';
import {mapGetters} from 'vuex'; 

export default {
  name: 'App',

  components: {
    fieldsFather,
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
      this.$store.dispatch('CHANGE_SELECTED_BTN', {val: val-1});
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