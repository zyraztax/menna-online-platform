
import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const PostalDonation = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Postal Donation</h1>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Make a Donation by Mail</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                If you prefer to send your donation by mail, please follow these instructions:
              </p>
              
              <div className="border-l-4 border-menna-teal pl-4 mb-6">
                <p className="font-medium mb-2">Send your donation to:</p>
                <address className="not-italic mb-4">
                  <strong>MENNA Charity Organization</strong><br />
                  P.O. Box 196<br />
                  Gondar, Ethiopia
                </address>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Please include the following information with your donation:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Your full name</li>
                  <li>Your mailing address</li>
                  <li>Your email address (if you would like a receipt)</li>
                  <li>The purpose of your donation (if applicable)</li>
                </ul>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md mb-6">
                <h3 className="font-semibold mb-2">Payment Options</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We accept the following payment methods by mail:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mt-2">
                  <li>Checks (made payable to "MENNA Charity Organization")</li>
                  <li>Money orders</li>
                  <li>Bank drafts</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/donate" 
                  className="bg-menna-teal hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-all"
                >
                  Online Donation Options
                </Link>
                <Link 
                  to="/contact" 
                  className="border border-menna-teal text-menna-teal hover:bg-menna-teal hover:text-white px-6 py-3 rounded-md transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Donation Receipt</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Upon receiving your donation, we will process it and send you a receipt if you provided your email address. 
                Please allow 2-3 weeks for processing and acknowledgment of your donation.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about your donation, please contact us at 
                <a href="mailto:info@menna.org" className="text-menna-teal ml-1 hover:underline">info@menna.org</a>.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PostalDonation;
