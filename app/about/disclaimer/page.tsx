export default function DisclaimerPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              This website is not affiliated with the National Park Service. All images and information are sourced from the National Park Service API, or other stock image sources.
            </p>
            <p className="mb-4">
              It was built for educational purposes only and is not intended for commercial use.
            </p>
            <p className="mb-4">
              If there is any issue with the content, please contact me at{' '}
              <a 
                href="mailto:dwelsh2@clemson.edu" 
                className="text-orange-600 hover:text-orange-800 underline"
              >
                dwelsh2@clemson.edu
              </a>
              .
            </p>
            <p>
              I will do my best to resolve the issue as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}