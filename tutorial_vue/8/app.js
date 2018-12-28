var app = new Vue ( {

    el:'#app',
    data:{
       todos: [],
       newTodo:''
    },
  methods: {
        addTodo: function(todo){
            this.todos.push({content:todo,completed:false});
        },
        removeTodo: function(todo){
            //indexOf 的o是大寫
            this.todos.splice(this.todos.indexOf(todo),1);
        }

        
}

}) ;