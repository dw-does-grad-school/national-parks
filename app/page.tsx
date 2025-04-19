'use client';

import Image from "next/image";
import { useEffect, useState } from 'react';

type Park = {
  id: string;
  fullName: string;
  description: string;
};

export default function Home() {
  const [parks, setParks] = useState<Park[]>([]);

  useEffect(() => {
    async function fetchParks() {
      const res = await fetch('/api/parks?stateCode=SC');
      const data = await res.json();
      setParks(data.data || []);
    }
    fetchParks();
  }, []);

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold">National Parks in California</h1>
    <ul className="mt-4 space-y-2">
      {parks.map((park) => (
        <li key={park.id} className="p-2 border rounded">
          <h2 className="text-xl font-semibold">{park.fullName}</h2>
          <p>{park.description}</p>
        </li>
      ))}
    </ul>
  </div>
  );
}
