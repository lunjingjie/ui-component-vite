import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Button from "../index";

describe("Button", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.text()).toBe("Button");
  });
});
