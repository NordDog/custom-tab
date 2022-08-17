<template>
  <div class="mwswrap">
    <span class="mwsblock-title">{{name}}</span>
    <fields_block
      v-if="name == 'Краткое описание'"
      :fields=fields
    />
    <div v-else>
      <div v-for="field of fields" :key="field.id">
        <buttons-panel v-if="field.advancedType == 'btnpnl'"
          :buttons="field.items"
          :code="field.code"
        />
        <fields-father v-else
          :fieldDesc=field
        />
      </div>        
    </div>
  </div>
</template>

<script>

import fieldsFather from './fieldsFather'
import buttonsPanel from './buttonsPanel'
import fields_block from './fields/fields_block.vue'

export default {
  components: { 
    fieldsFather, 
    buttonsPanel,
    fields_block
  },
  name: 'fieldsBlock',
  props:{
    name:String,
    fields: Object
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