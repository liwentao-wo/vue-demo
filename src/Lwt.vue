<template>
  <div>lwt-{{text}}
      <button @click="clickBtn">按钮</button>
  </div>
</template>

<script>
const axios = require('axios');
export default {
    data() {
        return {
            text: '2',
        }
    },
    mounted() {
        setTimeout(() => {
        this.text = 5;
        }, 2000)
        
    },
    methods: {
        clickBtn() {
            axios.get('https://www.apiopen.top/novelApi')
                .then( (response) => {
                    if (response.status === 200) {
                        this.text = response.data.data.map(e => e.bookname);
                    }
                })
                .catch(function () {
                    // handle error
                });
        }
    }
}
</script>

<style>

</style>