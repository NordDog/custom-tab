<template>
  <div>
    <v-file-input
      :label="fieldData.title"
      dense
      outlined
      :multiple="fieldData.multiple"
      background-color="white"
      :disabled="readOnly"
      v-model="files"
      @change="setInputVal()"
    ></v-file-input>
    <div v-if="value">
      <div v-if="value.links">
        <span class="mwsfakelink" v-for="link of value.links" :key="link.name" @click="downloadFile(link.link)">{{link.name}}</span>
      </div>
    </div>

    
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'app_file',
  props:{
    fieldData: Object
  },
  data(){
    return{
      files:[]
    }
  },
  computed:{
    value(){
      return this.$store.getters.GET_FIELD_VALUE(this.fieldData.code);
    },
    ...mapGetters({
      readOnly:'GET_READONLY'
    })
  },
  methods:{
    downloadFile(url){
      window.open(url, '_blank');
    },
    setInputVal(){
      this.$store.dispatch(
        'FILE_FIELD_VALUE_SETTER', 
        {
          name: this.fieldData.code,
          value: this.files
        }
      )
    }
  }
}
</script>
<style scoped>
.mwsfakelink{
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  padding: 5px;
}
</style>