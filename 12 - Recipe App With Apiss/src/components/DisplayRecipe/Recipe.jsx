import "./recipe.css"

function Recipe({title,calories,img,index}) {
    return (
        <div className="recipe__container" key={index}>
            <img src={img} alt=""/>
            <div>
                <h1>{title}</h1>
                <h2>{Math.round(calories)} Kcal</h2>

            </div>
        </div>
    );
}

export default Recipe;
