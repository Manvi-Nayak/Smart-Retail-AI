from app.services.sentiment_service import SentimentService
from app.services.chatbot_service import ChatbotService
from app.services.image_service import ImageService
from app.services.face_service import FaceService


class SmartRetailPipeline:
    def __init__(self):
        print("Initializing Smart Retail AI Pipeline...")

        self.sentiment_service = SentimentService()
        self.chatbot_service = ChatbotService()
        self.image_service = ImageService()
        self.face_service = FaceService()

        print("All services initialized successfully.")

    def analyze_sentiment(self, text):
        return self.sentiment_service.predict(text)

    def chatbot(self, message):
        return self.chatbot_service.get_response(message)

    def classify_product(self, image):
        return self.image_service.predict(image)

    def recognize_face(self, image):
        return self.face_service.recognize(image)