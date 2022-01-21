<template>
  <div>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            :value="date|dateToLocal"
            :label="fieldData.title"
            prepend-icon="mdi-calendar"
            readonly
            dense
            outlined
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
          locale="ru-RU"
          first-day-of-week="1"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Отменить
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
  </div>
</template>

<script>
export default {
  name: 'date',
  props:{
    fieldData: Object
  },
  data() {
    return{
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0,10),
      menu: false,
    }
  },
  filters:{
    dateToLocal(date){
      return date.split('-').reverse().join('.');
    }
  }
}
</script>