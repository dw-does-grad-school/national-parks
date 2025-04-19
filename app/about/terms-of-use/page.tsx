import { Card } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-orange-400">Terms of Use</h1>
        <p className="text-gray-600 mb-8">Effective Date: April 19, 2024</p>

        <Card className="mb-8">
          <div className="p-8">
            <p className="text-lg mb-6">
              Welcome to Parksy. By accessing or using this Project, you agree to be bound by the following Terms of Use. If you do not agree with any part of these terms, you must not access or use the Project.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">1. Non-Commercial Use Only</h2>
                <p className="mb-4">This Project is provided strictly for personal, educational, or research purposes only. Commercial use of any kind is expressly prohibited.</p>
                <p className="mb-4">You may not:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Sell, license, sublicense, rent, lease, or otherwise use this project for commercial gain.</li>
                  <li>Integrate, bundle, or distribute this project as part of a commercial product or service.</li>
                  <li>Use this project to promote or support any for-profit activity, advertising, or monetized platform.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">2. Intellectual Property</h2>
                <p>All intellectual property rights in the project remain the exclusive property of David Welsh, unless otherwise noted. You may not modify, reproduce, or distribute any part of the Project beyond what is expressly allowed for non-commercial purposes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">3. Disclaimer of Warranty</h2>
                <p>This Project is provided &quot;as is,&quot; without warranty of any kind, express or implied. No guarantee is made regarding the accuracy, functionality, or reliability of the project.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">4. Limitation of Liability</h2>
                <p>Under no circumstances shall the creator(s) of this project be liable for any direct, indirect, incidental, or consequential damages arising out of your use or inability to use the project.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">5. Termination</h2>
                <p>Your right to use this project will automatically terminate if you violate any of these terms. Upon termination, you must cease all use of the project and destroy any copies you have made.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">6. Changes to These Terms</h2>
                <p>We reserve the right to modify these Terms of Use at any time. Changes will be effective upon posting. Your continued use of the project constitutes acceptance of those changes.</p>
              </section>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}