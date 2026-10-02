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
      <SEO title="SkryptByMide | Message Received" description="Your inquiry has been received. Olumide Oyediran will review your project details and reply shortly." path="/thankYou" />
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
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm transition-all shadow-md"
            >
              <FaWhatsapp className="text-lg" />
              <span>Need Faster Response? WhatsApp Me</span>
            </button>

            <Link
              to="/"
              className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-sm transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
