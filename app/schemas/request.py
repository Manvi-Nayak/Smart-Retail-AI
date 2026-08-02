from pydantic import BaseModel

from fastapi import UploadFile, File
class SentimentRequest(BaseModel):
    text: str


class ChatRequest(BaseModel):
    message: str


class FaceRequest(BaseModel):
    image: str