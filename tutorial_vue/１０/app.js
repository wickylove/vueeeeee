//全域component的寫法
Vue.component('my',{
  template: '<div clas="component"><span> {{count}}</span> - <button @click="count++">add</button></div>',
  data: function(){
    return {
      //要是設在外面，變成全域變數 就不能個別使用
      count:0
    }
  }
})
Vue.component('my-cm2',{ 
  template: '<div class="component">B custom component of Vue!    {{msg}}</div>',
  //子元件中 data 要用function()的方式呈現
  data: function(){
    return {
             msg : 'hahahahah'
          }
  }

});
//跟html的scirpt對應
Vue.component('my1',{template : '#my1'});
//
var app = new Vue ( {

    el:'#app',
    data:{
       NT: 0

    },
    components: {
      'my-component':{
        template: '<div class="component">A custom component of Vue!</div>'
      }
    }

        


}) ;
new Vue( {
  el: '#app2'
});
