import { motion } from "motion/react";
import { FileText, CheckCircle2, ArrowRight } from "lucide-react";
import React, { useState } from "react";

export default function Checklist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="trust-badge text-slate-600 mb-6">Free Resource</div>
            <h1 className="heading-display text-5xl md:text-7xl mb-6">Amazon Compliance Document Checklist</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Get the free checklist used by Amazon sellers to audit their documents before submitting. Catch the obvious errors that trigger automatic rejections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-display text-3xl md:text-4xl mb-8">What's inside?</h2>
              <ul className="space-y-6">
                {[
                  "The 'Brand Alignment' test for Private Label sellers",
                  "Model number verification steps for multi-ASIN reports",
                  "How to check if your lab has the correct ISO accreditation",
                  "Invoice vs. Certificate consistency checklist",
                  "Common red flags that trigger 'Fraudulent Document' flags"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 inline-block">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Used by Amazon sellers to catch document errors before submitting.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="card-premium p-10 md:p-16 bg-slate-950 text-white border-slate-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full blur-3xl" />
                
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-brand-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-10 h-10 text-brand-400" />
                    </div>
                    <h3 className="heading-display text-3xl mb-4 text-white">Checklist Sent!</h3>
                    <p className="text-slate-400 text-lg">
                      Check your inbox. I've sent the PDF checklist to your email address.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <FileText className="w-12 h-12 text-brand-400 mb-6" />
                      <h3 className="heading-display text-3xl mb-4 text-white">Download the Checklist</h3>
                      <p className="text-slate-400 text-lg">
                        Enter your email below and I'll send the PDF checklist directly to your inbox.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                          className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full btn-primary py-5 text-xl"
                      >
                        Get My Free Checklist <ArrowRight className="ml-2 w-6 h-6" />
                      </button>
                    </form>
                    <p className="mt-6 text-center text-xs text-slate-500">
                      No spam. Just compliance clarity. You can unsubscribe at any time.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
