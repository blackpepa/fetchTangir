class signoHoroscopo{
    constructor(id, img,signo, horoscopo){
        this.id = id;
        this.signo = signo;
        this.img =img;
        this.horoscopo = horoscopo;

}
}


//Array de horoscopo

let horoscopoAries = new signoHoroscopo (1, "./img/aries.png","Aries", "Madame LeFortune dice que comerás buen jamón crudo.");
let horoscopoTauro = new signoHoroscopo (2, "./img/tauro.png","Tauro", "Madame LeFortune dice que tu inodoro quedará reluciente.");
let horoscopoGeminis = new signoHoroscopo (3, "./img/geminis.png","Géminis", "Madame LeFortune dice que llamarás a tu mamá.");
let horoscopoCancer = new signoHoroscopo (4, "./img/cancer.png","Cáncer", "Madame LeFortune dice que club día te dará un descuento en papas fritas.");
let horoscopoLeo = new signoHoroscopo (5, "./img/leo.png","Leo", "Madame LeFortune dice que tomarás sol al mediodía.");
let horoscopoVirgo =  new signoHoroscopo (6, "./img/virgo.png","Virgo", "Madame LeFortune dice que te quedarás sin papel higiénico.");
let horoscopoLibra = new signoHoroscopo (7, "./img/libra.png","Libra", "Madame LeFortune dice que ese jean te volverá a entrar.");
let horoscopoEscorpio = new signoHoroscopo (8, "./img/escorpio.png","Escorpio", "Madame LeFortune dice que cantarás todo el día una canción de Arjona. ");
let horoscopoSagitario = new signoHoroscopo (9, "./img/sagitario.png","Sagitario", "Madame LeFortune dice que tendrás que correr el bondi.");
let horoscopoCarpricornio = new signoHoroscopo (10, "./img/capricornio.png", "Capricornio", "Madame LeFortune dice que pisarás caca de perro.");
let horoscopoAcuario= new signoHoroscopo (11, "./img/acuario.png","Acuario", "Madame LeFortune dice que te caerá mal ese sushi.");
let horocopoPiscis= new signoHoroscopo (12, "./img/piscis.png","Piscis", "Madame LeFortune dice que seguirás igual de hippie.");

//Objeto características de cada signo

class signoCaracteristicas {

    constructor (nombre,elemento,fechas,rasgos){
        this.nombre = nombre;
        this.elemento = elemento;
        this.fechas = fechas;
        this.rasgos = rasgos;
    } 
   
}

//Arrays de características de cada signo

let aries= new signoCaracteristicas ("Aries","Fuego", "el 21 de marzo y el 20 de abril.", "cabrones, tensos y les gusta el helado de menta granizada.");
let tauro= new signoCaracteristicas ("Tauro","Tierra", "el 21 de abril y el 21 de mayo." , "anfitriones, dormilones y fanáticos de Buffy la Cazavampiros.");
let geminis = new signoCaracteristicas ("Géminis", "Aire", "el 22 de mayo y el 20 de junio.", "dubitativos, charlatanes y amantes de los perros salchicha");
let cancer = new signoCaracteristicas ("Cáncer", "Agua","el 21 de junio y el 20 de julio.", "caseros, leales y coleccionistas de pitutos.");
let leo = new signoCaracteristicas ("Leo", "Fuego", "el 22 de julio y el 20 de agosto.", "egolatras, amigueros y organizadores de previas.");
let virgo = new signoCaracteristicas ("Virgo", "Tierra","el 21 de agosto y el 21 de septiembre.", "metódicos, ordenados y adoradores del cif.");
let libra = new signoCaracteristicas ("Libra", "Aire", "el 22 de septiembre y el 21 de octubre.", "colgados, justos y lectores de Gaturro.");
let escorpio = new signoCaracteristicas ("Escorpio", "Agua", "el 22 de octubre y el 21 de noviembre.", "oscuros, solitarios y fundamentalistas del aire acondicionado.");
let sagitario = new signoCaracteristicas ("Sagitario", "Fuego","el 22 de noviembre y el 21 de diciembre.", "viajeros, inquietos y conocedores de buenos vinos.");
let capricornio = new signoCaracteristicas ("Capricornio", "Tierra","el 22 de diciembre y el 20 de enero.", "obstinados, obsesivos y fans de la picada.");
let acuario = new signoCaracteristicas ("Acuario", "Aire", "el 21 de enero y el 20 de febrero.", "alocados, temperamentales y amantes de la radio Aspen.");
let piscis = new signoCaracteristicas ("Piscis", "Agua", "el 21 de febrero y el 20 de marzo.", "sensibles, llorones y grandes acróbatas.");


//Objeto suscriptor
class suscriptor{

    constructor (new_suscriptor){
        this.nombre = new_suscriptor.nombre;
        this.email = new_suscriptor.mail;
        this.signo = new_suscriptor.signo;
    } 
   
}

let suscriptorUno = new suscriptor({nombre:"Juan", mail:"juan@juan.com", signo:"Libra"});
let suscriptorDos = new suscriptor({nombre:"María", mail:"pechugaslarou@hotmail.com", signo:"Aries"});

