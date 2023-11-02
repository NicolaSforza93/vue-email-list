console.log('Vue Email List');

const { createApp } = Vue

console.log(axios);

createApp({
    data() {
        return {
            message: 'Ciao Vue!'
        }
    },
    mounted() {
        console.log('OK');
    }
}).mount('#app')