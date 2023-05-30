import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // const onInputChange = ( event ) =>{
  //    setInputValue(event.target.value);
  // }

  // otra forma
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    // para prevenir la actualización del sitio web
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // onChange={event => onInputChange(event)}
        // otra forma
        onChange={onInputChange}
        className="icon"
      />
    </form>
  );
};
