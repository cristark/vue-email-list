/* Genera 10 mail tramite api e stampale in una lista. */

let app = new Vue({
    el: '#app',
    data: {
        mailList: []
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(result => this.mailList.push(result.data.response));
        };
    },
    methods: {
        mailGen() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(result => this.mailList.push(result.data.response));
            };
        }
    }
});