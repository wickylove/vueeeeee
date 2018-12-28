<script>
    export default {
        data(){
            return {
            edit : null
            }
        },
        props: {
            index: {
                type: Number,
                required: true
            }
        },
        computed : {
            todo() {
                return this.$store.state.todos[this.index]
            },
        
            complete: {
                get() {
                    return this.todo.complete
                },
                set(val) {
                this.$store.commit('UPDATE_TODO',{
                    index: this.index,
                    data: {
                        content: this.todo.content,
                        complete: val
                    }
                })
            }
        }},
        methods: {
            destroyHandler() {
                if(confirm(`是否確認刪除 ${this.todo.content} ?`))
                this.$store.commit('REMOVE_TODO', this.index)
            },
            editHandler() {
                this.edit= this.todo.content
            
            },
            cancelHandler() {
                //要是this.edit= ''  空字串也會離開
                this.edit= null
            },
            submitHandler() {
                // 要是 if(!this.edit)  return   ((會在空字串時卡在那
                if(!this.edit)  this.destroyHandler() 
                this.$store.commit('UPDATE_TODO',{
                    index: this.index,
                    data: {
                        content: this.edit,
                        complete: this.todo.complete
                    }
                })
                this.cancelHandler()
            }
        }
    }
</script>
<template src="./template.html"></template>