Vue.component('my',{
  template: '<span>\
                {{ parentMessage }}\
                <input v-model="message">\
                <button @click="updateText">Update</button>\
                </span>',
  props: {
    parentMessage: String
  },
  data(){
    return {
      message: this.parentMessage
    }
  },
  methods: {
    updateText(){
      this.$parent.$emit('update',this.message);
    }
  }              
});
var app = new Vue ( {

    el:'#app',
    data:{
         message: 'hello'
      },
    methods: {
      selfUpdate(val){
        this.message = val ;
      }
    },
    mounted() {
      this.$on('update', this.selfUpdate);
    },
    components: {
      'my-component':{
        template: '<div class="component">A custom component of Vue!</div>'
      }
    }

        


}) ;
