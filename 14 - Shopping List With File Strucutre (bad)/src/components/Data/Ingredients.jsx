import { useState } from "react";
import DisplayIngredients from "../DisplayIngredients/DisplayIngerdients";
import Form from "../Form/Form";
import Hamburger from "hamburger-react";
import useCollapse from "react-collapsed";

function Ingredients() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [displayWhat, setDisplayWhat] = useState("list");
  const [shoppingList, setShoppingList] = useState([]);
  const [shoppingListBought, setShoppingListBought] = useState([]);

  const addIngredient = (ingredient) => {
    setShoppingList([...shoppingList, ingredient]);
  };
  const statusOfIngredient = (idToCheck) => {
    const removedArray = shoppingList.filter((ingredient) => {
      return ingredient.uniqueId === idToCheck;
    });

    setShoppingListBought([...shoppingListBought, ...removedArray]);

    const updatedMainArray = [...shoppingList].filter(
      (todo) => todo.uniqueId !== idToCheck
    );

    setShoppingList(updatedMainArray);

    //to line through, changed concept to other list display

    // setShoppingList(
    //   shoppingList.map((element) => {
    //     if (element.uniqueId === idToCheck) {
    //       element.bought = true;
    //     }
    //     return element;
    //   })
    // );
  };

  const changeQuantity = (idToCheck, operator) => {
    setShoppingList(
      shoppingList.map((element) => {
        if (element.uniqueId === idToCheck) {
          !operator ? (element.quantity += 1) : (element.quantity -= 1);
        }
        return element;
      })
    );
  };


  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignContent:"center"}}>
      <div style={{ display: "flex",justifyContent:"center", padding: "3rem 0 3rem 0 " }}>
        <div>
          <Form onSubmit={addIngredient} />
        </div>
        <div className="collapsible ">
          <div className="header" {...getToggleProps()}>
            <Hamburger size={23} />
          </div>
          <div
            className="hamburger-menu_toggle-absolute"
            {...getCollapseProps()}
          >
            <div className="content noselect">
              <div onClick={()=>{
                setDisplayWhat("list");
              }}>Shopping List</div>
              <div onClick={()=>{
                setDisplayWhat("bought");
              }}>Bought </div>
              <div>Deleted </div>
            </div>
          </div>
        </div>
      </div>
      <DisplayIngredients
        shoppingList={shoppingList}
        statusOfIngredient={statusOfIngredient}
        boughtShoppingList={shoppingListBought}
        changeQuantity={changeQuantity}
        changeDisplay={displayWhat}
      />
    </div>
  );
}

export default Ingredients;
