var dog,sadDog,happyDog;

var feed, addFood;
var food, foodCount;

var database;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  food = new Food();

database = firebase.database();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog);

  if(food.Obj.getFoodStock()<=0){
foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }

  function addFoods(){
    foodS++;
    database.ref('/').update({
      Food:foodS
    })
  }

}


function getFoodStock(){
var foodCountRef = database.ref('foodStock');
foodCountRef.on("value", function(data){
  foodCount = data.val();
})
}

function updateFoodStock(state){
database.ref('/').update({
  playerCount:state
});
}

function deductFood(){
if(keyPressed(feed)){
  foodStock = foodStock-1;
}
}

function addFood(){
  if(keyPressed(addFood)){
    foodStock = foodStock++;
  }
}
