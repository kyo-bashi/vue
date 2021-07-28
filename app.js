const app = Vue.createApp({
	// data,functions
	data (){
		return {
			title: 'The Final Empire',
			author: 'Brandon Sanderson',
			age: 45,
			showBooks:true,
			books:[
				{title:'name of the wind',author:'patrick rothfuss',img:'asset/1.jpg',isFav:true},
				{title:'name of the kings',author:'brandon sanderson',img:'asset/2.jpg',isFav:false},
				{title:'name of the empire',author:'brandon sanderson',img:'asset/3.jpg',isFav:true},
			],
			url:'http://www.thenetninja.co.uk'
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
