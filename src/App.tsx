
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PostalDonation from "./pages/PostalDonation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/impact" element={<NotFound />} />
          <Route path="/gallery" element={<NotFound />} />
          <Route path="/projects" element={<NotFound />} />
          <Route path="/future-plans" element={<NotFound />} />
          <Route path="/donate" element={<NotFound />} />
          <Route path="/postal-donation" element={<PostalDonation />} />
          <Route path="/partners" element={<NotFound />} />
          <Route path="/become-member" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
