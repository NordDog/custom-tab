<template>
  <div>      
    <!-- <v-menu
        v-if="fieldData.code == 'UF_CRM_1_1642580451'"
        disabled
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            :value="date|dateToLocal"
            :label="fieldData.title"
            prepend-icon="mdi-calendar"
            readonly
            dense
            outlined
            v-bind="attrs"
            v-on="on"
            background-color="white"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          @input="menu = false"
          scrollable
          locale="ru-RU"
          first-day-of-week="1"
        >
        </v-date-picker>
    </v-menu> -->
    <v-menu
        :disabled='readonly'
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            :value="date|dateToLocal"
            :label="fieldData.title"
            prepend-icon="mdi-calendar"
            readonly
            dense
            outlined
            v-bind="attrs"
            v-on="on"
            background-color="white"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          @input="menu = false"
          scrollable
          locale="ru-RU"
          first-day-of-week="1"
        >
        </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'date',
  props:{
    fieldData: Object
  },
  data() {
    return{
      menu: false,
    }
  },
  filters:{
    dateToLocal(date){
      return date.split('-').reverse().join('.');
    }
  },
  computed:{
    date:{
      get(){
        // if(this.fieldData.code == 'UF_CRM_1_1642580451'){
        //   let temp = this.$store.getters.GET_FIELD_VALUE('BEGINDATE');
        //   return temp ? temp.split('.').reverse().join('-') : '';
        // }
        let temp = this.$store.getters.GET_FIELD_VALUE(this.fieldData.code);
        return temp ? temp.split('.').reverse().join('-') : '';
      },
      set(val){
        console.log(this.fieldData.code)
        this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.fieldData.code, value: val.split('-').reverse().join('.')});
      }
    },
    ...mapGetters({
      readonly:'GET_READONLY'
    })
  },
  methods:{
    saveData(){

    }
  }
}
</script>