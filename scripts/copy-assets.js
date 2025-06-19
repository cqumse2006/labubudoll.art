const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, '../public');
const destDir = path.join(__dirname, '../dist');

// 确保目标目录存在
fs.ensureDirSync(destDir);

// 复制 public 目录下的所有内容到 dist 目录
fs.copySync(sourceDir, destDir, { overwrite: true });

console.log('静态资源复制完成！');
