
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".boton_copiar");

//Imagen


function encriptar(mensajeEncriptado){
  
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(mensajeEncriptado.includes(matrizCodigo[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return mensajeEncriptado;
}


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.style.backgroundImage="none"
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function desencriptar(mensajeDesencriptado){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++){
        if(mensajeDesencriptado.includes(matrizCodigo[i][0])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return mensajeDesencriptado;
}


function btnDesencriptar(){
    const textoDesencriptado= desencriptar(inputTexto.value);
    mensaje.style.backgroundImage="none";
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
}


function copiar(){
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = "";
    mensaje.style.backgroundImage="";

}

function borrar(){
    const mensaje = document.querySelector(".mensaje");
    mensaje.value ="";
    mensaje.style.backgroundImage="";
}



