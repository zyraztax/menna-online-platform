
import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { useToast } from "@/hooks/use-toast";

const BecomeMember = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    membershipType: "regular",
    supportAmount: "",
    interests: [],
    message: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(interest => interest !== value) };
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Application Received",
      description: "Thank you for your interest in becoming a member! We will contact you soon.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      membershipType: "regular",
      supportAmount: "",
      interests: [],
      message: ""
    });
  };

  const membershipBenefits = [
    {
      type: "Regular Member",
      monthlyContribution: "$10-$49",
      benefits: [
        "Monthly newsletter",
        "Invitation to annual general meeting",
        "Voting rights on community projects",
        "Recognition on our website"
      ]
    },
    {
      type: "Supporting Member",
      monthlyContribution: "$50-$99",
      benefits: [
        "All Regular Member benefits",
        "Quarterly impact reports",
        "Exclusive webinars with project leaders",
        "MENNA branded merchandise"
      ]
    },
    {
      type: "Sustaining Member",
      monthlyContribution: "$100+",
      benefits: [
        "All Supporting Member benefits",
        "One-on-one meetings with executive team",
        "Personalized updates on projects you support",
        "Special recognition at events",
        "Invitation to annual site visit (travel not included)"
      ]
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Become a Member</h1>
            
            <p className="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Join the MENNA community and become a vital part of our mission to create sustainable 
              change in Gondar, Ethiopia. Members provide consistent support that helps us plan 
              and implement long-term programs.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {membershipBenefits.map((membership) => (
                <div key={membership.type} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col">
                  <h2 className="text-xl font-semibold mb-2 text-center">{membership.type}</h2>
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-menna-teal">{membership.monthlyContribution}</span>
                    <span className="text-gray-600 dark:text-gray-400"> /month</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {membership.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-menna-teal font-bold">✓</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#membership-form" 
                    className={`mt-auto text-center px-4 py-2 rounded-md transition-colors ${
                      membership.type === "Regular Member" 
                        ? "bg-menna-teal text-white hover:bg-opacity-90" 
                        : "border border-menna-teal text-menna-teal hover:bg-menna-teal hover:text-white"
                    }`}
                  >
                    Select {membership.type}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-center" id="membership-form">Membership Application</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Membership Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["regular", "supporting", "sustaining"].map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          type="radio"
                          id={type}
                          name="membershipType"
                          value={type}
                          checked={formData.membershipType === type}
                          onChange={handleChange}
                          required
                          className="mr-2 h-4 w-4 text-menna-teal"
                        />
                        <label htmlFor={type} className="text-sm">
                          {type.charAt(0).toUpperCase() + type.slice(1)} Member
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="supportAmount" className="block text-sm font-medium mb-1">
                    Monthly Support Amount *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2">$</span>
                    <input
                      type="number"
                      id="supportAmount"
                      name="supportAmount"
                      value={formData.supportAmount}
                      onChange={handleChange}
                      min="10"
                      required
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Areas of Interest (Optional)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Education", "Healthcare", "Water & Sanitation", "Economic Empowerment", "Environmental Sustainability", "Youth Development"].map((interest) => (
                      <div key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          id={interest.toLowerCase().replace(/\s+/g, '-')}
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleInterestChange}
                          className="mr-2 h-4 w-4 text-menna-teal"
                        />
                        <label htmlFor={interest.toLowerCase().replace(/\s+/g, '-')} className="text-sm">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-700"
                  />
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-menna-teal hover:bg-opacity-90 text-white px-8 py-3 rounded-md transition-all font-medium"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-1">What is the difference between donating and becoming a member?</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    While one-time donations are always appreciated, membership involves a recurring monthly contribution 
                    and offers a deeper level of engagement with our organization, including voting rights and regular updates.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-1">Can I change my membership level later?</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Yes, you can upgrade or downgrade your membership level at any time by contacting our membership team.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-1">Is my membership contribution tax-deductible?</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Yes, MENNA is a registered non-profit organization, and your contributions are tax-deductible 
                    to the extent allowed by law. You will receive a receipt for tax purposes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-1">How can I cancel my membership?</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    You can cancel your membership at any time by contacting us. There is no minimum commitment period.
                  </p>
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

export default BecomeMember;
