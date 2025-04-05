
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Donate to MENNA</h1>
            
            <p className="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Your generosity can transform lives in Gondar, Ethiopia. Every donation, 
              regardless of size, helps us provide education, healthcare, and community 
              support to those who need it most.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Online Donation</h2>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  Make a secure online donation through our trusted payment partners.
                  You can choose a one-time donation or set up recurring monthly support.
                </p>
                
                <div className="space-y-4 mb-6">
                  <a 
                    href="https://www.gofundme.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <img 
                      src="https://d2g8igdw686xgo.cloudfront.net/70381180_1679001814937986_r.jpeg" 
                      alt="GoFundMe" 
                      className="h-10"
                    />
                  </a>
                  
                  <div className="text-center font-medium text-menna-teal">- or -</div>
                  
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="#" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md transition-colors text-center flex items-center justify-center"
                    >
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0C4.478 0 0 4.478 0 10c0 4.479 2.865 8.305 6.84 9.66.5.075.683-.218.683-.487 0-.241-.009-.876-.013-1.72-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.909-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.275.098-2.657 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0110 3.006c.85.004 1.705.114 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.382.203 2.403.1 2.656.64.7 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.933.359.309.678.919.678 1.855 0 1.337-.012 2.416-.012 2.744 0 .267.18.579.688.481C17.14 18.302 20 14.476 20 10c0-5.522-4.478-10-10-10z" />
                      </svg>
                      Donate with PayPal
                    </a>
                    <a 
                      href="#" 
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-3 rounded-md transition-colors text-center flex items-center justify-center"
                    >
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.064 2.766h9.872a4.29 4.29 0 0 1 4.298 4.298v9.872a4.29 4.29 0 0 1-4.298 4.298H7.064a4.29 4.29 0 0 1-4.298-4.298V7.064a4.29 4.29 0 0 1 4.298-4.298Zm16.524 19.69-5.61-5.61a7.724 7.724 0 0 0 1.537-4.625C19.515 7.54 15.975 4 11.6 4S3.61 7.54 3.61 12.22c0 4.68 3.54 8.22 7.916 8.22a7.797 7.797 0 0 0 4.625-1.537l5.61 5.61 2.827-2.058ZM11.6 6.533c3.114 0 5.687 2.573 5.687 5.687s-2.573 5.687-5.687 5.687-5.687-2.573-5.687-5.687S8.486 6.533 11.6 6.533Z" />
                      </svg>
                      Donate with Crypto
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Other Ways to Donate</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Bank Transfer</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      You can make a direct bank transfer to our account:
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded text-sm">
                      <p><strong>Bank Name:</strong> Commercial Bank of Ethiopia</p>
                      <p><strong>Account Name:</strong> MENNA Charity Organization</p>
                      <p><strong>Account Number:</strong> 1000123456789</p>
                      <p><strong>Swift Code:</strong> CBETETAA</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Postal Donation</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      If you prefer to send a check or money order by mail, 
                      please visit our postal donation page for instructions.
                    </p>
                    <Link 
                      to="/postal-donation" 
                      className="text-menna-teal hover:underline font-medium"
                    >
                      View Postal Donation Instructions →
                    </Link>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">In-Kind Donations</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      We also accept donations of goods and services. Please 
                      contact us to discuss your in-kind donation.
                    </p>
                    <Link 
                      to="/contact" 
                      className="text-menna-teal hover:underline font-medium"
                    >
                      Contact Us About In-Kind Donations →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">How Your Donation Helps</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
                <div className="p-4">
                  <div className="text-4xl font-bold text-menna-teal mb-2">$25</div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Provides school supplies for one student for a full year
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-menna-teal mb-2">$100</div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Funds medical care for five children in need
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-menna-teal mb-2">$500</div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Supports a full scholarship for one university student
                  </p>
                </div>
              </div>
              
              <p className="text-center text-gray-700 dark:text-gray-300">
                MENNA is committed to transparency. 85% of all donations go directly to our 
                programs, with only 15% used for administrative costs and fundraising efforts.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Become a Regular Supporter</h2>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                Monthly donations help us plan and implement our programs more effectively. 
                Consider becoming a regular supporter by signing up for a monthly donation.
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/become-member" 
                  className="bg-menna-teal hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-all"
                >
                  Become a Monthly Supporter
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Donate;
