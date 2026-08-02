from fastapi import APIRouter, UploadFile, File

router = APIRouter()

pipeline = None


@router.post("/classify-product")
async def classify_product(file: UploadFile = File(...)):
    return pipeline.classify_product(file.file)