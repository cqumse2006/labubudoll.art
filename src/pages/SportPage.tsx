import { useState } from 'react';
import CategoryPage from '@/components/CategoryPage';

const SportPage = () => {
  return (
    <CategoryPage 
      category="sport"
      title="Labubu Sport"
      description="Witness Labubu's spirited performance on the sports field, from football to basketball, from tennis court to gym, feel the vitality and passion brought by sports."
      gradientFrom="blue"
      gradientTo="cyan"
    />
  );
};

export default SportPage;