import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  path: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { title: "About Us", path: "/about" },
  { title: "Our Impact", path: "/impact" },
  { title: "Gallery", path: "/gallery" },
  { title: "Projects", path: "/projects" },
  { title: "Future Plans", path: "/future-plans" },
  { title: "Donate", path: "/donate" },
  { title: "Postal Donation", path: "/postal-donation" },
  { title: "Partners", path: "/partners" },
  { title: "Become Member", path: "/become-member" },
  { title: "Contact Us", path: "/contact" },
  { title: "Questions", path: "/faq" },
  { title: "Change Language", path: "#", children: [
    { title: "English", path: "?lang=en" },
    { title: "Amharic", path: "?lang=am" },
  ]},
];

export function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const toggleExpand = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title) 
        : [...prev, title]
    );
  };

  return (
    <>
      <button 
        onClick={toggleSidebar} 
        className="fixed top-4 left-4 z-40 p-2 rounded-md bg-menna-teal text-white"
        aria-label="Toggle navigation"
      >
        <Menu size={24} />
      </button>
      
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleSidebar}
      />
      
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-sidebar text-sidebar-foreground shadow-lg transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/04b07ea3-2216-455c-9ce2-854407f2ce2d.png" 
              alt="Menna logo" 
              className="h-8 w-8 mr-2" 
            />
            <span className="font-bold">MENNA</span>
          </div>
          <button onClick={toggleSidebar} aria-label="Close navigation">
            <X size={20} className="text-sidebar-foreground" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.title}>
                {item.children ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleExpand(item.title)}
                      className="w-full flex items-center justify-between px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronRight
                        size={16}
                        className={cn(
                          "transition-transform duration-200",
                          expandedItems.includes(item.title) && "rotate-90"
                        )}
                      />
                    </button>
                    {expandedItems.includes(item.title) && (
                      <ul className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.title}>
                            <Link
                              to={child.path}
                              className="block px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                              onClick={toggleSidebar}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                    onClick={toggleSidebar}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
