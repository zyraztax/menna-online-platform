
import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for your message! We will get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Contact Us</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <Mail className="text-menna-teal mr-3" size={24} />
                  <h2 className="text-xl font-semibold">Email</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  General Inquiries:
                </p>
                <a href="mailto:info@menna.org" className="text-menna-teal hover:underline">
                  info@menna.org
                </a>
                <p className="text-gray-700 dark:text-gray-300 mt-4 mb-2">
                  Donation Support:
                </p>
                <a href="mailto:donations@menna.org" className="text-menna-teal hover:underline">
                  donations@menna.org
                </a>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <Phone className="text-menna-teal mr-3" size={24} />
                  <h2 className="text-xl font-semibold">Phone</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Ethiopia Office:
                </p>
                <a href="tel:+251581141234" className="text-menna-teal hover:underline">
                  +251 58 114 1234
                </a>
                <p className="text-gray-700 dark:text-gray-300 mt-4 mb-2">
                  International Office:
                </p>
                <a href="tel:+18005551234" className="text-menna-teal hover:underline">
                  +1 800 555 1234
                </a>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <MapPin className="text-menna-teal mr-3" size={24} />
                  <h2 className="text-xl font-semibold">Address</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  MENNA Charity Organization<br />
                  Piazza Street, Near Fasil Castle<br />
                  Gondar, Ethiopia
                </p>
                <div className="flex items-center mt-auto">
                  <Clock className="text-menna-teal mr-3" size={20} />
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Office Hours: Mon-Fri, 9:00 AM - 5:00 PM (EAT)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-menna-teal hover:bg-opacity-90 text-white px-8 py-3 rounded-md transition-all font-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              
              <div>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Visit Our Office</h2>
                  <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62408.46339271143!2d37.42021659999999!3d12.603244799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164320d95d962b7d%3A0x7d2dd459f7c8391e!2sGondar%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1649320978529!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="MENNA Office Location"
                    ></iframe>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Our office is located in the heart of Gondar, near the historic Fasil Castle. 
                    We welcome visitors during our normal business hours and are happy to provide 
                    tours of our facilities and discuss our work.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Stay connected with our work and impact by following us on social media:
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-menna-teal hover:text-opacity-80 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="text-menna-teal hover:text-opacity-80 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="text-menna-teal hover:text-opacity-80 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="text-menna-teal hover:text-opacity-80 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Contact;
