document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes (e) {
	console.log('get Jokes');
    
	const number = document.querySelector('input[type="number"]').value;
	//const number = document.getElementById('number').value;
    console.log(number);


    //Create an XHR Object
	const xhr = new  XMLHttpRequest();

	//Open 
	xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    

    xhr.onload = function () {
		console.log('ReadyState',xhr.readyState);
		if (this.status === 200) {
			//console.log(this.responseText);

			const jokes = JSON.parse(this.responseText);
			let output = '';
			if (jokes.type === 'success') {
				jokes.value.forEach(function(joke){
                output += `
	            <ul>
	              <li>${joke.joke}</li>
	              
	            </ul>
			    `
			});
			
			document.querySelector('.jokes').innerHTML = output;
			}else{
                output += `
	            <ul>
	              <li>SomeThing Went Wrong....</li>
	            </ul>
	           ` 
	          document.querySelector('.jokes').innerHTML = output;
			}
			
			
		}
	}

	xhr.send();
	
	e.preventDefault();
}