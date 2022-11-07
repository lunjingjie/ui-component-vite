import { defineComponent } from "vue";

export default defineComponent({
  name: "JSXButton",
  render() {
    return <button onClick={() => console.log(1)}>JSXButton</button>;
  },
});
