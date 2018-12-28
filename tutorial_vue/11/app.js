Vue.component('my1',{
  props: ["parentMsg"],
  template: '#my1',
  data: function() {
    return{
      msg: 'Msg of Child!'
    }
  }
});
var app = new Vue ( {

    el:'#app',
    data:{
       msg: 'Msg of Parent!'

    },
    components: {
      'my-component':{
        template: '<div class="component">A custom component of Vue!</div>'
      }
    }

        


}) ;
