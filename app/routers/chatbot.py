from fastapi import APIRouter
from app.schemas.request import ChatRequest
from app.schemas.response import ChatResponse

router = APIRouter()

pipeline = None


@router.post(
    "/chatbot",
    response_model=ChatResponse
)
def chatbot(request: ChatRequest):
    return pipeline.chatbot(request.message)