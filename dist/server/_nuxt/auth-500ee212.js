import "vue";
import "hookable";
import { d as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import "destr";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "vue/server-renderer";
import "defu";
const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  {
    return navigateTo("/login/login.html");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-500ee212.js.map
