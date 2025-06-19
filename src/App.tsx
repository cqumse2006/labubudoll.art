import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

import HomePage from '@/pages/HomePage';
import DesignPage from '@/pages/DesignPage';
import LifePage from '@/pages/LifePage';
import SportPage from '@/pages/SportPage';
import SpecialPage from '@/pages/SpecialPage';
import FAQPage from '@/pages/FAQPage';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10 // 10 minutes
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient} data-id="u6m5nkbw5" data-path="src/App.tsx">
      <TooltipProvider data-id="zrhvmtrcr" data-path="src/App.tsx">
        <Router data-id="voyl4rg2x" data-path="src/App.tsx">
          <div className="min-h-screen bg-background" data-id="pw3rm471d" data-path="src/App.tsx">
            <Routes data-id="y5cwbl8y5" data-path="src/App.tsx">
              <Route path="/" element={<HomePage data-id="1k0dqpql2" data-path="src/App.tsx" />} data-id="mkx7gdilo" data-path="src/App.tsx" />
              <Route path="/design" element={<DesignPage data-id="k762lpv7f" data-path="src/App.tsx" />} data-id="vskgwm26p" data-path="src/App.tsx" />
              <Route path="/life" element={<LifePage data-id="xxgz1708a" data-path="src/App.tsx" />} data-id="mlb1zslcz" data-path="src/App.tsx" />
              <Route path="/sport" element={<SportPage data-id="rrc3gr6pl" data-path="src/App.tsx" />} data-id="qnvf9ammf" data-path="src/App.tsx" />
              <Route path="/special" element={<SpecialPage data-id="kzks7dv9b" data-path="src/App.tsx" />} data-id="lesq9truy" data-path="src/App.tsx" />
              <Route path="/faq" element={<FAQPage data-id="cvzuzm5fl" data-path="src/App.tsx" />} data-id="1vasz36pu" data-path="src/App.tsx" />
              <Route path="*" element={<NotFound data-id="7071gxd3u" data-path="src/App.tsx" />} data-id="b2kk7zg28" data-path="src/App.tsx" />
            </Routes>
          </div>
        </Router>
        <Toaster data-id="by2lvskje" data-path="src/App.tsx" />
      </TooltipProvider>
    </QueryClientProvider>);

}

export default App;