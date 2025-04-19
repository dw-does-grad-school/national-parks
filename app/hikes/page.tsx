'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface HikingTrail {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  location: string;
  duration: string;
  season: string;
  accessibility: string;
  petsDescription: string;
  activityDescription: string;
  url: string;
}

export default function HikesPage() {
  const [trails, setTrails] = useState<HikingTrail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        console.log('Fetching trails...');
        const response = await fetch(`/api/hikingTrailsInfo/glac`);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          console.error('Error response:', errorData);
          throw new Error(`Failed to fetch trails: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received from API');
        }
        
        setTrails(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching trails');
      } finally {
        setLoading(false);
      }
    };

    fetchTrails();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-orange-400">Loading Trails...</h1>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-orange-400">Error</h1>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-red-700 font-semibold mb-2">Something went wrong:</p>
            <p className="text-red-600">{error}</p>
            <p className="text-sm text-red-500 mt-2">
              Please try refreshing the page or contact support if the problem persists.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (trails.length === 0) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-orange-400">No Trails Found</h1>
          <p className="text-gray-600">There are currently no hiking trails available for this park.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-orange-400">Hiking Trails</h1>
        
        <div className="grid grid-cols-1 gap-6">
          {trails.map((trail) => (
            <Card key={trail.id} className="hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-orange-400">{trail.title}</h2>
                <p className="text-gray-600 mb-4">{trail.shortDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-green-700">Location</h3>
                    <p>{trail.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700">Duration</h3>
                    <p>{trail.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700">Season</h3>
                    <p>{trail.season}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700">Accessibility</h3>
                    <p>{trail.accessibility}</p>
                  </div>
                </div>

                {trail.petsDescription && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-green-700">Pets</h3>
                    <p>{trail.petsDescription}</p>
                  </div>
                )}

                {trail.activityDescription && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-green-700">Activities</h3>
                    <p>{trail.activityDescription}</p>
                  </div>
                )}

                {trail.url && (
                  <a 
                    href={trail.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
