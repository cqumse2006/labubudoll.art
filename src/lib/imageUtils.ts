// Helper function to get image paths from the public directory
export const getLocalImagePath = (category: string, index: number): string => {
  // Map category names to folder names and prefixes
  const folderMap: Record<string, { folder: string; prefix: string }> = {
    design: { folder: 'Labubu Design', prefix: 'Labubu Design ' },
    life: { folder: 'Labubu Life', prefix: 'Labubu Life ' },
    sport: { folder: 'Labubu Sport', prefix: 'Labubu Sport ' },
    special: { folder: 'Labubu Special', prefix: 'Labubu Special ' }
  };

  const { folder, prefix } = folderMap[category] || { folder: 'default', prefix: '' };
  // Format the number with leading zeros
  const paddedIndex = (index + 1).toString().padStart(2, '0');
  // In a Vite/React app, we can reference files in the public directory directly
  // Using relative path for Vercel deployment
  return `./images/${folder}/${prefix}${paddedIndex}.png`;
};

// Function to generate an array of local image paths
export const generateLocalImages = (category: string, count: number = 8): string[] => {
  return Array.from({ length: count }, (_, i) => getLocalImagePath(category, i));
};
