import { useState } from "react";
import { PropTypes } from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // const onInputChange = ( event ) =>{
  //    setInputValue(event.target.value);
  // }

  // otra forma es desestructurando el event y obtener el target
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
    //se agrega aria-label="form" para que pueda ser
    //detectado en el test con getByRole('form)
    <form onSubmit={onSubmit} aria-label="form">
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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}