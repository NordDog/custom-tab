<template>
<v-text-field
      :label="fieldData.title"
      v-model="value"
      dense
      outlined
      type="number"
      background-color="white"
      :readonly='readOnly'
    ></v-text-field>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'double',
    props:{
      fieldData: Object
    },
    data(){
      return {
      }
    },
    methods:{
      setData(){
        
      }
    },
    computed:{
      value:{
        get(){
          return  this.$store.getters.GET_FIELD_VALUE(this.fieldData.code)
        },
        set(val){
          this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.fieldData.code, value: +val});
        }
      },
      ...mapGetters({
        readOnly:'GET_READONLY'
      }),
    }
  }
</script>