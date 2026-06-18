# 🌍 EcoCompute | Urban Heat Island Optimizer

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-Brutalist-06B6D4?style=for-the-badge&logo=tailwind-css)
![Groq](https://img.shields.io/badge/AI_Engine-Groq-f43f5e?style=for-the-badge)

> A precision meteorological instrument and AI-powered simulation dashboard for modeling Urban Heat Island (UHI) effects and generating data-driven urban forestry interventions.

---

## 🔬 System Overview

EcoCompute is a high-performance analytics dashboard designed to simulate microclimate thermal dynamics. By combining real-time meteorological telemetry, spatial mapping, and a low-latency LLM backend, the system allows urban planners and engineers to calculate the cooling efficiency of targeted canopy coverage against concrete density.

### Key Features
* **Geospatial Telemetry:** Interactive mapping interface (`react-leaflet`) for precise coordinate selection and zone analysis.
* **Live Meteorological Ingestion:** Automatic fetching of localized temperature, humidity, and wind data via the Open-Meteo API.
* **3D Thermal Visualization:** Immersive rendering of thermal impacts based on variable concrete-to-canopy ratios.
* **AI Intervention Engine:** Powered by Groq, the backend analyzes spatial parameters to recommend highly specific, drought-resistant forestry matrices (e.g., *Azadirachta indica*).
* **Network Inspector:** A built-in, terminal-style payload inspector to monitor latency, byte size, and raw JSON responses from the AI simulation backend.

---

## 📐 The "Meteorological Blueprint" Aesthetic

EcoCompute rejects modern consumer UI trends (like glassmorphism and soft shadows) in favor of a strict, brutalist design system inspired by military radar and satellite telemetry software.
* **Palette:** Abyssal Blue (`#090E17`) baseline with high-contrast Cyan-to-Magenta thermal gradients.
* **Typography:** Strict use of monospace fonts for data readouts, with heavy tracking for UI controls.
* **Geometry:** Uncompromising `1px` borders, absolute right angles (`rounded-none`), and mechanical micro-interactions.
* **Atmosphere:** A mathematically precise, highly performant CSS-only CRT scanline overlay (`mix-blend-overlay`).

---

## ⚙️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Strict Utility Classes)
* **Mapping:** React-Leaflet
* **Icons:** Lucide React (Custom SVG implementations)
* **AI Provider:** Groq LLM API

---

## 🚀 Local Development Setup

### Prerequisites
Ensure you have Node.js 18+ installed on your local machine.

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/EcoCompute-Urban-Heat-Island-Optimizer.git](https://github.com/your-username/EcoCompute-Urban-Heat-Island-Optimizer.git)
cd EcoCompute-Urban-Heat-Island-Optimizer
