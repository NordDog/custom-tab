<template>
  <div v-if="fieldDesc.binding.includes(selectTab) || fieldDesc.binding[0] == ''" style="position:relative;">
    <component :is="fieldsTypes[fieldDesc.type].content" v-bind='fieldsTypes[fieldDesc.type].props'></component>
  </div>
</template>

<script>

  import string from "./string";
  import autocomplete from "./autocomplete";
  import boolean from "./boolean";
  import date from "./date";
  import app_textarea from "./textarea";
  import app_select from "./select"
  
  export default {
    name: 'fieldsFather',
    components:{
      string,
      autocomplete,
      boolean,
      date,
      app_textarea,
      app_select
    },
    props:{
      fieldDesc: Object,
      selectTab: String
    },
    data() {
      return{
        fieldsTypes:{
          string: {content: 'string', props:{fieldData: this.fieldDesc}},
          autocomplete: {content: 'autocomplete', props:{fieldData: this.fieldDesc}},
          boolean: {content: 'boolean', props:{fieldData: this.fieldDesc}},
          date: {content: 'date', props:{fieldData: this.fieldDesc}},
          app_textarea: {content: 'app_textarea', props:{fieldData: this.fieldDesc}},
          app_select: {content: 'app_select', props:{fieldData: this.fieldDesc}}
        }
      }
    },
    mounted(){
      console.log(this.fieldDesc)
    }
  }
</script>
