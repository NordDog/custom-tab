<template>
  <div>
    <v-textarea
      :label="fieldData.title"
      v-model="value"
      dense
      outlined
      background-color="white"
      :readonly='readOnly'
    ></v-textarea>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'app_textarea',
  props:{
    fieldData: Object
  },
  data() {
    return {

    }
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