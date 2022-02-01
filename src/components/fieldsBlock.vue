<template>
  <div class="mwswrap">
    <span class="mwsblock-title">{{name}}</span>
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
  }
}
</script>
<style scoped>
  .mwswrap{
    position: relative;
    border-radius: 5px;
    padding:10px;
    margin-bottom: 20px;
    background-color: lightgrey;
  }
  .mwsblock-title{
    position: absolute;
    top: -15px;
    background: lightgrey;
    text-transform: capitalize;
    border-radius: 5px;
    padding: 0px 5px;
  }
</style>