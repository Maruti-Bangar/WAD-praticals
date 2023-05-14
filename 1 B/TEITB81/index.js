const button = document.getElementById('button');
let details=localStorage.getItem("details") ||[];

const submitHandler = () => {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     let xhr = new XMLHttpRequest();
			xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
			xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({
                name: name,
                username: username,
                email:email,
                password:password
                
            }));
			xhr.onload = function() {
				details.push(JSON.parse(xhr.response));
				localStorage.setItem("details", JSON.stringify(details));
				window.location.href = "/secondPage.html";
			};
}

button.addEventListener('click', submitHandler)
