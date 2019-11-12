<template>
    <div class="home">
        <p v-for="(g,idx) in goods" :key='idx' >{{g.title}}</p>
    </div>
    <!-- <p v-for="(g,idx) in goods" :key='idx'>{{g.title}}</p> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    name: "home",
    components: {
        HelloWorld
    },
    computed: {
       ...mapState(['goods'])
    },
    methods:{
        ...mapMutations(['setHomeData']),
        ...mapActions(['getHomeData'])
    },
    mounted(){
        this.getHomeData().then(resp=>{
            console.log('请求数据完成')
        })
    }
};
</script>
