import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryPage from '@/components/CategoryPage';

const SpecialPage = () => {
  return (
    <CategoryPage 
      category="special"
      title="Labubu Special"
      description="Explore the most precious special edition collection of Labubu, each piece is a limited-release art treasure, carrying unique commemorative significance and collectible value."
      gradientFrom="purple"
      gradientTo="indigo"
    />
  );
};

export default SpecialPage;