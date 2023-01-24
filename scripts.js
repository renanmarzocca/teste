// RECEBENDO DIA E HORA

const date = new Date()

const mes = date.toLocaleString('default', {month: 'long' }); // NOME MES
console.log(mes)

const dia = String(date.getDate()).padStart(2, '0') // 1 -> 01
console.log(dia)

const dianome = String(date.getDay()); // DIA EM NUMERO DA SEMANA
console.log(dianome)

const diasemana = new Array(6); // ARRAY PARA ENCONTRAR O NOME DO DIA DA SEMANA
diasemana[0]='Domingo';
diasemana[1]='Segunda-Feira';
diasemana[2]='Terça-Feira';
diasemana[3]='Quarta-Feira';
diasemana[4]='Quinta-Feira';
diasemana[5]='Sexta-Feira';
diasemana[6]='Sabado';


console.log(diasemana[dianome]);


// VERIFICA A HORA E RETORNA SAUDAÇÕES

const hora = String(date.getHours()) // SOMENTE HORA
console.log(hora)


let bdia = 'Bom dia viajante!';
let btarde = 'Boa tarde viajante!';
let bnoite = 'Boa noite viajante!';

if (hora >= 0 && hora < 12)
{
  document.getElementById('msg').innerHTML = bdia;
}

else if (hora >= 12 && hora < 18)
{
  document.getElementById('msg').innerHTML = btarde;
}

else if (hora >= 18 && hora <= 23)
{
  document.getElementById('msg').innerHTML = bnoite;
}

// RECEBENDO O VALOR DO FORMULARIO

const btn = document.querySelector("#send");
  
btn.addEventListener("click", function(e){

  e.preventDefault();
  
  const local = document.querySelector("#local");

  const value = local.value;

  console.log(value);

  //CHAMADA DO JSON REAL TIME

  const options = {
	  method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': '901cadb15amsha989afa1fbd9f28p1dffb7jsn1f544feb87f2',
		  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	    }
    };

  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + (value), options)
	.then((response) => response.json())
  .then((data) => {
      console.log(data)

    let icone = data.current.condition.text; // RECEBE O VALOR DE COMO ESTA O CLIMA
    let diaatual = (diasemana[dianome]); // RECEBE O VALOR DO ARRAY COM O DIA DA SEMANA EM NOME
    let temp = data.current.temp_c + 'ºC'; // TEMP ATUAL DO DIA ATUAL

    console.log(icone)
    document.getElementById('diawrite').innerHTML = diaatual; // PEGA O NOME DO DIA ATUAL
    document.getElementById('temp').innerHTML = temp; // PEGA TEMPERATURA ATUAL E ENVIA PRO HTML
    
    //VERIFICA COMO ESTA O CLIMA E RETORNA O ICONE CORRETO

    let sol = 'Sunny'
    let sunny = '<i class="fa fa-sun"></i>'
    let parcnublado = 'Partly cloudy'
    let partlycloudy = '<i class="fa fa-cloud-sun"></i>'
    let neve = 'Patchy light snow'
    let patchylightsnow = '<i class="fa fa-snowflake"></i>'
    let chuvaleve = 'Light rain shower'
    let chuvaleve2 = 'Light rain'
    let chuvaleve3 = 'Light sleet showers'
    let lightrainshower = '<i class="fa fa-cloud-rain"></i>'
    let possivelchuva = 'Patchy rain possible'
    let patchyrainpossible = '<i class="fa fa-cloud-rain"></i>'
    let nublado = 'Overcast'
    let overcast = '<i class="fa fa-cloud"></i>'
    let limpo = 'Clear'
    let clear = '<i class="fa fa-wind"></i>'
    let chuvafracatrovao = 'Patchy light rain with thunder'
    let chuvafracamoderada = 'Moderate or heavy rain with thunder'
    let patchylightrainwiththunder = '<i class="fa fa-cloud-bolt"></i>'

    


      if(icone === sol)
        {
          document.getElementById('icone1').innerHTML = sunny;
        }
        else if (icone === parcnublado)
        {
          document.getElementById('icone1').innerHTML = partlycloudy;
        }
        else if (icone === neve)
        {
          document.getElementById('icone1').innerHTML = patchylightsnow;
        }
        else if (icone === chuvaleve || icone === chuvaleve2 || icone === chuvaleve3)
        {
          document.getElementById('icone1').innerHTML = lightrainshower;
        }
        else if (icone === possivelchuva)
        {
          document.getElementById('icone1').innerHTML = patchyrainpossible;
        }
        else if (icone === nublado)
        {
          document.getElementById('icone1').innerHTML = overcast;
        }
        else if (icone === limpo)
        {
          document.getElementById('icone1').innerHTML = clear;
        }
        else if (icone === chuvafracatrovao || icone === chuvafracamoderada)
        {
          document.getElementById('icone1').innerHTML = patchylightrainwiththunder;
        }

  });

  // CHAMADA JSON PROXIMOS 3 DIAS

  const options3 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '901cadb15amsha989afa1fbd9f28p1dffb7jsn1f544feb87f2',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + (value) + '&days=3&lang=pt-br', options3)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

      let temp = data.forecast.forecastday
      let temparray = temp.map(function(e) { return e.day.avgtemp_c;});
      let temp0 = temparray[0] + 'ºC'
      let temp1 = temparray[1] + 'ºC'
      let temp2 = temparray[2] + 'ºC'

      document.getElementById('temp2').innerHTML = temp0
      document.getElementById('temp3').innerHTML = temp1
      document.getElementById('temp4').innerHTML = temp2

      //SOMA O DIA PARA RETORNAR OS DIAS DA SEMANA FORECAST

      
      /*for (var i = 0; i < 3; i++)
      {
        console.log('valor de i: ' + i);
        diaforecastnome = (diasemana[i]);
        console.log('valor de dia semana: ' + diasemana[i])
        let nomeElement = 'diawrite'
        let incrementa = i
        nomeElement = nomeElement + incrementa.toString();
        console.log(nomeElement)
        document.getElementById(nomeElement).innerHTML = diaforecastnome;
      }*/



    let diaforecast = (dianome)
    let diaforecastnome

      diaforecast++
      diaforecastnome = (diasemana[diaforecast]);
      document.getElementById('diawrite2').innerHTML = diaforecastnome;

      diaforecast = diaforecast + 1
      diaforecastnome = (diasemana[diaforecast]);
      document.getElementById('diawrite3').innerHTML = diaforecastnome;

      diaforecast = diaforecast + 1
      diaforecastnome = (diasemana[diaforecast]);
      document.getElementById('diawrite4').innerHTML = diaforecastnome;

    });

  


});

//Partly cloudy * 
//Clear *
//Light rain shower *
//Patchy light snow *
//Sunny *
//Patchy rain possible *
//Overcast *
//Light sleet showers *
//Light rain * 
//Patchy light rain with thunder *
//Heavy rain
//Moderate or heavy rain shower


