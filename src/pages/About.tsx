
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const About = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">About MENNA Charity</h1>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                MENNA was established to support the most vulnerable communities in Gondar, Ethiopia, 
                by providing essential resources, education, and healthcare. Our mission is to create 
                sustainable change and empower local communities to break the cycle of poverty.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Founded in 2018 by a group of dedicated volunteers, MENNA began as a small initiative 
                to support orphaned children in Gondar. What started as a small project has grown into 
                a comprehensive charity organization addressing multiple community needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Our Values</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Transparency in all operations</li>
                    <li>Community-led development</li>
                    <li>Respect for local culture and traditions</li>
                    <li>Sustainable and environmentally conscious programs</li>
                    <li>Equal opportunity for all community members</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Our Team</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    MENNA is run by a dedicated team of local and international volunteers, 
                    professionals, and community leaders who bring diverse skills and perspectives 
                    to our work. Our team works directly with community members to ensure our 
                    programs meet their actual needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                We believe in a holistic approach to community development that addresses immediate 
                needs while building long-term capacity. Our programs are designed with and for the 
                communities we serve, ensuring cultural relevance and community ownership.
              </p>
              
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md mb-6">
                <h3 className="font-semibold mb-2">Areas of Focus</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Education support and scholarship programs</li>
                  <li>Healthcare access and medical supplies</li>
                  <li>Food security and nutrition initiatives</li>
                  <li>Economic empowerment and skills training</li>
                  <li>Water, sanitation, and hygiene projects</li>
                </ul>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                Through strategic partnerships with local government, universities, and other 
                NGOs, we maximize our impact and create sustainable programs that will continue 
                to benefit communities for years to come.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;
