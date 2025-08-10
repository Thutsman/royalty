"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Building2, Users, MapPinned, ThumbsUp } from "lucide-react";

function useCounter(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const steps = 40;
    const stepTime = Math.max(16, Math.floor(durationMs / steps));
    let current = 0;
    const increment = target / steps;
    const id = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(id);
      }
      setValue(Math.round(current));
    }, stepTime);
    return () => clearInterval(id);
  }, [target, durationMs]);
  return value;
}

export default function Stats() {
  const projects = useCounter(120);
  const years = useCounter(10);
  const satisfaction = useCounter(98);
  const team = useCounter(40);
  const stats = [
    { label: "Projects Completed", value: projects, icon: Building2, suffix: "+" },
    { label: "Years Experience", value: years, icon: CheckCircle2, suffix: "+" },
    { label: "Client Satisfaction", value: satisfaction, icon: ThumbsUp, suffix: "%" },
    { label: "Team Members", value: team, icon: Users, suffix: "+" },
    { label: "Regions Served", value: "Gauteng • Mpumalanga", icon: MapPinned },
  ];

  return (
    <section className="section-alt py-16">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            const isNumber = typeof s.value === "number";
            return (
              <div
                key={s.label}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[--rcp-primary]">
                  <Icon size={20} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[color:var(--foreground)] mt-3">
                  {isNumber ? `${s.value}${s.suffix ?? ""}` : s.value}
                </div>
                <div className="subtle mt-1">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


