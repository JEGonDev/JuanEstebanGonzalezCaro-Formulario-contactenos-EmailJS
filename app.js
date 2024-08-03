//Se inicializa EmailJS en un script del index.html especificamente la linea 10

const button = document.getElementById('button-submit'); //Se crea una constante para que el boton pueda ser escuchado
const form = document.getElementById('form');
const serviceID = "service_bhastph"; //ID del servicio de emailing
const templateID = "template_1q2jifo"; // ID del templaete de emailing

button.addEventListener('click', submitEmail); //Se agrega un evento al boton para que se ejecute la funcion submitEmail

function submitEmail(event) {
    event.preventDefault(); 
    // emailjs.init(serviceID); No hay necesidad de inicializar emailjs en el script ya que ya se hizo en el index.html

    emailjs.sendForm(serviceID, templateID, form).then(() => {
        button.value = 'Email enviado';
        Swal.fire('Gracias por contactarnos!', 'Nos pondremos en contacto con usted a la brevedad.', 'success');
    }).catch((err) => { // Cambié el segundo parámetro a `catch` para un manejo de errores más claro
        button.value = 'Error al enviar';
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!',
        });
    });
}

