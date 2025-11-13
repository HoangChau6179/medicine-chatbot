import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HealthState, HealthMetric } from "@/types";

export const useHealthStore = create<HealthState>()(
  persist(
    (set) => ({
      metrics: [
        // Sample data
        { date: "2024-11-01", heartRate: 72, bloodPressureSystolic: 120, bloodPressureDiastolic: 80, weight: 70, steps: 8500, sleepHours: 7 },
        { date: "2024-11-02", heartRate: 75, bloodPressureSystolic: 118, bloodPressureDiastolic: 78, weight: 70, steps: 9200, sleepHours: 6.5 },
        { date: "2024-11-03", heartRate: 70, bloodPressureSystolic: 122, bloodPressureDiastolic: 82, weight: 69.8, steps: 10000, sleepHours: 8 },
        { date: "2024-11-04", heartRate: 73, bloodPressureSystolic: 119, bloodPressureDiastolic: 79, weight: 69.5, steps: 7800, sleepHours: 7.5 },
        { date: "2024-11-05", heartRate: 71, bloodPressureSystolic: 121, bloodPressureDiastolic: 81, weight: 69.7, steps: 9500, sleepHours: 7 },
        { date: "2024-11-06", heartRate: 74, bloodPressureSystolic: 117, bloodPressureDiastolic: 77, weight: 69.6, steps: 11000, sleepHours: 8.5 },
        { date: "2024-11-07", heartRate: 72, bloodPressureSystolic: 120, bloodPressureDiastolic: 80, weight: 69.4, steps: 8900, sleepHours: 7 },
      ],
      addMetric: (metric) =>
        set((state) => ({
          metrics: [...state.metrics, metric],
        })),
      updateMetric: (date, metric) =>
        set((state) => ({
          metrics: state.metrics.map((m) =>
            m.date === date ? { ...m, ...metric } : m
          ),
        })),
    }),
    {
      name: "health-storage",
    }
  )
);
