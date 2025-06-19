import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Image as ImageIcon } from 'lucide-react';
import { getLocalImagePath } from '@/lib/imageUtils';

interface GallerySectionProps {
  title: string;
  description: string;
  images: string[];
  category: string;
  gradient: string;
}

const GallerySection = ({ title, description, images, category, gradient }: GallerySectionProps) => {
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const handleLike = (index: number) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedImages(newLiked);
  };

  return (
    <section className="py-16 px-4" data-id="yf05awxpc" data-path="src/components/GallerySection.tsx">
      <div className="container mx-auto" data-id="nnuy774a0" data-path="src/components/GallerySection.tsx">
        {/* Section Header */}
        <div className="text-center mb-12" data-id="d8w335ne8" data-path="src/components/GallerySection.tsx">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} data-id="e9n9xcv68" data-path="src/components/GallerySection.tsx">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto" data-id="70t6qyr2p" data-path="src/components/GallerySection.tsx">
            {description}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8" data-id="w66dh7hn9" data-path="src/components/GallerySection.tsx">
          {images.slice(0, 8).map((image, index) =>
          <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-id="u03om72t6" data-path="src/components/GallerySection.tsx">
              <CardContent className="p-0 relative" data-id="cidu0sb3d" data-path="src/components/GallerySection.tsx">
                <div className="aspect-square overflow-hidden bg-gray-50" data-id="9gtfy0j5r" data-path="src/components/GallerySection.tsx">
                  {image ? (
                    <img
                      src={image}
                      alt={`${title} ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.parentElement?.classList.add('bg-gray-100');
                        target.parentElement?.classList.remove('aspect-square');
                        target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-gray-400" />
                    </div>
                  )}

                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center" data-id="oyt1w01mu" data-path="src/components/GallerySection.tsx">
                  <Button
                  variant="ghost"
                  size="sm"
                  className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  likedImages.has(index) ? 'text-red-500' : 'text-white'}`
                  }
                  onClick={() => handleLike(index)} data-id="28hca16ki" data-path="src/components/GallerySection.tsx">

                    <Heart className={`h-5 w-5 ${likedImages.has(index) ? 'fill-current' : ''}`} data-id="7z81y54vq" data-path="src/components/GallerySection.tsx" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* View More Button */}
        <div className="text-center" data-id="22jq7pjep" data-path="src/components/GallerySection.tsx">
          <Link to={`/${category}`} data-id="82uyyy804" data-path="src/components/GallerySection.tsx">
            <Button
              size="lg"
              className={`bg-gradient-to-r ${gradient} text-white hover:shadow-lg transition-all duration-300 group`} data-id="2mifzattx" data-path="src/components/GallerySection.tsx">

              View More {title}
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" data-id="drztgubrv" data-path="src/components/GallerySection.tsx" />
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default GallerySection;