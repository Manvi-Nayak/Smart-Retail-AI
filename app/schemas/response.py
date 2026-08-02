from pydantic import BaseModel


class SentimentResponse(BaseModel):
    sentiment: str
    confidence: float


class ChatResponse(BaseModel):
    intent: str
    response: str