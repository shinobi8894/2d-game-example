class Enemy extends Entity{
    constructor(x,y) {
        super(x,y)
        this.name = "Enemy"
        this.sprite = "enemy-ship"
    }
    loop(){
        this.hitbox()
        for (const entity in functionLoop){
            let object = functionLoop[entity]
                if (object){
                    if (object.name === "Player Missle") {
                        if (collider(this.hb, object.hb)){
                            this.destroy()
                            object.destroy()
                        }
                    }
                }

            }
    }
    hitbox() {
        this.hb = [this.x,this.y,this.x+16,this.y+16]
    }
}

sprites = [
    ["enemy-ship","./Assets/Sprites/Enemy.png"],
]

sprites.forEach(function(sprite){
    appendSprite(sprite)
})