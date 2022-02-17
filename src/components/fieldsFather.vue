<template>
  <div style="position:relative;">
    <component 
      v-if ="show"
      :is="fieldsTypes[fieldDesc.type].content" 
      v-bind='fieldsTypes[fieldDesc.type].props'
    ></component>
  </div>
</template>

<script>

  import string from "./fields/string";
  import autocomplete from "./fields/autocomplete";
  import boolean from "./fields/boolean";
  import date from "./fields/date";
  import app_textarea from "./fields/textarea";
  import app_select from "./fields/select";
  import app_file from "./fields/app_file";
  import app_switch from "./fields/app_switch";
  import app_row from "./fields/app_row";
  
  export default {
    name: 'fieldsFather',
    components:{
      string,
      autocomplete,
      boolean,
      date,
      app_textarea,
      app_select,
      app_file,
      app_switch,
      app_row
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
          app_file: {content: 'app_file', props:{fieldData: this.fieldDesc}},
          app_switch: {content: 'app_switch', props:{fieldData: this.fieldDesc}},
          app_row: {content: 'app_row', props:{fieldData: this.fieldDesc}},
        }
      }
    },
    computed:{
      dependencyValue: {
        get(){
          let res = [];
          if(Object.keys(this.fieldDesc).includes('dependences')){
            res = this.$store.getters.GET_FIELD_VALUE(this.fieldDesc.dependences.field);
          }
          return String(res);
        }
      },
      show(){
        let result = true;
        if(this.dependencyValue){
          result = (!Object.keys(this.fieldDesc).includes('dependences')||(Object.keys(this.fieldDesc).includes('dependences') && this.fieldDesc.dependences.values.includes(this.dependencyValue)))
        }
        return result;
      }
    },
    mounted(){
    }
  }
</script>
