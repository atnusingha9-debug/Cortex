import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Badge variant="primary" className="mb-4">
            <Shield className="w-3 h-3 mr-1" />
            Legal
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: June 15, 2026</p>
        </div>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, including when you create an account, submit a tool for review, or use our video transcript service. This may include your name, email address, and the video URLs you submit for processing.
            </p>
            <p className="mt-2">
              We also automatically collect certain information when you visit our site, including your IP address, browser type, operating system, referring URLs, and usage patterns through cookies and similar technologies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services; to process your video transcript requests; to send you technical notices and support messages; and to communicate with you about products and services.
            </p>
            <p className="mt-2">
              We do not sell your personal information to third parties. Video URLs submitted for transcription are processed temporarily and not stored permanently unless you explicitly save them to your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption in transit (TLS 1.3) and at rest (AES-256). Access to personal data is restricted to authorized personnel only. Despite these measures, no method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
            <p>
              Our site may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also have the right to restrict or object to certain processing activities. To exercise these rights, please contact us at privacy@cortexai.com.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@cortexai.com or write to: Cortex AI, 100 Innovation Drive, San Francisco, CA 94105.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
