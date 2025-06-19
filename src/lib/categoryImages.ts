// Function to get all image paths for a specific category
export const getCategoryImages = (category: string): string[] => {
  // Map category names to folder names
  const folderMap: Record<string, string> = {
    design: 'Labubu Design',
    life: 'Labubu Life',
    sport: 'Labubu Sport',
    special: 'Labubu Special'
  };

  const folderName = folderMap[category] || '';
  
  // In a real app, you would read the directory contents here
  // For now, we'll return an array of expected image paths
  // The actual files should be in the /image/{folderName}/ directory
  // with names like "Labubu Design 01.png", "Labubu Design 02.png", etc.
  
  // This is a placeholder - in a real app, you would read the directory contents
  // and filter for image files
  const imageCounts: Record<string, number> = {
    'design': 12,  // Update these counts based on actual number of images
    'life': 12,
    'sport': 12,
    'special': 12
  };
  
  const count = imageCounts[category] || 0;
  const images: string[] = [];
  
  for (let i = 1; i <= count; i++) {
    const paddedIndex = i.toString().padStart(2, '0');
    const imageName = `${folderName} ${paddedIndex}.png`;
    images.push(`/image/${folderName}/${imageName}`);
  }
  
  return images;
};
