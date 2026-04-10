import { Mail, Clock, CheckCircle2, Send, AlertCircle, Link as LinkIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useSearchParams, Link } from "react-router-dom";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [issueType, setIssueType] = useState("Amazon requested documents (FCC/CE/CPC)");

  useEffect(() => {
    const issue = searchParams.get("issue");
    if (issue === "Free Risk Snapshot") {
      setIssueType("Free Risk Snapshot");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xpwqrqzv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-20 pb-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="trust-badge text-slate-600 mb-6">Get Started</div>
            <h1 className="heading-display text-5xl md:text-7xl mb-6">Send Your Case for Review.</h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The more detail you provide, the faster I can identify the triggers causing your compliance issues.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="heading-display text-4xl mb-6">The Intake Checklist</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To provide a professional Risk Snapshot, I need to see exactly what Amazon is seeing. Please have these ready:
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  {
                    title: "The Amazon Notice",
                    desc: "Copy and paste the full text of the performance notification or email you received."
                  },
                  {
                    title: "The ASIN & Brand",
                    desc: "Provide the ASIN and the exact brand name as it appears in your Brand Registry."
                  },
                  {
                    title: "Supplier Documents",
                    desc: "Upload or link to the test reports, certificates, and invoices provided by your factory."
                  },
                  {
                    title: "Product Photos",
                    desc: "Clear photos of the product packaging showing the model number and safety markings."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-brand-100 p-1 rounded-full mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6 text-sm text-slate-500">
                Prefer to hire through a platform? Find me on{" "}
                <a href="#" /* FIVERR LINK */ className="text-brand-600 hover:underline">Fiverr</a> or{" "}
                <a href="#" /* UPWORK LINK */ className="text-brand-600 hover:underline">Upwork</a>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-brand-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/20 rounded-full blur-3xl" />
                <h4 className="font-bold text-2xl mb-6 flex items-center text-white">
                  <Clock className="w-6 h-6 text-brand-400 mr-3" />
                  24h Response Target
                </h4>
                <p className="text-brand-100/80 leading-relaxed mb-8 text-lg">
                  I review all inquiries personally. If I can help, I'll provide a clear recommendation and a quote for a full Risk Snapshot.
                </p>
                <div className="flex items-center space-x-3 text-brand-400 font-bold text-lg">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:rami.nairatt@gmail.com" className="hover:text-white transition">rami.nairatt@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="mb-6 text-center">
                <Link 
                  to="/contact?issue=Free Risk Snapshot" 
                  className="text-sm font-bold text-brand-600 uppercase tracking-widest hover:underline"
                >
                  First time? Start with a free risk snapshot. No obligation.
                </Link>
              </div>
              <div className="card-premium p-10 md:p-16">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-10">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="heading-display text-4xl mb-6">Case Received.</h3>
                    <p className="text-slate-600 text-xl leading-relaxed">
                      Thank you for providing your details. I am reviewing your case and will respond via email within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-10 btn-secondary px-10"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="label-text text-slate-500">Full Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="John Doe"
                          className="input-field"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="label-text text-slate-500">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="john@example.com"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="label-text text-slate-500">ASIN or Product Link</label>
                      <input 
                        required
                        name="asin"
                        type="text" 
                        placeholder="B0XXXXXXXX"
                        className="input-field"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="label-text text-slate-500">Issue Type</label>
                      <select 
                        name="issue_type" 
                        value={issueType}
                        onChange={(e) => setIssueType(e.target.value)}
                        className="input-field appearance-none bg-white"
                      >
                        <option value="FCC / FCC ID Issue">FCC / FCC ID Issue</option>
                        <option value="CE / RoHS Issue">CE / RoHS Issue</option>
                        <option value="CPC Issue">CPC Issue</option>
                        <option value="UN38.3 / Battery Issue">UN38.3 / Battery Issue</option>
                        <option value="SDS Issue">SDS Issue</option>
                        <option value="Account Suspension">Account Suspension</option>
                        <option value="Free Risk Snapshot">Free Risk Snapshot</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="label-text text-slate-500">Link to your supplier documents (Optional)</label>
                      <div className="relative group">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                        <input 
                          name="document_link"
                          type="url" 
                          placeholder="Google Drive / Dropbox link"
                          className="input-field !pl-12"
                        />
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ensure the link is set to 'Anyone with link can view'</p>
                    </div>

                    <div className="space-y-2">
                      <label className="label-text text-slate-500">Case Details & Amazon Notice</label>
                      <textarea 
                        required
                        name="message"
                        rows={6}
                        placeholder="Paste the Amazon notice here and briefly explain what documents you already have..."
                        className="input-field"
                      ></textarea>
                    </div>

                    {error && (
                      <div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-red-800">{error}</p>
                      </div>
                    )}

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-4">
                      <AlertCircle className="w-6 h-6 text-slate-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-slate-500 leading-relaxed italic">
                        By submitting, you acknowledge that Averis Compliance provides informational review only. I do not provide legal advice, guarantee approval, or create documents.
                      </p>
                    </div>

                    <div className="flex flex-col items-center">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full btn-primary py-6 text-2xl"
                      >
                        {isSubmitting ? "Sending Case..." : "Send My Case for Review"} <Send className="ml-3 w-6 h-6" />
                      </button>
                      <span className="mt-3 text-sm font-bold text-slate-400 uppercase tracking-widest">
                        Response within 24 hours. No obligation.
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
