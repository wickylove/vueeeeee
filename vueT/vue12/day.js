
new Vue({
    el: '#app' ,
    data : {
        loading : false ,
        contacts: [],
        editIndex: null ,
        input: {
            name: '',
            email: ''
        }
    },
    methods : {
        submitHandler() {
            let {name, email} = this.input
            //要是有一個沒有 return null
            if (!name || !email ) return 
            this.loading = true
            if(this.editIndex == null) {
            axios.post('http://localhost:8888/contact', this.input).then((res) => {
                this.contacts.push(res.data)
                this.cancelHandler()
                this.loading = false
                }).catch((err) => {
                    console.log(err)
                })
            }else{
                let {id} = this.contacts[this.editIndex]
                axios.put('http://localhost:8888/contact/' + id , this.input).then((res) =>{
                    this.contacts[this.editIndex] = res.data
                    this.cancelHandler()
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                })
            }

        },
        cancelHandler() {
            this.editIndex = null
            this.input.name= ''
            this.input.email= ''
        },
        deleteHandler(index) {
            let target = this.contacts[index]
            //這個刪除按取消也會刪除
            if(confirm(`是否刪除 ${target.name} ?`))
                this.loading = false
                axios.delete('http://localhost:8888/contact/' + target.id)
                    .then((res) => {
                        this.contacts.splice(index, 1)
                        this.loading = false
                        this.cancelHandler()
                    }).catch((err) => {
                        console.log(err)
                    })
        },
        editHandler(index) {
            let {name,email} = this.contacts[index]
            //this.input.name = name
            //this.input.email = email
            this.editIndex = index 
            this.input = {
                name,
                email
            }
        }
    },
    mounted() {
        this.loading = true 
        axios.get('http://localhost:8888/contact').then((res)=>{
            console.log(res)
            this.contacts = res.data
            this.loading = false
        }).catch((err) => {
            console.log(err)
        })
    }
  
})