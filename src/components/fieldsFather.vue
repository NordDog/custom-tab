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
      dependencyValues: {
        get(){
          let res = {};
          if(Object.keys(this.fieldDesc).includes('dependences')){
            if(Array.isArray(this.fieldDesc.dependences)){
              for(let dependence of this.fieldDesc.dependences){
                this.$set(res, dependence.field, String(this.$store.getters.GET_FIELD_VALUE(dependence.field)))
              }
            }
            else res = String(this.$store.getters.GET_FIELD_VALUE(this.fieldDesc.dependences.field));
          }
          return res;
        }
      },
      show(){
        let result = true;
        if(Object.keys(this.dependencyValues).length !== 0){
          if(typeof this.dependencyValues != 'object'){
            if(Object.keys(this.fieldDesc.dependences).includes('if') &&
               (!Object.keys(this.fieldDesc).includes('dependences')||
                (Object.keys(this.fieldDesc).includes('dependences') && 
                this.fieldDesc.dependences.values.includes(this.dependencyValues))
              )
            ){
              if(this.fieldDesc.dependences.if.condition == this.dependencyValues){
                return this.fieldDesc.dependences.if.values.includes(String(this.$store.getters.GET_FIELD_VALUE(this.fieldDesc.dependences.if.field)));
              }
            }
            else
              result = (!Object.keys(this.fieldDesc).includes('dependences')||(Object.keys(this.fieldDesc).includes('dependences') && this.fieldDesc.dependences.values.includes(this.dependencyValues)))
          }
          else{
            for(let dependency of this.fieldDesc.dependences){
              if(!dependency.values.includes(this.dependencyValues[dependency.field])) return false;
            }
          }
        }
        return result;
      }
    }
  }
</script>
