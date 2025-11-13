"use client";

import { useHealthStore } from "@/store/healthStore";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Activity, Heart, TrendingUp, Moon } from "lucide-react";

export default function HealthDashboard() {
  const { metrics } = useHealthStore();

  const latestMetric = metrics[metrics.length - 1];

  const StatCard = ({
    title,
    value,
    unit,
    icon: Icon,
    color,
  }: {
    title: string;
    value: number | string;
    unit: string;
    icon: any;
    color: string;
  }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">{title}</span>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span className="ml-2 text-sm text-gray-500">{unit}</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Heart Rate"
          value={latestMetric?.heartRate || "--"}
          unit="bpm"
          icon={Heart}
          color="text-red-500"
        />
        <StatCard
          title="Steps Today"
          value={latestMetric?.steps?.toLocaleString() || "--"}
          unit="steps"
          icon={Activity}
          color="text-blue-500"
        />
        <StatCard
          title="Weight"
          value={latestMetric?.weight || "--"}
          unit="kg"
          icon={TrendingUp}
          color="text-green-500"
        />
        <StatCard
          title="Sleep"
          value={latestMetric?.sleepHours || "--"}
          unit="hours"
          icon={Moon}
          color="text-purple-500"
        />
      </div>

      {/* Heart Rate Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Heart Rate Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            />
            <YAxis domain={[60, 85]} />
            <Tooltip
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="heartRate"
              stroke="#ef4444"
              strokeWidth={2}
              name="Heart Rate (bpm)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Blood Pressure Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Blood Pressure</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            />
            <YAxis domain={[70, 130]} />
            <Tooltip
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="bloodPressureSystolic"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Systolic"
            />
            <Line
              type="monotone"
              dataKey="bloodPressureDiastolic"
              stroke="#8b5cf6"
              strokeWidth={2}
              name="Diastolic"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Activity Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <Legend />
            <Bar dataKey="steps" fill="#3b82f6" name="Steps" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sleep Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sleep Duration</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            />
            <YAxis domain={[0, 10]} />
            <Tooltip
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <Legend />
            <Bar dataKey="sleepHours" fill="#8b5cf6" name="Sleep (hours)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
