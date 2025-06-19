import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCategoryImages } from '@/lib/categoryImages';

interface CategoryPageProps {
  category: 'design' | 'life' | 'sport' | 'special';
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

// Function to generate a random date between March 1, 2025 and June 1, 2025
const formatDate = (index: number) => {
  const months = ['March', 'April', 'May', 'June'];
  
  // Generate a pseudo-random but consistent date based on index
  const monthIndex = Math.floor((index * 13) % 4); // 0-3 for March-June
  const day = String(Math.max(1, (index * 7) % 28 + 1)).padStart(2, '0'); // 1-28
  
  return `${months[monthIndex]} ${day} 2025`;
};

const CategoryPage = ({ category, title, description, gradientFrom, gradientTo }: CategoryPageProps) => {
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [images, setImages] = useState<Array<{
    id: number;
    src: string;
    title: string;
    category: string;
    year: number;
  }>>([]);

  useEffect(() => {
    const categoryImages = getCategoryImages(category);
    const loadedImages = categoryImages.map((src, index) => ({
      id: index + 1,
      src,
      title: `${title.split(' ')[0]} ${index + 1}`,
      category: index % 3 === 0 ? 'classic' : index % 3 === 1 ? 'modern' : 'creative',
      year: index  // This will be used in formatDate function
    }));
    setImages(loadedImages);
  }, [category, title]);

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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <div className={`bg-gradient-to-r from-${gradientFrom}-50 to-${gradientTo}-50 py-16`}>
        <div className="container mx-auto px-4">
          <Link to="/" className={`inline-flex items-center text-${gradientFrom}-600 hover:text-${gradientFrom}-700 mb-6 transition-colors`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-${gradientFrom}-600 to-${gradientTo}-600 bg-clip-text text-transparent`}>
            {title} Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {description}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Request wallpaper via <a href="mailto:cqumse2006@gmail.com" className="text-blue-600 hover:underline">cqumse2006@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Results Count */}
        <p className="text-sm text-gray-600 mb-6">
          Showing {images.length} results
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card key={image.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 relative">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  {image.src ? (
                    <img
                      src={image.src}
                      alt={image.title}
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      likedImages.has(index) ? 'text-red-500' : 'text-white'
                    }`}
                    onClick={() => handleLike(index)}
                  >
                    <Heart className={`h-5 w-5 ${likedImages.has(index) ? 'fill-current' : ''}`} />
                  </Button>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {formatDate(image.year)}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs text-white border-white/50"
                    >
                      {image.category === 'classic' ? 'Classic' : image.category === 'modern' ? 'Modern' : 'Creative'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
