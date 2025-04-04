import { NextRequest, NextResponse } from 'next/server';
import { captureScreenshot, captureResponsiveScreenshots } from '../../../scripts/screenshot';
import path from 'path';
import fs from 'fs';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url') || 'http://localhost:3000';
    const mode = searchParams.get('mode') || 'single';
    const width = parseInt(searchParams.get('width') || '1280', 10);
    const height = parseInt(searchParams.get('height') || '800', 10);
    
    // Créer le dossier public/screenshots s'il n'existe pas
    const screenshotsDir = path.join(process.cwd(), 'public', 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    
    let result;
    
    if (mode === 'responsive') {
      // Capturer des captures d'écran pour différentes tailles d'écran
      result = await captureResponsiveScreenshots(url, screenshotsDir);
      
      // Convertir les chemins absolus en chemins relatifs pour l'URL
      result = result.map(p => `/screenshots/${path.basename(p)}`);
    } else {
      // Capturer une seule capture d'écran
      const outputPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
      await captureScreenshot(url, outputPath, { width, height });
      
      // Convertir le chemin absolu en chemin relatif pour l'URL
      result = `/screenshots/${path.basename(outputPath)}`;
    }
    
    return NextResponse.json({ success: true, screenshots: result });
  } catch (error) {
    console.error('Erreur lors de la capture d\'écran:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
