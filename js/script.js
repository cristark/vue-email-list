/* Genera 10 mail tramite api e stampale in una lista. */

let app = new Vue({
    el: '#app',
    data: {
        mailNumber: null,
        mailList: []
    },
    methods: {
        mailGen() {
            for (let i = 0; i < this.mailNumber; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(result => this.mailList.push(result.data.response));
            };
        },
        deleteList() {
            this.mailList = [];
        }
    }
});