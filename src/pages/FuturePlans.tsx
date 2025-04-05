
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const FuturePlans = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Future Plans</h1>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Vision for 2025-2030</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                MENNA is committed to expanding our impact and creating sustainable change in Gondar 
                and beyond. Our strategic plan for the next five years focuses on scaling our most 
                successful programs while developing innovative approaches to address evolving 
                community needs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
                  <h3 className="font-semibold mb-2 text-lg">Strategic Goals</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Expand educational support to reach 500+ students</li>
                    <li>Establish a permanent health clinic in underserved areas</li>
                    <li>Develop sustainable water infrastructure in 10 additional villages</li>
                    <li>Create a vocational training center for youth and women</li>
                    <li>Build partnerships with 5+ international organizations</li>
                  </ul>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
                  <h3 className="font-semibold mb-2 text-lg">Measures of Success</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>80% graduation rate for scholarship recipients</li>
                    <li>50% reduction in preventable diseases in target areas</li>
                    <li>90% of households with access to clean water</li>
                    <li>200+ trainees employed or running businesses</li>
                    <li>Sustainable funding model with 40% local support</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Upcoming Projects</h2>
                
                <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-medium mb-2">Healthcare Expansion</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    MENNA plans to establish a permanent clinic offering preventive care, maternal 
                    and child health services, and treatment for common illnesses. The facility will 
                    be staffed by local healthcare professionals and visiting specialists.
                  </p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-menna-teal h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">25% Funded</span>
                  </div>
                </div>
                
                <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-medium mb-2">Vocational Training Center</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    To address youth unemployment, we are developing a vocational training center 
                    that will offer courses in high-demand skills including technology, construction, 
                    healthcare support, and sustainable agriculture.
                  </p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-menna-teal h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">40% Funded</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Clean Energy Initiative</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    MENNA is planning to introduce solar power solutions to communities without 
                    reliable electricity. This project will power homes, schools, and clinics while 
                    reducing environmental impact and creating opportunities for economic activity.
                  </p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-menna-teal h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">15% Funded</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We invite you to be part of our vision for the future. Your support, whether through 
                financial contributions, expertise, or advocacy, will help us turn these plans into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/donate" 
                  className="bg-menna-teal hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-all text-center"
                >
                  Support Our Future Plans
                </a>
                <a 
                  href="/contact" 
                  className="border border-menna-teal text-menna-teal hover:bg-menna-teal hover:text-white px-6 py-3 rounded-md transition-all text-center"
                >
                  Discuss Partnership Opportunities
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default FuturePlans;
