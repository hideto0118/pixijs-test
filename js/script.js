PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer(512, 512, {
  transparent: true,
  resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
  .add("github", "images/github.png")
  .load(setup)

var github;

function setup() {
  github = new PIXI.Sprite(
    PIXI.loader.resources["github"].texture
  );

  stage.addChild(github);

  animationLoop();
}

function animationLoop() {
  requestAnimationFrame(animationLoop);

  // image size
  github.scale.set(3, 3);
  // x location
  github.x = renderer.width / 2;
  // y location
  github.y = renderer.height /2;
  //setting the point to the center
  github.anchor.set(0.5, 0.5);

  github.rotaion += 0.01;
  github.pivot.set(200, 0);


  renderer.render(stage);
}