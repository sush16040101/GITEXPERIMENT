const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ball = Bodies.circle(200,100,20,20);
    World.add(world,ball);
console.log(ball)
}

function draw(){
    background(0);

    ellipseMode(RADIUS);
    ellipse(200, 200, 20, 20);
}
