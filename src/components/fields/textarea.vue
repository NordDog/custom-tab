<template>
  <div>
    <v-textarea
      :label="fieldData.title"
      dense
      outlined
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: 'app_textarea',
  props:{
    fieldData: Object
  },
  data() {
    return {

    }
  },
}
</script>