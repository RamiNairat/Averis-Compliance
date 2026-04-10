import { Check, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Pricing() {
  const tiers = [
    {
      name: "Single ASIN Review",
      price: "$95",
      desc: "Perfect for one issue, one ASIN, or one specific Amazon request that needs a second set of eyes.",
      features: [
        "Single ASIN / Single Request",
        "Amazon Notice Analysis",
        "Supplier File Verification",
        "Likely Rejection Triggers",
        "24h Turnaround"
      ],
      cta: "Get Quick Review",
      highlight: false
    },
    {
      name: "Full Alignment Audit",
      price: "$150",
      desc: "My most comprehensive review for sellers who need to ensure full alignment across all documents.",
      features: [
        "Full Document Mapping",
        "Brand/Model Consistency",
        "Lab Accreditation Check",
        "Detailed Alignment Report",
        "Priority 24h Support"
      ],
      cta: "Get Full Review",
      highlight: true
    },
    {
      name: "Emergency Review",
      price: "$397",
      desc: "For active suspensions where every hour costs you revenue. Same-day prioritized review and direct communication.",
      features: [
        "Same-day Prioritized Review",
        "Full Alignment Audit",
        "Resubmission Guidance",
        "Direct Communication",
        "Priority 12h Support"
      ],
      cta: "Get Emergency Review",
      urgent: true
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="heading-display text-5xl md:text-7xl mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              No hidden fees. No long-term contracts. Just professional compliance review when you need it most.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`card-premium flex flex-col h-full relative ${tier.highlight ? 'ring-2 ring-brand-600 shadow-2xl scale-105 z-10' : ''} ${tier.urgent ? 'ring-2 ring-red-600 shadow-2xl' : ''}`}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </span>
              )}
              {tier.urgent && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  For Active Suspensions
                </span>
              )}
              <h3 className="heading-display text-2xl mb-4">{tier.name}</h3>
              <div className="flex items-baseline space-x-1 mb-6">
                <span className="text-5xl font-bold text-slate-950">{tier.price}</span>
                {tier.price !== "Quoted" && <span className="text-slate-500 font-medium">/case</span>}
              </div>
              <p className="text-slate-600 mb-8 flex-grow">{tier.desc}</p>
              
              <div className="space-y-4 mb-10">
                {tier.features.map((f, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-slate-700">
                    <Check className="w-5 h-5 text-brand-600 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center">
                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                    tier.highlight 
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-xl shadow-brand-500/20' 
                    : tier.urgent
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-xl shadow-red-500/20'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {tier.cta}
                </Link>
                <span className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {tier.urgent ? "Same-day response" : "No obligation to proceed"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-display text-3xl mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about my service and pricing.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Do you guarantee Amazon will approve my documents?",
                a: "No. I provide expert risk identification and alignment review. Amazon's internal review process is proprietary and they make the final decision. My goal is to ensure you don't submit documents with obvious errors that trigger automatic rejections."
              },
              {
                q: "Do you create or edit documents for me?",
                a: "Absolutely not. I do not create, alter, or backdate any documents. I review the documents you already have from your supplier to identify if they meet Amazon's requirements."
              },
              {
                q: "What is your typical response time?",
                a: "I aim to respond to all initial inquiries within 24 hours. Once a review is started, I typically deliver the final risk summary within 24 hours."
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-xl mb-4 flex items-center">
                  <HelpCircle className="w-5 h-5 text-brand-600 mr-3" />
                  {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-20 h-20 mx-auto mb-8 text-brand-600" />
          <h2 className="heading-display text-3xl mb-6">My Commitment to Integrity</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            I operate with full transparency. I will never ask you to submit fraudulent documents, 
            and I will be honest if I believe your current documents are unlikely to be accepted. 
            My value is in clarity and risk mitigation.
          </p>
        </div>
      </section>
    </div>
  );
}
