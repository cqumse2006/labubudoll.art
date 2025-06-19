// Function to get all image paths for a specific category
export const getCategoryImages = (category: string): string[] => {
  console.log('[DEBUG] Getting images for category:', category);
  
  // Map category names to folder names
  const folderMap: Record<string, string> = {
    design: 'Labubu Design',
    life: 'Labubu Life',
    sport: 'Labubu Sport',
    special: 'Labubu Special'
  };

  const folderName = folderMap[category] || '';
  console.log('[DEBUG] Folder name:', folderName);
  
  // Image counts for each category
  const imageCounts: Record<string, number> = {
    'design': 12,
    'life': 12,
    'sport': 12,
    'special': 12
  };
  
  const count = imageCounts[category] || 0;
  console.log(`[DEBUG] Expected image count: ${count}`);
  
  const images: string[] = [];
  
  for (let i = 1; i <= count; i++) {
    const paddedIndex = i.toString().padStart(2, '0');
    const imageName = `${folderName} ${paddedIndex}.png`;
    // 使用相对路径，Vite 会自动处理资源路径
    const imagePath = `./images/${folderName}/${imageName}`;
    console.log(`[DEBUG] Generated image path ${i}:`, imagePath);
    images.push(imagePath);
  }
  
  console.log('[DEBUG] Total images found:', images.length);
  return images;
};
