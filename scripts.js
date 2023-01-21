// RECEBENDO DIA E HORA

const date = new Date()

const mes = date.toLocaleString('default', {month: 'long' }); // NOME MES
console.log(mes)

const dia = String(date.getDate()).padStart(2, '0') // 1 -> 01
console.log(dia)

const dianome = String(date.getUTCDay()); // DIA EM NUMERO DA SEMANA
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

    let nome = value;
    let temp = data.current.temp_c;
    document.getElementById('nome').innerHTML = nome;
    document.getElementById('temp').innerHTML = temp;
        
  });

});

// CHAMADA JSON PROXIMOS 3 DIAS

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '901cadb15amsha989afa1fbd9f28p1dffb7jsn1f544feb87f2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=campinas&days=3&lang=brazil', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));