window.onload = function() {

  //define a variável data com o construtor
  var date = new Date();

  //define variáveis para hora, minute, e segundos e os armazena
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  //define tempo restante do dia
  var remHour = 24 - hours;
  var remMinute = 60 - minutes;
  var remSecond = 60 - seconds;

  //faz uma função de intervalo para executar a cada 1 seg.  
  setInterval(function() {

    if (remHour >= 10) {
      document.getElementById("hour").innerHTML = remHour;
    } else {
      document.getElementById("hour").innerHTML = '0' + remHour;
    }

    if (remSecond >= 10) {
      document.getElementById("second").innerHTML = remSecond;
    } else {
      document.getElementById("second").innerHTML = '0' + remSecond;
    }

    if (remMinute >= 10) {
      document.getElementById("minute").innerHTML = remMinute;
    } else {
      document.getElementById("minute").innerHTML = '0' + remMinute;
    }    

    //diminui -1 nos segundos
    remSecond--;

    //cria condicional para caso o segundo vá abaixo de 0 segundos
    if (remSecond < 0) {

      //diminui o minuto restante -1
      remMinute--;

      //define o seg restante para 59
      remSecond = 59;

      //cria a condicional para quando o min restante está abaixo de 0
      if (remMinute < 0) {

        //diminui a hour restante em -1
        remHour--;

        //define o minuto restante em 59
        remMinute = 59;

      }
    }

  //define o intervalo em 1 seg.
  }, 1000);
}