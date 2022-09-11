/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */


var ingresarmensaje=document.querySelector(".ingresarmensaje");
var mensajecopiar= document.querySelector(".copiarMensaje");

const letraEncriptar=[["e","enter"], ["i", "imes"], ["a", "ai"],
["o", "ober"], ["u", "ufat"]];


function buttonEncriptar(){

    var textoEncriptar= encriptar(ingresarmensaje.value);
    
    if(ingresarmensaje.value == ""){

        alert("no se puede Encriptar, la casilla esta vacia..");


    }else{
        mensajecopiar.value= textoEncriptar;
        mensajecopiar.style.backgroundImage= "none";
        //mensajecopiar.style.display= "none";
        ingresarmensaje.value="";
    }
    

    
}   

function encriptar(palabraEncriptada){
    palabraEncriptada= palabraEncriptada.toLowerCase();

    for(var i=0; i < letraEncriptar.length; i++){

        if(palabraEncriptada.includes(letraEncriptar[i][0])){

            palabraEncriptada= palabraEncriptada.replaceAll(letraEncriptar[i][0],
                letraEncriptar[i][1]) //este sirve para que tome la primera bocal y la ultima de la palabra


        }


    }

    return palabraEncriptada;
}


function desencriptar(desencriptarPalabra){

    desencriptarPalabra= desencriptarPalabra.toLowerCase();

    for(var i=0; i < letraEncriptar.length; i++){

        if(desencriptarPalabra.includes(letraEncriptar[i][1])){

            desencriptarPalabra= desencriptarPalabra.replaceAll(letraEncriptar[i][1],
                letraEncriptar[i][0]) //este sirve para que tome la primera bocal y la ultima de la palabra


        }


    }

    return desencriptarPalabra;

}

function btnDesencriptar(){

    var textoDesencriptar= desencriptar(mensajecopiar.value);
    
    if(mensajecopiar.value == ""){

        alert("no se puede desencriptar, la casilla esta vacia..");

        
    }else{

        ingresarmensaje.value= textoDesencriptar;
        mensajecopiar.value="";
        mensajecopiar.style.backgroundImage= "block";
       // mostrarImagen();
        


    }

    function mostrarImagen(){
        var imagen= document.style.backgroundImage= url("imagenes/Muñeco.png");
        if(imagen.style.backgroundImage === "none"){
            imagen.style.backgroundImage= "block";

        }else{
            imagen.style.backgroundImage="none";
        }
    }
    
}

function btnCopiar(){

    var botonCopiar= desencriptar(mensajecopiar.value);
    if(mensajecopiar.value == "" ){

        alert("no se puede copiar, la casilla esta vacia..");

    }else{

        mensajecopiar.select();
        //navigator.clipboard.writeText(mensajecopiar.value);
        //mensajecopiar.value = "";
        document.execCommand("copy");
        alert("Texto Copiado");

       

       


    }
    
    

}
