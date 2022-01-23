<template>
  <div 
    v-if="(fieldDesc.binding.includes(selectTab)||fieldDesc.binding[0] == '')&&fieldsTypes[fieldDesc.type]" style="position:relative;">
    <component :is="fieldsTypes[fieldDesc.type].content" v-bind='fieldsTypes[fieldDesc.type].props'></component>
  </div>
</template>

<script>

  import string from "./fields/string";
  import autocomplete from "./fields/autocomplete";
  import boolean from "./fields/boolean";
  import date from "./fields/date";
  import app_textarea from "./fields/textarea";
  import app_select from "./fields/select";
  import app_file from "./fields/app_file"
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'fieldsFather',
    components:{
      string,
      autocomplete,
      boolean,
      date,
      app_textarea,
      app_select,
      app_file
    },
    props:{
      fieldDesc: Object,
    },
    data() {
      return{
        fieldsTypes:{
          string: {content: 'string', props:{fieldData: this.fieldDesc}},
          autocomplete: {content: 'autocomplete', props:{fieldData: this.fieldDesc}},
          boolean: {content: 'boolean', props:{fieldData: this.fieldDesc}},
          date: {content: 'date', props:{fieldData: this.fieldDesc}},
          app_textarea: {content: 'app_textarea', props:{fieldData: this.fieldDesc}},
          app_select: {content: 'app_select', props:{fieldData: this.fieldDesc}},
          app_file: {content: 'app_file', props:{fieldData: this.fieldDesc}}
        }
      }
    },
    computed:{
      ...mapGetters({
        selectTab: 'GET_SELECTED_BUTTON',
      })
    },
    mounted(){
    }
  }
</script>
