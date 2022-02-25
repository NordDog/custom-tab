<template>
  <div class="mwswrap">
    <p class="mwstitle">{{fieldData.title}}</p>
    <div v-for="val, strindex in value" :key="strindex" style="display: flex; width: 100%;">
      <div v-for="field, cellindex in fieldData.advancedType.cells" :key="cellindex"
          :class="[ field.cols == 1?'third':'second-third']">
        <v-autocomplete
          v-if="field.fieldType == 'autocomplete'"
          class="pr-9"
          v-model="value[strindex][cellindex]"
          outlined
          :items="items"
          item-value="value"
          item-text="text"
          dense
          background-color="white"
          :readonly='readOnly'
          @change="setVal"
          @update:search-input="getItems($event, cellindex)"
        ></v-autocomplete>
        <v-text-field
          v-model="value[strindex][cellindex]"
          v-else-if="field.fieldType == 'string'"
          class="pr-9"
          dense
          outlined
          background-color="white"
          :readonly='readOnly'
          @input="setVal"
        ></v-text-field>
      </div>
    </div>
        <p 
        v-if="fieldData.multiple && !readOnly"
        class="fakelink" 
        @click="addRow">
        добавить
        </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import debounce from 'debounce';
import axios from 'axios';

export default {
  name: 'app-row',
  props: {
    fieldData: Object
  },
  data(){
    return{
      items:[],
    }
  },
  methods:{
    addRow(){
      this.$store.dispatch('ADDROW', {val: this.fieldData.code});
    },
    setVal: debounce(function (){
      
      let temp=[];
      for(let row of this.value){
        temp.push(row.join('/'));
      }
      this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.fieldData.code, value: temp});
      
    },1000),
    getItems: debounce(function (e, cell){

      this.isLoading = true;

      //получить с какого cell запустилась функция

      let data = new FormData();
      data.append('key', 'j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc');
      data.append('action', 'getItems');
      data.append('type', this.fieldData.advancedType.cells[cell].items);
      data.append('string', e);

      if(this.fieldData.advancedType.cells[cell].items=='iblock_element' || this.fieldData.advancedType.cells[cell].items=='crm') data.append('entity', this.fieldData.advancedType.cells[cell].entity);

      axios({
        method:'post',
        url:'https://spets.company/local/custom-tab/ajax.php',
        data,
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(response=>{
        let currvalues = this.value.map((item=>item[0])),
        currItems = this.items.filter(item=>currvalues.includes(item.value));
        console.log(currvalues);
        console.log(currItems);
        
        if(response.data){
          this.items = response.data.concat(currItems);
          console.log(this.items)
        }  
      
      }).finally(()=>(this.isLoading = false));

    }, 1000),
  },
  computed:{
    ...mapGetters({
      readOnly:'GET_READONLY'
    }),
    value:{
      get(){

        let res =  this.$store.getters.GET_FIELD_VALUE(this.fieldData.code), result=[];
        
        if(!Array.isArray(res)){
          
          if(res.length == 0)
            result = Array(Array(''));
          else result.push(res.split('/'));
          
          return result;
        }

        for(let row of res){
          result.push(row.split('/'));
        }
        
        return result;
        
      }
    }
  },
  mounted(){
    this.items = this.$store.getters.GET_CURR_VALUE(this.fieldData.code);
  }
}
</script>
<style scoped>
.mwswrap{
  border: 2px solid grey;
  padding: 20px 20px 0px 20px;
  border-radius: 5px;
  position: relative;
  margin-bottom: 25px;
}
.mwstitle{
  position: absolute;
  top: -15px;
  background: lightgrey;
  text-transform: capitalize;
  border-radius: 5px;
  padding: 0px 5px;
  font-size: smaller;
}
.third{
  width:33%;
}
.second-third{
  width:77%;
}
.fakelink{
  position: absolute;
  bottom: -10px;
  right: 10px;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
</style>