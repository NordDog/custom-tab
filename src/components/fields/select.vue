<template>
  <div>
    <v-select
      :label="fieldData.title"
      dense
      :items="fieldData.items"
      item-text="VALUE"
      item-value="ID"
      outlined
      :multiple="fieldData.multiple"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'app_select',
  props:{
    fieldData: Object
  },
  data(){
    return{

    }
  },
}
</script>