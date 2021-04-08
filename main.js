function printTime() {
    var x = new Date();

    var day = x.getDate()
    diaSemana = x.getDay(),
	month = x.getMonth(),
	year = x.getFullYear(),
    fechaActual = document.getElementById("fecha"),

    hour = (x.getHours()<10 ? "0":"") + x.getHours(),
    min = (x.getMinutes()<10 ? "0":"") + x.getMinutes(),
    sec = (x.getSeconds()<10 ? "0":"") + x.getSeconds(),
    horaActual = document.getElementById("hora");

    horaActual.innerHTML = hour + ":" + min +":" + sec;

    var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    var mesActual = meses[month];
    var diaActual = dias[diaSemana];
    fechaActual = document.getElementById("fecha");
    fechaActual.innerHTML = `${diaActual} ${day} de ${mesActual} del ${year}`;
}
setInterval(printTime,1000);

