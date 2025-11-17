import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Building2" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">AWG Leasing</span>
          </Link>
          <Link to="/">
            <Button variant="ghost">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Data Controller</h2>
            <p className="text-gray-600 mb-4">
              The data controller responsible for the processing of your personal data is:
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-gray-900">AWG Leasing GmbH</p>
              <p className="text-gray-600">Bahnhofstr. 27a</p>
              <p className="text-gray-600">33102 Paderborn, Germany</p>
              <p className="text-gray-600 mt-2">Phone: +49 5251 29061 0</p>
              <p className="text-gray-600">Email: support@awg-leasing.it.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Collection and Processing of Personal Data</h2>
            <p className="text-gray-600 mb-4">
              We collect and process personal data only to the extent necessary to provide a functional website 
              and our content and services. The collection and processing of your personal data occurs regularly 
              only with your consent.
            </p>
            <p className="text-gray-600">
              When you visit our website, the following data is automatically collected:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>IP address</li>
              <li>Date and time of access</li>
              <li>Browser type and version</li>
              <li>Operating system used</li>
              <li>Referrer URL</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Purpose of Data Processing</h2>
            <p className="text-gray-600 mb-4">
              The processing of personal data serves the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Providing and maintaining our website</li>
              <li>Responding to inquiries and requests</li>
              <li>Processing leasing applications</li>
              <li>Compliance with legal obligations</li>
              <li>Improving our services and website functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Cookies</h2>
            <p className="text-gray-600 mb-4">
              Our website uses cookies. Cookies are small text files that are stored on your device and allow 
              certain information to be saved. We use the following types of cookies:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-600">
                  These cookies are necessary for the website to function and cannot be disabled. They are 
                  usually set only in response to actions made by you, such as setting your privacy preferences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-600">
                  These cookies allow us to count visits and traffic sources so we can measure and improve 
                  the performance of our site. These are only set with your consent.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Security</h2>
            <p className="text-gray-600">
              We use appropriate technical and organizational security measures to protect your data against 
              accidental or intentional manipulation, loss, destruction, or access by unauthorized persons. 
              Our security measures are continuously improved in line with technological developments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Data Retention</h2>
            <p className="text-gray-600">
              We store your personal data only for as long as necessary to fulfill the purposes for which 
              they were collected or as required by law. After this period, your data will be deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Third-Party Services</h2>
            <p className="text-gray-600">
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices of these third parties. We recommend that you read the privacy policies of any 
              third-party websites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Changes to Privacy Policy</h2>
            <p className="text-gray-600">
              We reserve the right to update this privacy policy to reflect changes in our practices or for 
              legal, operational, or regulatory reasons. The current version will always be available on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Contact</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy policy or the processing of your personal data, 
              please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-600">Email: support@awg-leasing.it.com</p>
              <p className="text-gray-600">Phone: +49 5251 29061 0</p>
            </div>
          </section>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Last updated: November 17, 2024</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © 2024 AWG Leasing GmbH. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
