import os
import numpy as np
from tensorflow.keras.models import load_model
from PIL import Image


class ImageService:

    def __init__(self):

        print("Loading Product Classification Model...")

        base_path = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

        model_path = os.path.join(
            base_path,
            "models",
            "product_classifier.keras"
        )

        self.model = load_model(model_path)

        self.class_names = [
            "T-shirt/top",
            "Trouser",
            "Pullover",
            "Dress",
            "Coat",
            "Sandal",
            "Shirt",
            "Sneaker",
            "Bag",
            "Ankle boot"
        ]

    def predict(self, image_file):

        image = Image.open(image_file).convert("L")

        image = image.resize((28, 28))

        image = np.array(image)

        image = image.astype("float32") / 255.0

        image = image.reshape(1, 28, 28, 1)

        prediction = self.model.predict(image, verbose=0)

        index = np.argmax(prediction)

        confidence = float(np.max(prediction))

        return {
            "category": self.class_names[index],
            "confidence": round(confidence * 100, 2)
        }