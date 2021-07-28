const app = Vue.createApp({
	// data,functions
	data (){
		return {
			showBooks: true,
			books:[
				{title:'name of the wind',author:'patrick rothfuss'},
				{title:'name of the kings',author:'brandon sanderson'},
				{title:'name of the empire',author:'brandon sanderson'},
			]
		}
	},
	methods:{
		toggleshowBooks(){
			this.showBooks = !this.showBooks
		},
	}
})

app.mount('#app')
