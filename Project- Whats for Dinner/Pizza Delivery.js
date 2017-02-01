// Pizza Delivery

background(39, 140, 186); // background


//Pizza Box

fill(223, 230, 184);

quad(60,80,55,108,359,106,340,80); //pbox connector between top bottom

quad(8,400,54,100,343,100,396,400);  //pizza box bottom
quad(60,80,50,0,360,0,340,80); //pbox top

quad(60,80,50,0,30,0,45,90); //pizzabox top siderail left
quad(340,80,360,0,385,0,360,90); //pizzabox top siderail right

quad(8,400,54,100,42,83,-10,400);  //pizza box siderail bottom left
quad(417,431,356,83,343,100,396,400); //pizza box siderail bottom right

quad(89,102,54,100,42,83,94,83);  //pizza box inner rail left
quad(343,102,295,102,294,83,355,83);  //pizza box inner rail right


//Pizza slices

// size of peperoni
var pepsize = 25;

var x = 215;
var y = 102;

// pizza-1 (pizza to the right)
fill(255, 196, 0); // pizza-1 fill
triangle(x,y,x-58,y+215,x+119,y+66); // pizza-1 itself

//var x = 215;
//var y = 102;

// peperoni on pizza-1
fill(168, 24, 24); // fill for peperoni on pizza-1
ellipse(x-27,y+177,pepsize,pepsize);
ellipse(x-23,236,pepsize,pepsize);
ellipse(x-2,170,pepsize,pepsize);
ellipse(x+38,179,pepsize,pepsize);
ellipse(x+4,209,pepsize,pepsize);
ellipse(x+71,190,pepsize,pepsize);
ellipse(x+33,224,pepsize,pepsize);
ellipse(x+11,248,pepsize,pepsize);
ellipse(x+23,150,pepsize,pepsize);

rotate(27.5); // angle of rotation for crust on pizza-1

var x2 = 137;
var y2 = 51;

// pizza-2 (pizza to the left)
fill(255, 196, 0); // pizza-2 fill
triangle(x2,y2,284,206,239,-9); // pizza-2 itself

// crust for pizza-2
fill(189, 143, 87); // fill for crust on pizza-2
rotate(-29.9); // angle of rotation for crust on pizza-2
rect(93,109,118,15); // the crust itself for pizza-2

// peperoni on pizza-2
fill(168, 24, 24); // fill for peperoni on pizza-2
ellipse(145,279,pepsize,pepsize);
ellipse(145,141,pepsize,pepsize);
ellipse(129,170,pepsize,pepsize);
ellipse(135,207,pepsize,pepsize);
ellipse(168,190,pepsize,pepsize);
ellipse(160,224,pepsize,pepsize);
ellipse(145,248,pepsize,pepsize);
ellipse(179,150,pepsize,pepsize);


//73 logo
fill(21, 87, 217);
strokeWeight(3);
stroke(237, 218, 7);
ellipse(183,364,249,72);

fill(247, 216, 13);
textFont("Arial", 50);
text("Pizza 73", 87,381);
