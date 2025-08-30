import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Get in touch with us through the form below
            or using our contact details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-gray-700">example@email.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 text-green-600 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-gray-700">+94 71 234 5678</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-red-100 text-red-600 rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-gray-700">University of Peradeniya, Sri Lanka</span>
            </div>

            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.44476588726!2d80.58889025873304!3d7.256634569924578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36f2b331d4a3b%3A0xfcecb1ac7b82edec!2sFaculty%20of%20Engineering%20-%20University%20of%20Peradeniya!5e0!3m2!1sen!2slk!4v1746080827456!5m2!1sen!2slk"
              width="100%"
              height="220"
              className="rounded-xl border-0 mt-6 shadow-md"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-[1.02] shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
