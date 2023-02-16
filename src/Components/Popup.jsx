
const PopUp = ({closeModal}) => {
    return (
        <div className="popup">
            <img src="./Images/404-tick.png" alt="" />
            <h2>Thank you</h2>
            <p>Your message has been successfully submitted. Thanks!</p>
            <button onClick={() => {closeModal(false)}}>OK</button>
        </div>
    )
}

export default PopUp;