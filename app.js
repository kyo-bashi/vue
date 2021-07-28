const app = Vue.createApp({
	// data,functions
	data (){
		return {
			title: 'The Final Empire',
			author: 'Brandon Sanderson',
			age: 45,
      			books:[
				{title:'name of the wind',author:'patrick rothfuss'},
				{title:'name of the kings',author:'brandon sanderson'},
				{title:'name of the empire',author:'brandon sanderson'},
			]
		}
	},
	methods:{
		changeTitle(title){
			// this.title = 'Words of Randiance'
			this.title = title
		},
    toggleshowBooks(){
			this.showBooks = !this.showBooks
		},
		handleEvent(e,data){
			console.log(e,e.type);
			if (data) {
				console.log(data);
			}
		},
		handleMousemove(e){
			this.x = e.offsetX;
			this.y = e.offsetY;
		}
	}
})

app.mount('#app')
