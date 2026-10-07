import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../Components/SEO";

export default function ThankYou() {
  const handleWhatsApp = () => {
    const phoneNumber = "2347088136059";
    const message = "Hello Mide! I just submitted an inquiry on your website and wanted to follow up on WhatsApp.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <SEO
        title="Skryptvolt | Message Received"
        description="Your inquiry has been received. Olumide Oyediran (Skryptvolt) will review your project details and reply shortly."
        path="/thankYou"
        noindex={true}
      />
      <div className="flex items-center justify-center min-h-screen bg-black/90 px-4 pt-20">
        <div className="bg-[#0c0d12] border border-white/10 shadow-2xl rounded-2xl p-8 sm:p-10 max-w-md w-full text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-5 text-brand-400">
            <CheckCircle2 className="h-8 w-8 text-brand-400" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Message Received! 🎉
          </h1>
          
          <p className="text-sm text-gray-300 leading-relaxed font-quicksand mb-6">
            Thank you for reaching out. Your inquiry has been delivered directly to <span className="text-white font-medium">oyediranolumide97@gmail.com</span>. I will review your project details and get back to you shortly.
          </p>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="group relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-brand-500 via-cyan-400 to-brand-600 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.55)] transition-all active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-[11px] bg-[#0c0e18] group-hover:bg-[#12162a] transition-colors">
                <span className="font-mono text-brand-400 font-bold text-xs">❯_</span>
                <FaWhatsapp className="text-emerald-400 text-lg group-hover:scale-110 transition-transform" />
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-white">
                  Fast Channel: WhatsApp Me
                </span>
              </div>
            </button>

            <Link
              to="/"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#090b14] hover:bg-[#111526] border border-white/10 hover:border-brand-500/40 text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
            >
              <span className="text-gray-500">//</span>
              <span>return_to_home()</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
