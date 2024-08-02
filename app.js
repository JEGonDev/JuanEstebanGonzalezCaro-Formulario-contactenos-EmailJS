const form = document.getElementById('form');
const serviceID = "service_bhastph"; //ID del servicio de emailing
const templateID = "template_1q2jifo"; // ID del templaete de emailing
const apiKey = "g4gjsQmQHPVVmvgNI"; //Llave publica

form.addEventListener('submit', submitEmail) //Añade el oyente al boton enviar

function submitEmail(e) {
    e.preventDefault(); 
    emailjs.init(serviceID);

    emailjs.sendForm(serviceID, templateID)
    .then(result => {
        Swal.fire('Gracias por contactarnos!', 'Nos pondremos en contacto con usted a la brevedad.', 'success');
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!',
        });
    });
}

