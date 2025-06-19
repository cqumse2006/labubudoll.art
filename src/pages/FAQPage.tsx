import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white" data-id="xykh1upw2" data-path="src/pages/FAQPage.tsx">
      <Header data-id="0f48rartr" data-path="src/pages/FAQPage.tsx" />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-16" data-id="aht1zut64" data-path="src/pages/FAQPage.tsx">
        <div className="container mx-auto px-4" data-id="e49hz7uts" data-path="src/pages/FAQPage.tsx">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-700 mb-6 transition-colors" data-id="gq7pqqhat" data-path="src/pages/FAQPage.tsx">
            <ArrowLeft className="mr-2 h-4 w-4" data-id="p8pnf0xx8" data-path="src/pages/FAQPage.tsx" />
            返回首页
          </Link>
        </div>
      </div>

      <FAQ data-id="wqjt5lvw9" data-path="src/pages/FAQPage.tsx" />
      <Footer data-id="n82qijdav" data-path="src/pages/FAQPage.tsx" />
    </div>);

};

export default FAQPage;