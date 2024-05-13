import { CiFaceSmile } from "react-icons/ci";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { MdMoodBad } from "react-icons/md";
import css from "./Feedback.module.css"


export default function Feedback({ totalFeedback, positiveFeedback, feedback: { good, neutral, bad } }) {
    return (
        <ul className={css.feedbackList}>
            <li className={css.feedbackListItem}><CiFaceSmile />Good: {good}</li>
            <li className={css.feedbackListItem}><MdOutlineSentimentNeutral />
Neutral: {neutral}</li>
            <li className={css.feedbackListItem}><MdMoodBad />
Bad: {bad}</li>
            <li className={css.feedbackListItem}>Positive: {positiveFeedback}%</li>
            <li className={css.feedbackListItem}>Total: {totalFeedback}</li>
        </ul>
    )
}