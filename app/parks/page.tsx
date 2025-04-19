'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Dropdown from '@/components/shared/dropdown';

type Park = {
  id: string;
  fullName: string;
  description: string;
  states: string;
  images: {
    url: string;
    altText: string;
  }[];
};

// List of US states for the dropdown
const states = [
  { value: '', label: 'All States' },
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

export default function ParksPage() {
  const [allParks, setAllParks] = useState<Park[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState('');

  // Fetch all parks on initial load
  useEffect(() => {
    async function fetchParks() {
      try {
        const res = await fetch('/api/parks');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        if (!data.data || !Array.isArray(data.data)) {
          throw new Error('Invalid data format received');
        }
        
        setAllParks(data.data);
      } catch (error) {
        console.error('Error fetching parks:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch parks');
      } finally {
        setLoading(false);
      }
    }
    fetchParks();
  }, []);

  // Filter and randomize parks based on selected state
  const filteredParks = useMemo(() => {
    let parks = allParks;
    
    // Filter by state if selected
    if (selectedState) {
      parks = parks.filter(park => 
        park.states.split(',').some(state => 
          state.trim() === selectedState
        )
      );
    }
    
    // Randomize the array
    const shuffled = [...parks].sort(() => Math.random() - 0.5);
    
    // Limit to 9 parks
    return shuffled.slice(0, 9);
  }, [allParks, selectedState]);

  if (loading) {
    return (
      <main className="p-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl">Loading parks...</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-8">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          <h2 className="font-bold">Error</h2>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">National Parks</h1>
        <div className="w-64">
          <Dropdown
            options={states}
            value={selectedState}
            onChange={setSelectedState}
            placeholder="Filter by State"
            label="State"
          />
        </div>
      </div>
      
      {filteredParks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No parks found in the selected state.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParks.map((park) => (
            <Link 
              key={park.id}
              href={`/parks/${park.id}`}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow overflow-hidden"
            >
              {park.images && park.images[0] && (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={park.images[0].url}
                    alt={park.images[0].altText || park.fullName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <h2 className="text-2xl font-semibold mb-2">{park.fullName}</h2>
              <p className="text-gray-600 mb-2">{park.states}</p>
              <p className="text-gray-700 line-clamp-3">{park.description}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
} 