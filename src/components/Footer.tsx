import { Link } from "react-router-dom";
import { Mail, Clock, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <div className="bg-white p-1.5 rounded-xl group-hover:bg-brand-500 transition-colors">
                <img src="/logo.png" alt="Averis Compliance" className="w-7 h-7 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="heading-display text-xl tracking-tight leading-none text-white">
                  AVERIS<span className="text-brand-500 font-black">.</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 leading-none mt-1">
                  Compliance
                </span>
              </div>
            </Link>
            <p className="text-lg max-w-md mb-10 leading-relaxed text-slate-400">
              Expert document review and risk identification for Amazon sellers. 
              I help you identify the technical triggers that cause rejections before you hit submit.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <Clock className="w-4 h-4 text-brand-500" />
                <span>24h Response Target</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                <span>Expert Analysis</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-400 transition">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-brand-400 transition">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-400 transition">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition">About Me</Link></li>
              <li><Link to="/checklist" className="hover:text-brand-400 transition">Free Checklist</Link></li>
              <li><Link to="/contact?issue=Free Risk Snapshot" className="hover:text-brand-400 transition">Free Risk Snapshot</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-500" />
                <a href="mailto:rami.nairatt@gmail.com" className="hover:text-white transition">rami.nairatt@gmail.com</a>
              </li>
              <li className="text-xs text-slate-500">
                Also available on{" "}
                <a href="#" /* FIVERR LINK */ className="hover:text-white transition underline underline-offset-2">Fiverr</a> and{" "}
                <a href="#" /* UPWORK LINK */ className="hover:text-white transition underline underline-offset-2">Upwork</a>
              </li>
              <li className="text-xs leading-relaxed mt-4">
                Averis Compliance is an independent service. I am not affiliated with Amazon.com, Inc.
              </li>
              <li className="text-xs leading-relaxed mt-4 text-slate-500 font-bold uppercase tracking-widest">
                Actively present in Amazon seller communities, forums, and FBA groups.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs uppercase tracking-widest font-semibold">
          <p>&copy; {new Date().getFullYear()} Averis Compliance. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
