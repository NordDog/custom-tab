<template>
  <div style="display:flex;">
    <p>{{fieldData.items[0].VALUE}}</p>
    <v-switch
      class="mt-0 pt-0 ml-2"
      outlined
      v-model="value"
      dense
      :disabled='readOnly'
    ></v-switch>
    <p>{{fieldData.items[1].VALUE}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app-switch',
  props: {
    fieldData: Object
  },
  data(){
    return{
    }
  },
  computed:{
    ...mapGetters({
      readOnly:'GET_READONLY'
    }),
    value:{
      set(val){
        if(val) this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.fieldData.code, value: this.fieldData.items[1].ID});
        else this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.fieldData.code, value: this.fieldData.items[0].ID});
      },
      get(){
        let realValue = this.$store.getters.GET_FIELD_VALUE(this.fieldData.code),
        res = realValue == this.fieldData.items[1].ID;
        return res;
      }
    }
  }
}
</script>
