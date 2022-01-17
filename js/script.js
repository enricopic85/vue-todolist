new Vue({
    el:"#app",
    data:{
        todo:[
            {
                text:"fare la spesa",
                done: false
            },
            {
                text:"fare il bucato",
                done: true
            },
            {
                text:"pisciare il cane",
                done: false
            },
            {
                text:"essere felici",
                done: true
            },
            {
                text:"non pensare a Berlusconi come prossimo presidente della Repubblica",
                done: false
            },
        ]
    },
    methods:{
        todoFlag:function(){
            this.done ? 'text' : ''
        }
    }

})