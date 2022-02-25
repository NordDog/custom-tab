<template>
  <div>      
    <v-menu
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
      </v-menu>
      <v-menu
        v-else
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
        if(this.fieldData.code == 'UF_CRM_1_1642580451'){
          return this.$store.getters.GET_FIELD_VALUE('BEGINDATE').split('.').reverse().join('-');
        }
        return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code) ? 
          this.$store.getters.GET_FIELD_VALUE(this.fieldData.code).split('.').reverse().join('-'):'';
      },
      set(val){
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