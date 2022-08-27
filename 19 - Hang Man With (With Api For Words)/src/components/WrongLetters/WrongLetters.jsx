import './wrongLetters.css'
function WrongLetters({wrongLetters}) {
    return (
        <div className="wrong__container">
            <h3>Used Letters:</h3>
            <div>
            {wrongLetters.map((letter,index)=>(
                <span key={index}>{letter}</span>
            ))}
            </div>
        </div>
    );
}

export default WrongLetters;
