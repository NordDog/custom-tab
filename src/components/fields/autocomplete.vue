<template>
  <div>
    <v-autocomplete
      :multiple="fieldData.multiple"
      :label="fieldData.title"
      :items="items"
      item-value="value"
      item-text="text"
      v-model="value"
      dense
      outlined
      background-color="white"
      :readonly='readOnly'
      @update:search-input="getItems"
      :loading="isLoading"
    ></v-autocomplete>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import debounce from 'debounce';
import axios from 'axios';

export default {
  name: 'autocomplete',
  props:{
    fieldData: Object
  },
  data(){
    return{
      isLoading: false,
      items:[]
    }
  },
  methods:{
    getItems: debounce(function (e){

      if(!e) return;

      if(this.items){
        let check = this.items.filter(item=>item.text == e);
        if(check.length > 0) return
      }

      this.isLoading = true;

      let data = new FormData();
      data.append('key', 'j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc');
      data.append('action', 'getItems');
      data.append('type', this.fieldData.realtype);
      data.append('string', e);

      if(this.fieldData.realtype=='iblock_element' || this.fieldData.realtype=='crm') data.append('entity', this.fieldData.entity);

      axios({
        method:'post',
        url:'https://btrx.site/local/custom-tab/ajax.php',
        data,
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(response=>{
        this.items = response.data;
      }).finally(()=>(this.isLoading = false));

    }, 1000)
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
    this.items = this.$store.getters.GET_CURR_VALUE(this.fieldData.code);
  }
}
</script>