import { motion } from "motion/react";
import { ShieldCheck, Scale, FileWarning, Users, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="trust-badge text-slate-600 mb-6">About Me</div>
            <h1 className="heading-display text-5xl md:text-7xl mb-6">Direct, Honest, and Accountable.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              I specialize in identifying why Amazon rejects compliance documents. No fluff, no fake documents. Just technical clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="prose prose-slate lg:prose-xl">
                <p className="text-lg text-slate-700 leading-relaxed">
                  I started Averis Compliance because I saw too many Amazon sellers losing revenue due to simple technical mismatches in their document packages. Amazon's compliance team doesn't give second chances for free, and they don't explain their rejections.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I specialize in Amazon compliance document failures across <span className="font-bold">FCC, CE, CPC, and UN38.3</span> categories. I've reviewed hundreds of cases where a single character mismatch or an unrecognized lab was the only thing standing between a seller and their listing.
                </p>
                
                <div className="my-12 p-8 bg-brand-50 rounded-[2.5rem] border border-brand-100 italic text-slate-700">
                  "I didn't start Averis Compliance because I saw a business opportunity. I started it because I kept seeing Amazon sellers stuck in the same loop. Rejected documents, vague feedback from Amazon, and suppliers who couldn't explain why. I started helping people in online communities, working through cases one by one, and realized that most rejections came down to the same technical mismatches that Amazon never bothers to explain. That pattern became the foundation of everything I do here."
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">My Commitment to You</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I give honest assessments, even when the news is bad. If your documents are flawed beyond repair, I will tell you directly rather than taking your money for a review that won't help.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-bold">
                  I do NOT create, modify, or falsify documents. My value is in identifying risks and providing you with the exact technical language you need to request corrections from your supplier.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-8 h-8 text-brand-600 mb-4" />
                <h4 className="font-bold text-lg mb-2">Expertise</h4>
                <p className="text-sm text-slate-600">Specialized in FCC, CE, CPC, and UN38.3 compliance triggers</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <Scale className="w-8 h-8 text-brand-600 mb-4" />
                <h4 className="font-bold text-lg mb-2">Integrity</h4>
                <p className="text-sm text-slate-600">Zero tolerance for fraudulent or altered documentation</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <FileWarning className="w-8 h-8 text-brand-600 mb-4" />
                <h4 className="font-bold text-lg mb-2">Directness</h4>
                <p className="text-sm text-slate-600">Honest assessments of your case's likelihood of success</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-950 text-white">
                <Users className="w-8 h-8 text-brand-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Community Trust</h4>
                <p className="text-sm text-slate-400 mb-6">Actively present in Amazon seller communities, forums, and FBA groups</p>
                <Link to="/contact" className="flex items-center space-x-2 text-brand-400 font-bold text-sm hover:text-brand-300 transition">
                  <Mail className="w-4 h-4" />
                  <span>Contact Rami</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
