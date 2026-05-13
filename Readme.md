# 🌿 Smart Krishi - Your Smart Farming Assistant

[![Deployment](https://img.shields.io/badge/Frontend-Vercel-brightgreen)](https://smart-krishi-app.vercel.app)

[![Deployment](https://img.shields.io/badge/Backend-Render-blue)](https://smart-krishi-backend-b16p.onrender.com)

Smart Krishi is an AI-powered web application designed to assist farmers by providing tools for crop disease detection, intelligent recommendations for crops and fertilizers, real-time weather information, and an AI chatbot for agricultural queries.

**[>> Visit the Live Application <<](https://smart-krishi-ai-powered-smart-farming-assistant-qxczs1q88.vercel.app/)**
---

## ✨ Features

* **🌱 Crop Disease Detection:** Upload crop leaf images to instantly identify potential diseases using a TensorFlow Lite model. Get AI-powered treatment advice.
* **🌾 Crop Recommendation:** Input soil and climate data (pH, N, P, K, Rainfall, Temp, Humidity, Soil Type, Irrigation, Previous Crop) to receive recommendations for the most suitable crop, powered by a Stacking Classifier model. Get AI advice on cultivation practices.
* **🧪 Fertilizer Recommendation:** Get suggestions for the appropriate fertilizer based on soil conditions and crop type using a Random Forest model.
* **🌦️ Real-time Weather:** Search for weather conditions by city or automatically detect the user's location. Provides detailed information including temperature, humidity, wind, visibility, sunrise/sunset, etc., using the OpenWeatherMap API.
* **🤖 Sarthi AI Chatbot:** Ask farming-related questions and get informative answers from an AI assistant powered by Google's Gemini API.
* **🌾 My Crops Dashboard (Basic):** A visual overview concept for managing fields and tracking crop progress (currently uses dummy data).
* **🏠 Modern Landing Page:** An attractive entry point explaining the application's features.
* **📱 Responsive Design:** Mobile-first user interface built with Tailwind CSS, ensuring a great experience on all devices.

---

## 📸 Screenshots

*(Replace these placeholders with actual screenshots of your application)*

| Landing Page                       | Dashboard                             | Scan Crop (Upload)                 |
| :--------------------------------: | :-----------------------------------: | :--------------------------------: |
|  |        |    |
| **Scan Result & Cure** | **Crop Recommendation (Form & Result)** | **Fertilizer Rec (Form & Result)** |
|    |   |      |
| **Weather App** | **AI Chatbot** | **My Crops (Concept)** |
|  |       |     |

---

## 🛠️ Technology Stack

**Frontend:**
* React (Vite)
* Tailwind CSS
* React Router DOM
* Axios
* React Icons
* React Markdown
* React Dropzone
* Context API (for Weather state)

**Backend:**
* Python (Flask)
* TensorFlow Lite (TFLite Runtime or tensorflow-cpu) - *Disease Detection*
* Scikit-learn, Pandas, Joblib - *Crop & Fertilizer Recommendation Models (Stacking, Random Forest)*
* Requests - *External API Calls (Gemini, OpenWeatherMap)*
* Flask-CORS
* Gunicorn - *Production WSGI Server*
* python-dotenv

**APIs:**
* Google Gemini API (via direct REST call)
* OpenWeatherMap API

**Deployment:**
* Frontend: Vercel
* Backend: Render

---

## 📁 Project StructureSmart_Krishi_Project/ ├── Smart_Krishi_backend/ # Flask Backend │ ├── Smart_Krishi_env/ # Virtual Environment (in .gitignore) │ ├── *.h5 # Original Keras Model (if kept) │ ├── *.tflite # TFLite Model (Disease Detection) │ ├── *.joblib # ML Models & Encoders (Crop Rec, Fert Rec) │ ├── app.py # Main Flask application │ ├── requirements.txt # Backend dependencies │ ├── Procfile # For Render deployment (Gunicorn) │ ├── .env # Local environment variables (in .gitignore) │ └── ... │ └── Smart_Krishi_frontend/ # React Frontend (Vite) ├── public/ # Static assets (images, etc.) ├── src/ │ ├── components/ # Reusable UI components │ ├── context/ # React Context providers (Weather, Auth) │ ├── pages/ # Page components (Dashboard, Scan, etc.) │ ├── App.jsx # Main application component with routing │ ├── main.jsx # Entry point │ ├── index.css # Global styles & Tailwind directives │ └── ... ├── tailwind.config.js # Tailwind configuration ├── vite.config.js # Vite configuration ├── vercel.json # Vercel deployment config (rewrites) ├── package.json # Frontend dependencies └── 

---

## 🚀 Setup and Installation (Local Development)

**Prerequisites:**
* Node.js (v18 or later recommended) & npm
* Python (v3.10 or later recommended) & pip
* Git

**Steps:**

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Komal3114/smart_krishi_app.git](https://github.com/Komal3114/smart_krishi_app.git)
    cd smart-krishi-app
    ```

2.  **Backend Setup:**
    ```bash
    # Navigate to backend directory
    cd smart_krishi_backend

    # Create and activate a virtual environment
    python -m venv smart_krishi_env
    # Windows PowerShell:
    .\smart_krishi_env\Scripts\activate
    # Mac/Linux:
    # source smart_krishi_env/bin/activate

    # Install dependencies
    pip install -r requirements.txt

    # Create a .env file (copy .env.example if available)
    # Add your GOOGLE_API_KEY and OWM_API_KEY inside .env
    # Example .env:
    # GOOGLE_API_KEY=AIzaSy...
    # OWM_API_KEY=aa7f...

    # Run the Flask server
    flask run --host=0.0.0.0 --port=5000
    # (Or use `python app.py` if you prefer, but ensure debug mode is suitable)
    ```
    *(Backend should be running at `http://localhost:5000`)*

3.  **Frontend Setup:**
    ```bash
    # Navigate to frontend directory (from project root)
    cd ../smart_krishi_frontend

    # Install dependencies
    npm install

    # Create a .env.local file (optional, for local backend URL)
    # If your backend runs on port 5000, this isn't strictly necessary due to the fallback
    # Example .env.local:
    # VITE_API_BASE_URL=http://localhost:5000

    # Run the Vite development server
    npm run dev
    ```
    *(Frontend should be running at `http://localhost:5173` or similar)*

---

## 🔑 Environment Variables

**Backend (`smart_krishi_backend/.env` for local, Render UI for deployed):**

* `GOOGLE_API_KEY`: Your API key for the Google Gemini API (obtained from Google AI Studio or Cloud Console).
* `OWM_API_KEY`: Your API key for OpenWeatherMap (obtained from their website).
    *(Add others like `JWT_SECRET_KEY` or Firebase paths if using auth)*

**Frontend (`smart_krishi_frontend/.env.local` for local, Vercel UI for deployed):**

* `VITE_API_BASE_URL`: The full URL of your running backend (e.g., `http://localhost:5000` for local, `https://smart_krishi-backend.onrender.com` for deployed).

---

## ☁️ Deployment

* **Backend (Flask):** Deployed on **Render** as a Web Service using Gunicorn. Environment variables for API keys are set in the Render service settings. Auto-deploys on pushes to the `main` branch.
* **Frontend (React):** Deployed on **Vercel**. The `VITE_API_BASE_URL` environment variable is set in the Vercel project settings to point to the live Render backend URL. Auto-deploys on pushes to the `main` branch. `vercel.json` handles client-side routing rewrites.

---

## 🤝 Team

* **Dushyant Sahu:** Project Lead & Backend Developer (AI Integration, API Endpoints)
* **Lakshya Yaduwanshi:** Frontend & UI/UX Specialist (React Implementation, Tailwind CSS, Responsive Design)
* **Komal Kushwaha:** Data Scientist & Model Trainer (Dataset Curation, Model Training - Disease Detection)
* **Simran Gour:** Database & Cloud Deployment (Initial Cloud Setup, DB Concepts)

*(Adjust roles/contributions as needed)*

---

## 💡 Future Scope

* Implement full database integration for "My Crops" data persistence.
* Develop the visual "Khet Dashboard" layout for "My Crops".
* Add user authentication (e.g., Firebase Email Link or OTP).
* Convert to a Progressive Web App (PWA) for offline capabilities and installation.
* Explore using Capacitor/Cordova to create native mobile apps (APK).
* Integrate more detailed weather forecast data (hourly/daily).

---
