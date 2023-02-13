import React from 'react'
import { useRef } from 'react';
// import emailjs from '@emailjs-com';
// import emailjs from '@emailjs/browser';


const Contact = () => {

   const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_c5qnn4g', 'template_2u91all', form.current, 'FDLG_ptP-L8QgQ9SE')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <section class="contact-me" id="contact-me">
           <div class="container">                    
                <h1 class="section-heading">Get In Touch</h1>
                <div class="contact-me-content">
                    <div class="right-side">
                        <p class="text-color">
                            Hello there, feel free to contact me at any time, I will get back to you within two business days and if it's urgent, my social handle would be better in situations like this.
                        </p>
                        <p class="text-color"><b>Email: builtbykaksy@gmail.com</b></p>
                           
                        <div class="social-link">                                
                              <a href="https://github.com/Kaksie-codes" class="icon-box github" target="_blank">
                                <ion-icon name="logo-github"></ion-icon>
                              </a>   
                              <a href="https://twitter.com/kaksie_codes" class="icon-box twitter" target="_blank">
                                <ion-icon name="logo-twitter"></ion-icon>
                              </a>
                              <a href="https://www.linkedin.com/in/nsikak-akpan/" class="icon-box facebook" target="_blank">
                                <ion-icon name="logo-linkedin"></ion-icon>
                              </a>
                              <a href="https://web.facebook.com/engrnsikak.akpan.14" class="icon-box facebook" target="_blank">
                                <ion-icon name="logo-facebook"></ion-icon>
                              </a>
                              <a href="https://web.whatsapp.com/" class="icon-box facebook" target="_blank">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                              </a>
                        </div>   
                    </div>
        
                    <form id="contact-form" > 
                        
                        <input class="input-field field" type="text" name="name" placeholder="Your Name" required/>
                        <input type="hidden" name="_subject" value="Portfolio Website Enquiry!"/>   
                        <input class="input-field field" type="text" name="email" placeholder="Your Email" required/>
        
                        <textarea class="input-field field" name="message" placeholder="Your Message" required></textarea>                        
                        
                        <input id="submit-btn" type="submit" value="Send" class="field"/>
                    </form>
                </div>
                
            </div>
    </section>

  )
}

export default Contact;