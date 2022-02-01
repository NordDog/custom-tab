<template>
  <div>
    <v-autocomplete
      :multiple="fieldData.multiple"
      :label="fieldData.title"
      :items="fieldData.items"
      item-value="value"
      item-text="text"
      v-model="value"
      dense
      outlined
      background-color="white"
      :readonly='readOnly'
    ></v-autocomplete>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'autocomplete',
  props:{
    fieldData: Object
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
  }
}
</script>