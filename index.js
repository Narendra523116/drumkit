var buttons = document.querySelectorAll(".drum");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        makeSound(button.innerHTML) ;
        animate(button.innerHTML) ;
    }) ;

    button.addEventListener("keypress", function(event){
        makeSound(event.key) ;
        animate(event.key);
    })
}) ;


function animate(button){
    // if(button == 'w' || )

    var buttonElement = document.querySelector("."+button);

    if(buttonElement){
        buttonElement.classList.add("pressed");

        var delay = 200;

        setTimeout(function(){
            buttonElement.classList.remove("pressed");
        }, delay);
    }
    
}

function makeSound(key){
    switch(key){
        case 'w' :{
            var sound = new Audio("./sounds/tom-0.mp3");
            sound.play();
            break;
        }

        case 'a':{
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        }

        case 's':{
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        }

        case 'd':{
            var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;
        }

        case 'j':{
            var sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
            break;
        }

        case 'k':{
            var sound = new Audio("./sounds/tom-5.mp3");
            sound.play();
            break;
        }

        case 'l':{
            var sound = new Audio("./sounds/tom-6.mp3");
            sound.play();
            break;
        }
    }
}
