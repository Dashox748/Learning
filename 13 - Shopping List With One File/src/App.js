import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [total,setTotal] = useState(0)
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const addIntoItems = () => {
    if (input === "") {
      return;
    }
    const newItem = {
      itemName: input,
      quantity: 1,
      isSelected: false,
    };
    setItems([...items, newItem]);

    setInput("");
    setTotal(total+1)
  };

  const changeIsSelected = (index) => {
    const newItem = [...items];

    newItem[index].isSelected = !newItem[index].isSelected;

    setItems(newItem);
    totalQuantity();
  };

  const quantityIncrease = (index) => {
    const newItem = [...items];

    newItem[index].quantity++;

    setItems(newItem);
    totalQuantity();
  };
  const quantityDecrease = (index) => {
    const newItem = [...items];

    if (newItem[index].quantity < 1) {
      return;
    }
    newItem[index].quantity--;

    setItems(newItem);
    totalQuantity();
  };

  const totalQuantity =() =>{
    console.log(total)
    const totalItemCount= items.reduce((total,item)=>{
      return total + item.quantity;
    },0)
    setTotal(totalItemCount)
  }
  return (
    <div className="App__container">
      <div className="App__container-input noselect">
        <input
          onChange={handleInput}
          placeholder="Add an Item"
          value={input}
        ></input>
        <span className="plus" onClick={addIntoItems}>
          +
        </span>
      </div>
      <div className="App__container_display">
        {items.map((item, index) => (
          <div className="item__container">
            <div className="item__container-name">
              {item.isSelected ? (
                <>
                  <div
                    className="change-status"
                    onClick={() => {
                      changeIsSelected(index);
                    }}
                  >
                    <span className="check-mark">&#10003;</span>

                  </div>
                  <span className="completed item-display">
                    {item.itemName}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="change-status"
                    onClick={() => {
                      changeIsSelected(index);
                    }}
                  >

                  </span>
                  <span className="item-display">{item.itemName}</span>
                </>
              )}
            </div>
            <div className="item__container-quantity">
              <>
                <span
                  onClick={() => {
                    quantityDecrease(index);
                  }}
                >
                  {"<"}
                </span>
                <h2 className="noselect">{item.quantity}</h2>

                <span
                  onClick={() => {
                    quantityIncrease(index);
                  }}
                >
                  {">"}
                </span>
              </>
            </div>

          </div>

        ))}
        <div className="total">
          <span >Total:{total}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
