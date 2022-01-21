<template>
  <div>
    <v-checkbox
      :label="fieldData.title"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  name: 'boolean',
  props: {
    fieldData: Object
  },
  data() {
    return {

    }
  },
}
</script>