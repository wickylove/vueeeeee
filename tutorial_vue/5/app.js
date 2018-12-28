new Vue ( {

    el:'#app',
    data:{
        a: 0,
        age: 20,
        b: 0
    },
  methods: {
     
},
    computed: {
        addToA: function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age ;
        }
    }



    

}) ;