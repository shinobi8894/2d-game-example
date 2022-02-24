//build out game frame
const head = document.getElementsByTagName('head')[0]
let source = document.createElement('script')
//append Entities to source


//scene variables
let sceneWidth = 320
let sceneHeight = 288

let cameraWidth = 160
let cameraHeight = 144
let cameraX = 0
let cameraY = 0

let displayWidth = 1280
let displayHeight = 1152

//This is where I will eventually initiate the loading of the initial scene. The scene will contain the information regarding the
//tileset, the scene size and the assets needed to be loaded in


//Tileset Variables
let tileSize = 16
let tileMapWidth = 128
let tileMapHeigth = 128
let tileImage = document.createElement('img')
tileImage.setAttribute('src','Assets/Tilesets/OverWorld0.png')
tileImage.setAttribute('hidden','true')
head.append(tileImage)
//set Scene Map

let mapArray = [
[29,21,20,21,9,10,10,10,10,18,18,18,55,10,10,10,10,10,10,10],
[21,4,4,4,17,18,10,10,11,4,4,4,55,10,10,10,10,10,10,10],
[13,4,35,36,37,4,9,10,11,24,24,24,55,18,18,18,18,18,18,10],
[21,4,43,44,45,4,9,10,11,32,40,32,55,4,42,4,4,4,4,9],
[13,4,33,41,33,4,17,18,19,4,26,4,14,63,16,63,63,39,4,9],
[21,4,4,26,26,26,26,26,26,26,26,26,30,5,16,5,5,55,2,10],
[13,4,4,4,38,63,63,63,63,63,39,26,4,4,26,1,2,55,10,10],
[21,4,1,2,54,58,58,58,58,58,55,26,26,26,26,9,10,55,10,10],
[4,4,9,10,54,58,58,58,58,58,55,2,3,26,1,10,10,55,10,10],
[2,2,10,10,46,62,62,62,7,58,55,10,11,26,9,10,10,14,63,63],
[10,10,10,10,11,4,49,49,54,58,55,18,19,26,9,10,10,22,5,5],
[18,18,18,18,19,4,49,49,46,62,47,4,4,26,17,18,18,30,5,5],
[7,4,4,4,4,4,4,4,27,27,27,27,4,26,27,27,27,27,27,27],
[54,4,4,4,12,13,4,4,27,4,48,8,4,26,51,52,34,53,12,13],
[54,4,4,12,29,21,4,4,27,48,48,4,4,26,59,60,60,61,20,28],
[54,4,12,29,28,13,4,4,27,4,4,4,4,26,32,40,32,32,12,29],
[54,12,29,28,29,28,13,12,13,12,13,12,13,26,26,26,4,4,20,28],
[54,20,28,29,28,29,28,29,28,29,28,29,28,13,12,13,12,13,12,29]]



//since we are not using node.js we're gonna have to do this manually. Bummer. But here's a thing to make it slightly easier.
let files = [
    'Entities/entity.js',
    'Entities/player.js',
    'Entities/enemy.js',
    'Entities/missle.js',
    'Entities/star.js',
    'Scenes/defaultScene.js'
]

files.forEach(function(file){
    // debugger
    console.log(file)
    let fileSource = document.createElement('script')
    fileSource.setAttribute("src",file)
    head.append(fileSource)
})


source.setAttribute('src','index.js')
head.append(source)

// build canvas
const screenHolder = document.getElementsByClassName('full-screen')[0]
const mainCanvas = document.createElement("canvas")

mainCanvas.setAttribute("id","Main-Screen")
mainCanvas.setAttribute("width",`${displayWidth}`)
mainCanvas.setAttribute('height',`${displayHeight}`)
mainCanvas.setAttribute('style',"border:1px solid #000000;")
screenHolder.append(mainCanvas)

const holder = document.getElementById("sprite-holder")
function appendSprite(sprite){
    
    let img = document.createElement('img')
    img.setAttribute('hidden','true')
    img.setAttribute('id',sprite[0])
    img.setAttribute('src',sprite[1])
    holder.append(img)
}
let sprites = []
let backGround = document.createElement('img')
backGround.setAttribute('src','Assets/Backgrounds/testBackground.png')
backGround.setAttribute('hidden','true')
holder.append(backGround)

//Collider Function
function collider(hitbox1,hitbox2){
    let minAx = hitbox1[0]
    let minAy = hitbox1[1]
    let maxAx = hitbox1[2]
    let maxAy = hitbox1[3]
    let minBx = hitbox2[0]
    let minBy = hitbox2[1]
    let maxBx = hitbox2[2]
    let maxBy = hitbox2[3]
    let aLeftOfB = maxAx < minBx
    let aRightOfB = minAx > maxBx
    let aAboveB = minAy > maxBy
    let aBelowB = maxAy < minBy
    return !( aLeftOfB || aRightOfB || aAboveB || aBelowB)
}

//scene = new Scene(384,384,'Assests/Tilesets/OverWorld0.png', 'Assets/Backgrounds/testBackground.png',function(){})