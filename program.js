var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 500,
    height: 500
});// then create layer
var layer = new Konva.Layer();
// create our shape
var circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();
var triangle = new Konva.Shape({
    sceneFunc: function(context) {
        context.beginPath();
        context.moveTo(20, 50);
        context.lineTo(220, 80);
        context.quadraticCurveTo(150, 100, 260, 170);
        context.closePath();

        // special Konva.js method
        context.fillStrokeShape(this);
    },
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4
});
layer.add(triangle)
layer.draw()
var pentagon = new Konva.RegularPolygon({
    x: stage.width() / 2,
    y: stage.height() / 2,
    sides: 5,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 20,
    shadowOffsetY : 25,
    shadowBlur : 40,
    opacity : 0.5
});
layer.add(pentagon)
layer.draw()
circle.draggable(true)
circle.on('mouseout touchend', function() {
    console.log('user input');
});

circle.on('xChange', function() {
    console.log('position change');
});

circle.on('dragend', function() {
    console.log('drag stopped');
});
