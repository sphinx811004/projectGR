// src/components/FeaturesSection.jsx
import React from 'react';

const features = [
  {
    icon: 'verified_user',
    title: 'Vetted Landlords',
    description: 'Every property and landlord is verified by our team to ensure your safety and security.',
  },
  {
    icon: 'real_estate_agent',
    title: 'Student-Friendly Leases',
    description: 'Find flexible lease terms that match your academic calendar, from single semesters to full years.',
  },
  {
    icon: 'videocam',
    title: 'Virtual Tours Available',
    description: 'Explore properties from the comfort of your home with our high-quality virtual tours.',
  },
];

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-100 dark:bg-white/5">
      <div className="grid place-items-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
        <span className="material-symbols-outlined !text-3xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold leading-tight tracking-tight">Making Student Renting Simple</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">We focus on what matters most to students.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureItem key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;