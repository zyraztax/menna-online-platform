
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "School Scholarship Program",
      category: "Education",
      status: "Active",
      description: "Providing full academic scholarships to talented students from underprivileged backgrounds.",
      impact: "120 students currently receiving scholarships with an 85% graduation rate.",
      image: "/lovable-uploads/38752328-33a0-4cf6-9c9d-88c0a9d3d969.png"
    },
    {
      id: 2,
      title: "Community Health Initiative",
      category: "Healthcare",
      status: "Active",
      description: "Improving access to basic healthcare services and preventive care education.",
      impact: "Over 2,000 individuals have received medical consultations and vaccinations.",
      image: "/lovable-uploads/8f83c07d-b401-4841-b56d-98d88cf334bf.png"
    },
    {
      id: 3,
      title: "Clean Water Project",
      category: "Infrastructure",
      status: "Active",
      description: "Installing clean water wells and filtration systems in villages without access to safe drinking water.",
      impact: "5 villages now have access to clean water, benefiting over 800 residents.",
      image: "/lovable-uploads/df0ced1e-cde8-4d47-8355-b2618d5b184e.png"
    },
    {
      id: 4,
      title: "Women's Entrepreneurship Program",
      category: "Economic Empowerment",
      status: "Active",
      description: "Providing training, microloans, and mentorship to women starting small businesses.",
      impact: "75 women-owned businesses established with a 70% sustainability rate after two years.",
      image: "/lovable-uploads/e00e8030-9c5d-4ea3-941a-eaecd0b25b11.png"
    },
    {
      id: 5,
      title: "School Infrastructure Improvement",
      category: "Education",
      status: "Active",
      description: "Renovating and upgrading school buildings to create better learning environments.",
      impact: "3 schools renovated, creating improved learning spaces for 450+ students.",
      image: "/lovable-uploads/dbc14c8e-b702-40b8-8f87-c36c04b26e3c.png"
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Our Projects</h1>
            
            <p className="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              MENNA operates a diverse range of projects focused on creating sustainable change in the Gondar 
              community. Our initiatives span education, healthcare, infrastructure, and economic empowerment.
            </p>
            
            <div className="space-y-8 mb-10">
              {projects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-menna-teal text-white text-xs font-bold px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded">
                        <h3 className="font-medium mb-1">Impact</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">Support Our Projects</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Your contribution can make a significant difference in the lives of the communities we serve. 
                Whether through financial support or volunteering your time and skills, you can help us expand 
                our impact.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/donate" 
                  className="bg-menna-teal hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-all"
                >
                  Donate Now
                </a>
                <a 
                  href="/become-member" 
                  className="border border-menna-teal text-menna-teal hover:bg-menna-teal hover:text-white px-6 py-3 rounded-md transition-all"
                >
                  Become a Member
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

export default Projects;
