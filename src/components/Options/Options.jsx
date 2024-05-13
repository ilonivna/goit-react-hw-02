import css from "./Options.module.css"

export default function Options({ totalFeedback, updateFeedback, handleReset }) {
    return (
        <div className={css.wrapper}>
            <button className={css.goodBtn} onClick={() => updateFeedback("good")} type="button">Good</button>
            <button className={css.neutralBtn} onClick={() => updateFeedback("neutral")} type="button">Neutral</button>
            <button className={css.badBtn} onClick={() => updateFeedback("bad")} type="button">Bad</button>
            {totalFeedback > 0 && (
                <button className={css.resetBtn} onClick={handleReset} type="button">Reset</button>
            )}
        </div>
    )
}