export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isAudio?: boolean;
}

export interface HealthMetric {
  date: string;
  heartRate?: number;
  bloodPressureSystolic?: number;
  bloodPressureDiastolic?: number;
  weight?: number;
  steps?: number;
  sleepHours?: number;
}

export interface Symptom {
  id: string;
  name: string;
  severity: "mild" | "moderate" | "severe";
  duration: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  addMessage: (message: Omit<Message, "id" | "timestamp">) => void;
  setLoading: (loading: boolean) => void;
  clearMessages: () => void;
}

export interface HealthState {
  metrics: HealthMetric[];
  addMetric: (metric: HealthMetric) => void;
  updateMetric: (date: string, metric: Partial<HealthMetric>) => void;
}
