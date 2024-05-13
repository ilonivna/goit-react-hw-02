import { useEffect, useState } from "react"
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"



export default function App() {
    const defaultFeedback = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem("feedback");
        return savedFeedback ?
            JSON.parse(savedFeedback) : defaultFeedback;
    });

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);
    
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

    const updateFeedback = (feedbackType) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }))
    };
    
    const handleReset = () => {
        setFeedback(defaultFeedback);
    };


    return (
        <>
            <Description
                name={"Sip Happens Café"}
                description={"Please leave your feedback about our service by selecting one of the options below."}
            />
            <Options
                totalFeedback={totalFeedback}
                handleReset={handleReset}
                updateFeedback={updateFeedback}
            />
            
            {totalFeedback > 0 ? (
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                />
            ) : (
                <Notification />
            )}
        </>
    );
}