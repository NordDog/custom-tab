<template>
  <div>
    <div v-if="fieldData.code == 'UF_CRM_1_1642579806'" style="padding-top: 10px; padding-left: 20px;">
      <v-switch 
        v-for="option of fieldData.items" 
        :key="option.ID"
        v-model="values[option.ID]"
        :label="option.VALUE"
        @click="setValue(option.ID)"
        class="pa-0 ma-0"
        style="margin-bottom: -10px;"
        :readonly='readOnly'
      ></v-switch>
    </div>
    <v-select
      v-else
      :multiple="fieldData.multiple"
      :label="fieldData.title"
      :items="fieldData.items"
      item-text="VALUE"
      item-value="ID"
      v-model="value"
      outlined
      dense
      background-color="white"
      :readonly='readOnly'
    ></v-select>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'app_select',
  props:{
    fieldData: Object
  },
  data(){
    return{
      values:{}
    }
  },
  methods:{
    setValue(val){
      for(let item in this.values){
        if(val!=item) this.values[item] = false;
      }
      this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.fieldData.code, value: val});
    }
  },
  computed:{
    value:{
      get(){
        return String(this.$store.getters.GET_FIELD_VALUE(this.fieldData.code));
      },
      set(val){
        this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.fieldData.code, value: val});
      }
    },
    ...mapGetters({
      readOnly:'GET_READONLY'
    })
  },
  mounted(){
    if(this.fieldData.code == 'UF_CRM_1_1642579806'){
      let temp = String(this.$store.getters.GET_FIELD_VALUE(this.fieldData.code));
      this.$set(this.values, temp, true);
    }
  }
}
</script>