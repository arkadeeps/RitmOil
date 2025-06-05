
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import Clients from "./pages/Clients";
import Mission from "./pages/about/Mission";
import History from "./pages/about/History";
import Management from "./pages/about/Management";
import Assets from "./pages/about/Assets";
import Hotel from "./pages/services/Hotel";
import Catering from "./pages/services/Catering";
import Transport from "./pages/services/Transport";
import ManagementService from "./pages/services/Management";
import Franchise from "./pages/services/Franchise";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/clients" element={<Clients />} />
            {/* About pages */}
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/management" element={<Management />} />
            <Route path="/about/assets" element={<Assets />} />
            {/* Services pages */}
            <Route path="/services/hotel" element={<Hotel />} />
            <Route path="/services/catering" element={<Catering />} />
            <Route path="/services/transport" element={<Transport />} />
            <Route path="/services/management" element={<ManagementService />} />
            <Route path="/services/franchise" element={<Franchise />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
