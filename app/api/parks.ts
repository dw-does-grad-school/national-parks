import { NextResponse } from 'next/server';

const NPS_API_URL = 'https://developer.nps.gov/api/v1/parks';

interface NPSImage {
  url: string;
  altText: string;
}

interface NPSPark {
  id: string;
  fullName: string;
  description: string;
  states: string;
  images: NPSImage[];
}

interface NPSResponse {
  total: string;
  limit: string;
  start: string;
  data: NPSPark[];
}

export async function GET(request: Request) {
  try {
    // Log environment variable status
    console.log('NPS_API_KEY exists:', !!process.env.NPS_API_KEY);
    console.log('NPS_API_KEY length:', process.env.NPS_API_KEY?.length);

    if (!process.env.NPS_API_KEY) {
      console.error('NPS_API_KEY is not set');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Get state code from query parameters if provided
    const { searchParams } = new URL(request.url);
    const stateCode = searchParams.get('stateCode');

    // Construct the API URL
    let apiUrl = `${NPS_API_URL}?api_key=${process.env.NPS_API_KEY}`;
    if (stateCode) {
      apiUrl += `&stateCode=${stateCode}`;
    }

    console.log('Fetching from URL:', apiUrl.replace(process.env.NPS_API_KEY, 'REDACTED'));

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('NPS API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error(`NPS API responded with status: ${response.status}`);
    }

    const data = await response.json() as NPSResponse;
    
    // Transform the data to include only the fields we need
    const transformedData = {
      ...data,
      data: data.data.map((park) => ({
        id: park.id,
        fullName: park.fullName,
        description: park.description,
        states: park.states,
        images: park.images?.map((image) => ({
          url: image.url,
          altText: image.altText
        })) || []
      }))
    };

    console.log('Received data:', {
      total: transformedData.total,
      limit: transformedData.limit,
      start: transformedData.start,
      dataLength: transformedData.data?.length
    });
    
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('Error fetching parks:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch parks data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
