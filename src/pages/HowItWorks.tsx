import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Send, Search, FileText, CheckCircle2, ArrowRight, Clock, AlertTriangle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Send className="w-10 h-10" />,
      title: "1. Case Submission",
      desc: "Provide your ASIN, the specific Amazon notice, and your current supplier files. I don't need payment to start the conversation, just the facts of your case.",
      time: "5 mins"
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "2. Stress-Testing Documents",
      desc: "I perform a deep-dive review of your documents against Amazon's known review logic. I spot mismatches between your listing and supplier documents before Amazon does.",
      time: "12-24 hours"
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "3. The Alignment Report",
      desc: "Receive a structured report detailing every friction point. I flag documents that look valid but get rejected due to formatting or alignment issues.",
      time: "Delivered via Email"
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "4. Confident Resubmission",
      desc: "Armed with my analysis, you request specific corrections from your supplier and submit a clean, aligned package that Amazon is likely to approve.",
      time: "Final Step"
    }
  ];

  return (
    <div className="bg-white">
      <section className="pt-32 pb-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="trust-badge text-slate-600 mb-6">My Methodology</div>
            <h1 className="heading-display text-6xl md:text-8xl mb-8">How I Work.</h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I don't just "look" at your files. I stress-test them against the same logic Amazon's compliance team uses to reject them.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium flex flex-col"
              >
                <div className="mb-8 text-brand-600">{step.icon}</div>
                <h3 className="heading-display text-2xl mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{step.desc}</p>
                <div className="pt-6 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{step.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Submission Guidance */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="trust-badge text-slate-600 mb-6">The Aftermath</div>
              <h2 className="heading-display text-4xl md:text-5xl mb-8">What happens after you submit?</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Submitting to Amazon is only half the battle. I help you prepare for the three most common outcomes.
              </p>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-xl mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Outcome A: Clean Approval</h4>
                    <p className="text-slate-600">The documents were aligned, the lab was recognized, and your listing is reinstated or approved within 3-5 business days.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 rounded-xl mt-1">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Outcome B: The "Waiting Game"</h4>
                    <p className="text-slate-600">Amazon requests additional clarification on a specific field. Because you have my Risk Snapshot, you'll know exactly how to answer without triggering a rejection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-xl mt-1">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Outcome C: Manual Review Required</h4>
                    <p className="text-slate-600">Amazon escalates the case to a human reviewer. I ensure your document package is so well-structured that even a strict reviewer can't find a reason to say no.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <h3 className="heading-display text-3xl mb-8 text-white">Why accuracy matters.</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Amazon's automated systems are designed to find <span className="text-white font-bold">reasons to reject</span>, not reasons to approve. 
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  If your FCC ID is off by one character, or if your brand name is 'Averis' but the report says 'Averis Inc', the system will auto-reject.
                </p>
                <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                  <p className="font-bold text-brand-400 mb-2 italic">Pro Tip:</p>
                  <p className="text-sm text-slate-300">Never submit a document that you haven't personally verified against your Amazon 'Brand Registry' details. Mismatches here are the #1 cause of permanent listing bans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <h2 className="heading-display text-4xl mb-8">Stop the back-and-forth.</h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Get a professional review of your case today and submit with the confidence of knowing your documents are aligned.
        </p>
        <Link to="/contact" className="btn-primary text-xl px-12">
          Start Your Case Now <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </section>
    </div>
  );
}
