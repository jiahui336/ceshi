// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 如果你已经启用了Take Over Mode或安装了TypeScript Vue Plugin (Volar)，你可以为*.vue'文件禁用生成shim
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
});
