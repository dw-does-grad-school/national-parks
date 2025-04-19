import Link from 'next/link';

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
            <h1 className="text-5xl font-bold mb-4">National Parks Explorer</h1>
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
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            href="/parks" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Explore Parks</h2>
            <p className="text-gray-600">Discover national parks across the United States</p>
          </Link>
          <Link 
            href="/about" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">About</h2>
            <p className="text-gray-600">Learn about our mission and the National Park Service</p>
          </Link>
          <Link 
            href="/plan-visit" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Plan Your Visit</h2>
            <p className="text-gray-600">Get tips and resources for planning your park visit</p>
          </Link>
        </div>
      </div>
    </main>
  );
} 