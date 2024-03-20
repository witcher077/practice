let direction={x:0,y:0};
const foodSound=new Audio('food.mp3');
const gameOverSound=new Audio('gameover.mp3');
const moveSound=new Audio('move.mp3');
const musicSound=new Audio('music.mp3');
let speed=2;
let lastpaintTime=0;
let snakeArr=[{x:13,y:15}];
food={x:12,y:13};

// Game functions
function main(cTime){
    window.requestAnimationFrame(main);
    if((cTime-lastpaintTime)/1000<1/speed)
    {
    return;
    }
    lastpaintTime=cTime;
    
    gameEngine();
}

function gameEngine(){
     //Updating snake array & Food
    

     //Display the snake and food
    
    //Display the sneak
     board.innerHtml="";
     snakeArr.forEach((e,i)=>{
        snakeElement=document.createElement("div");
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
       
        if(i===0){
            snakeElement.classList.add('head');
        }

        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
     });

     //Display the food
        foodElement=document.createElement("div");
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
}


// Logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{

    inputDir={x:0,y:1} //start the game

    moveSound.play();
    switch(e.key){
        case "ArrowUp": 
          console.log("ArrowUp");
          inputDir.x=0;
          inputDir.y=-1;
          break;

        case "ArrowDown": 
          console.log("ArrowDown");
          inputDir.x=0;
          inputDir.y=1;
          break;

        case "ArrowLeft": 
          console.log("ArrowLeft");
          inputDir.x=-1;
          inputDir.y=0;
          break;

        case "ArrowRight": 
          console.log("ArrowRight");
          inputDir.x=1;
          inputDir.y=0;
          break;

        default:
          break;
    }
})