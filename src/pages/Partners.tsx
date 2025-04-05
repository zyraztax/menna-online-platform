
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const Partners = () => {
  const majorPartners = [
    {
      name: "Commercial Bank of Ethiopia",
      logo: "/lovable-uploads/8f83c07d-b401-4841-b56d-98d88cf334bf.png",
      description: "Ethiopia's largest bank supporting our financial operations and community development programs.",
      website: "https://www.combanketh.et/"
    },
    {
      name: "University of Gondar",
      logo: "/lovable-uploads/38752328-33a0-4cf6-9c9d-88c0a9d3d969.png",
      description: "Providing academic expertise, research support, and student volunteers for our educational initiatives.",
      website: "https://www.uog.edu.et/"
    },
    {
      name: "Ethio Telecom",
      logo: "/lovable-uploads/df0ced1e-cde8-4d47-8355-b2618d5b184e.png",
      description: "Supporting our digital literacy programs and helping connect rural communities.",
      website: "https://www.ethiotelecom.et/"
    },
    {
      name: "Abay Bank",
      logo: "/lovable-uploads/e00e8030-9c5d-4ea3-941a-eaecd0b25b11.png",
      description: "Facilitating financial support and banking services for our operations and beneficiaries.",
      website: "https://www.abaybank.com.et/"
    },
    {
      name: "GoFundMe",
      logo: "https://d2g8igdw686xgo.cloudfront.net/70381180_1679001814937986_r.jpeg",
      description: "Powering our online fundraising campaigns and helping us reach donors worldwide.",
      website: "https://www.gofundme.com/"
    }
  ];

  const collaboratingOrganizations = [
    { name: "Ministry of Education, Ethiopia", category: "Government" },
    { name: "Gondar City Administration", category: "Government" },
    { name: "Amhara Development Association", category: "Local NGO" },
    { name: "Ethiopian Red Cross Society", category: "Humanitarian" },
    { name: "Engineers Without Borders", category: "International NGO" },
    { name: "Rotary Club of Gondar", category: "Community Organization" },
    { name: "Doctors Without Borders", category: "Healthcare" },
    { name: "Water.org", category: "Water & Sanitation" }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Our Partners</h1>
            
            <p className="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              MENNA collaborates with a diverse network of organizations to maximize our impact. 
              We are grateful for the support of these partners who share our commitment to 
              improving lives in Gondar, Ethiopia.
            </p>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Major Partners</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {majorPartners.map((partner) => (
                  <div key={partner.name} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-center mb-4 h-24">
                        <a href={partner.website} target="_blank" rel="noopener noreferrer">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`} 
                            className="h-full object-contain"
                          />
                        </a>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-center">{partner.name}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow">
                        {partner.description}
                      </p>
                      <div className="mt-auto text-center">
                        <a 
                          href={partner.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-menna-teal hover:underline font-medium"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Collaborating Organizations</h2>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {collaboratingOrganizations.map((org) => (
                    <div key={org.name} className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
                      <h3 className="font-medium mb-1">{org.name}</h3>
                      <span className="inline-block bg-slate-100 dark:bg-slate-700 text-xs px-2 py-1 rounded">
                        {org.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            <section>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Become a Partner</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                  We are always looking for new partnerships that align with our mission and values. 
                  Whether you represent a corporation, foundation, educational institution, or nonprofit 
                  organization, we welcome the opportunity to explore collaboration possibilities.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="bg-menna-teal hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-all"
                  >
                    Contact Us About Partnership
                  </a>
                  <a 
                    href="/donate" 
                    className="border border-menna-teal text-menna-teal hover:bg-menna-teal hover:text-white px-6 py-3 rounded-md transition-all"
                  >
                    Support Our Work
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Partners;
