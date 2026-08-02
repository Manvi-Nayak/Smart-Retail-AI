import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import api from "../services/api";

function Face() {

    const webcamRef = useRef(null);

    const [result, setResult] = useState(null);

    const [scanning, setScanning] = useState(true);

    const recognize = async () => {

        if (!webcamRef.current) return;

        const image = webcamRef.current.getScreenshot();

        if (!image) return;

        try {

            const response = await api.post("/recognize-face", {

                image

            });

            setResult(response.data);

            if (response.data.status === "Known Customer") {

                setScanning(false);

            }

        }

        catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        if (!scanning) return;

        const interval = setInterval(() => {

            recognize();

        }, 2000);

        return () => clearInterval(interval);

    }, [scanning]);

    return (

        <div
            style={{
                width: "700px",
                margin: "30px auto",
                border: "1px solid #ddd",
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

                Live Face Recognition

            </div>

            <div
                style={{
                    padding: "20px",
                    textAlign: "center",
                }}
            >

                <Webcam
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={500}
                />

                <br />

                <h3>

                    {

                        scanning

                        ?

                        "Scanning..."

                        :

                        "Recognition Complete"

                    }

                </h3>

                {

                    result &&

                    <div
                        style={{
                            marginTop: "20px",
                            background: "#f5f5f5",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >

                        <h2>

                            {result.status}

                        </h2>

                        {

                            result.customer &&

                            <>

                                <h2>

                                    {result.customer}

                                </h2>

                                <h3>

                                    Confidence :

                                    {" "}

                                    {result.confidence}

                                </h3>

                            </>

                        }

                    </div>

                }

            </div>

        </div>

    );

}

export default Face;