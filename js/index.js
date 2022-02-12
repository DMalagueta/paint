document.addEventListener('DOMContentLoaded', init, false);

function init() {
    
    //// VARIABLES

    let tools = document.getElementById('tools');
    let canvas = document.getElementById('board');
    let ctx = canvas.getContext('2d');
    let coord = {x: 0, y: 0}

    //// EVENTS

    tools.addEventListener('click', useTool, false);
    canvas.addEventListener('mousedown', startDraw, false);
    canvas.addEventListener('mouseup', stopDraw, false);
    window.addEventListener('resize', resize, false);

    //// FUNCTIONS

    function useTool(e) {
        let clickedButton = e.target;

        if ( clickedButton.id === 'pencil'){
            usePencil();
        }
    }

    function startDraw(e){
        canvas.addEventListener('mousemove',draw, false)
        reposition(e);
    }

    function reposition(e){
        coord.x = e.clientX - canvas.offsetLeft;
        coord.y = e.clientY - canvas.offsetTop;
    }

    function stopDraw(){
        canvas.removeEventListener('mousemove',draw,false);
    }

    function draw(e){
        ctx.beginPath();
        ctx.linewidth = 5;
        ctx.strokeStyle = 'black';
        ctx.moveTo(coord.x,coord.y);
        reposition(e);
        ctx.lineTo(coord.x,coord.y);
        ctx.stroke();
    }

    function resize(){
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }

    resize();


    function usePencil() {


    }

}