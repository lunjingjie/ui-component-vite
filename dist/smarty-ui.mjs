import { defineComponent, createVNode, openBlock, createElementBlock, Fragment, unref, withCtx, createElementVNode, createTextVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  icon: {
    type: String
  }
};
const MyButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
        mx-2
        py-2
        px-4
        font-semibold
        rounded-lg
        shadow-md
        text-white
        bg-${props2.color}-500
        hover:bg-${props2.color}-700
        border-none
        cursor-pointer
      `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, "SFC Button", -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u6D4B\u8BD5\u6309\u94AE");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SFCButton",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createVNode(unref(MyButton), null, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", {
      "onClick": () => console.log(1)
    }, [createTextVNode("JSXButton")]);
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(_sfc_main.name, _sfc_main);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  MyButton,
  _sfc_main as SFCButton,
  entry as default
};
