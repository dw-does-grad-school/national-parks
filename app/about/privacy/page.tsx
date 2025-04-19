import { Card } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-orange-400">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: April 19, 2024</p>

        <Card className="mb-8">
          <div className="p-8">
            <p className="text-lg mb-6">
              Parksy values your privacy. This Privacy Policy outlines what information we collect, how we use it, and the choices you have in relation to your data.
            </p>
            <p className="text-lg mb-8">
              By using Parksy, you agree to the collection and use of information in accordance with this policy.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">1. Information We Do Not Collect</h2>
                <p className="mb-4">
                  We do not collect any personal information from our users. We do not use cookies, tracking technologies, or any other means to collect data about your visit to our website.
                </p>
                <p className="mb-4">
                  The only information we may collect is non-personal information that your browser automatically sends whenever you visit a website, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><span className="font-semibold">Device Information:</span> Such as browser type, operating system, and screen resolution.</li>
                  <li><span className="font-semibold">Usage Data:</span> General, non-identifying data like pages visited or features used, if telemetry is enabled.</li>
                </ul>
                <p className="italic">Note: Any such data, if collected, is anonymous and used only to improve functionality.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">2. Information We May Collect</h2>
                <p className="mb-4">Depending on how you use the Project, we may collect limited technical information, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><span className="font-semibold">Device Information:</span> Such as browser type, operating system, and screen resolution.</li>
                  <li><span className="font-semibold">Usage Data:</span> General, non-identifying data like pages visited or features used, if telemetry is enabled.</li>
                </ul>
                <p className="italic">Note: Any such data, if collected, is anonymous and used only to improve functionality.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">3. How We Use Your Information</h2>
                <p className="mb-4">If any data is collected, it may be used to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Improve or debug the Project</li>
                  <li>Monitor performance and usage patterns</li>
                  <li>Ensure the Project remains secure and stable</li>
                </ul>
                <p>We do not sell, share, or rent any information to third parties.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">4. Third-Party Services</h2>
                <p>The Project is hosted on Vercel, which may collect data independently of this application. Please refer to their privacy policy for more information.</p>
              </section>


              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">5. Children&apos;s Privacy</h2>
                <p>This Project is not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">6. Data Security</h2>
                <p>We take reasonable precautions to protect any data that may be collected. However, no method of transmission or storage is 100% secure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">7. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Changes will be reflected on this page with a new effective date.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">8. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, you can reach me at:</p>
                <p className="mt-2">📧 dwelsh2@clemson.edu</p>
              </section>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}