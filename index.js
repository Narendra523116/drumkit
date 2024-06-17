document.addEventListener("keypress", function(event){
    let c = event.key;

    switch(c){
        case 'w' :{
            var song = new Audio("sounds/tom-0.mp3");
            song.play();
            break;
        }

        case 'a' :{
            var song = new Audio("sounds/tom-1.mp3");
            song.play();
            break;
        }

        case 's' :{
            var song = new Audio("sounds/tom-2.mp3");
            song.play();
            break;
        }

        case 'd' :{
            var song = new Audio("sounds/tom-3.mp3");
            song.play();
            break;
        }

        case 'j' :{
            var song = new Audio("sounds/tom-4.mp3");
            song.play();
        }

        case 'k' :{
            var song = new Audio("sounds/tom-5.mp3");
            song.play();
            break;
        }

        case 'l' :{
            var song = new Audio("sounds/tom-6.mp3");
            song.play();
            break;
        }
    }
})


var numberOfButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        switch(i){
            case 0 :{
                var song = new Audio("sounds/tom-0.mp3");
                song.play();
                break;
            }

            case 1 :{
                var song = new Audio("sounds/tom-1.mp3");
                song.play();
                break;
            }

            case 2 :{
                var song = new Audio("sounds/tom-2.mp3");
                song.play();
                break;
            }

            case 3 :{
                var song = new Audio("sounds/tom-3.mp3");
                song.play();
                break;
            }

            case 4 :{
                var song = new Audio("sounds/tom-4.mp3");
                song.play();
                break;
            }

            case 5 :{
                var song = new Audio("sounds/tom-5.mp3");
                song.play();
                break;
            }

            case 6 :{
                var song = new Audio("sounds/tom-6.mp3");
                song.play();
                break;
            }

            
        }
    })
}




