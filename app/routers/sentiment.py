from fastapi import APIRouter
from app.schemas.request import SentimentRequest
from app.schemas.response import SentimentResponse

router = APIRouter()

pipeline = None


@router.post(
    "/analyze-sentiment",
    response_model=SentimentResponse
)
def analyze_sentiment(request: SentimentRequest):
    return pipeline.analyze_sentiment(request.text)