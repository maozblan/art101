// index.js - purpose and description here
// Author: Your Name
// Date:

// code based off of https://css-tricks.com/using-requestanimationframe/
// and https://youtu.be/GFO_txvwK_c

var cat = {};
/** for every object in cat 
 * cat_num: {
 *      "canvas": canvas,
 *      "ctx": ctx,
 *      "img": img,
 *      "spriteSize": int,      // assuming square
 *      "canvasSize": int,
 *      "frameX": int,
 *      "currFrame": int,
 *      "staggerFrames": int,
 *      "totalFrames": int,
 *      "animID": animaiton_id
 * }
**/

// free code camp did it completely vanilla but jQuery made it easier
$(".ghost-cat-anim").each(function(index) {
    // set up canvas
    console.log($(this), index);
    let canvas = $(this)[0];
    canvas.width = canvas.height = 150;
    let ctx = canvas.getContext('2d');
    
    // make image
    const img = new Image();
    // finding image source, hardcoded :(
    let path = window.location.pathname;
    console.log("found path:", path);
    if (path.includes('/lab')) {
      path = '../';
    } else {
      path = '';
    }
    img.src = path + 'img/ghostCat_' + canvas.dataset.color + '_anim.png';
    console.log("using path:", img.src);

    // set up cats dictionary
    cat[index] = {
        "canvas": $(this)[0],
        "ctx": ctx,
        "img": img,
        "spriteSize": 150,
        "canvasSize": 150,
        "frameX": 0,
        "currFrame": 0,
        "staggerFrames": 10,
        "totalFrames": 12,
        "animID": null
    };

    // starting img
    img.onload = function() {
        cat[index].ctx.drawImage(img, 
            (Math.floor(cat[index].currFrame/cat[index].staggerFrames) % cat[index].totalFrames) * cat[index].spriteSize, 0,
            cat[index].spriteSize, cat[index].spriteSize, 0, 0, cat[index].canvasSize, cat[index].canvasSize);
        cat[index].currFrame++;
    }

    // set up animation loop
    $(this).mouseenter(function() {
        animationWrapper(index);
    });
    $(this).mouseleave(function() {
        cancelAnimationFrame(cat[index].animID);
    });
});

let ID;     // global for wrapper

// animation wrapper to input id
function animationWrapper(catID) {
    ID = catID;
    animate();
}

// animation function
function animate() {
    let c = cat[ID];

    c.ctx.clearRect(0, 0, c.canvasSize, c.canvasSize);
    let position = Math.floor(c.currFrame/c.staggerFrames) % c.totalFrames;
    c.frameX = c.spriteSize * position;
    c.ctx.drawImage(c.img, c.frameX, 0, c.spriteSize, c.spriteSize, 0, 0, c.canvasSize, c.canvasSize);

    c.currFrame++;

    c.animID = requestAnimationFrame(animate);
}
