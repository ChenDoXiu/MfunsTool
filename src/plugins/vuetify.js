import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.teal.base,
            secondary: colors.blue.base,
            accent: colors.deepPurple.base,
            error: colors.pink.base,
            warning: colors.red.base,
            info: colors.orange.base,
            success: colors.green.base
          }
        },
      },
});
