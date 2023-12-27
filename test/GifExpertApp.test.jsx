import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => {
  test('should ', () => {
    //TODO: debo probar esto
    // const onAddCategory = (newCategory) => {
    //     if (categories.includes(newCategory.toString().toLowerCase())) return;
    
    //     setCategories([newCategory, ...categories]);
       
    //   };
      render(<GifExpertApp/>) 
      screen.debug(); 
  });
});
