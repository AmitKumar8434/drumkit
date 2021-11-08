//Selectors

const keys =document.querySelectorAll('.key');


// Functions

function PlaySound(code){
    console.log(code);
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    if(!audio) return;
    audio.currentTime = 0 ;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return ;
    this.classList.remove('playing');
}


//Event Listeners 

window.addEventListener('keydown', function(e){
    PlaySound(e.keyCode);
});

keys.forEach(key => key.addEventListener('click', function(e){
    PlaySound(this.dataset.key);
} ));

keys.forEach(key => key.addEventListener('transitionend',removeTransition));
