let backgroudCanvas = new fabric.Canvas('layer-0')
    .setDimensions({ width: '100%', height: '', backgroud: 'black', }, { cssOnly: true });

backgroudCanvas.add(
    new fabric.Rect({
        top: 0,
        left: 0,
        width: backgroudCanvas.width,
        height: backgroudCanvas.height,
        fill: '#000'
    })
);

function generate() {
    backgroudCanvas.add(
        new fabric.Text(urdu, { fontFamily: 'Jameel Khushkhati', }).set({
            top: coordinatesOfPreviousObj.top,
            left: coordinatesOfPreviousObj.left,
            scaleX: coordinatesOfPreviousObj.scaleX,
            scaleY: coordinatesOfPreviousObj.scaleY,
        })
    );

    download(backgroudCanvas.toDataURL('image/jpeg', 1.0), "hyphensaad.jpeg");
}

document.getElementById('generate').addEventListener('click', generate);

// STACKOVERFLOW xD
function download(dataurl, filename) {
    let a = document.createElement("a");
    a.href = dataurl;
    a.setAttribute("download", filename);
    a.click();
}