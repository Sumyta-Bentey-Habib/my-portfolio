import React from "react";
import { Mail, MapPin, Phone, Linkedin, Github, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full px-4 py-20 bg-base-200">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Basic Contact Info */}
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

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
          <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              className="textarea textarea-bordered w-full"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-fit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
