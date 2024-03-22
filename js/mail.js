// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//     };

//     const serviceID = "service_jr8mj0y";
//     const templateID = "Nw1f6OqZJcjnpxmmP";

//     emailjs.send(serviceID, templateID, params)
//         .then(function(response) {
//             console.log('Email sent successfully:', response);
//             alert('Your message has been sent successfully!');
//             // Clear form fields after successful submission
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("subject").value = "";
//             document.getElementById("message").value = "";
//         }, function(error) {
//             console.error('Email send failed:', error);
//             alert('Oops! Something went wrong. Please try again later.');
//         });
// }
