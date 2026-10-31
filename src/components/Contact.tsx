"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Video,
  Send,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

const serviceOptions = [
  "Emotional Healing & Chakra Balance",
  "Live Online Yoga & Aerobics",
  "Confidential Life Counselling",
  "Negative Mindset to Positive",
  "Naturopathy & Natural Remedies",
  "Customized Diet & Recipes",
  "Lifestyle & Sleep Coaching",
  "Custom Integrated Healing Plan",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: serviceOptions[0],
    platform: "Zoom" as "Zoom" | "Google Meet",
    timeSlot: "Morning (6 AM - 10 AM)",
    message: "",
  });

  const TARGET_EMAIL = "priyankapolly@gmail.com";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [lastAction, setLastAction] = useState<"whatsapp" | "email" | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [emailDeliveredDirectly, setEmailDeliveredDirectly] = useState(false);

  // Listen to select-service event from Services component
  useEffect(() => {
    const handleServiceSelect = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          service: customEvent.detail,
        }));
      }
    };

    window.addEventListener("select-service", handleServiceSelect);
    return () => {
      window.removeEventListener("select-service", handleServiceSelect);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Construct formatted message string for WhatsApp
  const constructMessageText = () => {
    return `*Namaste Dr. Priyanka Srivastava,*
I would like to inquire/book an online session with Healing Harmony Wellness Club:

• *Name:* ${formData.name || "Client"}
• *Phone/WhatsApp:* ${formData.phone || "Not provided"}
• *Email:* ${formData.email || "Not provided"}
• *Selected Service:* ${formData.service}
• *Preferred Platform:* ${formData.platform}
• *Preferred Time:* ${formData.timeSlot}
${formData.message ? `• *Health Goals / Notes:* ${formData.message}` : ""}

Please let me know the upcoming available slots!`;
  };

  // Construct clean plain-text email message
  const constructEmailBody = () => {
    return `Namaste Dr. Priyanka Srivastava,

I would like to inquire / book an online session with Healing Harmony Wellness Club:

• Name: ${formData.name || "Client"}
• Phone/WhatsApp: ${formData.phone || "Not provided"}
• Email: ${formData.email || "Not provided"}
• Selected Service: ${formData.service}
• Preferred Platform: ${formData.platform}
• Preferred Time: ${formData.timeSlot}
${formData.message ? `• Health Goals / Notes: ${formData.message}\n` : ""}
Please let me know the upcoming available slots!`;
  };

  // Submit to background API route
  const submitToApi = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data?.emailDelivered) {
        setEmailDeliveredDirectly(true);
      }
      return data;
    } catch (err) {
      console.error("Failed to submit to backend API:", err);
      return null;
    }
  };

  // WhatsApp Booking Action
  const handleWhatsAppBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Phone Number to continue.");
      return;
    }

    setIsSubmitting(true);
    setLastAction("whatsapp");

    // Send copy to API in background
    await submitToApi();

    const formattedText = encodeURIComponent(constructMessageText());
    const whatsappUrl = `https://wa.me/919214426091?text=${formattedText}`;

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Email Booking Action
  const handleEmailBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Phone Number to continue.");
      return;
    }

    setIsSubmitting(true);
    setLastAction("email");

    try {
      // 1. Send direct email to Dr. Priyanka's inbox via Web3Forms
      const web3FormData = new FormData();
      web3FormData.append("access_key", "70d086db-1237-46d1-9dc8-20ea481fcd3f");
      web3FormData.append("subject", `Healing Harmony: New Session Request from ${formData.name} (${formData.service})`);
      web3FormData.append("from_name", "Healing Harmony Wellness Club");
      web3FormData.append("name", formData.name);
      web3FormData.append("phone", formData.phone);
      web3FormData.append("email", formData.email || "Not provided");
      web3FormData.append("service", formData.service);
      web3FormData.append("platform", formData.platform);
      web3FormData.append("time_slot", formData.timeSlot);
      web3FormData.append("message", constructEmailBody());

      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const web3Result = await web3Response.json();

      // 2. Also log internally to Next.js API
      submitToApi();

      if (web3Result?.success) {
        setEmailDeliveredDirectly(true);
        setSubmitStatus("success");
      } else {
        // Fallback: If Web3Forms returned an issue, trigger Gmail Web
        console.warn("Web3Forms issue, launching webmail fallback:", web3Result);
        setSubmitStatus("success");
        const subject = encodeURIComponent(`Session Inquiry: ${formData.service} - ${formData.name}`);
        const body = encodeURIComponent(constructEmailBody());
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${subject}&body=${body}`;
        
        const newTab = window.open(gmailUrl, "_blank", "noopener,noreferrer");
        if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
          window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
        }
      }
    } catch (error) {
      console.error("Email submission error:", error);
      // Fallback on error to ensure client never gets stuck
      setSubmitStatus("success");
      const subject = encodeURIComponent(`Session Inquiry: ${formData.service} - ${formData.name}`);
      const body = encodeURIComponent(constructEmailBody());
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailDetails = () => {
    const textToCopy = `To: ${TARGET_EMAIL}\nSubject: Session Inquiry: ${formData.service} - ${formData.name}\n\n${constructEmailBody()}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-light-green/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Information & Direct Channels */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Doctor Profile Banner */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-300 shadow-sm flex-shrink-0">
                <img
                  src="/images/dr-priyanka-srivastava.jpg"
                  alt="Dr. Priyanka Srivastava"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-50 text-primary-pink font-semibold text-xs mb-1 border border-pink-100">
                  <Sparkles className="w-3.5 h-3.5" />
                  Direct Consultation
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-outfit text-dark-green leading-tight">
                  Dr. Priyanka Srivastava
                </h3>
                <p className="text-xs text-primary-green font-semibold mt-0.5">
                  Yog n Naturopathy Expert • Holistic Health Coach
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-green font-outfit mb-3 leading-tight">
              Connect Directly with <span className="text-primary-pink">Dr. Priyanka Srivastava</span>
            </h2>

            <div className="text-sm font-bold text-primary-green mb-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
                Yog n Naturopathy Expert
              </span>
              <span className="px-3 py-1 bg-pink-50 text-primary-pink rounded-full border border-pink-200">
                Holistic Health Coach
              </span>
            </div>

            <p className="text-gray-600 text-base sm:text-lg mb-10 leading-relaxed">
              Whether you need one-on-one emotional counselling, join daily yoga batches, or want a customized naturopathy plan, choose your preferred method to reach out.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-4 mb-10">
              {/* WhatsApp / Phone */}
              <a
                href="https://wa.me/919214426091"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Instant WhatsApp &amp; Call
                  </div>
                  <div className="text-lg font-bold text-dark-green group-hover:text-emerald-700 transition-colors">
                    +91 9214426091
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
              </a>

              {/* Online Platforms */}
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Virtual Consultations
                  </div>
                  <div className="text-base font-bold text-dark-green">
                    Zoom &amp; Google Meet (Global Access)
                  </div>
                </div>
              </div>

              {/* Direct Email */}
              <a
                href="mailto:priyankapolly@gmail.com"
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-4 hover:border-pink-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-primary-pink flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Email Inquiries
                  </div>
                  <div className="text-base font-bold text-dark-green">
                    priyankapolly@gmail.com
                  </div>
                </div>
              </a>
            </div>

            {/* Satisfaction Guarantee Notice */}
            <div className="p-5 rounded-2xl bg-emerald-950 text-white shadow-lg">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                <CheckCircle2 className="w-4 h-4" />
                Safe &amp; Confidential
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                All emotional healing and counselling sessions are 100% private and tailored to your comfort and personal boundaries.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Booking Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-emerald-100 relative">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-dark-green font-outfit">
                    Session Booking Form
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Select your service and choose to send via WhatsApp or Email.
                  </p>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <form className="space-y-6">
                
                {/* 1. Service Selection Pills */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                    Step 1: Choose Required Service
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setFormData((p) => ({ ...p, service: srv }))}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          formData.service === srv
                            ? "bg-dark-green text-white shadow-md scale-102"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Meeting Platform & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Platform Selector */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Preferred Online Platform
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, platform: "Zoom" }))}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          formData.platform === "Zoom"
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <Video className="w-3.5 h-3.5" />
                        Zoom Meeting
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, platform: "Google Meet" }))}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          formData.platform === "Google Meet"
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <Video className="w-3.5 h-3.5" />
                        Google Meet
                      </button>
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/50"
                    >
                      <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                      <option value="Flexible / Weekend">Flexible / Weekend</option>
                    </select>
                  </div>
                </div>

                {/* 3. Personal Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Shalini Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:border-primary-green transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:border-primary-green transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:border-primary-green transition-all"
                  />
                </div>

                {/* Message / Goals */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Describe What You Are Going Through / Goals
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Dr. Priyanka about your current challenges (e.g. anxiety, stiff joints, diet issues, or seeking peace)..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:border-primary-green transition-all resize-none"
                  />
                </div>

                {/* Dual Action Buttons: WhatsApp & Email */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  
                  {/* WhatsApp Primary Button */}
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Send on WhatsApp</span>
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* Email Alternate Button */}
                  <button
                    type="button"
                    onClick={handleEmailBooking}
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-6 rounded-2xl bg-dark-green hover:bg-emerald-900 text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send via Email</span>
                  </button>

                </div>

                {/* Feedback Alerts */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex flex-col gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-base text-emerald-900">
                            {emailDeliveredDirectly ? "Message Delivered Directly!" : "Inquiry Initiated Successfully!"}
                          </strong>
                          <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                            {lastAction === "whatsapp"
                              ? "Your WhatsApp chat was opened with the pre-filled message. Dr. Priyanka will reply shortly!"
                              : emailDeliveredDirectly
                              ? "Your session request has been sent directly to Dr. Priyanka's inbox. She will get in touch with you shortly!"
                              : `We opened a pre-filled email draft to ${TARGET_EMAIL}. If your browser blocked the window or you don't have an email app installed, click below:`}
                          </p>
                        </div>
                      </div>

                      {lastAction === "email" && !emailDeliveredDirectly && (
                        <div className="pt-2 flex flex-wrap gap-2 border-t border-emerald-200/60 mt-1">
                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${encodeURIComponent(`Session Inquiry: ${formData.service} - ${formData.name}`)}&body=${encodeURIComponent(constructEmailBody())}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-sm transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Open in Gmail (Web)
                          </a>
                          <a
                            href={`mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(`Session Inquiry: ${formData.service} - ${formData.name}`)}&body=${encodeURIComponent(constructEmailBody())}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-all"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            Default Mail App
                          </a>
                          <button
                            type="button"
                            onClick={copyEmailDetails}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50 cursor-pointer transition-all"
                          >
                            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            {copiedEmail ? "Copied!" : "Copy Details"}
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm"
                    >
                      Could not submit online form. Please contact directly via WhatsApp at <strong>+91 9214426091</strong>.
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
