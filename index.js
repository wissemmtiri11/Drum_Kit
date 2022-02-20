var Mnayek = false;
document.querySelector('.w').addEventListener("click",() => {
        var audio = new Audio("sounds/crash.mp3");
        //audio.loop = true;
        //audio.playbackRate = 1.5;
        audio.play();
    }
);
document.querySelector('.a').addEventListener("click",() => {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
);
document.querySelector('.s').addEventListener("click",() => {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
);
document.querySelector('.d').addEventListener("click",() => {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
);
document.querySelector('.j').addEventListener("click",() => {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
);
document.querySelector('.k').addEventListener("click",() => {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
);
document.querySelector('.l').addEventListener("click",() => {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
);
document.getElementsByClassName('Yes')[0].addEventListener("click",() => {
        var audio = new Audio("sounds/ryt_ki_tamaa.mp3");
        var audio = new Audio("sounds/Clap.mp3");
    audio.play();
});
document.getElementsByClassName('Claim')[0].addEventListener("click",() => {
    var audio = new Audio("sounds/ryt_ki_tamaa.mp3");
    audio.play();
});
document.getElementsByClassName('No')[0].addEventListener("click",() => {
    var audio = new Audio("sounds/ezebi.mp3");
    audio.play();
    setTimeout(()=>{
        Mnayek = true;
        document.querySelector('label').innerText = "Merci aal feedback w hedhy hdeya 🎁";
        document.getElementsByClassName('Claim')[0].classList.remove('disappear');
        document.getElementsByClassName('Yes')[0].classList.add('disappear');
        document.getElementsByClassName('No')[0].classList.add('disappear');
    },3000);
});
