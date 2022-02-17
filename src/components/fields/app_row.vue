<template>
  <div>
    <v-select
      outlined
      dense
      background-color="white"
      :readonly='readOnly'
      :label="fieldData.title"
    ></v-select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app-row',
  props: {
    fieldData: Object
  },
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters({
      readOnly:'GET_READONLY'
    })
  }
}
</script>