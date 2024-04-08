let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback){
    if(assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback))
    }else {
        callback();
    }
}

function loadAssets(callback){

    function loadSprites(fileName){
        assetsStillLoading++;
        let spritesImage = new Image();
        spritesImage.src = "./assets/" + fileName;
        spritesImage.onload = function(){
            assetsStillLoading--
        }
        return spritesImage;
    }

    sprites.background = loadSprites('placePool.png');
    sprites.stick = loadSprites('spr_stick.png');
    assetsLoadingLoop(callback);
}