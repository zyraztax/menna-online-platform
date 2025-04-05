
import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (id: number) => {
    setOpenItems(prevOpen => 
      prevOpen.includes(id) 
        ? prevOpen.filter(item => item !== id) 
        : [...prevOpen, id]
    );
  };
  
  const faqCategories = [
    {
      category: "About MENNA",
      questions: [
        {
          id: 1,
          question: "What is MENNA and what does it stand for?",
          answer: "MENNA stands for 'Mother and Education Nurturing Network for All'. We are a non-profit charity organization based in Gondar, Ethiopia, dedicated to improving the lives of vulnerable communities through sustainable development programs focusing on education, healthcare, water access, and economic empowerment."
        },
        {
          id: 2,
          question: "When was MENNA founded?",
          answer: "MENNA was founded in 2018 by a group of dedicated volunteers who saw a need for coordinated community development efforts in Gondar. What started as a small initiative to support orphaned children has grown into a comprehensive organization addressing multiple community needs."
        },
        {
          id: 3,
          question: "Is MENNA a registered charity?",
          answer: "Yes, MENNA is a fully registered non-profit organization in Ethiopia. We also maintain international partnerships and comply with all legal requirements for receiving funds from abroad."
        }
      ]
    },
    {
      category: "Donations & Finances",
      questions: [
        {
          id: 4,
          question: "How can I donate to MENNA?",
          answer: "You can donate to MENNA through multiple channels: online via our website using card or PayPal, through bank transfer, postal mail (checks or money orders), or through our GoFundMe campaign. For detailed instructions, please visit our Donate page."
        },
        {
          id: 5,
          question: "Are donations to MENNA tax-deductible?",
          answer: "Yes, donations to MENNA are tax-deductible in Ethiopia and in several other countries where we have partner organizations. We provide receipts for all donations that can be used for tax purposes. Please consult with your tax advisor for specific guidance in your country."
        },
        {
          id: 6,
          question: "How does MENNA use donation funds?",
          answer: "85% of all donations go directly to our programs in education, healthcare, water access, and economic empowerment. The remaining 15% is used for administrative costs and fundraising efforts. We maintain transparent financial records and publish annual reports detailing our expenditures."
        },
        {
          id: 7,
          question: "Can I specify how my donation is used?",
          answer: "Yes, you can designate your donation for a specific project or program area. When making your donation, simply indicate your preference, and we will ensure your contribution is directed accordingly."
        }
      ]
    },
    {
      category: "Programs & Impact",
      questions: [
        {
          id: 8,
          question: "What programs does MENNA currently operate?",
          answer: "MENNA currently operates several programs including: 1) Education support through scholarships and school supplies, 2) Healthcare initiatives including medical consultations and vaccinations, 3) Clean water projects in rural communities, 4) Women's entrepreneurship program providing business training and microloans, and 5) School infrastructure improvement projects."
        },
        {
          id: 9,
          question: "How does MENNA measure its impact?",
          answer: "We measure our impact through both quantitative metrics (number of beneficiaries, vaccination rates, school completion rates, etc.) and qualitative assessment through community feedback and testimonials. We conduct regular program evaluations and adjust our approach based on results and community input."
        },
        {
          id: 10,
          question: "Where are MENNA's programs located?",
          answer: "Our programs are primarily focused in Gondar, Ethiopia, and surrounding rural communities. We prioritize areas with the greatest need and work closely with local leaders to identify where our support can have the most significant impact."
        }
      ]
    },
    {
      category: "Getting Involved",
      questions: [
        {
          id: 11,
          question: "How can I volunteer with MENNA?",
          answer: "We welcome volunteers both locally in Ethiopia and internationally. Skills in education, healthcare, engineering, business development, and communications are particularly valuable. Please visit our Contact page to express your interest in volunteering, and our volunteer coordinator will reach out to discuss opportunities."
        },
        {
          id: 12,
          question: "What does MENNA membership involve?",
          answer: "Becoming a MENNA member involves making a regular monthly contribution and offers a deeper level of engagement with our organization. Members receive regular updates, voting rights on certain organizational decisions, and other benefits depending on membership level. Visit our Become a Member page for more details."
        },
        {
          id: 13,
          question: "Can my organization partner with MENNA?",
          answer: "Yes, we actively seek partnerships with organizations that share our vision and values. Whether you represent a corporation, foundation, educational institution, or nonprofit, we welcome discussions about potential collaborations. Please contact us to explore partnership opportunities."
        }
      ]
    },
    {
      category: "Other Questions",
      questions: [
        {
          id: 14,
          question: "How can I stay updated on MENNA's work?",
          answer: "You can stay updated on our work by subscribing to our newsletter, following us on social media (Facebook, Instagram, Twitter, and YouTube), or by becoming a member to receive exclusive updates."
        },
        {
          id: 15,
          question: "Can I visit MENNA's projects in Ethiopia?",
          answer: "Yes, we occasionally organize visits for donors, partners, and other stakeholders to see our projects firsthand. If you're interested in visiting, please contact us to discuss possibilities. We also welcome visitors to our main office in Gondar during regular business hours."
        },
        {
          id: 16,
          question: "How do I contact MENNA if my question isn't answered here?",
          answer: "If your question isn't answered here, please visit our Contact page to send us a message, call us, or find our email addresses. We aim to respond to all inquiries within 48 hours during business days."
        }
      ]
    }
  ];
  
  // Filter FAQ items based on search term
  const filteredFAQs = searchTerm 
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-menna-teal">Frequently Asked Questions</h1>
            
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-menna-teal focus:border-transparent dark:bg-slate-800"
              />
            </div>
            
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  No questions found matching your search. Please try different keywords.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredFAQs.map((category) => (
                  <div key={category.category}>
                    <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
                      {category.questions.map((item) => (
                        <div key={item.id} className="p-0">
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                          >
                            <span className="font-medium text-lg">{item.question}</span>
                            {openItems.includes(item.id) ? (
                              <ChevronUp className="h-5 w-5 text-menna-teal" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-menna-teal" />
                            )}
                          </button>
                          
                          {openItems.includes(item.id) && (
                            <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">
                              <p>{item.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mt-10">
              <h2 className="text-2xl font-semibold mb-4 text-center">Still Have Questions?</h2>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                If you couldn't find the answer to your question, please don't hesitate to reach out. 
                Our team is ready to assist you with any inquiries you may have.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/contact" 
                  className="bg-menna-teal hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-all"
                >
                  Contact Us
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

export default FAQ;
