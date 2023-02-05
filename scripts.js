// RECEBENDO DIA E HORA

const date = new Date()

const mes = date.toLocaleString('default', {month: 'long' }); // NOME MES

const dia = String(date.getDate()).padStart(2, '0') // 1 -> 01

const dianumero = String(date.getDay()); // DIA EM NUMERO DA SEMANA
console.log(dianumero);

const diasemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']; // ARRAY PARA ENCONTRAR O NOME DO DIA DA SEMANA

/*diasemana[0]='Segunda-Feira';
diasemana[1]='Terça-Feira';
diasemana[2]='Quarta-Feira';
diasemana[3]='Quinta-Feira';
diasemana[4]='Sexta-Feira';
diasemana[5]='Sabado';
diasemana[6]='Domingo';*/

// VERIFICA A HORA E RETORNA SAUDAÇÕES

const hora = String(date.getHours()) // SOMENTE HORA

let bdia = 'Bom dia!';
let btarde = 'Boa tarde!';
let bnoite = 'Boa noite!';

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

// RECEBENDO O VALOR DA PESQUISA LOCAL

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
    let diaatual = (diasemana[dianumero]); // RECEBE O VALOR DO ARRAY COM O DIA DA SEMANA EM NOME
    let temp = data.current.temp_c; // TEMP ATUAL DO DIA ATUAL
    let temparrend = Math.round(temp) // ARREDONDA O NUMERO

    console.log(icone)
    document.getElementById('lugar').innerHTML = value;
    document.getElementById('diawrite').innerHTML = diaatual; // PEGA O NOME DO DIA ATUAL
    document.getElementById('temp').innerHTML = temparrend + '°'; // PEGA TEMPERATURA ATUAL E ENVIA PRO HTML
    
    
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
    let nenulosa = 'Cloudy'
    let nevoa = 'Fog'
    let nevoa2 = 'Mist'
    let overcast = '<i class="fa fa-cloud"></i>'
    let limpo = 'Clear'
    let clear = '<i class="fa fa-wind"></i>'
    let chuvafracatrovao = 'Patchy light rain with thunder'
    let chuvafracamoderada = 'Moderate or heavy rain with thunder'
    let patchylightrainwiththunder = '<i class="fa fa-cloud-bolt"></i>'
    let chuvaforte = 'Heavy rain'
    let chuvaforte2 = 'Moderate or heavy rain shower'
    let chuvamoderada = 'Moderate rain'
    let heavyrain = '<i class="fa-solid fa-cloud-showers-heavy"></i>'


      if(icone === sol) // ENSOLARADO
        {
          document.getElementById('icone1').innerHTML = sunny;
        }
        else if (icone === parcnublado) // PARCIALMENTE NUBLADO
        {
          document.getElementById('icone1').innerHTML = partlycloudy;
        }
        else if (icone === neve) // NEVE
        {
          document.getElementById('icone1').innerHTML = patchylightsnow;
        }
        else if (icone === chuvaleve || icone === chuvaleve2 || icone === chuvaleve3) // CHUVA LEVE
        {
          document.getElementById('icone1').innerHTML = lightrainshower;
        }
        else if (icone === possivelchuva) // CHUVA LEVE
        {
          document.getElementById('icone1').innerHTML = patchyrainpossible;
        }
        else if (icone === nublado || icone === nevoa || icone === nenulosa || icone === nevoa2) // NUBLADO, NEVOA OU NEBULOSA
        {
          document.getElementById('icone1').innerHTML = overcast;
        }
        else if (icone === limpo) // LIMPO 
        {
          document.getElementById('icone1').innerHTML = clear;
        }
        else if (icone === chuvafracatrovao || icone === chuvafracamoderada) // CHUVA COM TROVAO
        {
          document.getElementById('icone1').innerHTML = patchylightrainwiththunder;
        }
        else if (icone === chuvaforte || icone === chuvaforte2 || icone === chuvamoderada) // CHUVA FORTE
        {
          document.getElementById('icone1').innerHTML = heavyrain;
        }

  });

  // CHAMADA JSON FORECAST

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

        document.getElementById('lugar2').innerHTML = value
        document.getElementById('lugar3').innerHTML = value
        document.getElementById('lugar4').innerHTML = value

      //FUNC PEGA VALOR DO CLIMA FORECAST E RETORNA

      let temp = data.forecast.forecastday
      let temparray = temp.map(function(e) { return e.day.avgtemp_c;});
      let temp0 = temparray[0]
      let temp1 = temparray[1]
      let temp2 = temparray[2]

      // ARREDONDA O NUMERO

      let temparrend0 = Math.round(temp0) 
      let temparrend1 = Math.round(temp0) 
      let temparrend2 = Math.round(temp0) 

      document.getElementById('temp2').innerHTML = temparrend0 + '°'
      document.getElementById('temp3').innerHTML = temparrend1 + '°'
      document.getElementById('temp4').innerHTML = temparrend2 + '°'

      let maxrray = temp.map(function(e) {return e.day.maxtemp_c});
      let minrray = temp.map(function(e) {return e.day.mintemp_c});
      
      /*console.log(maxrray)
      console.log(minrray)*/

    //SOMA O DIA PARA RETORNAR OS DIAS DA SEMANA FORECAST

    const dianomecont = (diasemana[dianumero]);
    console.log(dianomecont)
      

    // VERIFICA COMO ESTA O CLIMA FORECAST E RETORNA O ICONE CORRETO
    let iconeforecast = data.forecast.forecastday
    let iconearray = iconeforecast.map(function(e) { return e.day.condition.text;});

    let icone0 = iconearray[0]
    let icone1 = iconearray[1]
    let icone2 = iconearray[2]

    console.log(icone0)
    console.log(icone1)
    console.log(icone2)

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
    let nenulosa = 'Cloudy'
    let nevoa = 'Fog'
    let nevoa2 = 'Mist'
    let overcast = '<i class="fa fa-cloud"></i>'
    let limpo = 'Clear'
    let clear = '<i class="fa fa-wind"></i>'
    let chuvafracatrovao = 'Patchy light rain with thunder'
    let chuvafracamoderada = 'Moderate or heavy rain with thunder'
    let patchylightrainwiththunder = '<i class="fa fa-cloud-bolt"></i>'
    let chuvaforte = 'Heavy rain'
    let chuvaforte2 = 'Moderate or heavy rain shower'
    let chuvamoderada = 'Moderate rain'
    let heavyrain = '<i class="fa fa-cloud-showers-heavy"></i>'

    // VERIFICAÇÃO DE ICONE NO CARD 2

    if(icone0 === sol) // ENSOLARADO
        {
          document.getElementById('icone2').innerHTML = sunny;
        }
        else if (icone0 === parcnublado) // PARCIALMENTE NUBLADO
        {
          document.getElementById('icone2').innerHTML = partlycloudy;
        }
        else if (icone0 === neve) // NEVE
        {
          document.getElementById('icone2').innerHTML = patchylightsnow;
        }
        else if (icone0 === chuvaleve || icone0 === chuvaleve2 || icone0 === chuvaleve3) // CHUVA LEVE
        {
          document.getElementById('icone2').innerHTML = lightrainshower;
        }
        else if (icone0 === possivelchuva) // CHUVA LEVE
        {
          document.getElementById('icone2').innerHTML = patchyrainpossible;
        }
        else if (icone0 === nublado || icone0 === nevoa || icone0 === nenulosa || icone0 === nevoa2) // NUBLADO, NEVOA OU NEBULOSA
        {
          document.getElementById('icone2').innerHTML = overcast;
        }
        else if (icone0 === limpo) // LIMPO 
        {
          document.getElementById('icone2').innerHTML = clear;
        }
        else if (icone0 === chuvafracatrovao || icone0 === chuvafracamoderada) // CHUVA COM TROVAO
        {
          document.getElementById('icone2').innerHTML = patchylightrainwiththunder;
        }
        else if (icone0 === chuvaforte || icone0 === chuvaforte2 || icone0 === chuvamoderada) // CHUVA FORTE
        {
          document.getElementById('icone2').innerHTML = heavyrain;
        }

    // VERIFICAÇÃO DE ICONE NO CARD 3

    if(icone1 === sol) // ENSOLARADO
        {
          document.getElementById('icone3').innerHTML = sunny;
        }
        else if (icone1 === parcnublado) // PARCIALMENTE NUBLADO
        {
          document.getElementById('icone3').innerHTML = partlycloudy;
        }
        else if (icone1 === neve) // NEVE
        {
          document.getElementById('icone3').innerHTML = patchylightsnow;
        }
        else if (icone1 === chuvaleve || icone1 === chuvaleve2 || icone1 === chuvaleve3) // CHUVA LEVE
        {
          document.getElementById('icone3').innerHTML = lightrainshower;
        }
        else if (icone1 === possivelchuva) // CHUVA LEVE
        {
          document.getElementById('icone3').innerHTML = patchyrainpossible;
        }
        else if (icone1 === nublado || icone1 === nevoa || icone1 === nenulosa || icone1 === nevoa2) // NUBLADO, NEVOA OU NEBULOSA
        {
          document.getElementById('icone3').innerHTML = overcast;
        }
        else if (icone1 === limpo) // LIMPO 
        {
          document.getElementById('icone3').innerHTML = clear;
        }
        else if (icone1 === chuvafracatrovao || icone1 === chuvafracamoderada) // CHUVA COM TROVAO
        {
          document.getElementById('icone3').innerHTML = patchylightrainwiththunder;
        }
        else if (icone1 === chuvaforte || icone1 === chuvaforte2 || icone1 === chuvamoderada) // CHUVA FORTE
        {
          document.getElementById('icone3').innerHTML = heavyrain;
        }

    // VERIFICAÇÃO DE ICONE NO CARD 4

    if(icone2 === sol) // ENSOLARADO
        {
          document.getElementById('icone4').innerHTML = sunny;
        }
        else if (icone2 === parcnublado) // PARCIALMENTE NUBLADO
        {
          document.getElementById('icone4').innerHTML = partlycloudy;
        }
        else if (icone2 === neve) // NEVE
        {
          document.getElementById('icone4').innerHTML = patchylightsnow;
        }
        else if (icone2 === chuvaleve || icone2 === chuvaleve2 || icone2 === chuvaleve3) // CHUVA LEVE
        {
          document.getElementById('icone4').innerHTML = lightrainshower;
        }
        else if (icone2 === possivelchuva) // CHUVA LEVE
        {
          document.getElementById('icone4').innerHTML = patchyrainpossible;
        }
        else if (icone2 === nublado || icone2 === nevoa || icone2 === nenulosa || icone2 === nevoa2) // NUBLADO, NEVOA OU NEBULOSA
        {
          document.getElementById('icone4').innerHTML = overcast;
        }
        else if (icone2 === limpo) // LIMPO 
        {
          document.getElementById('icone4').innerHTML = clear;
        }
        else if (icone2 === chuvafracatrovao || icone2 === chuvafracamoderada) // CHUVA COM TROVAO
        {
          document.getElementById('icone4').innerHTML = patchylightrainwiththunder;
        }
        else if (icone2 === chuvaforte || icone2 === chuvaforte2 || icone2 === chuvamoderada) // CHUVA FORTE
        {
          document.getElementById('icone4').innerHTML = heavyrain;
        }

  });

    // APARECE CARD

    document.getElementById("id").style.display = "initial";


});

//Partly cloudy * 
//Clear *
//Light rain shower *
//Patchy light snow *
//Sunny *
//Patchy rain possible *
//Overcast *
//Cloudy *
//Mist *
//Light sleet showers *
//Light rain * 
//Patchy light rain with thunder *
//Heavy rain *
//Moderate or heavy rain shower *


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



