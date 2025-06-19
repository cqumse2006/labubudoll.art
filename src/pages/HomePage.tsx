import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GallerySection from '@/components/GallerySection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { generateLocalImages } from '@/lib/imageUtils';

const HomePage = () => {
  // Generate local image paths from the image directory
  const getLocalImages = (category: string, count: number = 8) => {
    return generateLocalImages(category, count);
  };

  const galleryData = [
  {
    title: "Labubu Design",
    description: "Explore Labubu's classic design series and feel the unique charm and creative expression of original art.",
    images: getLocalImages('design'),
    category: 'design',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: "Labubu Life",
    description: "Discover Labubu's warm moments in daily life, where every detail is filled with the beauty of living.",
    images: getLocalImages('life'),
    category: 'life',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: "Labubu Sport",
    description: "Witness Labubu's athletic vitality and the spirit shown in various sports activities.",
    images: getLocalImages('sport'),
    category: 'sport',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: "Labubu Special",
    description: "Treasure Labubu's special limited series, each piece is a unique work of art.",
    images: getLocalImages('special'),
    category: 'special',
    gradient: 'from-purple-500 to-indigo-500'
  }];


  return (
    <div className="min-h-screen bg-white" data-id="wl5scfyx6" data-path="src/pages/HomePage.tsx">
      <Header data-id="euu6k4u8c" data-path="src/pages/HomePage.tsx" />
      <Hero data-id="uiloq5en5" data-path="src/pages/HomePage.tsx" />
      
      <main id="gallery" className="space-y-16" data-id="fgrvtqngm" data-path="src/pages/HomePage.tsx">
        {galleryData.map((section, index) =>
        <div key={section.category} className={index % 2 === 1 ? 'bg-gray-50' : ''} data-id="4yyhi89q5" data-path="src/pages/HomePage.tsx">
            <GallerySection {...section} data-id="103ptwgcj" data-path="src/pages/HomePage.tsx" />
          </div>
        )}
      </main>
      
      <FAQ data-id="zqw59b0qc" data-path="src/pages/HomePage.tsx" />
      <Footer data-id="7ov5v4hnb" data-path="src/pages/HomePage.tsx" />
    </div>);

};

export default HomePage;