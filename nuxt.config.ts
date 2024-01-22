// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "nuxt app crud",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "nuxt app" },
      ],
      link: [
        {
          rel: "icon",
          type: "images/x-icon",
          href: "./favicon.ico",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        },
        {
          rel: "stylesheet",
          href: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },

        {
          src: "https://code.jquery.com/jquery-3.7.1.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
  generate:{
    falback:true
  }
});
