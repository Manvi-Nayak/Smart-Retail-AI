import { Link } from "react-router-dom";

function Home() {
    const cardStyle = {
        textDecoration: "none",
        color: "black",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "25px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        transition: "0.3s",
        cursor: "pointer",
        background: "white",
    };

    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "40px auto",
                padding: "20px",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "10px",
                }}
            >
                🛍️ Smart Retail AI
            </h1>

            <p
                style={{
                    textAlign: "center",
                    color: "gray",
                    marginBottom: "40px",
                }}
            >
                AI Powered Customer Intelligence Platform
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "25px",
                }}
            >
                <Link
                    to="/sentiment"
                    style={cardStyle}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.03)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                    }
                >
                    <h2>😊</h2>
                    <h3>Sentiment Analysis</h3>
                    <p>Analyze customer reviews</p>
                </Link>

                <Link
                    to="/chatbot"
                    style={cardStyle}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.03)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                    }
                >
                    <h2>🤖</h2>
                    <h3>Retail Chatbot</h3>
                    <p>Ask retail related questions</p>
                </Link>

                <Link to="/image" 
                style={cardStyle}
                onMouseEnter={(e)=>
                    (e.currentTarget.style.transform="scale(1.03)")
                }
                onMouseLeave={(e)=>
                    e.currentTarget.style.transform="scale(1)"
                    }
                >
                    <h2>🖼️</h2>
                    <h3>Product Classification</h3>
                    <p>Upload a product image</p>
                </Link>

                <Link to="/face" 
                style={cardStyle}
                onMouseEnter={(e)=>
                    e.currentTarget.style.transform="scale(1.03)"
                }
                onMouseLeave={(e)=>
                    e.currentTarget.style.transform="scale(1)"
                }
                >
                    <h2>👤</h2>
                    <h3>Face Recognition</h3>
                    <p>Recognize customers</p>
                </Link>
                
            </div>
        </div>
    );
}

export default Home;