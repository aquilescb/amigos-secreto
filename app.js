// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
namerandom=[];
//Boton 
function agregarAmigo(){
    limpiarElemento('resultado');
    let nombre= document.getElementById('amigo').value;
    if (nombre==""){
        alert('El nombre es invalido, ingrese un nombre');
        return;
    }
    else{
        namerandom.push(nombre);
        actualizarAmigo(nombre);
        limpiarCaja();
    }
}
function actualizarAmigo(nombre){
    let listadoAmigos= document.getElementById('listaAmigos');
    let elemento=document.createElement('li');
    elemento.textContent=nombre;
    listadoAmigos.appendChild(elemento);
    limpiarCaja();
}
//Boton 
function sortearAmigo(){
    let resultado=document.getElementById('resultado');
    let elemento=document.createElement('li');
    limpiarElemento('listaAmigos');
    if (namerandom.length==0){
        limpiarElemento('resultado');
        elemento.textContent='Por favor, ingresa un nombre';
        resultado.appendChild(elemento);
    }
    else{
        let ganador=namerandom[Math.floor(Math.random()*namerandom.length)];
        elemento.textContent=`El amigo secreto es: ${ganador}`;
        resultado.appendChild(elemento);
        namerandom=[];
    }
}
function limpiarCaja(){
    document.querySelector('#amigo').value= '';
}
function limpiarElemento(id) {
    document.getElementById(id).innerHTML = '';
}

