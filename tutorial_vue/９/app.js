var app = new Vue ( {

    el:'#app',
    data:{
       NT: 0

    },
  computed: {
        japan : function(){
           return this.NT *0.27;
        },
        
        usa : function(){
          return this.NT *30
        }
        }

        


}) ;