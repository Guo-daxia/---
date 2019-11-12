<template>
    <div class="about">
        <h1>This is an about page</h1>
		<p v-for="(m,idx) in homedata" :key='idx' >{{m.name}}</p>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "about",
    computed: {
		// ...是使用
		// ...mapState(["homedata"])
		homedata(){
			return this.$store.state.m1.homedata
		}
    },
    methods: {
        ...mapActions(["getdata"])
    },
    mounted() {
        this.getdata();
    }
};
</script>