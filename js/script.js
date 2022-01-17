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
        ],
        newText:'',
        newDone:''
    },
    methods:{
        removeItem:function(index){
            this.todo.splice(index,1);
        },
        addText:function(){
            me.text = this.newText;
            return me;
        },
        addDone:function(){
            const me = Object.create(this.todo);
            me.done = this.newDone;
            return me 
        }
    },
   

})