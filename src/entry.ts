import MyButton from "./button/index";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import { App } from "vue";
// 导出单独组件
export { MyButton, SFCButton, JSXButton };

// 导出全部
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
