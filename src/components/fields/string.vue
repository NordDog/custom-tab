<template>
  <div style="position:relative;">
    <v-text-field
      :label="fieldData.title"
      v-model="value[0]"
      dense
      outlined
      :type="fieldType"
      background-color="white"
      @input="setNewVal"
      :readonly='readOnly'
    ></v-text-field>
    <div v-if="value.length > 0">
      <v-text-field v-for="num of value.length-1" :key='num' 
        class="mwsaddit"
        v-model="value[num]"
        dense
        outlined
        background-color="white"
        @input="setNewVal"
        :readonly='readOnly'
      ></v-text-field>
    </div>
      <p 
        v-if="showadd"
        class="fakelink" 
        @click="value.push([])">
        добавить
      </p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'string',
    props:{
      fieldData: Object
    },
    data(){
      return {
      }
    },
    computed:{
      value:{
        get(){
          let res =  this.$store.getters.GET_FIELD_VALUE(this.fieldData.code),
          result = [];
          if(typeof res == 'string') {
            result.push(res);
          }
          else if(Array.isArray(res)){
            result = res;
          }
          return result; 
        }
      },
      ...mapGetters({
        readOnly:'GET_READONLY'
      }),
      showadd(){
        return this.fieldData.multiple && !this.readOnly
      },
      fieldType(){
        return this.fieldData.advancedType == 'double'?"number":'srting';
      }
    },
    methods:{
      setNewVal(){
        this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.fieldData.code, value: this.fieldData.multiple ? this.value  : this.value[0]});
      }
    }
  }
</script>
<style scoped>
.fakelink{
  position: absolute;
  bottom: -5px;
  right: 10px;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
.mwsaddit{
  margin-top: -20px !important;
}
</style>

//TODO: придумать и реализовать добавление новых строк для множественной строки