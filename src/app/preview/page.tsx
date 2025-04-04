'use client';

import { useState, useEffect } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function PreviewPage() {
  const [url, setUrl] = useState('http://localhost:3000');
  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(800);
  const [mode, setMode] = useState<'single' | 'responsive'>('single');
  const [loading, setLoading] = useState(false);
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const captureScreenshot = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({
        url,
        mode,
        width: width.toString(),
        height: height.toString(),
      });
      
      const response = await fetch(`/api/screenshot?${params}`);
      const data = await response.json();
      
      if (data.success) {
        setScreenshots(Array.isArray(data.screenshots) ? data.screenshots : [data.screenshots]);
      } else {
        setError(data.error || 'Une erreur est survenue');
      }
    } catch (err) {
      setError((err as Error).message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold mb-4">Prévisualisation avec Puppeteer</h1>
        
        <Card>
          <Card.Header>
            <Card.Title>Configuration</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div>
                <label htmlFor="url" className="block mb-1 font-medium">
                  URL à capturer
                </label>
                <input
                  type="text"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-black/[.1] dark:border-white/[.1] rounded-md bg-transparent"
                  placeholder="http://localhost:3000"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="width" className="block mb-1 font-medium">
                    Largeur (px)
                  </label>
                  <input
                    type="number"
                    id="width"
                    value={width}
                    onChange={(e) => setWidth(parseInt(e.target.value, 10))}
                    className="w-full px-4 py-2 border border-black/[.1] dark:border-white/[.1] rounded-md bg-transparent"
                  />
                </div>
                
                <div className="flex-1">
                  <label htmlFor="height" className="block mb-1 font-medium">
                    Hauteur (px)
                  </label>
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value, 10))}
                    className="w-full px-4 py-2 border border-black/[.1] dark:border-white/[.1] rounded-md bg-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-1 font-medium">
                  Mode de capture
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="mode"
                      checked={mode === 'single'}
                      onChange={() => setMode('single')}
                      className="mr-2"
                    />
                    Capture unique
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="mode"
                      checked={mode === 'responsive'}
                      onChange={() => setMode('responsive')}
                      className="mr-2"
                    />
                    Responsive (mobile, tablette, desktop)
                  </label>
                </div>
              </div>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button
              onClick={captureScreenshot}
              disabled={loading}
              variant="primary"
            >
              {loading ? 'Capture en cours...' : 'Capturer l\'écran'}
            </Button>
          </Card.Footer>
        </Card>
        
        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-4 rounded-md">
            {error}
          </div>
        )}
        
        {screenshots.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Captures d&apos;écran</h2>
            
            <div className="grid grid-cols-1 gap-8">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    {mode === 'responsive' 
                      ? screenshot.includes('mobile') 
                        ? 'Mobile' 
                        : screenshot.includes('tablet') 
                          ? 'Tablette' 
                          : 'Desktop'
                      : 'Capture d\'écran'}
                  </h3>
                  <div className="border border-black/[.1] dark:border-white/[.1] rounded-md overflow-hidden">
                    <img 
                      src={screenshot} 
                      alt={`Capture d'écran ${index + 1}`} 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex justify-end">
                    <a 
                      href={screenshot} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Voir en plein écran
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
