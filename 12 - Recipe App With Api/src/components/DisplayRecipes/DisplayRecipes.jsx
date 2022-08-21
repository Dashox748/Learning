import './displayRecipes.css'

function DisplayRecipes({name,kcal,image,dishType,ingredients,time,link}) {
    return (
        <div className="display-recipe">
            <img src={image}/>
            <div className="display-recipe-padding">
                <h1>{name}</h1>
                <div className="kcal-type">
                    <h3>{Math.round(kcal)} kcal</h3>
                    <h3>{dishType}</h3>

                </div>
                <h4>ingredients  {ingredients.length}</h4>
                <h4>{time}</h4>
                {/*<ol>*/}
                {/*    {ingredients.map(ing=>(*/}
                {/*        <li>{ing.text}</li>*/}
                {/*    ))}*/}
                {/*</ol>*/}


            </div>
            <button onClick={()=>{
                window.open(link, "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0")
            }}>More</button>
        </div>
    );
}

export default DisplayRecipes;
