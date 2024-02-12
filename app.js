
let textoIngresado;
let textoResultante;

function limpiarCaja(){
    document.getElementById('idTextoEnc').value='';
}

function limpiarResultado(){
    document.getElementById('idTextoRes').value='';
}

function Encriptar(){
    let mensaje;
    mensaje=document.getElementById('idTextoEnc').value;
    let largo=mensaje.length;
    if (largo!=0) {
        let nuevoMensaje='';
        let contador=0;
        while (contador<largo){
            let letra=mensaje[contador];
            if (letra=='a'){
                nuevoMensaje=nuevoMensaje+'ai';
                contador++;
            } else if (letra=='e'){
                nuevoMensaje=nuevoMensaje+'enter';
                contador++;
            } else if (letra=='i'){
                nuevoMensaje=nuevoMensaje+'imes';
                contador++;
            } else if (letra=='o'){
                 nuevoMensaje=nuevoMensaje+'ober';
                 contador++;
            } else if (letra=='u'){
                nuevoMensaje=nuevoMensaje+'ufat';
                contador++;
            } else {
                nuevoMensaje=nuevoMensaje+letra;
                contador++; 
            }
        } 
        document.getElementById('idTextoRes').value=nuevoMensaje;
        document.getElementById('idCopiar').removeAttribute('disabled');
        limpiarCaja(); 
        return 0; 
    }
}

function Desencriptar(){
    let mensaje;
    mensaje=document.getElementById('idTextoEnc').value;
    let largo=mensaje.length;
    if (largo!=0){
        let nuevoMensaje='';
        let contador=0;
        while (contador<largo){
            let letra=mensaje[contador];
            if (letra=='a'){
                if (mensaje[contador+1]=='i'){
                    nuevoMensaje=nuevoMensaje+'a';
                    contador=contador+2;
                }
            } else if (letra=='e'){
                if (mensaje[contador+1]=='n'){
                    if (mensaje[contador+2]=='t'){
                        if (mensaje[contador+3]=='e'){
                            if (mensaje[constructor+4]=='r'){
                                nuevoMensaje=nuevoMensaje+'e';
                                contador=contador+5;
                            }
                        }
                    }
                }
            } else if (letra=='i'){
                if (mensaje[contador+1]=='m'){
                    if (mensaje[contador+2]=='e'){
                        if (mensaje[contador+3]=='s'){
                            nuevoMensaje=nuevoMensaje+'i';
                            contador=contador+4;
                        }
                    }
                }
            } else if (letra=='o'){
                if (mensaje[contador+1]=='b'){
                    if (mensaje[contador+2]=='e'){
                        if (mensaje[contador+3]=='r'){
                            nuevoMensaje=nuevoMensaje+'o';
                            contador=contador+4;
                        }
                    }
                }
            } else if (letra=='u'){
                 if (mensaje[contador+1]=='f'){
                    if (mensaje[contador+2]=='a'){
                        if (mensaje[contador+3]=='t'){
                            nuevoMensaje=nuevoMensaje+'u';
                            contador=contador+4;
                        }
                    }
                 }
            } else {
                nuevoMensaje=nuevoMensaje+letra;
                contador++;
            }
        }
        document.getElementById('idTextoRes').value=nuevoMensaje;
        document.getElementById('idCopiar').removeAttribute('disabled');
        limpiarCaja(); 
        return 0;
    }     
}

function Copiar(){
    navigator.clipboard.writeText(document.getElementById('idTextoRes').value);
    document.getElementById('idCopiar').setAttribute('disabled','true');
    limpiarResultado();
    return 0;
}

