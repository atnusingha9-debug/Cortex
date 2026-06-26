import { Scale } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Badge variant="primary" className="mb-4">
            <Scale className="w-3 h-3 mr-1" />
            Legal
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: June 15, 2026</p>
        </div>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Cortex AI (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service. We reserve the right to modify these terms at any time; changes will be effective upon posting.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Description of Service</h2>
            <p>
              Cortex AI provides an AI tools directory and article hub. Users can explore curated AI tools, read expert reviews and comparisons, and stay informed about the latest developments in artificial intelligence.
            </p>
            <p className="mt-2">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for any content you submit and for ensuring that your use does not violate any applicable laws or third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
            <p>
              You agree not to: (a) use the Service for any illegal purpose; (b) submit video URLs that contain infringing, harmful, or offensive content; (c) attempt to circumvent rate limits or access controls; (d) scrape or systematically extract data from the Service without written permission; or (e) use the Service in any way that could damage, disable, or impair our infrastructure.
            </p>
            <p className="mt-2">
              You are solely responsible for your use of transcriptions and AI-generated content. We make no guarantees about the accuracy of AI-generated outputs and recommend human review for important use cases.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
            <p>
              The Service, including its design, code, and original content, is owned by Cortex AI and protected by intellectual property laws. Our name and logo are trademarks. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>
            <p className="mt-2">
              Tool listings, reviews, and community content remain the property of their respective owners. By submitting content, you grant us a non-exclusive license to display and distribute it on the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p>
              The Service is provided &quot;as is&quot; without warranties of any kind, either express or implied. Cortex AI shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.
            </p>
            <p className="mt-2">
              We are not responsible for the accuracy, completeness, or usefulness of any AI-generated content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to the Service at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, third parties, or the Service itself.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Contact</h2>
            <p>
              For questions about these Terms, please contact us at legal@cortexai.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
