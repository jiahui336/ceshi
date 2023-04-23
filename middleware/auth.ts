export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = false;
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isLogin === false) {
    return navigateTo("/login/login.html");
  }
});
