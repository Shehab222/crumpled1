class dustbin {
    constructor(){
        var options ={
            restitution : 3,
            isStatic: true
        }
        this.body=Bodies.rectangle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
    }
}