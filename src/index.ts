import { createApp } from "vue/dist/vue.esm-browser";
import SButton from '../src/button';

createApp({
  template: `
    <SButton color="green" icon="search"></SButton>
    <SButton color="blue">测试按钮</SButton>
    <SButton color="gray">测试按钮</SButton>
    <SButton color="purple">测试按钮</SButton>
    <SButton color="yellow">测试按钮</SButton>
  `
}).component(SButton.name, SButton).mount('#app');