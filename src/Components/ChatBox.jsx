import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMessageSquare,
  FiX,
  FiSend,
  FiClock,
  FiCheck,
  FiAlertTriangle,
  FiMail,
  FiUser,
  FiRefreshCw,
  FiCheckCircle
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Splitforms Access Key from environment
const SPLITFORMS_ACCESS_KEY = import.meta.env.VITE_SPLITFORMS_ACCESS_KEY || '';

// Predefined frequently asked questions and comprehensive answers
const PREDEFINED_QUESTIONS = [
  {
    id: 'pricing',
    title: '💰 Website Pricing & Payment Terms',
    question: 'How much do your websites cost and what are the payment terms?',
    isCritical: false,
    answer: `Here is our transparent pricing structure:
• 🚀 Starter Business (Blogs / 1–3 pages): ₦180,000 / $350 (1–2 weeks)
• 🏢 Business Growth (SMEs, up to 7 pages, local SEO, 5 emails): ₦350,000 / $750 (2–3 weeks)
• 🛍️ Custom Web Apps & E-Commerce: ₦650,000+ / $1,400+ (4–6 weeks)

Payment terms: 50% upfront deposit to start design and coding, and 50% on final launch and domain deployment. All packages include WhatsApp lead funnels and mobile speed optimization!`,
  },
  {
    id: 'timeline',
    title: '⏱️ Project Launch Timelines',
    question: 'How long does it take to build and launch my website?',
    isCritical: false,
    answer: `Timelines scale realistically with project size and complexity:
• Standard Blog or Starter site: 1 to 2 Weeks (minimum 1 week)
• Multi-Page SME Business website: 2 to 3 Weeks
• E-Commerce stores & booking portals: 3 to 5 Weeks
• Custom Full-Stack Web Applications: 4 to 6 Weeks

Every project adheres strictly to our sub-2.0s mobile speed guarantee on Nigerian networks.`,
  },
  {
    id: 'blog',
    title: '📝 Blog & Content Creator Website',
    question: 'What is included in a Blog or content website?',
    isCritical: false,
    answer: `A minimum blog takes 1–2 weeks and includes:
• Clean, reader-first responsive typography (optimized for phones)
• Categorized article archives with instant search
• Newsletter subscriber capture form
• Social media share hooks & WhatsApp broadcast links
• Google Discover SEO schema so articles index quickly on Google!`,
  },
  {
    id: 'ecommerce',
    title: '🛒 E-Commerce & Paystack Integration',
    question: 'Can customers buy and pay directly online on my store?',
    isCritical: false,
    answer: `Yes! Our E-Commerce platforms feature:
• Automated card & bank transfer checkout via Paystack and Flutterwave
• 1-Click "Order on WhatsApp" alternative for quick shoppers
• Real-time product search and category filters
• Customer order receipts & smartphone stock management alerts!`,
  },
  {
    id: 'cpanel_installation',
    title: '⚙️ cPanel & Website Installation',
    question: 'Do you help with website installation and hosting setup on cPanel or DirectAdmin?',
    isCritical: false,
    answer: `Yes! I provide complete cPanel & DirectAdmin website installation and server deployment:
• Uploading & deploying website source files / CMS
• Database setup (MySQL creation, database users, phpMyAdmin import)
• Free SSL certificate configuration (HTTPS padlock)
• Domain DNS setup (A-records, CNAME, Nameservers)
• Custom business emails (e.g. info@yourdomain.com)
• Live speed check & responsive testing

I have logged your installation request. Mide will follow up directly with you via email, or you can message Mide immediately on WhatsApp for instant setup!`,
  },
  {
    id: 'emails',
    title: '📧 Custom Business Email Setup',
    question: 'Do you setup branded emails (info@mycompany.com)?',
    isCritical: false,
    answer: `Yes! We set up professional, branded business email accounts (e.g. info@yourcompany.com):
• Powered by Google Workspace, Zoho Mail, or cPanel Webmail
• Full DKIM, SPF, and DMARC DNS records configured so emails reach the inbox
• Synced directly to your smartphone (Gmail, Outlook, or Apple Mail app)

Every website project includes business email setup, or we can configure it for your existing domain!`,
  },
  {
    id: 'seo',
    title: '🔍 Local Google Search Ranking (SEO)',
    question: 'How do you ensure local customers in Nigeria find my business on Google?',
    isCritical: false,
    answer: `We implement end-to-end Local SEO:
• Structured Schema.org metadata for LocalBusiness and Services
• Google Business Profile verification & Google Maps optimization
• Keyword targeting for your city (Ibadan, Lagos, Abuja, etc.) and industry
• Sub-2.0s speed optimization to rank higher in mobile search results.`,
  },
  {
    id: 'urgent',
    title: '🚨 Urgent Technical Issue / Custom Project',
    question: 'I have an urgent deadline, bug/technical issue, or need an enterprise bespoke quote.',
    isCritical: true,
    answer: `CRITICAL REQUEST: This inquiry has been logged as high-priority. Olumide Oyediran (Mide) has been alerted and will review your technical specifications immediately. We will get back to you directly via your email shortly.`,
  },
];

// Helper to detect if a custom user issue should be marked critical
const checkIsCritical = (text) => {
  const lower = (text || '').toLowerCase();
  const criticalKeywords = [
    'urgent',
    'emergency',
    'critical',
    'bug',
    'broken',
    'hacked',
    'error',
    'asap',
    'immediately',
    'enterprise',
    'custom app',
    'deadline',
    'crash',
  ];
  return criticalKeywords.some((kw) => lower.includes(kw));
};

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('name'); // 'name' | 'email' | 'issue' | 'chatting'
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messages, setMessages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasLeadSubmitted, setHasLeadSubmitted] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize intake messages on mount
  useEffect(() => {
    // Check if user was previously authenticated in this session
    try {
      const savedName = sessionStorage.getItem('chat_user_name');
      const savedEmail = sessionStorage.getItem('chat_user_email');
      if (savedName && savedEmail) {
        setUserName(savedName);
        setUserEmail(savedEmail);
        setStep('chatting');
        setMessages([
          {
            id: 1,
            sender: 'mide',
            text: `👋 Welcome back, ${savedName}! How can I help you today? Feel free to ask a question or select from the options below.`,
            time: 'Just now',
          },
        ]);
        return;
      }
    } catch {
      // Safe fallback for strict privacy mode
    }

    setMessages([
      {
        id: 1,
        sender: 'mide',
        text: "👋 Welcome to Skryptvolt! I'm Olumide Oyediran's Assistant.",
        time: 'Just now',
      },
      {
        id: 2,
        sender: 'mide',
        text: 'Before we answer your questions, please tell me: What is your full name?',
        time: 'Just now',
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping, step]);

  // Transmit lead to Splitforms API (and FormSubmit backup)
  const transmitLead = async (name, email, issueText, isCritical) => {
    const payload = {
      access_key: SPLITFORMS_ACCESS_KEY,
      name,
      email,
      issue: issueText,
      question: issueText,
      is_critical: isCritical ? 'YES - CRITICAL PRIORITY' : 'Standard Inquiry',
      source: 'Portfolio Live Chat Assistant',
      timestamp: new Date().toISOString(),
    };

    try {
      if (SPLITFORMS_ACCESS_KEY) {
        await fetch('https://splitforms.com/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        // Fallback backup if Splitforms access key is not yet pasted in .env
        await fetch('https://formsubmit.co/ajax/oyediranolumide97@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: isCritical ? '🚨 CRITICAL LIVE CHAT LEAD' : 'New Live Chat Lead - Skryptvolt',
            ...payload,
          }),
        });
      }
    } catch (err) {
      console.warn('Lead transmission handled:', err);
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  // Step 1: Handle Name Submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    const name = inputVal.trim();
    if (!name) return;

    setUserName(name);
    setInputVal('');
    setStep('email');

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'user', text: name, time: 'Just now' },
      {
        id: Date.now() + 1,
        sender: 'mide',
        text: `Nice to meet you, ${name}! What is your email address so we can send you our project guide and reply directly?`,
        time: 'Just now',
      },
    ]);
  };

  // Step 2: Handle Email Submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const email = inputVal.trim();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address (e.g. name@company.com)');
      return;
    }

    setEmailError('');
    setUserEmail(email);
    setInputVal('');
    setStep('issue');

    try {
      sessionStorage.setItem('chat_user_name', userName);
      sessionStorage.setItem('chat_user_email', email);
    } catch {
      // safe fallback
    }

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'user', text: email, time: 'Just now' },
      {
        id: Date.now() + 1,
        sender: 'mide',
        text: `Thank you, ${userName}! Now, what issue or project question do you have today? You can choose one of the predefined questions below or type your issue directly:`,
        time: 'Just now',
      },
    ]);
  };

  // Step 3: Handle Issue Submission (User types or clicks predefined question)
  const handleIssueSubmit = async (issueText, explicitCritical = false, explicitId = null) => {
    const issue = (issueText || inputVal).trim();
    if (!issue) return;

    setInputVal('');
    setIsSubmitting(true);
    setStep('chatting');

    const isCritical = explicitCritical || checkIsCritical(issue);

    // Add user question to message stream
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'user', text: issue, time: 'Just now' },
    ]);

    // Send Name, Email, and Question to Olumide via Splitforms
    await transmitLead(userName, userEmail, issue, isCritical);
    setHasLeadSubmitted(true);
    setIsSubmitting(false);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      if (isCritical) {
        // Critical Issue Response
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'mide',
            isCriticalNotice: true,
            text: `⚠️ PRIORITY NOTICE FOR ${userName.toUpperCase()}:

Your issue has been flagged as critical/urgent. Olumide Oyediran (Mide) has received your details (${userName}, ${userEmail}) and complete project brief:
"${issue}"

We will review your requirements and get back to you directly via email at:
📩 ${userEmail} shortly.`,
            time: 'Just now',
          },
        ]);
      } else {
        // Precise intent and category matching
        let matched = null;

        if (explicitId) {
          matched = PREDEFINED_QUESTIONS.find((q) => q.id === explicitId);
        } else {
          const lower = issue.toLowerCase();

          // 1. Check if asking about cPanel, DirectAdmin, or hosting installation / deployment
          if (
            lower.includes('cpanel') ||
            lower.includes('directadmin') ||
            lower.includes('installation') ||
            lower.includes('install') ||
            lower.includes('deploy') ||
            lower.includes('server') ||
            lower.includes('hosting setup')
          ) {
            matched = PREDEFINED_QUESTIONS.find((q) => q.id === 'cpanel_installation');
          } else if (
            lower.includes('email') ||
            lower.includes('mail') ||
            lower.includes('inbox') ||
            lower.includes('zoho') ||
            lower.includes('webmail') ||
            lower.includes('workspace')
          ) {
            matched = PREDEFINED_QUESTIONS.find((q) => q.id === 'emails');
          } else if (
            lower.includes('price') ||
            lower.includes('cost') ||
            lower.includes('how much') ||
            lower.includes('package') ||
            lower.includes('rate') ||
            lower.includes('pricing') ||
            lower.includes('fee')
          ) {
            matched = PREDEFINED_QUESTIONS.find((q) => q.id === 'pricing');
          } else if (
            lower.includes('how long') ||
            lower.includes('duration') ||
            lower.includes('turnaround') ||
            lower.includes('deadline') ||
            lower.includes('launch') ||
            lower.includes('timeline') ||
            lower.includes('time')
          ) {
            matched = PREDEFINED_QUESTIONS.find((q) => q.id === 'timeline');
          } else if (
            lower.includes('blog') ||
            lower.includes('article') ||
            lower.includes('content') ||
            lower.includes('writer') ||
            lower.includes('news')
          ) {
            matched = PREDEFINED_QUESTIONS.find((q) => q.id === 'blog');
          } else if (
            lower.includes('shop') ||
            lower.includes('store') ||
            lower.includes('ecommerce') ||
            lower.includes('ecom') ||
            lower.includes('paystack') ||
            lower.includes('flutterwave') ||
            lower.includes('checkout') ||
            lower.includes('cart')
          ) {
            matched = PREDEFINED_QUESTIONS.find((q) => q.id === 'ecommerce');
          } else if (
            lower.includes('seo') ||
            lower.includes('google') ||
            lower.includes('ranking') ||
            lower.includes('rank') ||
            lower.includes('search')
          ) {
            matched = PREDEFINED_QUESTIONS.find((q) => q.id === 'seo');
          }
        }

        const replyText = matched
          ? matched.answer
          : `Thank you, ${userName}!

I have received your custom inquiry:
"${issue}"

Your message and contact details have been sent directly to Olumide Oyediran (Mide). Because this requires personalized review, Mide will examine your technical requirements and respond to your email (${userEmail}) shortly.

For immediate discussion or urgent consultation, feel free to chat with Mide directly on WhatsApp.`;

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'mide',
            text: replyText,
            time: 'Just now',
          },
        ]);
      }
    }, 850);
  };

  const handleResetProfile = () => {
    try {
      sessionStorage.removeItem('chat_user_name');
      sessionStorage.removeItem('chat_user_email');
    } catch {
      // safe fallback
    }
    setUserName('');
    setUserEmail('');
    setStep('name');
    setMessages([
      {
        id: Date.now(),
        sender: 'mide',
        text: 'Profile reset. What is your full name to start a new inquiry?',
        time: 'Just now',
      },
    ]);
  };

  const handleWhatsAppEscalation = (customNote) => {
    const phoneNumber = '2347088136059';
    const text = `Hello Mide! My name is ${userName || 'Client'} (${userEmail || ''}).
${customNote || 'I just submitted an inquiry on your website and would like to follow up directly.'}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* Floating Chat Trigger Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Live Chat Support & Inquiry"
          className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#0d101d] hover:bg-[#14192d] border border-brand-500/50 hover:border-brand-400 text-white shadow-2xl shadow-brand-500/20 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          {/* Subtle ambient glow */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-brand-500/30 via-cyan-500/20 to-brand-600/30 blur-sm opacity-70 group-hover:opacity-100 transition duration-300 pointer-events-none" />

          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-brand-500 text-white shadow-inner">
            <FiMessageSquare className="text-sm" />
          </div>

          <div className="relative text-left hidden sm:block">
            <div className="text-[10px] font-mono uppercase tracking-wider text-brand-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Direct Support</span>
            </div>
            <div className="text-xs font-bold text-white tracking-tight">
              Inquire &amp; Get Answers
            </div>
          </div>

          <div className="relative text-xs font-bold text-white sm:hidden">
            Chat with Us
          </div>
        </button>
      </div>

      {/* Main Live Chat Window (Right-aligned above AI button) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-end sm:justify-end justify-center p-0 sm:p-6 bg-black/60 sm:bg-transparent pointer-events-auto">
            {/* Mobile backdrop */}
            <div
              className="sm:hidden absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Chat Box Container */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              className="relative w-full sm:w-[410px] h-[580px] max-h-[88vh] flex flex-col bg-[#0c0d14] border border-white/10 sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#11131d]">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/logo.jpeg"
                      alt="Olumide Oyediran"
                      className="w-9 h-9 rounded-full object-cover border border-brand-500/40"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Olumide Oyediran</span>
                      <span className="text-[9px] text-brand-400 font-mono">Skryptvolt</span>
                    </h3>
                    <p className="text-[10px] text-gray-400 font-quicksand">
                      {userName ? `Helping ${userName}` : 'Lead Support & Project Inquiries'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {userName && (
                    <button
                      type="button"
                      onClick={handleResetProfile}
                      title="Reset profile name/email"
                      className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors text-xs"
                    >
                      <FiRefreshCw className="text-xs" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat"
                    className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    <FiX className="text-base" />
                  </button>
                </div>
              </div>

              {/* Verified Contact Bar if user completed intake */}
              {userName && userEmail && (
                <div className="px-4 py-2 bg-brand-500/10 border-b border-brand-500/20 flex items-center justify-between text-[11px] text-gray-300">
                  <div className="flex items-center gap-1.5 truncate">
                    <FiCheckCircle className="text-emerald-400 text-xs flex-shrink-0" />
                    <span className="truncate">{userName} ({userEmail})</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider flex-shrink-0">
                    Verified
                  </span>
                </div>
              )}

              {/* Chat Messages Stream */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin bg-gradient-to-b from-[#0c0d14] via-[#090a0f] to-[#0c0d14]">
                {messages.map((msg) => {
                  const isMide = msg.sender === 'mide';
                  const isCritical = msg.isCriticalNotice;

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isMide ? 'items-start' : 'items-end'}`}
                    >
                      <div
                        className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed whitespace-pre-line ${
                          isCritical
                            ? 'bg-amber-950/40 border border-amber-500/40 text-amber-200 rounded-tl-sm shadow-lg'
                            : isMide
                            ? 'bg-[#181b26] text-gray-200 border border-white/[0.06] rounded-tl-sm'
                            : 'bg-brand-500 text-white rounded-tr-sm shadow-md shadow-brand-500/20'
                        }`}
                      >
                        {isCritical && (
                          <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1.5 text-[11px]">
                            <FiAlertTriangle />
                            <span>CRITICAL INQUIRY NOTIFICATION</span>
                          </div>
                        )}

                        {msg.text}

                        {/* If critical, show direct WhatsApp emergency button */}
                        {isCritical && (
                          <div className="mt-3 pt-2.5 border-t border-amber-500/20">
                            <button
                              type="button"
                              onClick={() => handleWhatsAppEscalation('URGENT/CRITICAL PROJECT ESCALATION')}
                              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[11px] transition-all shadow-md"
                            >
                              <FaWhatsapp className="text-sm" />
                              <span>Also Ping Mide Directly on WhatsApp</span>
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-[9px] font-mono text-gray-500 mt-1 px-1">
                        <span>{msg.time}</span>
                        {!isMide && <FiCheck className="text-brand-400 text-xs" />}
                      </div>
                    </div>
                  );
                })}

                {/* Animated Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#181b26] border border-white/[0.06] w-16 rounded-tl-sm">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Predefined Questions Tray (Visible in 'issue' or 'chatting' step) */}
              {(step === 'issue' || step === 'chatting') && (
                <div className="px-3.5 py-2.5 bg-[#10121a] border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1.5">
                    Predefined Inquiries (Click to ask):
                  </span>
                  <div className="overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none pb-1">
                    {PREDEFINED_QUESTIONS.map((q) => (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => handleIssueSubmit(q.question, q.isCritical, q.id)}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-medium transition-all flex-shrink-0 border ${
                          q.isCritical
                            ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30'
                            : 'bg-white/[0.04] hover:bg-white/[0.09] text-gray-300 hover:text-white border-white/[0.08]'
                        }`}
                      >
                        {q.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dynamic Bottom Input Form based on current intake step */}
              <div className="p-3 bg-[#11131d] border-t border-white/[0.08]">
                {step === 'name' && (
                  <form onSubmit={handleNameSubmit} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 text-xs">
                          <FiUser />
                        </div>
                        <input
                          type="text"
                          value={inputVal}
                          onChange={(e) => setInputVal(e.target.value)}
                          placeholder="Enter your full name..."
                          required
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-brand-400 transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={!inputVal.trim()}
                        className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 disabled:opacity-30 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1"
                      >
                        <span>Next</span>
                        <FiSend className="text-xs" />
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-400 font-mono">
                      Step 1 of 2: Full Name required before answering questions
                    </p>
                  </form>
                )}

                {step === 'email' && (
                  <form onSubmit={handleEmailSubmit} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 text-xs">
                          <FiMail />
                        </div>
                        <input
                          type="email"
                          value={inputVal}
                          onChange={(e) => {
                            setInputVal(e.target.value);
                            if (emailError) setEmailError('');
                          }}
                          placeholder="Enter your email address..."
                          required
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-brand-400 transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={!inputVal.trim()}
                        className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 disabled:opacity-30 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1"
                      >
                        <span>Confirm</span>
                        <FiSend className="text-xs" />
                      </button>
                    </div>
                    {emailError ? (
                      <p className="text-[10px] text-red-400">{emailError}</p>
                    ) : (
                      <p className="text-[10px] text-gray-400 font-mono">
                        Step 2 of 2: We'll send project briefs and responses here
                      </p>
                    )}
                  </form>
                )}

                {(step === 'issue' || step === 'chatting') && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleIssueSubmit(inputVal);
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder={
                        step === 'issue'
                          ? 'Describe your project or issue...'
                          : 'Ask another question or describe an issue...'
                      }
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-brand-400 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={!inputVal.trim() || isSubmitting}
                      aria-label="Send inquiry"
                      className="p-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 disabled:opacity-30 text-white transition-all shadow-md"
                    >
                      <FiSend className="text-xs" />
                    </button>
                  </form>
                )}
              </div>

              {/* Bottom Security & Delivery Footnote */}
              <div className="px-4 py-1.5 bg-[#090a0f] border-t border-white/[0.04] flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span className="flex items-center gap-1">
                  <FiClock className="text-emerald-400" />
                  <span>Submissions routed to Olumide Oyediran</span>
                </span>
                <button
                  type="button"
                  onClick={() => handleWhatsAppEscalation()}
                  className="hover:text-emerald-400 text-gray-400 transition-colors flex items-center gap-1"
                >
                  <FaWhatsapp />
                  <span>WhatsApp direct</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBox;
