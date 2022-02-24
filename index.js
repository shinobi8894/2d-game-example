const bufferCanvas = document.createElement("canvas")
const tileCanvas = document.createElement("canvas")
tileCanvas.width = sceneWidth
tileCanvas.height = sceneHeight
const tileCtx = tileCanvas.getContext("2d")
bufferCanvas.width = sceneWidth
bufferCanvas.height = sceneHeight
const ctx = bufferCanvas.getContext("2d")
const mainCtx = mainCanvas.getContext("2d")
const clockTick = new Event('clockTick')
const start = document.getElementById("starter")
let entityCount = 0
let count = 0
let score = 0
//creates function loop to store which action to take each frame for each object
const functionLoop = {}
//creates bools for key presses
let up = false
let down = false
let left = false
let right = false
let fire = false
let fireCount = 0

//Build Tile Background

mapArray.forEach(function(row,index){
    row.forEach(function(tile,tileIndex){
        tileCtx.drawImage(tileImage,
            (tile * 16) % tileMapWidth, //source X
            Math.floor((tile * 16) / 128) * 16, //source Y
            tileSize, //source width
            tileSize, //source Height
            tileIndex * 16, //destination X
            index * 16, // destination Y
            tileSize, // destination width
            tileSize) // destination height
    })
})




// creates listeners for arrow keys and determines if they are or are not pressed
document.addEventListener("keydown", function(e){
    if (e.key === "ArrowUp"){
        up = true
    }
    if (e.key === "ArrowDown"){
        down = true
    }
    if (e.key === "ArrowLeft"){
        left = true
    }
    if (e.key === "ArrowRight"){
        right = true
    }
    if (e.key === " "){
        fire = true
        
    }
})
document.addEventListener("keyup", function(e){
    if (e.key === "ArrowUp"){
        up = false
    }
    if (e.key === "ArrowDown"){
        down = false
    }
    if (e.key === "ArrowLeft"){
        left = false
    }
    if (e.key === "ArrowRight"){
        right = false
    }
    if (e.key === " "){
        fire = false
        fireCount = 0
    }
})

// initiates player object
player1 = new Player(16,16)

// defines the logic that fires every time 16.66 milliseconds passes which updates internal logic at 60 ticks per second, smooth framerate says what?
function fireClock(){
    document.dispatchEvent(clockTick)
    count += 1
    //clear screen
    mainCtx.fillStyle = "#000000";
    mainCtx.fillRect(0, 0, displayWidth, displayHeight);
    //clear Buffer
    ctx.fillStyle = "#000000";
    mainCtx.fillRect(0, 0, sceneWidth, sceneHeight);

    //draw background
    ctx.drawImage(tileCanvas,0,0)

    //logic loop
    for (const object in functionLoop){
        functionLoop[object].loop()
    }
    //draw loop
    for (const object in functionLoop){
        functionLoop[object].draw()
    }
    if (fire === true){
        fireCount += 1
    }

    //draw buffer to main canvas
    mainCtx.drawImage(bufferCanvas, cameraX, cameraY, cameraWidth, cameraHeight, 0, 0, displayWidth, displayHeight)

}
setInterval(fireClock, 16.66)













