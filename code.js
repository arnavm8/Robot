var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var headColor = rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400));
var eyeColor = rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400));
var earColor = rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400));
var mouthColor = rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400));
var eyeSize = 50;
background("blue");
fill(earColor);
rect(315, 150, 50, 50);
rect(35, 150, 50, 50);
fill(headColor);
regularPolygon(200, 235, 6, 175);
fill(eyeColor);
ellipse(200, 135, eyeSize, eyeSize);
ellipse(275, 160, eyeSize, eyeSize);
ellipse(125, 160, eyeSize, eyeSize);
fill(rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400)));
ellipse(200, 145, 25, 25);
ellipse(275, 170, 25, 25);
ellipse(125, 170, 25, 25);
fill(mouthColor);
arc(200, 300, 125, 50, 0, 360);
fill(rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400)));
rect(130, 43, 10, 40);
rect(260, 43, 10, 40);
fill(rgb(randomNumber(1, 400), randomNumber(1, 400), randomNumber(1, 400)));
rect(125, 40, 20, 20);
rect(255, 40, 20, 20);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
