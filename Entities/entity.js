class Entity {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.hb = [this.x,this.y,this.x + 16, this.y + 16]
        this.name = "Entity"
        this.fIndex = `${entityCount}`
        functionLoop[this.fIndex] ||= this
        entityCount += 1
        this.sprite = ''
    }
    loop(){

    }
    draw(){
        let img = document.getElementById(this.sprite)
        ctx.drawImage(img,this.x,this.y)
    }
    hitbox(){

    }
    destroy() {
        delete functionLoop[this.fIndex]
    }
}