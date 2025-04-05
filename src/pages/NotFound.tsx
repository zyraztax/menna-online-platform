
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-slate-900 py-16 px-4">
          <div className="text-center max-w-md">
            <h1 className="text-9xl font-bold text-menna-teal mb-4">404</h1>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">Oops! Page not found</p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="curved-button inline-flex">
              Return to Home
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default NotFound;
