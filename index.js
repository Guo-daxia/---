import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import model1 from './models/model1'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		goods:[]
	},
	mutations: {
		setHomeData(state,v){
			state.goods = v
		}
	},
	actions: {
		getHomeData({state,commit,rootState}){
			return new Promise((resolve,reject)=>{
				axios.get("http://127.0.0.1:3000/command")
				.then(resp=>{	
					console.log(resp)
					commit('setHomeData',resp.data.result_list.map_data)
					resolve()
				})
			})
		}
	},
	modules: {
		m1:model1
	}
})
