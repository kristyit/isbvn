Vue.component("modal", {
    template: "#modal-template",
});

new Vue({
    el: "#app",
    data: {
        showModalOne: false,
        showModalTwo: false,
        showModalThree: false,
    },
});