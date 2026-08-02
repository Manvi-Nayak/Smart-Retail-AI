import { useState } from "react";
import api from "../services/api";

function Image() {

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
        setResult(null);
    };

    const predict = async () => {

        if (!image) return;

        const formData = new FormData();

        formData.append("file", image);

        try {

            const response = await api.post(
                "/classify-product",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setResult(response.data);

        } catch (err) {

            alert("Backend not running or TensorFlow not installed.");

        }
    };

    return (

        <div
            style={{
                width: "700px",
                margin: "30px auto",
                border: "1px solid #ccc",
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >

            <div
                style={{
                    background: "#075E54",
                    color: "white",
                    padding: "15px",
                    fontSize: "22px",
                    fontWeight: "bold",
                }}
            >
                Product Classification
            </div>

            <div
                style={{
                    padding: "25px",
                    textAlign: "center",
                }}
            >

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                />

                <br /><br />

                {preview && (

                    <img
                        src={preview}
                        alt=""
                        width="250"
                        style={{
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                        }}
                    />

                )}

                <br /><br />

                <button
                    onClick={predict}
                    style={{
                        padding: "12px 30px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#075E54",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Predict
                </button>

                {result && (

                    <div
                        style={{
                            marginTop: "25px",
                            background: "#f5f5f5",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >

                        <h2>{result.category}</h2>

                        <p>

                            Confidence : {result.confidence}%

                        </p>

                    </div>

                )}

            </div>

        </div>

    );

}

export default Image;