import { useState, useRef, useEffect } from "react";
import api from "../services/api";

function Chatbot() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const userMessage = message;

        // Show user's message
        setChat((prev) => [
            ...prev,
            { sender: "user", text: userMessage }
        ]);

        // Clear input immediately
        setMessage("");

        try {
            const response = await api.post("/chatbot", {
                message: userMessage,
            });

            setChat((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: response.data.response,
                },
            ]);
        } catch (error) {
            setChat((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "Server Error",
                },
            ]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
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
                    fontSize: "20px",
                    fontWeight: "bold",
                }}
            >
                Smart Retail Chatbot
            </div>

            <div
                style={{
                    height: "450px",
                    overflowY: "auto",
                    padding: "20px",
                    background: "#ece5dd",
                }}
            >
                {chat.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent:
                                msg.sender === "user"
                                    ? "flex-end"
                                    : "flex-start",
                            marginBottom: "12px",
                        }}
                    >
                        <div
                            style={{
                                background:
                                    msg.sender === "user"
                                        ? "#DCF8C6"
                                        : "white",
                                padding: "10px 15px",
                                borderRadius: "15px",
                                maxWidth: "70%",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                            }}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}

                <div ref={chatEndRef}></div>
            </div>

            <div
                style={{
                    display: "flex",
                    padding: "10px",
                    gap: "10px",
                    background: "#f5f5f5",
                }}
            >
                <input
                    type="text"
                    value={message}
                    placeholder="Type a message..."
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "20px",
                        border: "1px solid #ccc",
                        outline: "none",
                    }}
                />

                <button
                    onClick={sendMessage}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        border: "none",
                        background: "#075E54",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chatbot;