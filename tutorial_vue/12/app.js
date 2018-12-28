Vue.component('my',{
  template: '<div class="component"> <span> {{ c }}</span> -<button @click="c++">add to count</button> <br> <span> {{ a }}</span> -<button @click="a++">add</button></div> ',
  props: ['count','a'],
  //要是父親的data是物件時
  data() {
    return {
      c: this.count.num
    }
  }
});
var app = new Vue ( {

    el:'#app',
    data:{
      counts:{
        num: 0
      },
      as : 0
    },
    components: {
      'my-component':{
        template: '<div class="component">A custom component of Vue!</div>'
      }
    }

        


}) ;
