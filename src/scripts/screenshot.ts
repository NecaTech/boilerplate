import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

/**
 * Capture une capture d'écran d'une page web
 * @param url URL de la page à capturer
 * @param outputPath Chemin de sortie pour la capture d'écran
 * @param viewport Configuration de la taille de la fenêtre
 */
export async function captureScreenshot(
  url: string,
  outputPath: string,
  viewport: { width: number; height: number } = { width: 1280, height: 800 }
): Promise<string> {
  // Créer le dossier de sortie s'il n'existe pas
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Lancer le navigateur
  const browser = await puppeteer.launch({
    headless: 'new', // Utiliser le nouveau mode headless
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    // Ouvrir une nouvelle page
    const page = await browser.newPage();
    
    // Configurer la taille de la fenêtre
    await page.setViewport(viewport);
    
    // Naviguer vers l'URL
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Prendre une capture d'écran
    await page.screenshot({ path: outputPath, fullPage: true });
    
    console.log(`Capture d'écran enregistrée à ${outputPath}`);
    
    return outputPath;
  } catch (error) {
    console.error('Erreur lors de la capture d\'écran:', error);
    throw error;
  } finally {
    // Fermer le navigateur
    await browser.close();
  }
}

/**
 * Capture des captures d'écran pour différentes tailles d'écran
 * @param url URL de la page à capturer
 * @param outputDir Dossier de sortie pour les captures d'écran
 */
export async function captureResponsiveScreenshots(
  url: string,
  outputDir: string
): Promise<string[]> {
  const devices = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 },
  ];
  
  const outputPaths: string[] = [];
  
  for (const device of devices) {
    const outputPath = path.join(outputDir, `screenshot-${device.name}.png`);
    await captureScreenshot(url, outputPath, { width: device.width, height: device.height });
    outputPaths.push(outputPath);
  }
  
  return outputPaths;
}

// Si le script est exécuté directement
if (require.main === module) {
  const url = process.argv[2] || 'http://localhost:3000';
  const outputDir = process.argv[3] || './screenshots';
  
  captureResponsiveScreenshots(url, outputDir)
    .then((paths) => {
      console.log('Captures d\'écran terminées:', paths);
    })
    .catch((error) => {
      console.error('Erreur:', error);
      process.exit(1);
    });
}
