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

let updateData = () =>{

    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }];      

  
    let [ users, clients, sales ] = data;


    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales;
    
 
    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;     


    let listOfElements = document.getElementsByClassName('text-end pt-1') ;

    let [ , second, third, fourth ] = listOfElements;
    
    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;       

};


let updateData2 = () => {

    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]    

       
let [ varA, varB, varC, varD ] = cambios;

let {valor_previo: valor_previoA, valor_actual: valor_actualA, mensaje_tiempo: mensaje_tiempoA} = varA;
let {valor_previo: valor_previoB, valor_actual: valor_actualB, mensaje_tiempo: mensaje_tiempoB} = varB;
let {valor_previo: valor_previoC, valor_actual: valor_actualC, mensaje_tiempo: mensaje_tiempoC} = varC;
let {valor_previo: valor_previoD, valor_actual: valor_actualD, mensaje_tiempo: mensaje_tiempoD} = varD;

let listofDiv =  document.getElementsByClassName('card-footer p-3') ;

//let [primero , second, third, fourth ] = listofDiv;

porcentA = (valor_actualA - valor_previoA)*100/valor_previoA; 
porcentB = (valor_actualB - valor_previoB)*100/valor_previoB;
porcentC = (valor_actualC - valor_previoC)*100/valor_previoC;
porcentD = (valor_actualD - valor_previoD)*100/valor_previoD;

let clase_cambio = '';

  if (porcentA > 0) {
      clase_cambio = 'text-success';
  } else {
      clase_cambio = 'text-danger';
 }
listofDiv[0].innerHTML = `<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> ${porcentA.toFixed(2)} </span> ${mensaje_tiempoA} </p>`


if (porcentB > 0) {
    clase_cambio = 'text-success';
} else {
    clase_cambio = 'text-danger';
}
listofDiv[1].innerHTML = `<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> ${porcentB.toFixed(2)} </span> ${mensaje_tiempoB} </p>`


if (porcentC > 0) {
    clase_cambio = 'text-success';
} else {
    clase_cambio = 'text-danger';
}
listofDiv[2].innerHTML = `<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> ${porcentC.toFixed(2)} </span> ${mensaje_tiempoC} </p>`


if (porcentD > 0) {
    clase_cambio = 'text-success';
} else {
    clase_cambio = 'text-danger';
}
listofDiv[3].innerHTML = `<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> ${porcentD.toFixed(2)} </span> ${mensaje_tiempoD} </p>`

};

runScripts();
modifyText();
updateData();
updateData2();