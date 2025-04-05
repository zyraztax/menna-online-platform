
import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-menna-teal mb-4">Contact Us</h3>
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-2 text-menna-teal flex-shrink-0 mt-1" />
              <div>
                <p>+251 934641309</p>
                <p>+251 918123456</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-2 text-menna-teal flex-shrink-0 mt-1" />
              <p>info@mennacenter.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-menna-teal mb-4">Address</h3>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-menna-teal flex-shrink-0 mt-1" />
              <p>Gondar, Ethiopia</p>
            </div>
            <div className="h-40 w-full rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3021.5!2d37.459792!3d12.619375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-menna-teal mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://web.facebook.com/mennaforelders?_rdc=1&_rdr#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-menna-teal hover:text-menna-red transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://t.me/menacharity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-menna-teal hover:text-menna-red transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.296c-.146.658-.537.818-1.084.51l-3-2.21-1.447 1.394c-.16.16-.295.295-.603.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.538-.196 1.006.128.832.924z"/>
                </svg>
                <span className="sr-only">Telegram</span>
              </a>
              <a 
                href="https://www.youtube.com/@-menna5953" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-menna-teal hover:text-menna-red transition-colors"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <img 
              src="/lovable-uploads/04b07ea3-2216-455c-9ce2-854407f2ce2d.png" 
              alt="Menna logo" 
              className="h-12 w-auto mt-6" 
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-menna-teal">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>Where is your location?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-neutral-300 mt-3 group-open:animate-fadeIn">
                We are located in Gondar, Ethiopia. You can find our exact location on the map above.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>How can I help?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-neutral-300 mt-3 group-open:animate-fadeIn">
                You can help by donating money, goods, or your time as a volunteer. Visit our Donate or Become a Member pages for more information.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>How do you take care of elders?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-neutral-300 mt-3 group-open:animate-fadeIn">
                We provide shelter, food, hygiene services, medical support, and companionship to the elderly in need. Our holistic approach ensures they receive physical and emotional care.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>What is the situation of orphans' education?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 dark:text-neutral-300 mt-3 group-open:animate-fadeIn">
                We support orphans' education by providing school supplies, uniforms, and tuition fees. We also offer mentorship and a safe environment for learning and development.
              </p>
            </details>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Menna - Home for the Elderly and Mentally Disabled. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
