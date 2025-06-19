import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50" data-id="9wloob7dh" data-path="src/components/Hero.tsx">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-indigo-400/10" data-id="o8oonag10" data-path="src/components/Hero.tsx" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4" data-id="jk9wxo05t" data-path="src/components/Hero.tsx">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent" data-id="pxs0nk873" data-path="src/components/Hero.tsx">
          Share The Latest Labubu Gallery Collection
        </h1>
        
        {/* Description */}
        <div className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto" data-id="4k6qetkst" data-path="src/components/Hero.tsx">
          <p className="mb-4" data-id="aot5gb6r2" data-path="src/components/Hero.tsx">
            Welcome to the magical world of Labubu! Labubu is one of the most popular IP characters under Pop Mart, this charismatic little elf has captured the hearts of fans worldwide.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => {
            document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
          }} data-id="w6bonuuaw" data-path="src/components/Hero.tsx">
          Explore Labubu World
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-50 animate-bounce" data-id="orh0idae8" data-path="src/components/Hero.tsx" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s' }} data-id="p9v5ygnxq" data-path="src/components/Hero.tsx" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }} data-id="boxjjtv3p" data-path="src/components/Hero.tsx" />
    </section>);

};

export default Hero;