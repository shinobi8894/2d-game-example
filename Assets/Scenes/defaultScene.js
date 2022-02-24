class Scene {
    constructor(setSceneWidth, setSceneHeight, setTileSetPath, setBackGroundPath, setUpFunction){
        sceneWidth = setSceneWidth
        sceneHeight = setSceneHeight
        tileSet.setAttribute('src', setTileSetPath)
        backGround.setAttribute('src',setBackGroundPath)
        functionLoop.forEach(function(object){
            delete object
        })
        setUpFunction()
        scene = this
    }
}