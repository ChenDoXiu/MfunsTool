<template>
 <v-app>
   <appbar title="Mfuns外站投稿工具"></appbar>
   <v-snackbar
        app
        v-model="snackbar.state"
        top
        right
        :color="snackbar.color"
        absolute
      >
        {{ snackbar.text }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar.state = false">
            关闭
          </v-btn>
        </template>
      </v-snackbar>
   <router-view>

   </router-view>

 </v-app>
</template>

<script>

import  Appbar from "@/components/Appbar.vue";
import EventBus from "@/tool/event-bus";
export default {
  name: 'App',

  components: {
    Appbar 
  },
  data: function() {
    return {
      drawer: false,
      snackbar: {
        state: false,
        text: "TEXT",
        color: "blue"
      }
    };
  },
  methods: {
    switchsnackbar(e) {
      this.snackbar.state = true;
      this.snackbar.text = e.text;
      this.snackbar.color = e.color || this.snackbar.color;
    }
  },
  mounted() {
    //注册事件
    EventBus.$on("snackbar", e => {
      this.switchsnackbar(e);
    });
  }
};
</script>
