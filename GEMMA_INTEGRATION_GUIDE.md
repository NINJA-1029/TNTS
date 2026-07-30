# Google Gemma AI Integration Guide for Heritage Tourist Application

This guide explains how to connect and deploy **Google Gemma (Gemma 2B / Gemma 7B / Gemma 2 9B)** into the **Heritage Farm - Travel Arc** edge application across three execution modes:

---

## 🌟 Option A: 100% Offline On-Device Gemma (WebGPU / MediaPipe GenAI)

This mode runs **Gemma 2B** directly inside the user's web browser using **WebGPU** and **MediaPipe**. No server or internet connection is required after downloading model weights.

### Step 1: Install MediaPipe GenAI SDK
```bash
npm install @google/mediapipe-tasks-genai
```

### Step 2: Download Quantized Gemma Model File
Download `gemma-2b-it-gpu-int4.bin` (approx 1.3 GB) from Kaggle or Hugging Face:
- [Kaggle Gemma 2B WebGPU Binaries](https://www.kaggle.com/models/google/gemma/tfLite)
- Place `gemma-2b-it-gpu-int4.bin` inside your public folder: `public/models/gemma-2b-it-gpu-int4.bin`

### Step 3: Integrate WebGPU Gemma Engine Code
Update `src/services/gemmaEdgeEngine.js`:

```javascript
import { FilesetResolver, LlmInference } from "@google/mediapipe-tasks-genai";

let llmInference = null;

// Initialize Gemma model in WebGPU memory
export async function initOnDeviceGemma() {
  const genai = await FilesetResolver.forGenAiTasks(
    "https://cdn.jsdelivr.net/npm/@google/mediapipe-tasks-genai/wasm"
  );
  
  llmInference = await LlmInference.createFromOptions(genai, {
    baseOptions: {
      modelAssetPath: "/models/gemma-2b-it-gpu-int4.bin"
    },
    maxTokens: 1024,
    topK: 40,
    temperature: 0.7,
    randomSeed: 42
  });

  console.log("Gemma 2B loaded into WebGPU memory!");
}

// Generate Itinerary with Gemma 2B
export async function generateGemmaResponse(userPrompt, onStreamToken) {
  if (!llmInference) await initOnDeviceGemma();

  const formattedPrompt = `<start_of_turn>user
You are an expert Tamil Nadu heritage travel guide. Generate a structured ${userPrompt}<end_of_turn>
<start_of_turn>model\n`;

  return new Promise((resolve) => {
    let fullResponse = "";
    llmInference.generateResponse(formattedPrompt, (partialText, done) => {
      fullResponse += partialText;
      if (onStreamToken) onStreamToken(partialText);
      if (done) resolve(fullResponse);
    });
  });
}
```

---

## 🖥️ Option B: Local Edge Server Execution (Offline Field Deployment)

If you are running a local edge device (e.g. Raspberry Pi 5, Jetson Orin, or offline local laptop serving tourist kiosks via Wi-Fi hot-spot), run **Ollama** or **llama.cpp**.

### Step 1: Install Ollama on Edge Host
```bash
# On Linux / macOS / Windows Edge Server
curl -fsSL https://ollama.com/install.sh | sh
```

### Step 2: Pull Gemma Model
```bash
ollama pull gemma:2b
# or for higher reasoning:
ollama pull gemma2:9b
```

### Step 3: Connect Frontend to Local Ollama Endpoint
Create a local API bridge in `src/services/gemmaEdgeEngine.js`:

```javascript
export async function queryLocalOllamaGemma(prompt) {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gemma:2b",
      prompt: `You are Gemma AI Tourist Guide for Tamil Nadu. ${prompt}`,
      stream: false
    })
  });

  const data = await response.json();
  return data.response;
}
```

---

## ☁️ Option C: Google Gemini / Gemma API Integration (Online Cloud Mode)

When online access is available, use Google's Official **`@google/genai`** SDK.

### Step 1: Install `@google/genai`
```bash
npm install @google/genai
```

### Step 2: Create API Client File (`src/services/gemmaApiService.js`)

```javascript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function askGemmaCloud(promptText) {
  const response = await ai.models.generateContent({
    model: "gemma-2-9b-it", // Or gemini-2.5-flash
    contents: promptText,
    config: {
      temperature: 0.7,
      systemInstruction: "You are a bilingual (English & Tamil) heritage tour guide expert for Tamil Nadu."
    }
  });

  return response.text;
}
```

---

## 🎯 Architecture Summary Table

| Execution Mode | Connectivity | Model Used | Setup Requirement |
| :--- | :--- | :--- | :--- |
| **A. Browser WebGPU** | **100% Offline** | Gemma 2B (INT4) | Load `.bin` into `public/models/` |
| **B. Local Edge Server** | **Local Network / Hotspot** | Gemma 2B / 9B | `ollama run gemma:2b` |
| **C. Cloud API** | Online Required | Gemma 2 9B / Gemini | `VITE_GEMINI_API_KEY` |
