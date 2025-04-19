import { NextRequest, NextResponse } from 'next/server';

const API_KEY_NP = process.env.NPS_API_KEY;

// declare the params type as a Promise
type Params = Promise<{ parkCode: string }>;

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  // await the promise before destructuring
  const { parkCode } = await params;

  if (!API_KEY_NP) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://developer.nps.gov/api/v1/thingstodo?parkCode=${parkCode}&q=trails&api_key=${API_KEY_NP}`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return NextResponse.json(data.data);
  } catch (error) {
    console.error('Error fetching trails:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trails' },
      { status: 500 }
    );
  }
}
