<template>
  <div class="position:relative;">
    <v-text-field
      :label="fieldData.title"
      v-model="fieldValue[0]"
      dense
      outlined
    ></v-text-field>
    <v-text-field v-for="num of repeat" :key='num' 
      class="addit"
      v-model="fieldValue[num]"
      dense
      outlined
    ></v-text-field>
    <p 
      v-if="fieldData.multiple"
      class="fakelink" 
      @click="repeat++">
      добавить
    </p>
  </div>
</template>

<script>
  export default {
    name: 'string',
    props:{
      fieldData: Object
    },
    data(){
      return {
        repeat: 0,
        fieldValue: [],
        v:[]
      }
    }
  }
</script>
<style scoped>
.fakelink{
  position: absolute;
  bottom: -5px;
  right: 10px;
  background-color: snow;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
.addit{
  margin-top: -20px !important;
}
</style>

//TODO: придумать и реализовать добавление новых строк для множественной строки