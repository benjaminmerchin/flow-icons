const fs = require('fs');
const path = require('path');

// Lire tous les fichiers SVG
const svgDir = path.join(__dirname, 'svg');
const srcDir = path.join(__dirname, 'src');
const iconsDir = path.join(srcDir, 'icons');

// Créer les dossiers nécessaires
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir);
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir);

// Fonction pour convertir kebab-case en PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Fonction pour extraire le nom de base d'un fichier SVG
function getIconName(filename) {
  if (filename.endsWith('-fill.svg')) {
    return filename.slice(0, -9); // Enlever "-fill.svg"
  } else if (filename.endsWith('-.svg')) {
    return filename.slice(0, -5); // Enlever "-.svg"
  } else {
    return filename.slice(0, -4); // Enlever ".svg"
  }
}

// Fonction pour transformer le contenu SVG en composant React
function svgToReactComponent(svgContent, componentName, props = {}) {
  // Extraire le contenu interne du SVG
  const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgMatch) return null;
  
  const innerSvg = svgMatch[1];
  
  // Remplacer les attributs fill="#1A1A1A" par {color}
  // Traiter aussi les attributs avec des tirets
  let processedSvg = innerSvg.replace(/fill="#1A1A1A"/g, 'fill={color}');
  processedSvg = processedSvg.replace(/fill-rule=/g, 'fillRule=');
  processedSvg = processedSvg.replace(/clip-rule=/g, 'clipRule=');
  
  return `import React from 'react';

interface ${componentName}Props {
  size?: number | string;
  color?: string;
}

function ${componentName}({ 
  size = 24, 
  color = "currentColor" 
}: ${componentName}Props) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      ${processedSvg.trim()}
    </svg>
  );
}

export default ${componentName};
`;
}

// Fonction pour créer le wrapper
function createWrapper(iconName, hasOutline, hasFilled) {
  const PascalName = toPascalCase(iconName);
  
  let imports = '';
  let renderLogic = '';
  
  if (hasOutline && hasFilled) {
    imports = `import ${PascalName}Outline from './${PascalName}Outline';
import ${PascalName}Filled from './${PascalName}Filled';`;
    
    renderLogic = `  return filled ? (
    <${PascalName}Filled size={size} color={color} />
  ) : (
    <${PascalName}Outline size={size} color={color} />
  );`;
  } else if (hasOutline) {
    imports = `import ${PascalName}Outline from './${PascalName}Outline';`;
    renderLogic = `  return <${PascalName}Outline size={size} color={color} />;`;
  } else if (hasFilled) {
    imports = `import ${PascalName}Filled from './${PascalName}Filled';`;
    renderLogic = `  return <${PascalName}Filled size={size} color={color} />;`;
  }
  
  return `import React from 'react';
${imports}

interface ${PascalName}Props {
  size?: number | string;
  color?: string;${hasOutline && hasFilled ? '\n  filled?: boolean;' : ''}
}

function ${PascalName}({ 
  size = 24, 
  color = "currentColor"${hasOutline && hasFilled ? ',\n  filled = false' : ''} 
}: ${PascalName}Props) {
${renderLogic}
}

export default ${PascalName};
`;
}

// Lire tous les fichiers SVG
const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));

// Grouper les fichiers par nom de base
const iconGroups = {};

svgFiles.forEach(file => {
  const baseName = getIconName(file);
  if (!iconGroups[baseName]) {
    iconGroups[baseName] = {};
  }
  
  if (file.endsWith('-fill.svg')) {
    iconGroups[baseName].filled = file;
  } else {
    iconGroups[baseName].outline = file;
  }
});

// Générer les composants pour chaque groupe d'icônes
const exportStatements = [];

Object.keys(iconGroups).forEach(iconName => {
  const PascalName = toPascalCase(iconName);
  const iconDir = path.join(iconsDir, PascalName);
  
  // Créer le dossier pour l'icône
  if (!fs.existsSync(iconDir)) {
    fs.mkdirSync(iconDir);
  }
  
  const group = iconGroups[iconName];
  let hasOutline = false;
  let hasFilled = false;
  
  // Générer le composant Outline si il existe
  if (group.outline) {
    const svgPath = path.join(svgDir, group.outline);
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    const componentCode = svgToReactComponent(svgContent, `${PascalName}Outline`);
    
    if (componentCode) {
      fs.writeFileSync(path.join(iconDir, `${PascalName}Outline.tsx`), componentCode);
      hasOutline = true;
    }
  }
  
  // Générer le composant Filled si il existe
  if (group.filled) {
    const svgPath = path.join(svgDir, group.filled);
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    const componentCode = svgToReactComponent(svgContent, `${PascalName}Filled`);
    
    if (componentCode) {
      fs.writeFileSync(path.join(iconDir, `${PascalName}Filled.tsx`), componentCode);
      hasFilled = true;
    }
  }
  
  // Générer le wrapper principal
  if (hasOutline || hasFilled) {
    const wrapperCode = createWrapper(iconName, hasOutline, hasFilled);
    fs.writeFileSync(path.join(iconDir, `${PascalName}.tsx`), wrapperCode);
    
    // Créer un fichier index.ts pour le dossier
    const indexContent = `export { default } from './${PascalName}';
${hasOutline ? `export { default as ${PascalName}Outline } from './${PascalName}Outline';` : ''}
${hasFilled ? `export { default as ${PascalName}Filled } from './${PascalName}Filled';` : ''}
`;
    fs.writeFileSync(path.join(iconDir, 'index.ts'), indexContent);
    
    exportStatements.push(`export { default as ${PascalName}${hasOutline && hasFilled ? ', ' + PascalName + 'Outline, ' + PascalName + 'Filled' : hasOutline ? ', ' + PascalName + 'Outline' : hasFilled ? ', ' + PascalName + 'Filled' : ''} } from './${PascalName}';`);
  }
});

// Créer le fichier index.ts principal
const mainIndexContent = exportStatements.join('\n') + '\n';
fs.writeFileSync(path.join(iconsDir, 'index.ts'), mainIndexContent);

console.log(`Généré ${Object.keys(iconGroups).length} composants d'icônes avec succès !`);