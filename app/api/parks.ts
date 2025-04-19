import type { NextApiRequest, NextApiResponse } from 'next';

type Park = {
  id: string;
  fullName: string;
  description: string;
  [key: string]: any;
};

type NpsResponse = {
  data: Park[];
  total: string;
  limit: string;
  start: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NpsResponse | { error: string }>
) {
  const { stateCode } = req.query;

  if (typeof stateCode !== 'string') {
    res.status(400).json({ error: 'Invalid or missing stateCode parameter' });
    return;
  }

  const url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=10`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-Api-Key': process.env.NPS_API_KEY || '',
      },
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const data: NpsResponse = await response.json();
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
