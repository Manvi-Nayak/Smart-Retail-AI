import os
import pickle
import face_recognition
import numpy as np
import base64
import cv2
import io

from PIL import Image


class FaceService:

    def __init__(self):

        print("Loading Face Recognition Database...")

        base_path = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

        db_path = os.path.join(
            base_path,
            "app",
            "models",
            "face_db.pkl"
        )

        with open(db_path, "rb") as f:
            data = pickle.load(f)

        self.known_encodings = data["encodings"]
        self.known_names = data["names"]

    def recognize(self, image_file):

        image_data = image_file.split(",")[1]
        image_bytes = base64.b64decode(image_data)
        image = Image.open(io.BytesIO(image_bytes))
        image = np.array(image)

        encodings = face_recognition.face_encodings(image)

        if len(encodings) == 0:
            return {
                "customer": None,
                "status": "No Face Detected"
            }

        face_encoding = encodings[0]

        matches = face_recognition.compare_faces(
            self.known_encodings,
            face_encoding,
            tolerance=0.5
        )

        distances = face_recognition.face_distance(
            self.known_encodings,
            face_encoding
        )

        if True in matches:

            best_match = np.argmin(distances)

            confidence = 1 - distances[best_match]

            return {
                "customer": self.known_names[best_match],
                "status": "Known Customer",
                "confidence": round(float(confidence), 2)
            }

        return {
            "customer": None,
            "status": "Unknown Customer"
        }