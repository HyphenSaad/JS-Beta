// to create canvas that will hold our text
let canvas = new fabric.Canvas('layer-1', { hoverCursor: 'pointer' })
    .setDimensions({ width: '100%', height: '', }, { cssOnly: true });

// to store COORDS, so that we can use them, whenever object is modified
let coordinatesOfPreviousObj = { top: 500, left: 1000, scaleX: 5, scaleY: 5 };

// it will execute every time use enters/selects key from my-virtual-keyboard
function urduText(text) {
    // to clear the canvas...xD
    canvas.clear();

    // to create text object on canvas
    let textOnCanvas = new fabric.Text(text, {
        fontFamily: 'Jameel Khushkhati',
        fill: '#fff'
    });

    // to push the created text object on canvas, by setting last position
    canvas.add(textOnCanvas.set({
        top: coordinatesOfPreviousObj.top,
        left: coordinatesOfPreviousObj.left,
        scaleX: coordinatesOfPreviousObj.scaleX,
        scaleY: coordinatesOfPreviousObj.scaleY,
    }));

    // to get the COORD-data whenever object gonna change
    canvas.on('object:modified', () => {
        coordinatesOfPreviousObj.top = textOnCanvas.top;
        coordinatesOfPreviousObj.left = textOnCanvas.left;
        coordinatesOfPreviousObj.scaleX = textOnCanvas.scaleX;
        coordinatesOfPreviousObj.scaleY = textOnCanvas.scaleY;
    });
}