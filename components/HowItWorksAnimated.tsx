'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    step: '01',
    icon: '📋',
    title: 'Tell Us About Your Business',
    desc: "Complete our 5-minute quote form. We'll ask about your industry, revenue, data held and existing security controls.",
  },
  {
    step: '02',
    icon: '🔍',
    title: 'Our Brokers Assess Your Risk',
    desc: 'Licensed NZ cyber insurance specialists review your profile and identify the right policies from our insurer panel.',
  },
  {
    step: '03',
    icon: '📊',
    title: 'Receive Tailored Options',
    desc: 'We present you with tailored policy options from multiple insurers, with clear comparisons and expert guidance.',
  },
  {
    step: '04',
    icon: '🔒',
    title: 'Get Protected',
    desc: 'Choose your preferred cover. Your broker handles the paperwork and you receive full policy documentation.',
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div className="relative mx-auto mb-6 w-24 h-24">
        {/* Animated ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-teal-400"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.6)',
            transition: `opacity 0.5s ease ${index * 0.15 + 0.3}s, transform 0.5s ease ${index * 0.15 + 0.3}s`,
          }}
        />
        <div className="absolute inset-2 bg-teal-600 rounded-full flex flex-col items-center justify-center shadow-lg">
          <span className="text-2xl">{step.icon}</span>
          <span className="text-white text-xs font-bold leading-none">{step.step}</span>
        </div>
      </div>
      <h3 className="font-bold text-slate-900 mb-2 text-base">{step.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
    </div>
  );
}

export default function HowItWorksAnimated() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <StepCard key={step.step} step={step} index={i} />
        ))}
      </div>
    </div>
  );
}
