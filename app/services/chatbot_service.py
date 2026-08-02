import joblib
import json
import os
import random


class ChatbotService:
    def __init__(self):
        print("Loading Chatbot Model...")

        base_path = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

        model_path = os.path.join(base_path, "models", "chatbot_model.pkl")
        vectorizer_path = os.path.join(base_path, "models", "chatbot_vectorizer.pkl")
        intents_path = os.path.join(base_path, "data", "intents.json")

        self.model = joblib.load(model_path)
        self.vectorizer = joblib.load(vectorizer_path)

        with open(intents_path, "r", encoding="utf-8") as file:
            self.intents = json.load(file)

    def get_response(self, message):
        vector = self.vectorizer.transform([message])

        intent = self.model.predict(vector)[0]

        for item in self.intents["intents"]:
            if item["tag"] == intent:
                return {
                    "intent": intent,
                    "response": random.choice(item["responses"])
                }

        return {
            "intent": "unknown",
            "response": "Sorry, I couldn't understand your question."
        }