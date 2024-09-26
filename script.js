// Write your code here

// solution for initial problem and first stretch 

// const lightbulb1 = document.querySelector(`#lightbulb1`);
// const lightbulb2 = document.querySelector(`#lightbulb2`);
// const lightbulb3 = document.querySelector(`#lightbulb3`);
// const subtitle = document.querySelector(`.subtitle`);

// let count = 0;

// lightbulb1.addEventListener(`click`, function(){
//     count++;
//     if (count === 1){
//         subtitle.innerHTML = `You've clicked the lights ${count} time`;
//         lightbulb1.classList.toggle(`active`);
//     } else{
//         subtitle.innerHTML = `You've clicked the lights ${count} times`;
//         lightbulb1.classList.toggle(`active`);
//     }
// });

// lightbulb2.addEventListener(`click`, function(){
//     count++;
//     if (count === 1){
//         subtitle.innerHTML = `You've clicked the lights ${count} time`;
//         lightbulb2.classList.toggle(`active`);
//     } else{
//         subtitle.innerHTML = `You've clicked the lights ${count} times`;
//         lightbulb2.classList.toggle(`active`);
//     }
// });

// lightbulb3.addEventListener(`click`, function(){
//     count++;
//     if (count === 1){
//         subtitle.innerHTML = `You've clicked the lights ${count} time`;
//         lightbulb3.classList.toggle(`active`);
//     } else{
//         subtitle.innerHTML = `You've clicked the lights ${count} times`;
//         lightbulb3.classList.toggle(`active`);
//     }
// });


// Solution to stretch problem two
// removed active class from lightbulb1 in index.html for this exercise
// Instead of `click`, `mouseenter` and `mouseleave` trigger the event when mouse enteres and leaves the object

const lightbulb1 = document.querySelector(`#lightbulb1`);
const lightbulb2 = document.querySelector(`#lightbulb2`);
const lightbulb3 = document.querySelector(`#lightbulb3`);
const subtitle = document.querySelector(`.subtitle`);

let count = 0;

lightbulb1.addEventListener((`mouseenter`), function(){
    count++;
    if (count === 1){
        subtitle.innerHTML = `You've clicked the lights ${count} time`;
        lightbulb1.classList.toggle(`active`);
    } else{
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
        lightbulb1.classList.toggle(`active`);
    }
});

lightbulb1.addEventListener((`mouseleave`), function(){
    if (count === 1){
        subtitle.innerHTML = `You've clicked the lights ${count} time`;
        lightbulb1.classList.toggle(`active`);
    } else{
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
        lightbulb1.classList.toggle(`active`);
    }
});

lightbulb2.addEventListener((`mouseenter`), function(){
    count++;
    if (count === 1){
        subtitle.innerHTML = `You've clicked the lights ${count} time`;
        lightbulb2.classList.toggle(`active`);
    } else{
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
        lightbulb2.classList.toggle(`active`);
    }
});

lightbulb2.addEventListener((`mouseleave`), function(){
    if (count === 1){
        subtitle.innerHTML = `You've clicked the lights ${count} time`;
        lightbulb2.classList.toggle(`active`);
    } else{
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
        lightbulb2.classList.toggle(`active`);
    }
});

lightbulb3.addEventListener((`mouseenter`), function(){
    count++;
    if (count === 1){
        subtitle.innerHTML = `You've clicked the lights ${count} time`;
        lightbulb3.classList.toggle(`active`);
    } else{
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
        lightbulb3.classList.toggle(`active`);
    }
});

lightbulb3.addEventListener((`mouseleave`), function(){
    if (count === 1){
        subtitle.innerHTML = `You've clicked the lights ${count} time`;
        lightbulb3.classList.toggle(`active`);
    } else{
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
        lightbulb3.classList.toggle(`active`);
    }
});
