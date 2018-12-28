import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const LS = {
  load() {
    return JSON.parse(localStorage.getItem('vue-todos') || '[]')
  },
  save(data) {
    localStorage.setItem('vue-todos', JSON.stringify(data))
  }
}

const filter = {
  all(todos) {
    return todos
   },
  active(todos) {
    //=>函式本身就含有return
    return todos.filter(todo => 
       !todo.complete
    )
  },
  complete(todos) {
    return todos.filter(todo => {
      return todo.complete
    }) 
  }
}

export default new Vuex.Store({
  strict : true ,
  state: {
    todos : [
      { contnet: 'todo-contnet1' , complete: false},
      { contnet: 'todo-contnet2' , complete: true},
      { contnet: 'todo-contnet3' , complete: false}
    ]
  },
  //---------------- 產生index----------------
  getters : {
    todoIndex(state) { 
      return filter[state.route.name](state.todos).map(todo =>  
        state.todos.indexOf(todo))
    }
  }, 
  mutations: {
    SET_TODOS(state, data) {
      state.todos = data
      // save LS
      LS.save(state.todos)
    },
    ADD_TODO(state, data) {
        state.todos.push(data)
        LS.save(state.todos)
    },
    UPDATE_TODO(state, { index, data}) {
      //要是 state.todos[index] = data 資料換到 但畫面不會動 沒有觸發upserve
      state.todos[index].complete = data.complete
      state.todos[index].content= data.content
      LS.save(state.todos)
    },
    REMOVE_TODO(state, index) {  
      state.todos.splice(index, 1)
      LS.save(state.todos)
    }


  },
  actions: {
    INIT_TODOS ({commit}) {
      //Load LS
      
      commit('SET_TODOS', LS.load())
    }
  }
})
