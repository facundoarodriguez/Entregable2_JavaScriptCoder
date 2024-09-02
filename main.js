const username = document.getElementById('username');
const password = document.getElementById('password');
const registerButton = document.getElementById('register-button');
const loginButton = document.getElementById('login-button');
const notification = document.getElementById('notification');

// Función para mostrar notificación
function showNotification(message, type = '') {
    notification.textContent = message;
    notification.className = `notification visible ${type}`;
    
    setTimeout(() => {
        notification.className = 'notification hidden';
    }, 3000);
}

// Función de registro
registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const user = username.value;
    const pass = password.value;
    
    if (user && pass) {
        localStorage.setItem('username', user);
        localStorage.setItem('password', pass);
        showNotification('Registro exitoso! Ahora puedes iniciar sesión.', 'success');
    } else {
        showNotification('Por favor ingresa un nombre de usuario y una contraseña.');
    }
});

// Función de inicio de sesión
loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    const inputUsername = username.value;
    const inputPassword = password.value;
    
    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        showNotification('Inicio de sesión exitoso!', 'success');
        setTimeout(() => {
            window.location.href = 'pages/market.html';
        }, 1000);
    } else {
        showNotification('Nombre de usuario o contraseña incorrectos.');
    }
});

// Animación del cursor (opcional)
const cursor = document.getElementById('cursor');
setInterval(() => {
    cursor.classList.toggle('visible');
}, 500);



/* function preentregable1() {
    let i = 0
    let inicio = confirm ('Primero debe registrarse para iniciar el cuestionario.')
        if (inicio == true) {
            let c = 0
            //C es el contador de inicios de sesion
            let register = prompt ('Ingrese su nuevo usuario. El mismo será requerido para iniciar sesión en el futuro.')
            if (register === null) {
                inicio = false;
            }
            else if (register == ''){
                inicio = false;
            }
            else {
                alert('Usuario creado con éxito.')
                while (c<3 && i<1) {
                    let user = prompt ('Ingrese su usuario.')
                    if (user === null) {
                        i = 1;
                    }
                    else {
                        if(user == register) {
                            cuestionario(register);
                            i++;
                        }
                        else {
                            alert('El usuario no coincide.')
                            c++;
                        }
                    }
                }
                if (c == 3){
                    alert('Se ha alcanzado el número máximo de intentos. Sesión cerrada.');
                }
                if (i == 1){
                    alert('Adiós :)');
                }
            }
        }
        else { alert('Hasta luego :)')}

        //Función cuestionario
        function cuestionario(nombre){
            let playerScore = 0
            alert('Bienvenido al cuestionario de preguntas de Game of Thrones')

            let R1 = prompt('¿Quién es el autor de los libros en los que se basa la serie "Game of Thrones"? George R. R. ...')
            if (R1 === null) {
                return;
            }
            else {
                if (R1.toUpperCase() == 'MARTIN') {
                    alert('Correcto!')
                    playerScore=playerScore + 100
                }
                else if (R1 == '') {
                    alert('Sin respuesta. Incorrecto')
                }
                else {
                    alert('Incorrecto')
                }
            }

            let R2 = prompt('¿En qué continente ficticio se desarrolla la mayor parte de la historia de "Game of Thrones"?')
            if (R2 === null) {
                return;
            }
            else {
                switch (R2.toUpperCase()) {
                    case 'WESTEROS':
                        alert('Correcto!')
                        playerScore=playerScore + 100
                        break;
                    case 'PONIENTE':
                        alert('Correcto!')
                        playerScore=playerScore + 100
                        break;
                    case '':
                        alert('Sin respuesta. Incorrecto')
                        break;
                    default:
                        alert('Incorrecto')
                        break;
                }
            }
            
            let R3 = prompt('¿Cuántos dragones tenía Daenerys Targaryen al principio de la serie? Completar solo con números.')
            if (R3 == 3) {
                alert('Correcto!')
                playerScore=playerScore + 100
            }
            else if (R3 == '') {
                alert('Sin respuesta. Incorrecto')
            }
            else if (R3 === null) {
                return;
            }
            else {
                alert('Incorrecto')
            }

            let R4 = prompt('¿Qué Lannister es conocido como "El Matarreyes"?')
            if (R4 === null) {
                return;
            }
            else {
                if (R4.toUpperCase() == 'JAIME') {
                    alert('Correcto!')
                    playerScore=playerScore + 100
                }
                else if (R4 == '') {
                    alert('Sin respuesta. Incorrecto')
                }
                else {
                    alert('Incorrecto')
                }
            }

            let R5 = prompt('¿Cuál es el verdadero nombre de Jon Snow?')
            if (R5 ===  null) {
                return;
            }
            else {
                if (R5.toUpperCase() == 'AEGON') {
                    alert('Correcto!')
                    playerScore=playerScore + 100
                }
                else if (R5 == '') {
                    alert('Sin respuesta. Incorrecto')
                }
                else {
                    alert('Incorrecto')
                }
            }

            //Array de usuario
            const usuario = [ 
                {
                    name: "facundo",
                    score: 300
                },
                {
                    name: "javier",
                    score: 400
                },
                {
                    name: "mariano",
                    score: 200
                }
            ]

            let lastPlayer = {
                name: nombre,
                score: playerScore
            }
            alert('Felicidades ' + lastPlayer.name + ', haz completado el cuestionario. Tu puntaje es ' + lastPlayer.score)

            usuario.push(lastPlayer)
            usuario.sort((a, b)=> b.score - a.score);
            console.table(usuario)
        }
} */