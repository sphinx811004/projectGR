// src/components/PopularAreas.jsx
import React from 'react';

// We can store the areas in an array and map over them
const areas = [
  { name: 'Near NIT Raipur', icon: 'school' },
  { name: 'Near AIIMS Raipur', icon: 'local_hospital' },
  { name: 'Near HNLU', icon: 'school' },
  { name: 'Shankar Nagar', icon: 'apartment' },
  { name: 'Near IIM Raipur', icon: 'business_center' },
];

function PopularAreaItem({ name, icon }) {
  return (
    <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-gray-200 dark:bg-white/10 px-4 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
      <span className="material-symbols-outlined text-primary">{icon}</span>
      <p className="text-sm font-medium leading-normal">{name}</p>
    </div>
  );
}

function PopularAreas() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h3 className="text-lg font-bold mb-4">Popular University Areas</h3>
      <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4">
        {areas.map((area) => (
          <PopularAreaItem key={area.name} name={area.name} icon={area.icon} />
        ))}
      </div>
    </section>
  );
}

export default PopularAreas;