function Canvas2D() {
    this.canvas = document.getElementById('canvas');
    this.canvasContext = this.canvas.getContext('2d');
}

Canvas2D.prototype.clear = function (){
        this.canvasContext.clearRect(0,0,this.canvas.width, this.canvas.height);
}

Canvas2D.prototype.drawImage = function (image, position){
    this.canvasContext.drawImage(image, position.x, position.y);
}

let Canvas = new Canvas2D();

let image = new Image();
image.src = './assets/placePool.png'

