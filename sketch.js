//Create variables here
var dog,dogImg;
var happyDog,happyDogImg;
var database;
var foods,foodStock;
var foodObj;
var fedTime,lastfed;

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
 // happyDogImg=loadImage("images/dogImg1.png");

}

function setup() {
  database = firebase.database();
  
	createCanvas(500,500);
  
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  dog = createSprite(250,250,50,50);
  dog.addImage("dogImg");

}


function draw() {  
 background(46,139,87);

 
 drawSprites();
}