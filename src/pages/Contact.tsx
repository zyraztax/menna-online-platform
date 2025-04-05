import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const Contact = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            {/* Add Back to Home link */}
            <div className="mb-4">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-menna-teal hover:underline"
              >
                <Home size={20} />
                Back to Home
              </Link>
            </div>

            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Contact Us</h1>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                We'd love to hear from you! Please use the form below to send us a message, 
                or feel free to reach out via the contact information provided.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-menna-teal focus:ring-menna-teal dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-menna-teal focus:ring-menna-teal dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-menna-teal focus:ring-menna-teal dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                    placeholder="Write your message here..."
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="curved-button"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Feel free to reach out to us through the following channels:
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-menna-teal">
                    <path d="M3 4a2 2 0 00-2 2v1.161A7.001 7.001 0 009.487 19.944a6.979 6.979 0 007.03-5.773A2 2 0 0015 11a2 2 0 00-2-2H3z" />
                  </svg>
                  <a href="mailto:info@menna.org" className="text-menna-teal hover:underline">info@menna.org</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-menna-teal">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.984.836l.74 4.462a1 1 0 01.042.281m1.157-.281l.74-4.462A1 1 0 019.847 2H12a1 1 0 011 1v1h1a1 1 0 011 1v5h.586a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414l-3-3A1 1 0 0115.414 10H15v1a1 1 0 01-1 1h-1v1a1 1 0 01-1 1H9.847a1 1 0 01-.984-.836l-.739-4.462a1 1 0 01.042-.281m1.157-.281l.74-4.462A1 1 0 019.847 2H5a1 1 0 01-1 1v1z" />
                  </svg>
                  <a href="tel:+251912345678" className="text-gray-700 dark:text-gray-300">+251 912 345 678</a>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-menna-teal">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.95l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <address className="not-italic text-gray-700 dark:text-gray-300">
                    P.O. Box 196, Gondar, Ethiopia
                  </address>
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
