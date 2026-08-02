import { useState } from "react";
import api from "../services/api";

function Sentiment() {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);

    const analyze = async () => {
        if (!text.trim()) return;

        try {
            const response = await api.post("/analyze-sentiment", {
                text,
            });

            setResult(response.data);
        } catch (err) {
            alert("Server Error");
        }
    };

    const getEmoji = () => {
        if (!result) return "";

        const sentiment = result.sentiment.toLowerCase();

        if (sentiment.includes("positive")) return "😊";
        if (sentiment.includes("negative")) return "😞";

        return "😐";
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
                Sentiment Analysis
            </div>

            <div
                style={{
                    padding: "25px",
                }}
            >
                <textarea
                    rows="8"
                    value={text}
                    placeholder="Write your product review..."
                    onChange={(e) => setText(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "15px",
                        fontSize: "16px",
                        resize: "none",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        outline: "none",
                    }}
                />

                <br />
                <br />

                <button
                    onClick={analyze}
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "#075E54",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "17px",
                    }}
                >
                    Analyze Sentiment
                </button>

                {result && (
                    <div
                        style={{
                            marginTop: "25px",
                            padding: "20px",
                            borderRadius: "10px",
                            background: "#f5f5f5",
                            textAlign: "center",
                        }}
                    >
                        <h2>
                            {getEmoji()} {result.sentiment}
                        </h2>

                        <p
                            style={{
                                fontSize: "18px",
                            }}
                        >
                            Confidence : {(result.confidence * 100).toFixed(2)}%
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sentiment;