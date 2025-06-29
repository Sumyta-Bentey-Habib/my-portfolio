import React, { useRef } from "react";
import { Mail, MapPin, Phone, Linkedin, Github, MessageCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add current time to hidden input
    const currentTime = new Date().toLocaleString();
    form.current.time.value = currentTime;

    emailjs.sendForm(
      'service_y6kwgwg', 
      'template_0vzzlcw', 
      form.current,
      'H5QF8R2zKotbm_x1F' 
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Something went wrong. Please try again.');
      }
    );
  };

  return (
    <div className="w-full px-4 py-20 bg-base-200">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Basic Contact Info */}
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Reach Out & Collaborate</h2>

          <div className="flex items-center gap-3 mb-4">
            <MapPin size={20} className="text-primary" />
            <p>Bagerhat, Bangladesh</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Phone size={20} className="text-primary" />
            <p>+880 1741-140491</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Mail size={20} className="text-primary" />
            <p>sumytabenteyhabib@gmail.com</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <MessageCircle size={20} className="text-primary" />
            <p>WhatsApp: +880 1741-140491</p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <a href="https://www.linkedin.com/in/sumytabenteyhabib2002/" target="_blank" rel="noreferrer">
              <Linkedin size={28} className="hover:text-primary transition" />
            </a>
            <a href="https://github.com/Sumyta-Bentey-Habib" target="_blank" rel="noreferrer">
              <Github size={28} className="hover:text-primary transition" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Your Message, My Inbox</h2>
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name" 
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message" 
              className="textarea textarea-bordered w-full"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            {/* hidden time input */}
            <input type="hidden" name="time" />
            <button type="submit" className="btn btn-primary w-fit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
