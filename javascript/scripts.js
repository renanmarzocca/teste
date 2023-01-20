// RECEBENDO O VALOR DO FORMULARIO

const btn = document.querySelector("#send");
  
btn.addEventListener("click", function(e){

  e.preventDefault();
  
  const local = document.querySelector("#local");

  const value = local.value;

  console.log(value);


//CHAMADA DO JSON

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

      //let local = data.location.name;

      //console.log(local);


    let test = value;
    let temp = data.current.temp_c;
    document.getElementById('test').innerHTML = test;
    document.getElementById('temp').innerHTML = temp;
        
  });

});
