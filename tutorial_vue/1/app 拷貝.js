new Vue ( {

    el:'#app',
    data:{
        message : 'hello world' ,
        pizza : 'hahaahah' ,
        website : 'https://portal.ncu.edu.tw/login' ,
        websiteTag :'<a href="https://portal.ncu.edu.tw/login">NCU~</a>'
        
    },
    methods: {
        greet:function(time){
            return 'good ' + time +' ' +this.pizza;
                            }
    }

}) ;