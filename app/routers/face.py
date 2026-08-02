from fastapi import APIRouter
from app.schemas.request import FaceRequest

router = APIRouter()

pipeline = None


@router.post("/recognize-face")
def recognize_face(request: FaceRequest):

    return pipeline.recognize_face(request.image)