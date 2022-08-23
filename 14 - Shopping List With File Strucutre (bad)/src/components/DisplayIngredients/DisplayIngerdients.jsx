import "./DisplayIngredients.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

function DisplayIngredients({
  shoppingList,
  statusOfIngredient,
  changeQuantity,
  boughtShoppingList,
  changeDisplay,
}) {
  console.log(boughtShoppingList);
  if (changeDisplay === "list") {
    return (
      <div className="ingredients__container-display">
        {shoppingList.map((ingredient, index) => (
          <div key={index}>
            {ingredient.bought ? (
              <div
                key={ingredient.id}
                style={{ textDecoration: "line-through" }}
              >
                {ingredient.ingredient} {ingredient.quantity}
                <button>xd</button>
              </div>
            ) : (
              <div>
                <div>
                  <span className="show-ingredient noselect">
                    {ingredient.ingredient}
                  </span>
                </div>
                <div>
                  <button
                    className="ingredients__container-display-button-status noselect"
                    onClick={() => statusOfIngredient(ingredient.uniqueId)}
                  >
                    <h1 style={{ fontSize: "30px", fontWeight: "500" }}>X</h1>
                  </button>
                  <div className="ingredients__container-display-button-quantity">
                    <span
                      onClick={() => changeQuantity(ingredient.uniqueId, true)}
                    >
                      <MdOutlineArrowBackIos />
                    </span>
                    <p className="noselect">{ingredient.quantity}</p>
                    <span
                      onClick={() => changeQuantity(ingredient.uniqueId, false)}
                    >
                      <MdOutlineArrowForwardIos />
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  } else if (changeDisplay === "bought") {
    return (
      <div className="ingredients__container-display">
        {boughtShoppingList.map((ingredient, index) => (
          <div>
            <div>
              <span className="show-ingredient noselect">
                {ingredient.ingredient}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (changeDisplay === "deleted") {
    return <div>xddd</div>;
  }
}

export default DisplayIngredients;
