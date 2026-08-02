import joblib
import os


class SentimentService:
    def __init__(self):
        print("Loading Sentiment Model...")

        base_path = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
        model_path = os.path.join(base_path, "models", "sentiment_model.pkl")
        vectorizer_path = os.path.join(base_path, "models", "vectorizer.pkl")

        self.model = joblib.load(model_path)
        self.vectorizer = joblib.load(vectorizer_path)

    def predict(self, text):
        text_vector = self.vectorizer.transform([text])

        prediction = self.model.predict(text_vector)[0]
        probability = self.model.predict_proba(text_vector).max()

        return {
            "sentiment": prediction,
            "confidence": round(float(probability) * 100, 2)
        }