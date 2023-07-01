const app = Vue.createApp({
  data() {
    return {
      userName: "Labeat amox Krasniqi",
      vTextExampleText: "v.text geht vor mustache {{}}",
      vHtmlExampleText:
        "<h1>v-html nimmt direkt HTML code an </h1><p> Some Text</p>",
    };
  },
  directives: {
    highlight: {
      mounted(el) {
        el.style.color = "white";
        el.style.border = "2px solid green";
        el.style.backgroundColor = "black";
      },
    },
  },
}).mount("#app");
console.log(app.userName);
