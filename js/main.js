console.log('Vue Email List');

const { createApp } = Vue

console.log(axios);

createApp({
    data() {
        return {
            email: [],
        }
    },
    methods: {
        fetchEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        // console.log(res, res.data);
                        const result = res.data.response;
                        this.email.push(result);
                        // console.log(this.email);
                    })
            }
        }
    },
    created() {
        this.fetchEmail();
    },
    mounted() {
        console.log('OK');
    }
}).mount('#app')