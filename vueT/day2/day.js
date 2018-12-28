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
    type: null,
    title: null,
}
} 

new Vue({
    el: '#app' ,
    data:data,
    computed:{
        typeList(){
            let obj = {
                sort: [],
                map: {}
            }
            this.menu.forEach((item, index) => {
                let {type, title, link } = item
                if(!obj.map[type]) {
                    obj.sort.push(type)
                    obj.map[type] = {
                        sort : [],
                        map: {}
                    }
                }
                obj.map[type].sort.push(title)
                obj.map[type].map[title] = { index, link}
            })
                return obj
        },
        titleList(){
            this.input.title = null 
            if (this.input.type) {
                return this.typeList.map[this.input.type]
            }else {
                return []
            }
        },
        content(){
            if(this.input.title) {
                return this.titleList.map[this.input.title]
            }else {
                return null
            }
        }


}

})