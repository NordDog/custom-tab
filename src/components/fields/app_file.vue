<template>
  <div>
    <v-file-input
      :label="fieldData.title"
      dense
      outlined
      :multiple="fieldData.multiple"
    ></v-file-input>
  </div>
</template>

<script>
export default {
  name: 'app_string',
  props:{
    fieldData: Object
  },
  data(){
    return{

    }
  }
}
</script>