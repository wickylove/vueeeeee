//event bus
var bus = new Vue();

Vue.component('custom1',{
  template: '<div class="custom1">\
              <input v-model="msg"> <button @click="submit">Submit</button>\
              </div>',
  methods: {
  
    submit() {
      bus.$emit('receive',this.msg);
      console.log('emit');
             }
  },
  //data fuction新的寫法
  data () {
    return  {
      msg: '456'
            };
          }
});
Vue.component('custom2',{
   template: '<div class="custom2">{{ msg }}</div>',
   created() {
     var that = this ;
     bus.$on('receive', function(newMsg) {
       that.msg = newMsg;
       console.log('bus.on')
     });
   },
   data(){
      return{
        msg: '123'
      };
   } 
  });

var app = new Vue ( {

    el:'#app',

        


}) ;
