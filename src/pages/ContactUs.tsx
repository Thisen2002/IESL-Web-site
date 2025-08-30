import { Box } from "@mui/material";

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you! Please fill out the form below or reach us through the contact details.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>example@email.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+94 71 234 5678</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>University of Peradeniya, Sri Lanka</span>
            </div>

            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.44476588726!2d80.58889025873304!3d7.256634569924578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36f2b331d4a3b%3A0xfcecb1ac7b82edec!2sFaculty%20of%20Engineering%20-%20University%20of%20Peradeniya!5e0!3m2!1sen!2slk!4v1746080827456!5m2!1sen!2slk"
              width="100%"
              height="200"
              className="rounded-xl border-0 mt-4"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



