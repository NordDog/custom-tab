<template>
  <div class="position:relative;">
    <v-text-field
      :label="fieldData.title"
      dense
      outlined
    ></v-text-field>
    <p class="fakelink">добавить</p>
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
</style>

//TODO: придумать и реализовать добавление новых строк для множественной строки