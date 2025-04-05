
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const Gallery = () => {
  // Sample gallery items - in a real app, these would come from a database or CMS
  const galleryItems = [
    {
      id: 1,
      title: "School Supply Distribution",
      description: "Annual distribution of school supplies to students in Gondar.",
      imageSrc: "/lovable-uploads/38752328-33a0-4cf6-9c9d-88c0a9d3d969.png",
      category: "education"
    },
    {
      id: 2,
      title: "Community Health Workshop",
      description: "Teaching local community members about preventive healthcare.",
      imageSrc: "/lovable-uploads/8f83c07d-b401-4841-b56d-98d88cf334bf.png",
      category: "healthcare"
    },
    {
      id: 3,
      title: "Clean Water Project",
      description: "Installation of clean water facilities in rural communities.",
      imageSrc: "/lovable-uploads/df0ced1e-cde8-4d47-8355-b2618d5b184e.png",
      category: "infrastructure"
    },
    {
      id: 4,
      title: "Youth Empowerment Program",
      description: "Leadership training for young community members.",
      imageSrc: "/lovable-uploads/e00e8030-9c5d-4ea3-941a-eaecd0b25b11.png",
      category: "education"
    },
    {
      id: 5,
      title: "Volunteer Team Meeting",
      description: "Our volunteers planning the next community initiative.",
      imageSrc: "/lovable-uploads/dbc14c8e-b702-40b8-8f87-c36c04b26e3c.png",
      category: "team"
    },
    {
      id: 6,
      title: "School Building Renovation",
      description: "Renovations to improve learning environments for students.",
      imageSrc: "/lovable-uploads/38752328-33a0-4cf6-9c9d-88c0a9d3d969.png",
      category: "infrastructure"
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Photo Gallery</h1>
            
            <p className="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Explore our gallery to see the impact of MENNA's work in the Gondar community. 
              These images showcase our projects, the people we serve, and the positive changes 
              we're making together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {galleryItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-menna-teal text-white text-xs font-bold px-2 py-1 uppercase">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Submit Your Photos</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Are you a volunteer or community member with photos of MENNA's work? 
                We'd love to feature them in our gallery. Please contact us to submit your images.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/contact" 
                  className="bg-menna-teal hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-all"
                >
                  Contact Us to Submit Photos
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

export default Gallery;
