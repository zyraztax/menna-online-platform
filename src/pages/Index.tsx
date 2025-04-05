
import { Link } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Gift, School, Home, Utensils, Heart, MoveRight } from "lucide-react";

const HomePage = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[80vh] flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=1000&auto=format&fit=crop')", 
              }}
            ></div>
            
            <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                WELCOME TO MENNA ONLINE PLATFORM
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Home for the Elderly and Mentally Disabled
              </p>
              <Link to="/about" className="curved-button inline-flex">
                About Us
              </Link>
            </div>
          </section>
          
          {/* Impact Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-header text-center">Our Impact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-5xl font-bold text-menna-teal">125+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">People Sheltered</CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-5xl font-bold text-menna-teal">1000+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">Meals Provided</CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-5xl font-bold text-menna-teal">75+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">Medical Treatments</CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-5xl font-bold text-menna-teal">50+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">Orphans Educated</CardDescription>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/impact" className="inline-flex items-center text-menna-teal hover:text-menna-red">
                  <span className="mr-2">See detailed statistics</span>
                  <MoveRight size={18} />
                </Link>
              </div>
            </div>
          </section>
          
          {/* Projects Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-header text-center">Our Projects</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <Card className="overflow-hidden transition-transform hover:scale-105 duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1000&auto=format&fit=crop')" }}></div>
                  <CardHeader>
                    <CardTitle className="text-menna-teal flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Medical Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Providing essential healthcare services to those in need, including regular check-ups and medication.</p>
                    <Link to="/projects" className="text-menna-red hover:underline inline-flex items-center">
                      <span>Learn more</span>
                      <MoveRight size={16} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden transition-transform hover:scale-105 duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=1000&auto=format&fit=crop')" }}></div>
                  <CardHeader>
                    <CardTitle className="text-menna-teal flex items-center">
                      <Home className="mr-2 h-5 w-5" />
                      Sheltering
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Providing safe housing and accommodation for the elderly and mentally disabled individuals.</p>
                    <Link to="/projects" className="text-menna-red hover:underline inline-flex items-center">
                      <span>Learn more</span>
                      <MoveRight size={16} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden transition-transform hover:scale-105 duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592106680408-e7e63efbc7ba?q=80&w=1000&auto=format&fit=crop')" }}></div>
                  <CardHeader>
                    <CardTitle className="text-menna-teal flex items-center">
                      <Utensils className="mr-2 h-5 w-5" />
                      Food Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Ensuring nutritious meals and food supplies for those in our care and the broader community.</p>
                    <Link to="/projects" className="text-menna-red hover:underline inline-flex items-center">
                      <span>Learn more</span>
                      <MoveRight size={16} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/projects" className="curved-button inline-flex">
                  View All Projects
                </Link>
              </div>
            </div>
          </section>
          
          {/* Donate Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-header">Make a Donation</h2>
              <p className="text-lg mb-8">Your contribution can make a significant difference in the lives of the elderly and mentally disabled.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <Button variant="outline" className="rounded-full text-lg py-6 hover:bg-menna-teal hover:text-white border-2">
                  50 ETB
                </Button>
                <Button variant="outline" className="rounded-full text-lg py-6 hover:bg-menna-teal hover:text-white border-2">
                  100 ETB
                </Button>
                <Button variant="outline" className="rounded-full text-lg py-6 hover:bg-menna-teal hover:text-white border-2">
                  200 ETB
                </Button>
                <Button variant="outline" className="rounded-full text-lg py-6 hover:bg-menna-teal hover:text-white border-2">
                  1000 ETB
                </Button>
              </div>
              
              <div className="mb-8">
                <Button variant="outline" className="rounded-full text-lg py-6 hover:bg-menna-teal hover:text-white border-2 w-full sm:w-auto">
                  Custom Amount
                </Button>
              </div>
              
              <a 
                href="https://services.santimpay.com/?data=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eG5JZCI6ImYzMDlhYWIzLWNlMWYtNGQ5NC04Y2RiLWU1NjJhYmU3NzZjZSIsIm1lcklkIjoiYjNlMDFiYzktYjcyMS00NGU1LTg1ODUtNWYzNzQyMDcwM3R0IiwibWVyTmFtZSI6Ik1lbm5hIiwiYWRkcmVzcyI6IkFBIiwiYW1vdW50IjoiMjkuNjYiLCJjdXJyZW5jeSI6IkVUQiIsInJlYXNvbiI6Im1lbm5hIGRvbmF0aW9uIiwiY29tbWlzc2lvbkFtb3VudCI6IjAuMzQ1MCIsInRvdGFsQW1vdW50IjoiMzAuMDAiLCJwaG9uZU51bWJlciI6IiIsImV4cCI6MTc0MzgzODc4NywiaXNzIjoic2VydmljZXMuc2FudGltcGF5LmNvbSJ9.dHz7ajOwQB1kaT-0qYv37pkl9u7tTdvf3hjLy8DipZ4183WvbovyU6P4Q0TzIXHqcympDRRM9Mf63by3xt8CGA&m=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="donation-button inline-flex items-center justify-center mb-8"
              >
                <Heart className="mr-2 h-5 w-5" /> Donate Now
              </a>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Alternative Payment Methods</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center">
                    <img src="/lovable-uploads/8f83c07d-b401-4841-b56d-98d88cf334bf.png" alt="Commercial Bank of Ethiopia" className="h-12 mb-4" />
                    <p className="font-semibold">Account Number:</p>
                    <p>1000089064868</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <img src="/lovable-uploads/e00e8030-9c5d-4ea3-941a-eaecd0b25b11.png" alt="Telebirr" className="h-12 mb-4" />
                    <p className="font-semibold">Telebirr:</p>
                    <p>+251 934641309</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://www.gofundme.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-menna-red hover:underline inline-flex items-center"
                  >
                    <img src="/lovable-uploads/dbc14c8e-b702-40b8-8f87-c36c04b26e3c.png" alt="GoFundMe" className="h-8 mr-2" />
                    Support us on GoFundMe
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Postal Donation Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-header text-center">Postal Donation</h2>
              <p className="text-lg text-center mb-8">You can send physical donations through postal services</p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/postal-donation" className="bg-white dark:bg-slate-800 w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <Gift className="h-10 w-10 text-menna-red mb-2" />
                  <span>Clothing</span>
                </Link>
                
                <Link to="/postal-donation" className="bg-white dark:bg-slate-800 w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <Utensils className="h-10 w-10 text-menna-red mb-2" />
                  <span>Food</span>
                </Link>
                
                <Link to="/postal-donation" className="bg-white dark:bg-slate-800 w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-menna-red mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M7 16a7 7 0 1 1 10 0" />
                  </svg>
                  <span>Hygiene</span>
                </Link>
                
                <Link to="/postal-donation" className="bg-white dark:bg-slate-800 w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <School className="h-10 w-10 text-menna-red mb-2" />
                  <span>Education</span>
                </Link>
                
                <Link to="/postal-donation" className="bg-white dark:bg-slate-800 w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <Heart className="h-10 w-10 text-menna-red mb-2" />
                  <span>Others</span>
                </Link>
              </div>
            </div>
          </section>
          
          {/* Partners Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-header text-center">Our Partners</h2>
              
              <div className="partner-carousel mt-8">
                <div className="partner-carousel-inner flex gap-12">
                  <img src="/lovable-uploads/8f83c07d-b401-4841-b56d-98d88cf334bf.png" alt="Commercial Bank of Ethiopia" className="partner-logo" />
                  <img src="/lovable-uploads/e00e8030-9c5d-4ea3-941a-eaecd0b25b11.png" alt="Ethio Telecom" className="partner-logo" />
                  <img src="/lovable-uploads/df0ced1e-cde8-4d47-8355-b2618d5b184e.png" alt="University of Gondar" className="partner-logo" />
                  <img src="/lovable-uploads/38752328-33a0-4cf6-9c9d-88c0a9d3d969.png" alt="Abay Bank" className="partner-logo" />
                  <img src="/lovable-uploads/dbc14c8e-b702-40b8-8f87-c36c04b26e3c.png" alt="GoFundMe" className="partner-logo" />
                  
                  {/* Duplicate for continuous loop */}
                  <img src="/lovable-uploads/8f83c07d-b401-4841-b56d-98d88cf334bf.png" alt="Commercial Bank of Ethiopia" className="partner-logo" />
                  <img src="/lovable-uploads/e00e8030-9c5d-4ea3-941a-eaecd0b25b11.png" alt="Ethio Telecom" className="partner-logo" />
                  <img src="/lovable-uploads/df0ced1e-cde8-4d47-8355-b2618d5b184e.png" alt="University of Gondar" className="partner-logo" />
                  <img src="/lovable-uploads/38752328-33a0-4cf6-9c9d-88c0a9d3d969.png" alt="Abay Bank" className="partner-logo" />
                  <img src="/lovable-uploads/dbc14c8e-b702-40b8-8f87-c36c04b26e3c.png" alt="GoFundMe" className="partner-logo" />
                </div>
              </div>
            </div>
          </section>
          
          {/* Membership Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-header text-center">Become a Member</h2>
              
              <Card className="mt-8">
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          placeholder="Your full name"
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-menna-teal"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phoneNumber"
                          placeholder="Your phone number"
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-menna-teal"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="contribution" className="text-sm font-medium">
                          What do you work on or add in Menna projects?
                        </label>
                        <textarea
                          id="contribution"
                          rows={3}
                          placeholder="How would you like to contribute"
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-menna-teal"
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="monthlyDonation"
                          className="rounded border-gray-300 text-menna-teal focus:ring-menna-teal"
                        />
                        <label htmlFor="monthlyDonation" className="text-sm font-medium flex items-center">
                          <span>Donate 10 birr monthly from your account</span>
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-menna-teal text-white">
                            Recommended
                          </span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button className="curved-button">
                        Register as Member
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
