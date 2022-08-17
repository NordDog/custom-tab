<template>
  <div>
    <div v-for="(value, index) of mainField.items" :key="index">
      <v-switch
        :label="value.VALUE"
        v-model="values[value.ID]"
        @change="updateValue()"
        class="mb-0 pt-0 mt-2"
        :disabled='readOnly'
      >
      </v-switch>
      <fields-father :fieldDesc=subfields[index] />
      <v-divider v-if="index <= 1"></v-divider>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import fieldsFather from '.././fieldsFather'
export default {
  name: 'fields_block',
  components:{
    fieldsFather
  },
  props:{
    fields: Object,
  },
  data(){
    return{
      isLoading: false,
      items:[],
      mainField: {},
      subfields: [],
      values: {}
    }
  },
  methods:{
    updateValue(){
      let selected = [];
      for(let key in this.values){
        if(this.values[key]) selected.push(key);
      }
      this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.mainField.code, value: selected});
    }
  },
  computed:{
    ...mapGetters({
      readOnly:'GET_READONLY'
    })
  },
  mounted(){
    this.mainField = this.fields.UF_CRM_1_1655372597;
    this.subfields = Object.values(this.fields).filter(field=>{ return field.code !== 'UF_CRM_1_1655372597'});
    let selected = this.$store.getters.GET_FIELD_VALUE(this.mainField.code);
    for (let opt of this.mainField.items){
      if(selected.includes(opt.ID)) this.values[opt.ID] = true;
      else this.values[opt.ID] = false;
    }
  }
}
</script>