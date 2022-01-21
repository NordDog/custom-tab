<template>
  <div>
    <v-select
      :label="fieldData.title"
      dense
      :items="fieldData.items"
      item-text="VALUE"
      item-value="ID"
      outlined
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'select',
  props:{
    fieldData: Object
  },
  data(){
    return{

    }
  },
}
</script>