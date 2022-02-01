<template>
  <div>
    <v-switch
      :label="fieldData.title"
      v-model="value"
      :disabled="readOnly"
    ></v-switch>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'boolean',
  props: {
    fieldData: Object
  },
  computed:{
    value:{
      get(){
        return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code);
      },
      set(val){
        this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.fieldData.code, value: val});
      }
    },
    ...mapGetters({
      readOnly: 'GET_READONLY'
    })
  }
}
</script>
