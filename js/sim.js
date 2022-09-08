let h1 = document.getElementById("tituloUno");
h1.textContent = "¿Cuál es tu fortuna?";

let h2 = document.getElementById("tituloDos");
h2.textContent = "Elige tu signo y Madame LeFortune te contará qué te espera ";

let p = document.getElementById ("disclaimer")
p.textContent = "Disclaimer: Este sitio es sólo diversión, ningún signo del zodíaco fue maltratado durante su construcción."

let arraySignos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, piscis];
let arrayHoroscopo =[horoscopoAries, horoscopoTauro, horoscopoGeminis, horoscopoCancer, horoscopoLeo, horoscopoVirgo, horoscopoLibra, horoscopoEscorpio, horoscopoSagitario, horoscopoCarpricornio, horoscopoAcuario, horocopoPiscis];


function signoCaja(horoscopoElegido, destino){
  let {signo, horoscopo} = horoscopoElegido;
  let {elemento, fechas, rasgos} = destino;
  let stn = document.getElementById("signo");
  stn.innerHTML= ''
  let img = document.createElement("img");
  img.setAttribute("src", horoscopoElegido.img);

    let ctn = document.createElement("div");
    ctn.className = 'divHoroscopo'
    ctn.innerHTML=`<p>Signo: ${signo}</p>
                    <p>Fortuna: ${horoscopo}</p>
                    <p>Elemento: ${elemento}</p>
                    <p>Son de este signo los nacidos entre: ${fechas}</p>
                    <p>Sus principales características son: ${rasgos}</p>
                    `
    ctn.appendChild(img);

    stn.appendChild(ctn);
  }

let seleccionar = document.getElementById("seleccionar");  

  seleccionar.addEventListener("change", () => {

    horoscopoElegido = arrayHoroscopo.find(item => item.signo == seleccionar.value)
    destino = arraySignos.find(dest=> dest.nombre == seleccionar.value)
    signoCaja(horoscopoElegido,destino);
    
  });

  //captura de suscripción

  let btnSuscripcion = document.getElementById("btnSusc");
  let mensajeAlerta = document.getElementById("alerta");
  let mensajeExito =document.getElementById("exito");
  let nombreForm = "";
  let mailForm ="";
  let signoForm ="";

  btnSuscripcion.addEventListener("click",()=>{
    
     validar_formulario() ?
        ( guardar_usuario(),
          resetear_formulario(),
          Swal.fire({
            title: "Gracias por suscribirte",
            background: '#2e2e30',
            color: '#e0c389',
            confirmButtonColor:'#e0c389',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }

          }))
        :
          Swal.fire({
            background: '#2e2e30',
            color: '#e0c389',
            confirmButtonColor:'#e0c389',
            icon: 'warning',
            title: 'Oops...',
            text: 'Tenés que completar todos los datos'
          })
})

  function resetear_formulario(){

    document.getElementById("exampleFormControlInput2").value = "";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("exampleFormControlInput3").value = "";
}


function validar_formulario(){
  nombreForm = document.getElementById("exampleFormControlInput2").value
  mailForm = document.getElementById("exampleFormControlInput1").value
  signoForm =document.getElementById("exampleFormControlInput3").value

  if (!nombreForm || !mailForm || !signoForm){
      return false;
  }
  return true;
}

let suscriptores= []

  suscriptores.push(suscriptorUno);
  suscriptores.push(suscriptorDos);
  
  function guardar_usuario(){
  
      suscriptores.push({nombre: nombreForm, mail: mailForm, signo:signoForm});
      localStorage.setItem("listaUsuarios", JSON.stringify(suscriptores));
  
  }
  let btnSuscriptores = document.getElementById("btnConsul")
  let lista = document.getElementById("listadoSuscriptores");
  
  btnSuscriptores.addEventListener("click",()=>{
    mostrar_lista(suscriptores);
  })
  
  function consultar_usuarios(arrayUsuarios){
    let ul = document.createElement("ul")
    lista.appendChild (ul);
    arrayUsuarios.forEach(suscriptores =>{
      let{nombre, signo} = suscriptores;
      let li = document.createElement("li");
      li.innerHTML = `<p>${nombre} - ${signo}</p>`
      ul.appendChild(li);
    })
  }
  
  function mostrar_lista(){
  
        let arrayUsuarios= JSON.parse(localStorage.getItem("listaUsuarios")) || []
  
        consultar_usuarios(arrayUsuarios);
  
    }


let listadoSignoFamosas = document.getElementById("listadoFamoses")
let consultaFamose = document.getElementById("btnFamose");
consultaFamose.addEventListener("click", ()=>{
         fetch('../json/famoses.js')
        .then( (data) =>{
            return data.json()
          })
          .then( (resp) => {
            resp.forEach((el) =>{
              let list =document.createElement("li");
              list.innerHTML = `${el.signo} - ${el.famosa}`;
              listadoSignoFamosas.appendChild(list);
            })
          })
      })


