const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBronken () {
    return lamp.src.indexOf ('quebrada') > -1 ;
}


function lampOn () {
    if ( !isLampBronken ()) {
    lamp.src = './img/ligada.jpg';
    }
  
}

function lampOff () {
    if ( !isLampBronken ()) {
        lamp.src = './img/desligada.jpg'; 
     }
 
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';   

}



turnOn.addEventListener ('click', lampOn) // Prestar a atenção no clique, ai vai ser disparado o evento// // Escuta o evento//
turnOff.addEventListener ('click' ,lampOff )// Prestar a atenção no clique, ai vai ser disparado o evento//
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);