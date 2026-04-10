import { Check, ArrowRight, FileText, Settings, CheckCircle2, Zap, XCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      id: "quick",
      icon: <Zap className="w-12 h-12 text-brand-600" />,
      title: "Quick Compliance Review",
      price: "$95",
      tagline: "Best for single ASIN issues",
      desc: "A focused review of your Amazon request and supplier files to identify obvious red flags before you hit submit.",
      features: [
        "Single ASIN / Single Request",
        "Amazon Notice Analysis",
        "Supplier File Verification",
        "Likely Rejection Triggers",
        "24h Turnaround"
      ],
      outcome: "A clear 'Go/No-Go' assessment of your current documents.",
      cta: "Get Quick Review"
    },
    {
      id: "doc",
      icon: <FileText className="w-12 h-12 text-brand-600" />,
      title: "Document Alignment Review",
      price: "$150",
      tagline: "My most popular service",
      desc: "A deep dive into the alignment between your invoices, test reports, certificates, and product variations.",
      features: [
        "Full Document Mapping",
        "Brand/Model Consistency Check",
        "Lab Accreditation Verification",
        "Detailed Risk Summary",
        "Actionable Fix List"
      ],
      outcome: "A comprehensive roadmap to fix technical mismatches.",
      cta: "Get Full Review",
      popular: true
    },
    {
      id: "emergency",
      icon: <AlertTriangle className="w-12 h-12 text-red-600" />,
      title: "Emergency Review",
      price: "$397",
      tagline: "For active suspensions",
      desc: "For active suspensions where every hour costs you revenue. Same-day prioritized review, full alignment audit, and direct communication.",
      features: [
        "Same-day Prioritized Review",
        "Full Alignment Audit",
        "Resubmission Guidance",
        "Direct Communication with Rami",
        "Priority 12h Turnaround"
      ],
      outcome: "Immediate strategic response for high-stakes recovery.",
      cta: "Get Emergency Review",
      urgent: true
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-20 pb-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="trust-badge text-slate-600 mb-6">Expert Analysis</div>
            <h1 className="heading-display text-5xl md:text-7xl mb-6">Document Review Services</h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I focus on identifying the technical triggers that cause Amazon's automated and manual reviews to fail. 
              Get the clarity you need to submit with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`card-premium flex flex-col h-full relative ${s.popular ? 'ring-4 ring-brand-600/10 border-brand-600/20' : ''} ${s.urgent ? 'ring-4 ring-red-600/10 border-red-600/20' : ''}`}
            >
              {s.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-lg shadow-brand-500/20">
                  Recommended
                </span>
              )}
              {s.urgent && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-lg shadow-red-500/20">
                  Most Urgent
                </span>
              )}
              <div className="mb-10">{s.icon}</div>
              <h3 className="heading-display text-3xl mb-4">{s.title}</h3>
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-5xl font-bold text-slate-950">{s.price}</span>
                <span className="text-slate-500 font-bold text-sm uppercase tracking-widest">/ case</span>
              </div>
              <p className="text-slate-600 text-lg mb-8 flex-grow leading-relaxed">{s.desc}</p>
              
              <div className="space-y-4 mb-10">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What's included:</p>
                {s.features.map((f, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Outcome:</p>
                <p className="text-sm font-bold text-slate-900">{s.outcome}</p>
              </div>

              <div className="flex flex-col items-center">
                <Link 
                  to="/contact" 
                  className={`w-full py-5 rounded-2xl font-bold text-center text-lg transition-all ${
                    s.popular 
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-xl shadow-brand-500/20' 
                    : s.urgent
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-xl shadow-red-500/20'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {s.cta}
                </Link>
                <span className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {s.urgent ? "Same-day response target" : "Response within 24 hours"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compliance Risk Report Feature Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 blur-[120px] rounded-full" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="trust-badge bg-brand-600/20 border-brand-500/30 text-brand-400 mb-6 uppercase tracking-widest">The Deliverable</div>
                <h2 className="heading-display text-4xl md:text-6xl text-white mb-6">You don't just get advice.</h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  You receive a structured <span className="font-bold">Compliance Risk Report</span> identifying the exact rejection triggers, document mismatches, lab accreditation issues, and a prioritized fix list so you know exactly what to tell your supplier.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8">
                <div className="space-y-4">
                  {[
                    "Exact Rejection Triggers",
                    "Document Mismatches",
                    "Lab Accreditation Issues",
                    "Prioritized Fix List"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-6 h-6 text-brand-500" />
                      <span className="text-lg font-bold text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tangible Value Section */}
      <section className="section-padding bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-display text-4xl md:text-5xl mb-6 text-white">Why pay for a review?</h2>
            <p className="text-xl text-slate-300">Because Amazon's compliance team doesn't give second chances for free.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800">
              <XCircle className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="heading-display text-2xl mb-4 text-white">The Cost of Rejection</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span>Weeks of listing suppression and lost revenue.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span>Permanent account flags for "fraudulent" or "insufficient" docs.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span>Expensive storage fees for unsellable inventory.</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800">
              <CheckCircle2 className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="heading-display text-2xl mb-4 text-white">The Value of Clarity</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                  <span>Identify exactly what to ask your supplier for.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                  <span>Verify lab standing before you risk your account.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                  <span>Submit a clean, aligned document package the first time.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <h2 className="heading-display text-4xl mb-6">Ready to get clarity?</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Send me your case details. I'll recommend the most cost-effective review option for your specific situation.
        </p>
        <Link to="/contact" className="btn-primary text-xl px-12">
          Start Your Review <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </section>
    </div>
  );
}
