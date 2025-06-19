import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryPage from '@/components/CategoryPage';

const DesignPage = () => {
  return (
    <CategoryPage 
      category="design"
      title="Labubu Design"
      description="Explore the essence of Labubu design series, from classic originals to modern interpretations, each design carries unique artistic value and creative inspiration."
      gradientFrom="pink"
      gradientTo="rose"
    />
  );
};

export default DesignPage;