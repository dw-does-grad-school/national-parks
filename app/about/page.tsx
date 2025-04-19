export default function AboutPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-orange-400">About This</h1>

        <hr className="border-green-700 border-2 my-8" />
        
        <div className="bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
          <p className="text-lg mb-6 leading-relaxed">
            No one codes quite as much as an unemployed programmer trying to make a case for "Hire Me!"
            Nor does one catch wanderlust quite as much as a guy who is stuck in a single street town. 
            This project was built to capitalize on my desire to get out and see the national parks, whilst attempting
            to get a few standout portolio pieces made in order to get a job, so I can afford to get to them. 
          </p>
          
          
          <p className="text-lg leading-relaxed">
            Parksy, as a result, is a project that is designed to help people who want to see the national parks plan out their trips
            to them. It is built with the intention of being a useful tool for anyone who wants to get the most out of their time in the parks.
            It is not affiliated with the National Park Service, and is not intended for commercial use.
          </p>
        </div>
      </div>
    </main>
  );
}