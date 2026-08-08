# 🛍️ Smart Retail AI Platform

An AI-powered retail platform that combines multiple Machine Learning and Computer Vision modules into a single web application. The project demonstrates how AI can improve the customer shopping experience by providing intelligent product classification, face recognition, sentiment analysis, and an AI chatbot through a unified FastAPI backend and React frontend.

---

## 🚀 Features

### 😊 Sentiment Analysis
- Analyze customer reviews.
- Predicts Positive or Negative sentiment.
- Displays prediction confidence.

### 🤖 AI Retail Chatbot
- Rule-based ML chatbot.
- Answers retail-related queries.
- Interactive chat interface.

### 🖼️ Product Image Classification
- Upload an image of a fashion product.
- Predicts the product category using a trained TensorFlow model.
- Displays prediction confidence.

### 👤 Live Face Recognition
- Live webcam-based customer recognition.
- Detects known customers using facial embeddings.
- Displays customer name and recognition confidence.

---

# 🏗️ Project Architecture

```
                React Frontend
                      │
                      ▼
               FastAPI Backend
                      │
             Smart Retail Pipeline
        ┌──────────────┬──────────────┬─────────────┬
        ▼              ▼              ▼             ▼
   Chatbot         Sentiment       Product     Face-Recognition
                                Classification
```

The project uses a centralized AI Pipeline that loads all AI services once during application startup and routes requests to the appropriate module.

---

# 🛠️ Tech Stack

## Frontend
- React
- Vite
- Axios
- React Router
- React Webcam

## Backend
- FastAPI
- Uvicorn
- Pydantic

## Machine Learning
- Scikit-learn
- TensorFlow / Keras
- OpenCV
- Face Recognition
- NumPy
- Pillow

---

# 📂 Project Structure

```
Smart-Retail-AI
│
├── app/
│   ├── main.py
│   ├── pipeline/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   └── models/
│
├── data/
│   ├── intents.json
│   └── faces/
│
├── models/
│   ├── chatbot_model.pkl
│   ├── chatbot_vectorizer.pkl
│   ├── sentiment_model.pkl
│   ├── vectorizer.pkl
│   └── product_classifier.keras
│
├── notebooks/
│
├── frontend/
│
└── requirements.txt
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Smart-Retail-AI.git

cd Smart-Retail-AI
```

---

# 🐍 Backend Setup

## Create Virtual Environment

### Windows

```bash
python -m venv .venv

.venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv .venv

source .venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Backend

```bash
uvicorn app.main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# ⚛️ Frontend Setup

Open a new terminal.

```bash
cd frontend

npm install
```

Run frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 📌 API Endpoints

## Home

```
GET /
```

---

## Sentiment Analysis

```
POST /analyze-sentiment
```

Input

```json
{
    "text":"The product quality is amazing."
}
```

Output

```json
{
    "sentiment":"Positive",
    "confidence":98.42
}
```

---

## Chatbot

```
POST /chatbot
```

Input

```json
{
    "message":"What is your return policy?"
}
```

Output

```json
{
    "intent":"return_policy",
    "response":"Products can be returned within 30 days."
}
```

---

## Product Classification

```
POST /classify-product
```

Input

```
Image File
```

Output

```json
{
    "category":"Bag",
    "confidence":99.15
}
```

---

## Face Recognition

```
POST /recognize-face
```

Input

```
Live Webcam Image
```

Output

```json
{
    "customer":"Manvi",
    "status":"Known Customer",
    "confidence":0.97
}
```

---

# 📖 Workflow

## Sentiment Analysis

```
User Review
      │
      ▼
Vectorizer
      │
      ▼
ML Model
      │
      ▼
Prediction
```

---

## Chatbot

```
User Message
      │
      ▼
Vectorizer
      │
      ▼
Intent Classifier
      │
      ▼
Response Generator
```

---

## Product Classification

```
Upload Image
      │
      ▼
Preprocessing
      │
      ▼
TensorFlow Model
      │
      ▼
Product Category
```

---

## Face Recognition

```
Live Webcam
      │
      ▼
Capture Frame
      │
      ▼
Face Encoding
      │
      ▼
Embedding Comparison
      │
      ▼
Known / Unknown Customer
```

---

# 📸 Application Modules

- 🏠 Home Dashboard
- 😊 Sentiment Analysis
- 🤖 AI Chatbot
- 🖼️ Product Classification
- 👤 Live Face Recognition

---

# 🔮 Future Improvements

- Customer Database Integration
- Purchase Recommendation System
- Personalized Offers
- Customer Visit History
- Real-time Analytics Dashboard
- Cloud Deployment
- Role-based Authentication
- Multi-language Chatbot
- Inventory Management

---

## ⭐ If you found this project helpful, consider giving it a star.
