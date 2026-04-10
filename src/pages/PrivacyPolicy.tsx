import { motion } from "motion/react";
import { Mail, Shield, Lock, EyeOff, Database } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="trust-badge text-slate-600 mb-6">Legal</div>
            <h1 className="heading-display text-5xl md:text-7xl mb-6">Privacy Policy.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              I take your data privacy seriously. This policy explains how Averis Compliance collects, uses, and protects your information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Data Collection */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <Database className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Data Collection</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  To provide my compliance review services, I may collect the following information when you submit a case:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span>Personal details (name, email address)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span>Case details and Amazon performance notifications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span>Compliance documents (FCC, CE, CPC, UN38.3 reports, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span>Product photos and invoices</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How I Use Data */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <EyeOff className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Data Usage</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Your information is used strictly for the following purposes:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span>Performing the requested compliance document review</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span>Communicating with you regarding your case and recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span>Improving internal review processes and accuracy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sharing and Third Parties */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <Shield className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Data Sharing</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  I do not sell, trade, or rent your personal information. I may share data with trusted third-party service providers required to operate the business, such as:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span>Form processing tools (e.g. Formspree)</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  These providers have their own privacy policies governing how they handle your data.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <Database className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Data Retention</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  I retain your information only for as long as necessary to provide my services and maintain reasonable records of past engagements.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <Shield className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Your Rights</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  You may request access to, correction of, or deletion of your personal information at any time by contacting me.
                </p>
              </div>
            </div>

            {/* Data Protection */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="flex items-center space-x-3 text-brand-600">
                <Lock className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Security</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  I take reasonable measures to protect your information and limit access to it. However, no method of transmission over the internet is completely secure, and I cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="p-10 rounded-[2.5rem] bg-slate-950 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full blur-3xl" />
              <h4 className="font-bold text-2xl mb-6 flex items-center text-white">
                Contact
              </h4>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                If you have any questions or concerns about this policy or your data, please contact:
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
