import { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    board: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! I'm interested in admission at A R Classes.

Student Name: ${formData.name}
Class: ${formData.class}
Board: ${formData.board}
Contact: ${formData.phone}
${formData.message ? `\nMessage: ${formData.message}` : ''}

Please provide more details about the admission process.`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '919763852327'; // Your WhatsApp number with country code
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', class: '', board: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-100 via-blue-50 to-sky-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get in touch with us for admissions, inquiries, or any questions about A R Classes
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We'd love to hear from you! Whether you have questions about our courses, want to schedule a visit, 
                  or are ready to enroll your child, we're here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Our Address
                    </h3>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Vighnaharta Apartment,<br />
                      Opp. Hari Om Super Market,<br />
                      Sudarshan Nagar, Lane 2,<br />
                      Pimple Gurav, Pune - 411061
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Phone Number
                    </h3>
                    <a
                      href="tel:9763852327"
                      className="text-teal-600 hover:text-teal-700 transition-colors text-lg"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      +91 9763852327
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Working Hours
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Monday - Sunday<br />
                      7:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5397742862324!2d73.76880731489819!3d18.62065268733384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c7e6b8e4e7%3A0x1234567890abcdef!2sPimple%20Gurav%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="A R Classes Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-sky-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-teal-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Admission Inquiry Form
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Thank You!
                  </h3>
                  <p className="text-green-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                    We've received your inquiry and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="Enter student name"
                    />
                  </div>

                  <div>
                    <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Class / Standard *
                    </label>
                    <select
                      id="class"
                      name="class"
                      required
                      value={formData.class}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <option value="">Select class</option>
                      <option value="1st">1st Standard</option>
                      <option value="2nd">2nd Standard</option>
                      <option value="3rd">3rd Standard</option>
                      <option value="4th">4th Standard</option>
                      <option value="5th">5th Standard</option>
                      <option value="6th">6th Standard</option>
                      <option value="7th">7th Standard</option>
                      <option value="8th">8th Standard</option>
                      <option value="9th">9th Standard</option>
                      <option value="10th">10th Standard</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="board" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Board *
                    </label>
                    <select
                      id="board"
                      name="board"
                      required
                      value={formData.board}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <option value="">Select board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="Enter contact number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Send size={20} />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
