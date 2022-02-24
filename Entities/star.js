class Star extends Entity{
    constructor(x,y) {
        super(x,y)
        this.name = "Star"
        this.speed = Math.random() * 2 + 1
        this.color = ["#ffffff","#a4f5f3","#fff454","#ff0000"][Math.floor(Math.random()* 4)]
    }
    loop(){
        this.hitbox()
        this.y += this.speed
        if (this.y > 288) {
            this.destroy()
        }
    
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,1,1)
    }
    hitbox(){
        this.hb = [-1,-1,0,0]
    }

}