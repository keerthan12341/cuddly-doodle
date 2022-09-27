// Create a variable canvas
var canvas= new fabric.Canvas("myCanvas")

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

// Complete the function new_image() to add new image
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	// Use appropriate keycode to add red image
	if(keyPressed == 10) 
	{
		block_x=10
		add_image(red.jpg)
		console.log(r)
	}
	// Use appropriate1 keycode to add green image
	if(keyPressed == 310)
	{
		block_x=310
		add_image(green.jpg)
		console.log(g)


	}
	// Use appropriate keycode to add yellow image
	if(keyPressed == 89)
	{
		block_x=89
		add_image(yellow.jpg)
		console.log(y)
		

	}
	// Use appropriate keycode to add pink image
	if(keyPressed == 80)
	{
		block_x=80
		add_image(pink.jpg)
		console.log(r)	


	}
	// Use appropriate keycode to add blue image
	if(keyPressed == 66)
	{
		block_x=66
		add_image(blue.jpg)
		console.log(b)


	}
	
}

