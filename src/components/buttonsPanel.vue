<template>
  <div class="mwsbtn-group">
    <button 
      v-for="btn of buttons" 
      :key="btn.ID" 
      small 
      @click="changeBtnValue(btn.ID)" 
      :style="{width: autoWidth}"
      :disabled='readOnly'
      :class="{mvshov: !readOnly}"
    >
      {{btn.VALUE}}
    </button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'buttonsPanel',
  props:{
    buttons: Array,
    code: String
  },
  methods:{
    changeBtnValue(val){
      this.btn = val;
      this.$store.dispatch('FIELD_VALUE_SETTER', {name:this.code, value: val});
      this.$store.dispatch('CHANGE_SELECTED_BTN', {val: val});
    }
  },
  computed:{
    autoWidth(){
      return 100/this.buttons.length+'%';
    },
    ...mapGetters({
      readOnly:'GET_READONLY'
    })
  }
}
</script>

<style scoped>
  .mwsbtn-group button {
    background-color: darkgray; /* Green background */
    border-right: 1px solid black; /* Green border */
    color: black; /* White text */
    padding: 10px 24px; /* Some padding */
     /* Pointer/hand icon */
    float: left; /* Float the buttons side by side */
  }

  .mwsbtn-group button:last-child {
    border-right: none; /* Prevent double borders */
    border-radius: 0px 25px 25px 0px;
  }
  .mwsbtn-group button:first-child {
    border-radius: 25px 0px 0px 25px;
  }

  /* Clear floats (clearfix hack) */
  .mwsbtn-group:after {
    content: "";
    clear: both;
    display: table;
  }

  /* Add a background color on hover */
  .mvshov:hover {
    background-color: lightgray;
    cursor: pointer;
  }
  .mwsbtn-group{
    margin-bottom: 20px;
  }
</style>