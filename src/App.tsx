
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PostalDonation from "./pages/PostalDonation";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import FuturePlans from "./pages/FuturePlans";
import Donate from "./pages/Donate";
import Partners from "./pages/Partners";
import BecomeMember from "./pages/BecomeMember";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/future-plans" element={<FuturePlans />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/postal-donation" element={<PostalDonation />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/become-member" element={<BecomeMember />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
