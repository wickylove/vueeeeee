var app = new Vue ( {

    el:'#app',
    data:{
        colors:['black',"red","white"],
        home:[{father:'tom'},{father:'bob'}]
    },
  methods: {
        myfa: function(father){
            alert('爸爸'+father)
        }
},
    computed: {
   
    }



    

}) ;