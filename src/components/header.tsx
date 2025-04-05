
import { ThemeToggle } from "./theme-toggle";
import { SidebarNav } from "./sidebar-nav";

export function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between">
      <SidebarNav />
      
      <div className="flex-1 flex justify-center">
        <img 
          src="/lovable-uploads/04b07ea3-2216-455c-9ce2-854407f2ce2d.png" 
          alt="Menna logo" 
          className="h-16 w-auto" 
        />
      </div>
      
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
