import { useState } from 'react';
import CategoryPage from '@/components/CategoryPage';

const LifePage = () => {
  return (
    <CategoryPage 
      category="life"
      title="Labubu Life"
      description="Follow Labubu into every warm moment of daily life, from the comfort of home to outdoor adventures, experiencing the beautiful moments in life."
      gradientFrom="green"
      gradientTo="emerald"
    />
  );
};

export default LifePage;