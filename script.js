const container = document.querySelector(".background-elements");


function createElement(type){

    const element = document.createElement("div");

    element.className = type;


    if(type === "heart"){

        const hearts = [
            "♡",
            "♥"
        ];

        element.innerHTML =
        hearts[Math.floor(Math.random()*hearts.length)];

        element.style.color =
        Math.random() > 0.5
        ? "#ffb6d0"
        : "#ffffff";

    }


    if(type === "flower"){

        const flowers = [
            "🌸",
            "🌼",
            "🌺"
        ];

        element.innerHTML =
        flowers[Math.floor(Math.random()*flowers.length)];

    }


    element.style.left =
    Math.random()*100 + "%";


    element.style.animationDuration =
    (8 + Math.random()*8) + "s";


    element.style.fontSize =
    (20 + Math.random()*25) + "px";


    container.appendChild(element);



    setTimeout(()=>{

        element.remove();

    },15000);

}



setInterval(()=>{

    createElement("heart");

},700);



setInterval(()=>{

    createElement("flower");

},2500);
