<template>
  <div>
    <v-autocomplete
      :label="fieldData.title"
      dense
      outlined
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'autocomplete',
  props:{
    fieldData: Object
  },
  data(){
    return{

    }
  },
}
</script>