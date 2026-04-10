import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2, FileSearch, Zap, XCircle, Info, ShieldCheck, MessageSquare, User, Mail, FileText } from "lucide-react";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-50/50 via-transparent to-transparent opacity-70" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="trust-badge text-slate-600 mb-8">
                <ShieldCheck className="w-4 h-4 mr-2 text-brand-600" /> Professional Compliance Review
              </div>
              <h1 className="heading-display text-6xl md:text-8xl mb-8">
                Stop guessing with <br />
                <span className="text-brand-600">Amazon Compliance.</span>
              </h1>
              <div className="max-w-2xl mb-12">
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
                  Mismatched model numbers? Private label vs factory brand conflicts? 
                  I identify the exact triggers that cause Amazon to reject your FCC, CE, CPC, and UN38.3 documents.
                </p>
                <div className="flex items-center space-x-4 p-4 bg-brand-50/50 rounded-2xl border border-brand-100">
                  <div className="w-1 h-12 bg-brand-600 rounded-full" />
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-widest leading-tight">
                    Built specifically for Amazon sellers <br />
                    dealing with persistent document rejections.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex flex-col sm:flex-row gap-5 items-center">
                  <Link to="/contact" className="btn-primary text-xl px-12">
                    Get Your Documents Reviewed <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                  <Link to="/how-it-works" className="btn-secondary text-xl">
                    See My Process
                  </Link>
                </div>
                <div className="mt-4 flex flex-col items-center sm:items-start">
                  <Link 
                    to="/contact?issue=Free Risk Snapshot" 
                    className="text-sm font-bold text-brand-600 uppercase tracking-widest hover:underline"
                  >
                    Start with a free risk snapshot
                  </Link>
                  <span className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Response within 24 hours
                  </span>
                </div>
              </div>
              <div className="mt-12 flex flex-wrap gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-500 mr-2" /> No Fake Documents</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-500 mr-2" /> No Guaranteed Approval</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand-500 mr-2" /> Structured Analysis</div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden">
                      <User className="w-5 h-5 text-slate-400" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">
                  50+ cases reviewed across FCC, CE, CPC, and UN38.3 categories
                </p>
              </div>
            </motion.div>
          </div>
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

      {/* Reality Check Section */}
      <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="trust-badge bg-slate-900 border-slate-800 text-slate-400 mb-6 uppercase tracking-widest">The Reality Check</div>
            <h2 className="heading-display text-5xl md:text-7xl mb-6 text-white leading-tight">
              Most Amazon rejections are <span className="text-brand-500">not</span> because documents are missing.
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              They are rejected due to <span className="text-white font-bold underline decoration-brand-500 underline-offset-8">mismatch, formatting, or alignment issues</span>. 
              Suppliers often provide files that "look" valid but fail Amazon's specific technical alignment tests.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              Amazon's compliance team doesn't just look for a certificate. They look for a perfect link between your 
              <span className="text-white font-bold"> Brand Registry</span>, your <span className="text-white font-bold">Invoices</span>, and the <span className="text-white font-bold">Test Reports</span>.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Mismatch", text: "Test report lists factory model number, but Amazon listing uses a custom SKU." },
              { label: "Accreditation", text: "The lab is not recognized or lacks the specific ISO markers Amazon expects." },
              { label: "Ownership", text: "Brand name on certificate matches the factory, but you sell as a Private Label." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-brand-500/50 transition-all group">
                <h4 className="text-brand-400 font-bold mb-1 uppercase tracking-widest text-[10px] group-hover:text-brand-300 transition-colors">{item.label}</h4>
                <p className="text-base font-medium text-slate-200 leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Risk Snapshot CTA Section */}
      <section className="py-12 bg-brand-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">Not sure if your documents have an issue?</h3>
            <p className="text-brand-100">Send me your Amazon notice and I'll give you a free 2-3 sentence snapshot of what I think the problem is. No obligation.</p>
          </div>
          <Link to="/contact?issue=Free Risk Snapshot" className="btn-primary bg-white text-brand-600 hover:bg-brand-50 whitespace-nowrap px-8">
            Get Free Risk Snapshot
          </Link>
        </div>
      </section>

      {/* Why Sellers Use This Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="trust-badge text-slate-600 mb-6">Strategic Advantage</div>
            <h2 className="heading-display text-4xl md:text-6xl mb-6">Why sellers use this before submitting.</h2>
            <p className="text-xl text-slate-600">Don't risk your account health on a "maybe." Get professional eyes on your documents first.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Avoid Escalation",
                text: "Avoid making things worse with a bad submission that triggers a manual account review."
              },
              {
                title: "Pre-Submission Audit",
                text: "Catch technical issues before Amazon's automated systems flag your documents as fraudulent."
              },
              {
                title: "Supplier Independence",
                text: "Get clarity without relying only on suppliers who may not understand Amazon's specific rules."
              },
              {
                title: "Focus on What Matters",
                text: "Understand what actually matters to Amazon vs. what just 'looks' correct on the surface."
              }
            ].map((v, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-xl mb-4 text-slate-900">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="trust-badge text-slate-600 mb-6">Success Stories</div>
            <h2 className="heading-display text-4xl md:text-6xl mb-6">Real results for Amazon sellers.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Rami identified the exact model number mismatch in my FCC report within 24 hours. I knew exactly what to ask my supplier for.",
                author: "Jane D.",
                context: "Baby Products Seller",
                label: "[TESTIMONIAL PLACEHOLDER]"
              },
              {
                quote: "I was stuck in a rejection loop for 3 weeks. One review from Averis identified that my lab wasn't ISO accredited for my specific category.",
                author: "Mark S.",
                context: "Electronics Brand Owner",
                label: "[TESTIMONIAL PLACEHOLDER]"
              },
              {
                quote: "The Risk Snapshot saved me from submitting a forged document my supplier gave me. Probably saved my entire account.",
                author: "Sarah L.",
                context: "Private Label Seller",
                label: "[TESTIMONIAL PLACEHOLDER]"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative">
                <div className="absolute -top-4 -left-4 bg-brand-600 p-3 rounded-2xl shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <User className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.author} <span className="text-xs text-brand-600 font-black ml-2">{t.label}</span></h4>
                    <p className="text-sm text-slate-500">{t.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-12 bg-slate-950 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Built on one principle: honesty.</h2>
            <p className="text-slate-400">I'll tell you if your documents are fine. I'll tell you if they're not. And I'll tell you if I can't help.</p>
          </div>
          <Link to="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-slate-950 whitespace-nowrap">
            Read About How I Work →
          </Link>
        </div>
      </section>

      {/* Free Lead Magnet Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-sm text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <FileText className="w-8 h-8 text-brand-600" />
          </div>
          <h2 className="heading-display text-3xl md:text-5xl mb-6">Get the Amazon Compliance Document Checklist.</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Get the free checklist used by Amazon sellers to audit their documents before submitting.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
            />
            <Link to="/checklist" className="btn-primary whitespace-nowrap px-8">
              Get Free Checklist
            </Link>
          </form>
          
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Used by Amazon sellers to catch document errors before submitting.
          </p>
        </div>
      </section>

      {/* What Happens After You Contact Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />
              <div className="space-y-8 relative z-10">
                {[
                  { step: "01", title: "Review", text: "I review your case details and Amazon notice within 24 hours." },
                  { step: "02", title: "Fit Check", text: "If it's a fit, I recommend the right review option for your case." },
                  { step: "03", title: "Direct Advice", text: "If I can't help, I'll tell you directly and point you elsewhere." },
                  { step: "04", title: "You Decide", text: "No pressure or obligation. You decide how you want to proceed." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 font-black text-xl shadow-sm group-hover:border-brand-500 transition-colors">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-xl mb-1 text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed max-w-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="trust-badge text-slate-600 mb-6">The Process</div>
              <h2 className="heading-display text-4xl md:text-5xl mb-6">What happens after you contact?</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                I keep it simple. No long sales calls or complex contracts. Just a professional assessment of your compliance situation.
              </p>
              <div className="flex flex-col items-start">
                <Link to="/contact" className="btn-primary text-xl px-12">
                  Send Your Case Details
                </Link>
                <span className="mt-3 text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Response within 24 hours. No obligation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Scenarios Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
              <div className="trust-badge text-slate-600 mb-6">Real Scenarios</div>
              <h2 className="heading-display text-4xl md:text-6xl">Does this sound familiar?</h2>
            </div>
            <Link to="/services" className="text-brand-600 font-bold flex items-center hover:underline">
              View all review options <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FileSearch className="w-10 h-10 text-brand-600" />,
                title: "Private Label Mismatch",
                desc: "Your CE certificate is issued under your supplier’s brand, but your listing is private label. Amazon sees no legal link between the two."
              },
              {
                icon: <AlertTriangle className="w-10 h-10 text-amber-500" />,
                title: "Model Number Gap",
                desc: "The model number on your test report does not match your ASIN or packaging. Amazon rejects it as 'unrelated documentation'."
              },
              {
                icon: <FileSearch className="w-10 h-10 text-brand-500" />,
                title: "Unrecognized Lab",
                desc: "Your lab is not recognized or lacks the specific ISO/ILAC accreditation markers Amazon expects for your category."
              },
              {
                icon: <Zap className="w-10 h-10 text-purple-500" />,
                title: "Incomplete UN38.3",
                desc: "Your lithium battery report is missing required sections or doesn't align with the actual battery specs in your product."
              },
              {
                icon: <AlertTriangle className="w-10 h-10 text-amber-600" />,
                title: "Invoice Disconnect",
                desc: "Your invoice and certificate do not align with each other. This often means different addresses, brand names, or manufacturer details."
              },
              {
                icon: <Info className="w-10 h-10 text-slate-400" />,
                title: "The 'Generic' Rejection",
                desc: "You get 'Insufficient documentation' with no explanation. I identify if it's the lab, the model, or the brand that triggered it."
              }
            ].map((p, i) => (
              <motion.div key={i} variants={item} className="card-premium group hover:border-brand-600 transition-all duration-300">
                <div className="mb-8 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                <h3 className="heading-display text-2xl mb-4">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What I Do / What I Don't Do Section */}
      <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="trust-badge border-slate-700 text-slate-400 mb-6">Integrity Statement</div>
            <h2 className="heading-display text-4xl md:text-6xl mb-6 text-white">Transparency First.</h2>
            <p className="text-xl text-slate-300">I am a compliance review service, not a magic wand. Here is exactly how I work.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-900 p-12 rounded-[3rem] border border-slate-800">
              <div className="flex items-center space-x-4 mb-10">
                <div className="bg-brand-600 p-2 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-display text-2xl text-white uppercase tracking-tight">What I Do</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Identify technical mismatches in your document package.",
                  "Verify the accreditation and standing of testing laboratories.",
                  "Compare your supplier certificates against Amazon's specific requirements.",
                  "Provide a clear list of risks and actionable fixes.",
                  "Help you understand exactly why a document was rejected."
                ].map((text, i) => (
                  <li key={i} className="flex items-start space-x-4 text-slate-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-lg font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 p-12 rounded-[3rem] border border-slate-800">
              <div className="flex items-center space-x-4 mb-10">
                <div className="bg-red-600 p-2 rounded-xl">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-display text-2xl text-white uppercase tracking-tight">What I Don't Do</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "I do NOT provide fake or forged documents.",
                  "I do NOT guarantee Amazon will accept your submission.",
                  "I do NOT provide legal advice or representation.",
                  "I do NOT communicate with Amazon on your behalf.",
                  "I do NOT offer 'hacks' or shortcuts to bypass compliance."
                ].map((text, i) => (
                  <li key={i} className="flex items-start space-x-4 text-slate-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    <span className="text-lg font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 p-10 bg-slate-900/50 rounded-[2rem] border border-slate-800 text-center max-w-4xl mx-auto">
            <p className="text-slate-400 italic text-lg">
              "My goal is to give you the same technical clarity that Amazon's compliance team has. 
              If your documents are flawed, I tell you before you risk your account health."
            </p>
          </div>
        </div>
      </section>

      {/* Tangible Outcomes Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-200">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-brand-600 p-2 rounded-xl">
                  <FileSearch className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-display text-2xl">The Risk Snapshot</h3>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                  <div className="flex items-center text-red-700 font-bold mb-2 uppercase tracking-widest text-xs">
                    <AlertTriangle className="w-4 h-4 mr-2" /> Critical Risk
                  </div>
                  <p className="text-slate-800 font-medium">FCC ID on report belongs to a different manufacturer. High risk of permanent ban.</p>
                </div>
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                  <div className="flex items-center text-amber-700 font-bold mb-2 uppercase tracking-widest text-xs">
                    <AlertTriangle className="w-4 h-4 mr-2" /> Alignment Issue
                  </div>
                  <p className="text-slate-800 font-medium">Invoice brand name 'Averis' does not match Test Report brand 'Factory-X'.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                  <div className="flex items-center text-green-700 font-bold mb-2 uppercase tracking-widest text-xs">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Action Required
                  </div>
                  <p className="text-slate-800 font-medium">Request a 'Letter of Authorization' from the factory to link the brands.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="trust-badge text-slate-600 mb-6">Tangible Outcomes</div>
            <h2 className="heading-display text-4xl md:text-5xl mb-6">What you actually get.</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              You don't just get a "pass/fail." You get a structured analysis that highlights exactly where the friction points are.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                { title: "Clear List of Issues", text: "Aligned, misaligned, or missing elements identified." },
                { title: "Specific Risk Points", text: "Exactly what is likely to trigger an Amazon rejection." },
                { title: "Supplier Fix List", text: "What to fix, verify, or request from your factory." },
                { title: "Next Steps Roadmap", text: "Suggested actions to take before your next submission." },
                { title: "Peace of Mind", text: "Confidence that your package is technically sound." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-lg font-bold text-slate-900">{item.title}</span>
                    <span className="text-slate-600">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-start">
              <Link to="/contact" className="btn-primary text-xl px-12">
                Check Before You Submit
              </Link>
              <span className="mt-3 text-sm font-bold text-slate-400 uppercase tracking-widest">
                No obligation. I’ll tell you if it’s not a fit.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto bg-brand-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="heading-display text-4xl md:text-6xl mb-6 text-white">Don't submit blindly.</h2>
            <p className="text-xl text-brand-100/70 mb-10 max-w-2xl mx-auto">
              One wrong document can lead to weeks of suppression or a permanent account flag. Let's review your case before you act.
            </p>
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                <Link to="/contact" className="btn-primary bg-white text-brand-950 hover:bg-brand-50 text-xl px-12 py-6">
                  Send Your Case
                </Link>
                <Link to="/pricing" className="btn-secondary border-brand-800 text-white bg-transparent hover:bg-brand-900 text-xl px-12 py-6">
                  View Pricing
                </Link>
              </div>
              <span className="mt-3 text-sm font-bold text-brand-400 uppercase tracking-widest">
                Response within 24 hours
              </span>
            </div>
            <p className="mt-8 text-brand-400 font-bold text-sm uppercase tracking-widest flex items-center justify-center">
              <Info className="w-4 h-4 mr-2" /> 24-hour response target for all inquiries
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
