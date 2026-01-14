        
        (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "xrjRv_dPKUX3qv8JO",
            });
        })();

        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_3lxe5or', 'template_etsx01k', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        document.getElementById("contact-form").innerHTML = "Thank you very much for your request. Sent!";
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }