class Missle extends Entity{
    constructor(x,y) {
        super(x,y)
        this.sprite = 'player-missle'
        this.name = "Player Missle"
    }
    loop() {
        this.hitbox()
        this.y -= 4
        if (this.y < -16) {
            this.destroy()
        }
    }
    hitbox(){
        this.hb = [this.x,this.y,this.x+16,this.y+16]
    }
}


sprites = [
    ["player-missle","./Assets/Sprites/Missle.png"],
]

sprites.forEach(function(sprite){
    appendSprite(sprite)
})