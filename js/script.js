Vue.config.devtools = true;
new Vue (
    {
        el: "#app",
        data: {
            text: "hey!",
            model: "",
            img: "https://via.placeholder.com/150",   //img dentro al v-bind
            classContent: "hidden"
        }, 
        methods: {
            showElement : function(){
                this.classContent = "show";
                this.img = "https://www.laramind.com/blog/wp-content/uploads/2018/01/Untitled-design-12-620x420.png"
            } 
        }
        
    }
)

