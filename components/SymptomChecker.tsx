"use client";

import { useState } from "react";
import { Plus, X, AlertCircle, Loader2 } from "lucide-react";
import { Symptom } from "@/types";

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [newSymptom, setNewSymptom] = useState("");
  const [severity, setSeverity] = useState<"mild" | "moderate" | "severe">("mild");
  const [duration, setDuration] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const addSymptom = () => {
    if (!newSymptom.trim() || !duration.trim()) return;

    const symptom: Symptom = {
      id: Math.random().toString(36).substring(7),
      name: newSymptom.trim(),
      severity,
      duration: duration.trim(),
    };

    setSymptoms([...symptoms, symptom]);
    setNewSymptom("");
    setDuration("");
    setSeverity("mild");
  };

  const removeSymptom = (id: string) => {
    setSymptoms(symptoms.filter((s) => s.id !== id));
  };

  const analyzeSymptoms = async () => {
    if (symptoms.length === 0) return;

    setIsAnalyzing(true);
    setAnalysis("");

    try {
      const response = await fetch("/api/symptom-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });

      const data = await response.json();

      if (data.error) {
        setAnalysis(`Error: ${data.error}`);
      } else {
        setAnalysis(data.analysis);
      }
    } catch (error) {
      setAnalysis("Sorry, I encountered an error analyzing your symptoms. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild":
        return "bg-yellow-100 text-yellow-800";
      case "moderate":
        return "bg-orange-100 text-orange-800";
      case "severe":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Symptom Checker</h2>
        <p className="text-sm text-gray-600">
          Add your symptoms below for an AI-powered analysis. Remember, this is for educational purposes only.
        </p>
      </div>

      {/* Add Symptom Form */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Symptom Name
          </label>
          <input
            type="text"
            value={newSymptom}
            onChange={(e) => setNewSymptom(e.target.value)}
            placeholder="e.g., Headache, Fever, Cough"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Severity
            </label>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="mild">Mild</option>
              <option value="moderate">Moderate</option>
              <option value="severe">Severe</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g., 2 days, 1 week"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          onClick={addSymptom}
          disabled={!newSymptom.trim() || !duration.trim()}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Symptom
        </button>
      </div>

      {/* Symptoms List */}
      {symptoms.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Symptoms</h3>
          <div className="space-y-2">
            {symptoms.map((symptom) => (
              <div
                key={symptom.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{symptom.name}</span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${getSeverityColor(
                        symptom.severity
                      )}`}
                    >
                      {symptom.severity}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">Duration: {symptom.duration}</span>
                </div>
                <button
                  onClick={() => removeSymptom(symptom.id)}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={analyzeSymptoms}
            disabled={isAnalyzing}
            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5" />
                Analyze Symptoms
              </>
            )}
          </button>
        </div>
      )}

      {/* Analysis Results */}
      {analysis && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Analysis Results</h3>
          <div className="text-sm text-gray-700 whitespace-pre-wrap">{analysis}</div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex gap-2">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <strong>Important:</strong> This symptom checker is for educational purposes only and
            should not replace professional medical advice. If you're experiencing severe symptoms
            or a medical emergency, please seek immediate medical attention.
          </div>
        </div>
      </div>
    </div>
  );
}
