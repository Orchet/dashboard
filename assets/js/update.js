let runScripts = () => {

    let chart_bars = document.getElementById("chart-bars");
    console.log(chart_bars);

    let icons = document.getElementsByTagName("i");
    console.log(icons);

    let cards = document.getElementsByClassName("card");
    console.log(cards);
};


let modifyText = () => {
    let listOfP = document.getElementsByTagName("p");
    let elementP = listOfP[3];
    elementP.innerHTML = "Dinero Actual";
};

runScripts();
modifyText();

