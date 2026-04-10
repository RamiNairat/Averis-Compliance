import { motion } from "motion/react";
import { Mail, AlertTriangle, Scale, FileWarning, Ban, ShieldCheck } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="trust-badge text-slate-600 mb-6">Legal</div>
            <h1 className="heading-display text-5xl md:text-7xl mb-6">Terms of Service.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Please read these terms carefully before using my services. By engaging Averis Compliance, you agree to these conditions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Informational Only */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <Scale className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Scope</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">Informational Review Only</h4>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Averis Compliance provides informational document review services for Amazon sellers. My analysis is based on my professional experience and understanding of Amazon's current compliance requirements.
                </p>
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-amber-900 font-medium">
                    Please note that I do not provide legal advice. My service is intended for informational purposes and is not a substitute for professional legal counsel or official testing laboratory certification.
                  </p>
                </div>
              </div>
            </div>

            {/* No Guarantees */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Outcomes</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">No Guarantees of Approval</h4>
                <p className="text-lg text-slate-700 leading-relaxed">
                  While I work to identify potential rejection triggers, I cannot guarantee that Amazon will approve your documents or reinstate your listing. Amazon's internal review processes are proprietary and subject to change without notice.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Payment is for the professional time and expertise dedicated to reviewing your documents and providing a Risk Snapshot, rather than for a specific outcome or approval.
                </p>
              </div>
            </div>

            {/* User Responsibility */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <FileWarning className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Responsibility</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">User Responsibility</h4>
                <p className="text-lg text-slate-700 leading-relaxed">
                  You are solely responsible for the accuracy and authenticity of the documents you submit to Amazon. Averis Compliance does not create, modify, or backdate documents. 
                </p>
                <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex items-start space-x-4">
                  <Ban className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-red-900 font-bold">
                    I maintain a strict policy against working with fake, forged, or altered documents. If fraudulent documentation is identified, I reserve the right to discontinue the service.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <Scale className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Liability</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">Limitation of Liability</h4>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Averis Compliance shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use of my services, including but not limited to listing suppression, account suspension, or loss of revenue.
                </p>
              </div>
            </div>

            {/* Right to Refuse Service */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <Ban className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Service</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">Right to Refuse Service</h4>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I reserve the right to decline or discontinue service for any reason, particularly if I believe an engagement involves unethical practices or documents that do not meet my integrity standards.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="p-10 rounded-[2.5rem] bg-slate-950 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full blur-3xl" />
              <h4 className="font-bold text-2xl mb-6 flex items-center text-white">
                Contact Me
              </h4>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                If you have any questions about these Terms of Service, please contact me.
              </p>
              <div className="flex items-center space-x-3 text-brand-400 font-bold text-lg">
                <Mail className="w-5 h-5" />
                <a href="mailto:rami.nairatt@gmail.com" className="hover:text-white transition">rami.nairatt@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
