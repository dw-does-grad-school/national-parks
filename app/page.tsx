import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video/mountains.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Parksy</h1>
            <p className="text-xl mb-8">Discover America&apos;s Natural Treasures</p>
            <Link 
              href="/parks"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Parks
            </Link>
          </div>
        </div>
      </section>
      <section>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/parks">
            <Card className="hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h2 className="text-2xl font-semibold mb-2 text-orange-400">Explore Parks</h2>
              <p className="text-gray-600">Discover national parks across the United States</p>
            </Card>
          </Link>
          <Link href="/hikes">
            <Card className="hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h2 className="text-2xl font-semibold mb-2 text-orange-400">Hikes</h2>
              <p className="text-gray-600">Learn about the hikes that are available in the parks</p>
            </Card>
          </Link>
          <Link href="/plan-visit">
            <Card className="hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h2 className="text-2xl font-semibold mb-2 text-orange-400">Want to see more?</h2>
              <p className="text-gray-600">See what else there is to do in the parks</p>
            </Card>
          </Link>
        </div>
      </div>
      </section>
      <hr className="border-green-700 border-2 my-8 mx-8" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="w-full h-[300px] md:h-[500px] relative">
          <Image 
            src="/images/glacier.jpg" 
            alt="Glacier National Park" 
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="flex flex-col justify-center md:pl-12">
          <h3 className="text-3xl font-bold mb-4 text-orange-400">Ready to get out there?</h3>
          <p className="text-lg mb-6">Click the link below and get started on planning your next adventure!</p>
          <Link 
            href="/parks" 
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors w-fit"
          >
            Explore Parks
          </Link>
        </div>
      </section>
    </main>
  );
} 