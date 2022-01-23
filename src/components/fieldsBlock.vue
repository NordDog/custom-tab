<template>
  <div class="wrap">
    <span class="block-title">{{name}}</span>
    <fields-father v-for="field of fields" :key="field.id"
      :fieldDesc=field
    />
  </div>
</template>

<script>

import fieldsFather from './fieldsFather'

export default {
  components: { fieldsFather },
  name: 'fieldsBlock',
  props:{
    name:String,
    fields: Array
  },
  data() {
      return{

      }
  },
  mounted(){
    //console.log(this.fields);
  }
}
</script>
<style scoped>
  .wrap{
    position: relative;
    border:1px solid gray;
    border-radius: 5px;
    padding:10px;
    margin-bottom: 20px;
    background-color: snow;
  }
  .block-title{
    position: absolute;
    top: -15px;
    background: snow;
    text-transform: capitalize;
  }
</style>