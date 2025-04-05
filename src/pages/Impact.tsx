
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Impact = () => {
  const impactData = [
    { year: '2018', beneficiaries: 125, projects: 2 },
    { year: '2019', beneficiaries: 350, projects: 4 },
    { year: '2020', beneficiaries: 780, projects: 6 },
    { year: '2021', beneficiaries: 1200, projects: 8 },
    { year: '2022', beneficiaries: 1850, projects: 10 },
    { year: '2023', beneficiaries: 2500, projects: 12 },
    { year: '2024', beneficiaries: 3200, projects: 15 },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Our Impact</h1>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Impact Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-menna-teal/10 p-6 rounded-lg text-center">
                  <h3 className="text-5xl font-bold text-menna-teal mb-2">3,200+</h3>
                  <p className="text-gray-700 dark:text-gray-300">Lives Impacted</p>
                </div>
                <div className="bg-menna-teal/10 p-6 rounded-lg text-center">
                  <h3 className="text-5xl font-bold text-menna-teal mb-2">15</h3>
                  <p className="text-gray-700 dark:text-gray-300">Active Projects</p>
                </div>
                <div className="bg-menna-teal/10 p-6 rounded-lg text-center">
                  <h3 className="text-5xl font-bold text-menna-teal mb-2">7</h3>
                  <p className="text-gray-700 dark:text-gray-300">Years of Service</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Growth Over Years</h3>
              <div className="h-80 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impactData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis yAxisId="left" orientation="left" stroke="#06b6d4" />
                    <YAxis yAxisId="right" orientation="right" stroke="#6366f1" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="beneficiaries" name="Beneficiaries" fill="#06b6d4" />
                    <Bar yAxisId="right" dataKey="projects" name="Projects" fill="#6366f1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Education Impact</h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-menna-teal font-bold">✓</span>
                    <span>450+ children receiving school supplies annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-menna-teal font-bold">✓</span>
                    <span>120 students on full academic scholarships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-menna-teal font-bold">✓</span>
                    <span>3 school buildings renovated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-menna-teal font-bold">✓</span>
                    <span>85% improvement in literacy rates in our program areas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Healthcare Impact</h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-menna-teal font-bold">✓</span>
                    <span>2,000+ medical consultations provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-menna-teal font-bold">✓</span>
                    <span>780 children vaccinated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-menna-teal font-bold">✓</span>
                    <span>4 health clinics supported with equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-menna-teal font-bold">✓</span>
                    <span>65% reduction in waterborne diseases</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-menna-teal pl-4">
                  <p className="italic mb-2 text-gray-700 dark:text-gray-300">
                    "MENNA changed my life by providing me with a scholarship to continue my education. 
                    Now I am studying to become a doctor and hope to give back to my community."
                  </p>
                  <p className="font-medium">- Abeba T., Scholarship Recipient</p>
                </div>
                <div className="border-l-4 border-menna-teal pl-4">
                  <p className="italic mb-2 text-gray-700 dark:text-gray-300">
                    "The clean water project in our village has reduced illness among our children 
                    and given us more time to focus on farming and education."
                  </p>
                  <p className="font-medium">- Haile M., Community Leader</p>
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

export default Impact;
