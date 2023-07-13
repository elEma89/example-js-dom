window.onload = () => {
    const player = {
        element : document.getElementById("player"),
        topposition : 0,
        leftposition : 0,
        step : 15,
        move: function(direction) {
            switch (direction) {
                case "ArrowUp" :
                    this.topposition = this.topposition - this.step;
                    this.element.style.top = this.topposition + "px";
                    break;

                case "ArrowDown" :
                    this.topposition = this.topposition + this.step;
                    this.element.style.top = this.topposition + "px";
                    break;
                
                case "ArrowRight" :
                    this.leftposition = this.leftposition + this.step;
                    this.element.style.left = this.leftposition + "px";
                    break;

                case "ArrowLeft" :
                    this.leftposition = this.leftposition - this.step;
                    this.element.style.left = this.leftposition + "px";
                    break;

                default:
                    break;
            }
        }
    };

    onkeydown = (key) => {
        player.move(key.code);
    }
}