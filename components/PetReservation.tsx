"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { 
  Loader2, User, AtSign, Phone, MapPin, Shield, 
  PawPrint, Calendar, Info, ShoppingBag, CheckCircle2,
  LucideIcon } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";
import { buyFerretOnline } from "@/images";


type ReservationType = "boarding" | "adoption";

const PetReservation = () => {
  const searchParams = useSearchParams();
  const initialType = (searchParams.get("type") as ReservationType) || "boarding";
  
  const [activeTab, setActiveTab] = useState<ReservationType>(initialType);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",   
    petSpecies: "",
    startDate: "",
    endDate: "",
    petName: "",
    adoptionPetId: searchParams.get("petId") || "",
    message: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const loggedInUser: Record<string, string> | null = null; 
      
      if (loggedInUser) {
        setFormData(prev => ({
          ...prev,
          fullName: loggedInUser["fullName"] || "",
          email: loggedInUser["email"] || "",
          phone: loggedInUser["phone"] || "",
          address: loggedInUser["address"] || "",
        }));
      }
    };
    fetchUserData();
  }, [setFormData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (!formData.consent) {
      toast.error("Please agree to the terms.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: activeTab }),
      });
      if (!response.ok) throw new Error();
      toast.success(`${activeTab === 'boarding' ? 'Boarding' : 'Reservation'} request sent!`);
      setFormData(prev => ({ ...prev, message: "", consent: false }));
    } catch { 
      toast.error("Failed to connect to server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Secure Reservation</h1>
        <p className="text-gray-600 dark:text-gray-400">Complete the form below to secure your spot or pet.</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 bg-gray-100/80 dark:bg-zinc-800/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-zinc-700 shadow-inner">
          <TabButton 
            active={activeTab === "boarding"} 
            onClick={() => setActiveTab("boarding")}
            icon={<Calendar size={18} />}
            label="Pet Boarding"
          />
          <TabButton 
            active={activeTab === "adoption"} 
            onClick={() => setActiveTab("adoption")}
            icon={<ShoppingBag size={18} />}
            label="Pet Adoption"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-8">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 order-1 lg:order-2 p-8 rounded-3xl border bg-white/70 backdrop-blur-xl shadow-2xl dark:bg-zinc-900/70 dark:border-zinc-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Field icon={User} label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
              <Field icon={AtSign} label="Email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Field icon={Phone} label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
              <Field icon={MapPin} label="Address / City" name="address" value={formData.address} onChange={handleChange} placeholder="123 Exotic Way, Orange, CA" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field icon={PawPrint} label="Pet Species" name="petSpecies" value={formData.petSpecies} onChange={handleChange} placeholder="e.g. Holland Lop Rabbit" />
              {activeTab === 'boarding' ? (
                <Field icon={Info} label="Pet's Name" name="petName" value={formData.petName} onChange={handleChange} placeholder="Bugs Bunny" />
              ) : (
                <Field icon={ShoppingBag} label="Pet ID / Name for Adoption" name="adoptionPetId" value={formData.adoptionPetId} onChange={handleChange} placeholder="Species Morph #102" />
              )}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "boarding" && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  className="grid md:grid-cols-2 gap-4 overflow-hidden"
                >
                  <Field icon={Calendar} label="Drop-off Date" name="startDate" type="date" value={formData.startDate} onChange={handleChange} />
                  <Field icon={Calendar} label="Pick-up Date" name="endDate" type="date" value={formData.endDate} onChange={handleChange} />
                </motion.div>
              )}
            </AnimatePresence>

            <MessageField icon={Info} label="Additional Notes" name="message" value={formData.message} onChange={handleChange} textarea placeholder="Tell us about special diets, temperaments, or delivery needs..." />

            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
              <span className="text-sm text-gray-600 dark:text-zinc-400 group-hover:text-gray-900 transition-colors">I agree to the reservation terms and conditions.</span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:translate-y-0"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <FaPaperPlane size={18} />}
              {activeTab === 'boarding' ? 'Request Boarding' : 'Reserve for Adoption'}
            </button>
          </form>
        </motion.div>

        <aside className="w-full lg:w-100 order-2 lg:order-1 flex flex-col gap-6">
          <div className="p-6 rounded-3xl border bg-white/70 backdrop-blur-xl shadow-xl dark:bg-zinc-900/70 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="text-purple-600" /> Reservation Policy
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-zinc-400">
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>Reservations are held for 24 hours pending payment.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>Boarding requires proof of health for sensitive species.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>Adoption deposits are non-refundable but transferable.</span>
              </li>
            </ul>
          </div>

          <div className="relative flex-1 w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group min-h-75">
             <Image 
                src={buyFerretOnline} 
                alt="Pet" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
             <p className="absolute bottom-6 left-6 text-white font-medium flex items-center gap-2 text-sm">
               <Info size={18} className="text-purple-400" /> Trusted by 500+ Pet Owners
             </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

/* --- SUB-COMPONENTS WITH DEFINED INTERFACES --- */

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton = ({ active, onClick, icon, label }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
      active 
      ? "bg-white dark:bg-zinc-700 text-purple-600 shadow-md ring-1 ring-black/5" 
      : "text-gray-500 hover:text-gray-700 dark:hover:text-zinc-300"
    }`}
  >
    {icon}
    {label}
  </button>
);

const IconWrap = ({ children }: { children: React.ReactNode }) => (
  <div className="w-8 h-8 rounded-lg border border-purple-100 bg-purple-50 text-purple-600 grid place-items-center shrink-0 dark:bg-purple-900/20 dark:border-purple-800">
    {children}
  </div>
);

// Shared interface for Field and MessageField props
interface FieldProps {
  icon: LucideIcon;
  label: string;
  textarea?: boolean;
  name: string;
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
}

const Field = ({ icon: Icon, label, textarea, ...props }: FieldProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-zinc-500 ml-1">{label}</label>
    <div className={`flex items-center gap-3 px-4 py-1 rounded-2xl border bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm transition-all focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 border-gray-200 dark:border-zinc-700`}>
        <IconWrap>
          <Icon size={16} />
        </IconWrap>
      {textarea ? (
        <textarea 
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} 
          rows={4} 
          className="flex-1 bg-transparent outline-none py-2 resize-none text-sm text-gray-900 dark:text-white" 
        />
      ) : (
        <input 
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)} 
          className="flex-1 bg-transparent outline-none h-10 text-sm text-gray-900 dark:text-white" 
        />
      )}
    </div>
  </div>
);

interface MessageFieldProps extends FieldProps {
  error?: string;
}

const MessageField = ({ icon: Icon, label, textarea, ...props }: MessageFieldProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-zinc-500 ml-1">{label}</label>
    <div className={`flex gap-3 px-4 py-3 rounded-2xl border bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm transition-all focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 border-gray-200 dark:border-zinc-700`}>
      <IconWrap>
        <Icon size={16} />
      </IconWrap>
      {textarea ? (
        <textarea 
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} 
          rows={4} 
          className="flex-1 bg-transparent outline-none py-1 resize-none text-sm text-gray-900 dark:text-white" 
        />
      ) : (
        <input 
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)} 
          className="flex-1 bg-transparent outline-none h-10 text-sm" 
        />
      )}
    </div>
  </div>
);

export default PetReservation;