# from app.pipeline.pipeline import SmartRetailPipeline

# pipeline = SmartRetailPipeline()

# print("\nPipeline Ready!\n")

# # Sentiment Test
# sentiment = pipeline.analyze_sentiment(
#     "The quality of this product is amazing."
# )

# print("Sentiment")
# print(sentiment)

# print()

# # Chatbot Test
# reply = pipeline.chatbot(
#     "What is your return policy?"
# )

# print("Chatbot")
# print(reply)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.pipeline.pipeline import SmartRetailPipeline
from app.routers import sentiment, chatbot, image, face


app = FastAPI(
    title="Smart Retail AI API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pipeline = SmartRetailPipeline()

sentiment.pipeline = pipeline
chatbot.pipeline = pipeline
image.pipeline = pipeline
face.pipeline = pipeline

app.include_router(sentiment.router, tags=["Sentiment"])
app.include_router(chatbot.router, tags=["Chatbot"])
app.include_router(image.router, tags=["Image Classification"])
app.include_router(face.router, tags=["Face Recognition"])


@app.get("/")
def home():
    return {
        "message": "Smart Retail AI API Running Successfully"
    }