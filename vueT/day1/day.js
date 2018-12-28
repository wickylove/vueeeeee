let data ={
menu:[
{   type: 'aaa',
    title: 'this is a',
    link: 'javascript:;'     
},
{   type: 'aaa',
    title: 'this is a1',
    link: 'javascript:;'     
},
{   type: 'aaa',
    title: 'this is a2',
    link: 'javascript:;'     
},
{   type: 'ccc',
    title: 'this is c',
    link: 'javascript:;'     
},
{   type: 'ccc',
    title: 'this is c1',
    link: 'javascript:;'     
},
{
    type: 'bbb',
    title: 'this is b',
    link: 'javascript:;'   
}],
input: {
    type: '全部',
    title: '',
}
}

new Vue({
    el: '#app' ,
    data:data,
    computed:{
        typeMenu(){
            if(this.input.type !== '全部'){
                return this.menu.filter(item => {
                    return item.type == this.input.type
                })
            } else {
                return this.menu
            }
        },
        titleMenu(){
            if (this.input.title){
                return this.typeMenu.filter(item =>{
                    let content = item.title.toLowerCase()
                    let keyword = this.input.title.toLowerCase()
                    return content.indexOf(keyword) != -1
                })
            }else{
                return this.typeMenu
            }
        }
        }
})