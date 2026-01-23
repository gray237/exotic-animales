"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Container from "./Container";
import { guineaPigPremium } from "@/images";
import { FaPaperPlane } from "react-icons/fa";
import { Mail, Phone, MapPin, Shield, RefreshCw, CheckSquare, User, AtSign, Building, PawPrint, CreditCard, Flag, Lightbulb, } from "lucide-react";

  const ContactSection = () => {
    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    intent: "",
    priority: "Normal",
    message: "",
    consent: false,
    companyWebsite: "", // 👈 honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


  const [errors, setErrors] = useState<Record<string, string>>({});
  const [charCount, setCharCount] = useState(0);

  const MESSAGE_MAX = 600;

  useEffect(() => {
    const draft = localStorage.getItem("contactDraft");
    if (draft) {
      const parsed = JSON.parse(draft);
      setFormData(parsed);
      setCharCount(parsed.message?.length || 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contactDraft", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));

    if (name === "message") setCharCount(value.length);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "Please enter your first and last name.";
    }
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.intent) newErrors.intent = "Please select an inquiry type.";
    if (!formData.priority) newErrors.priority = "Please select urgency.";
    if (!formData.message.trim()) newErrors.message = "Tell us what pet you’re looking for.";
    if (!formData.consent) newErrors.consent = "Consent is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Inquiry sent successfully!");

      localStorage.removeItem("contactDraft");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        intent: "",
        priority: "Normal",
        message: "",
        consent: false,
        companyWebsite: "",
      });

      setCharCount(0);
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-white pb-5">
      <Container>
        <div className="px-6 lg:px-16 mx-auto max-w-[1400px]">
          <div className="mb-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Exotic Pet Inquiry
            </h2>
            <p className="text-gray-600">
              Tell us what you’re looking for — our specialists will guide you safely through the process.
            </p>
          </div>

          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6">
            {/* LEFT */}
            <aside className="flex flex-col gap-4">
              <div className="p-5 rounded-2xl border bg-white/70 backdrop-blur shadow-lg">
                <h3 className="text-xl font-semibold mb-1">Direct contact</h3>
                <p className="text-gray-600 mb-4">
                  For fastest service, use the form. These are general channels.
                </p>

                <div className="flex flex-col gap-4">
                  <InfoRow icon={Mail} label="Email" value="exoticanimales8@gmail.com" />
                  <InfoRow icon={Phone} label="Phone" value="+1 (958) 648-597" />
                  <InfoRow
                    icon={MapPin}
                    label="Service area"
                    value="United States • Licensed regions only"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge icon={Shield} text="Secure Checkout" />
                  <Badge icon={RefreshCw} text="New Pet Litters" />
                  <Badge icon={CheckSquare} text="USDA Breeders" />
                </div>
              </div>

              <div className="p-4 rounded-2xl border bg-white/70 backdrop-blur shadow-lg">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={guineaPigPremium}
                    alt="Exotic pet care"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mt-3 text-gray-600">
                  <Lightbulb size={18} className="text-yellow-500" />
                  <span>Tip: Mention the species, age preference, and location.</span>
                </div>
              </div>
            </aside>

            {/* FORM */}
            <section className="p-5 rounded-2xl border bg-white/70 backdrop-blur shadow-lg">
              <h3 className="text-xl font-semibold mb-1">Request form</h3>
              <p className="text-gray-600 mb-4">
                Fields marked <span className="text-red-500">*</span> are required.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field
                    icon={User}
                    label="Full name *"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                  />
                  <Field
                    icon={AtSign}
                    label="Email *"
                    name="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  <Field
                    icon={Phone}
                    label="Phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Field
                    icon={Building}
                    label="City / State"
                    name="company"
                    placeholder="Los Angeles, CA"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <SelectField
                    icon={PawPrint}
                    label="Intent *"
                    name="intent"
                    value={formData.intent}
                    onChange={handleChange}
                    options={[
                      "Purchase an exotic pet",
                      "Availability inquiry",
                      "Pricing & payment plans",
                      "Shipping / transport",
                      "Care & legality questions",
                    ]}
                    error={errors.intent}
                  />

                  <SelectField
                    icon={Flag}
                    label="Priority *"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    options={["Low", "Normal", "High", "Urgent"]}
                    error={errors.priority}
                  />
                </div>

                <input
                  type="text"
                  name="companyWebsite"
                  value={(formData as any).companyWebsite || ""}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />


                <div className="mt-4">
                  <Field
                    icon={Mail}
                    label="Message *"
                    name="message"
                    textarea
                    placeholder="What species are you interested in? Age, color morph, delivery timeline, and location…"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {charCount} / {MESSAGE_MAX}
                  </div>
                </div>

                <label className="flex items-start gap-2 mt-2 text-gray-700">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <span>I consent to be contacted regarding this inquiry *</span>
                </label>

                <div className="flex items-center gap-3 mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative inline-flex items-center gap-2
                      px-[22px] py-[11px]
                      rounded-[14px] font-semibold
                      border border-purple-400/36
                      shadow-lg overflow-hidden
                      transition-all duration-200
                      ${
                        isSubmitting
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "text-gray-800 bg-linear-to-br from-purple-500/22 to-teal-400/14 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-purple-700 text-[14px]" />
                        <span>Send Inquiry</span>
                      </>
                    )}

                    {!isSubmitting && (
                      <span
                        className="absolute -top-8 -left-8 w-[120px] h-[120px]
                        bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)]
                        opacity-50 pointer-events-none"
                      />
                    )}
                  </button>

                  <div className="ml-auto flex items-center gap-2 text-gray-500">
                    <Shield size={16} />
                    Secure 
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

/* ---------- helpers ---------- */

const IconWrap = ({ children }: { children: React.ReactNode }) => (
  <div className="w-11 h-11 rounded-xl border bg-purple-100/70 text-purple-600 grid place-items-center shrink-0">
    {children}
  </div>
);

const Field = ({ icon: Icon, label, textarea, error, ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <div
      className={`flex gap-3 px-4 py-3 rounded-xl border bg-white/80 backdrop-blur
      transition hover:-translate-y-px
      ${error ? "border-red-400" : "border-gray-200"}`}
    >
      <IconWrap>
        <Icon size={18} />
      </IconWrap>
      {textarea ? (
        <textarea {...props} rows={5} className="flex-1 bg-transparent outline-none resize-none" />
      ) : (
        <input {...props} className="flex-1 bg-transparent outline-none h-11" />
      )}
    </div>
    {error && <small className="text-red-500 text-sm">{error}</small>}
  </div>
);

const SelectField = ({ icon: Icon, options, error, ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{props.label}</label>
    <div
      className={`flex gap-3 px-4 py-3 rounded-xl border bg-white/80 backdrop-blur
      transition hover:-translate-y-px
      ${error ? "border-red-400" : "border-gray-200"}`}
    >
      <IconWrap>
        <Icon size={18} />
      </IconWrap>
      <select {...props} className="flex-1 bg-transparent outline-none h-11">
        <option value="">Select…</option>
        {options.map((o: string) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
    {error && <small className="text-red-500 text-sm">{error}</small>}
  </div>
);

const InfoRow = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-3 p-4 rounded-xl border bg-white/80 backdrop-blur shadow-sm hover:-translate-y-px transition">
    <IconWrap>
      <Icon size={18} />
    </IconWrap>
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  </div>
);

const Badge = ({ icon: Icon, text }: any) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm bg-white/80 backdrop-blur">
    <Icon size={14} /> {text}
  </span>
);
