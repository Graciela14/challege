const textarea = document.querySelector(".datos");
const mensaje = document.querySelector(".mensaje");
const caja = document.querySelector(".armado");
const frase2 = document.querySelector(".frase2");
const frase1 = document.querySelector(".frase1");
const botonCopiar = document.querySelector("#copiar");

function encriptar(stringEncriptada) {
  let matrizdecifrado = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
  console.table(matrizdecifrado);
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizdecifrado.length; i++) {
    if (stringEncriptada.includes(matrizdecifrado[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizdecifrado[i][0], matrizdecifrado[i][1]);
    }
  }

  return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
  let matrizdecifrado = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
  console.table(matrizdecifrado);
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizdecifrado.length; i++) {
    if (stringDesencriptada.includes(matrizdecifrado[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizdecifrado[i][1], matrizdecifrado[i][0]);
    }
  }

  return stringDesencriptada;
}

function cifrar() {
  frase1.innerHTML = "";
  frase2.innerHTML = "";
  const textocifrado = encriptar(textarea.value);

  if (textocifrado === "") {
    frase1.innerHTML = "Ningún mensaje fue encontrado";
    frase2.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
  } else {
    mensaje.value = textocifrado;
    mensaje.innerHTML = textocifrado;
    textarea.value = "";
    caja.style.display = 'none';
    botonCopiar.style.display = "block";
  }
}

function descifrar() {
  frase1.innerHTML = "";
  frase2.innerHTML = "";
  const textodescifrado = desencriptar(textarea.value);
  if (textodescifrado === "") {
    frase1.innerHTML = "Ningún mensaje fue encontrado";
    frase2.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
  } else {
    mensaje.value = textodescifrado;
    mensaje.innerHTML = textodescifrado;
    textarea.value = "";
    caja.style.display = 'none';
    botonCopiar.style.display = "block";
  }
}

function copiar() {
  const seleccion = window.getSelection();
  const rango = document.createRange();
  rango.selectNodeContents(mensaje);
  seleccion.removeAllRanges();
  seleccion.addRange(rango);
  document.execCommand("copy");
  alert("Mensaje copiado al portapapeles");
  seleccion.removeAllRanges();
}

botonCopiar.addEventListener("click", copiar);
