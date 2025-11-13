"use client";

import { useState } from "react";
import ChatInterface from "@/components/ChatInterface";
import HealthDashboard from "@/components/HealthDashboard";
import SymptomChecker from "@/components/SymptomChecker";
import UserMenu from "@/components/UserMenu";
import { MessageSquare, Activity, Stethoscope } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"chat" | "health" | "symptoms">("chat");

  const tabs = [
    { id: "chat" as const, label: "Chat", icon: MessageSquare },
    { id: "health" as const, label: "Health Tracking", icon: Activity },
    { id: "symptoms" as const, label: "Symptom Checker", icon: Stethoscope },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Medical Chatbot</h1>
                <p className="text-sm text-gray-600">Your AI Healthcare Assistant</p>
              </div>
            </div>
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "chat" && (
          <div className="h-[calc(100vh-250px)]">
            <ChatInterface />
          </div>
        )}
        {activeTab === "health" && <HealthDashboard />}
        {activeTab === "symptoms" && <SymptomChecker />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2024 Medical Chatbot. This is an AI assistant for educational purposes only.
            Always consult healthcare professionals for medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
