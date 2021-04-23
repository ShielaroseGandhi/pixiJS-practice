let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type);

let Application = PIXI.Application,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
//See all options at http://pixijs.download/release/docs/PIXI.Application.html
let app = new Application();
//
// let app = new PIXI.Application({
//         width: 256,         // default: 800
//         height: 256,        // default: 600
//         antialias: true,    // default: false
//         transparent: false, // default: false
//         resolution: 1,       // default: 1
//     }
// );

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//Convert images to textures
//load an image and run the `setup` function when it's done
app.loader
    .add("images/lollipop.png")
    .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

    //Create the sprite
    let lolli = new Sprite(
        app.loader.resources["images/lollipop.png"].texture
    );

    // Set position
    // lolli.x=320;
    // lolli.y=200;
    lolli.position.set(320,200);

    //Set width and height
    // lolli.width = 80;
    // lolli.height = 100;

    //Scale proportionately
    lolli.scale.set(0.8, 0.8);

    //Rotate
    // lolli.anchor.x = 0.5;
    // lolli.anchor.y = 0.5;
    // lolli.rotation = 1;

    //Start the game loop by adding the `gameLoop` function to
    //Pixi's `ticker` and providing it with a `delta` argument.
    // app.ticker.add(delta => gameLoop(delta));

    function gameLoop(delta){
        //Move the cat 1 pixel
        lolli.x += 1;
    }



    //Add the sprite to the stage
    app.stage.addChild(lolli);

}
