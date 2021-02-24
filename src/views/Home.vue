<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col md="6" cols="12">
          <v-card>
            <v-card-title>视频外链解析工具</v-card-title>
            <v-card-text>
              <p>
                本工具使用服务端动态解析外站直链，使用此工具可以解决外站视频直链失效问题，目前支持已youku,weibo，其他外链解析服务将在以后添加（咕咕咕
              </p>
              <v-form ref="form">
                <v-select
                  :items="select"
                  v-model="now"
                  label="视频来源"
                  :rules="rules"
                ></v-select>
                <v-text-field
                  label="视频链接"
                  :placeholder="getExample()"
                  :rules="rules"
                  v-model="url"
                  :error-messages="errmsg"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="secondary" @click="submit">解析</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="6" cols="12">
          <v-card>
            <v-card-title> 解析结果 </v-card-title>

            <v-card-text>
              <p>链接：{{ vurl }}</p>

              <video width="100%" :src="vurl" controls></video>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Server from "@/networker/server";
export default {
  components: {
  },
  data() {
    return {
      //当前选择的站点
      now: "",
      //当前输入的视频地址
      url: "",
      //定义解析站点列表
      //名称:{example:"链接示例",
      //      reg:"匹配视频id的正则"}
      list: {
        youku: {
          example: "https://v.youku.com/v_show/id_XNTEwNjg2==.html",
          reg: /(?<=id_)\w+==/,
          path: "/v1/youku/"
        },
        weibo: {
          example: "https://weibo.com/tv/show/1034:460660553541227",
          reg: /\d{4}:\d+/,
          path: "/v1/weibo/"
        },
      },
      rules: [(v) => !!v || "必填"],
      errmsg: "",
      //视频链接
      vurl: "请先输入地址",
    };
  },
  methods: {
    getExample() {
      return this.now ? this.list[this.now].example : "请选择视频来源";
    },
    submit() {
      console.log(this.validate());
      //验证表单
      if (this.validate()) {
        //取出视频id
        let vids = this.url.match(this.list[this.now].reg);
        if (!vids) {
          this.errmsg = "请输入正确的链接";
        } else {
          this.errmsg = "";
        }
        
        this.vurl = Server.server + this.list[this.now]["path"] + vids;
      }
    },
    validate() {
      return this.$refs.form.validate();
    },
  },
  computed: {
    select() {
      //通过遍历list获得select标签的选项
      let array = [];
      for (const key in this.list) {
        if (Object.hasOwnProperty.call(this.list, key)) {
          array.push(key);
        }
      }
      return array;
    },
  },
};
</script>

<style>
</style>