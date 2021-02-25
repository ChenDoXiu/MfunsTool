<!--
 * @Author: your name
 * @Date: 2021-02-21 13:42:27
 * @LastEditTime: 2021-02-25 15:53:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html\src\components\Appbar.vue
-->
<template>
  <v-app-bar app color="primary" dark>
    <v-avatar size="40" tile class="mr-4">
      <img src="@/assets/logo.jpg" alt="alt" />
    </v-avatar>
    <v-app-bar-title>{{ title }}</v-app-bar-title>
    <v-spacer></v-spacer>
        <v-btn @click="toRescue('https://github.com/ChenDoXiu/MfunsTool')" color="success" v-bind="attrs" v-on="on" depressed rounded dark
          ><v-icon left>mdi-github</v-icon>关于&帮助</v-btn
        >
  </v-app-bar>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    toRescue(url) {
        window.open(url,"_blank");
    }
  }
};
</script>

<style>
</style>