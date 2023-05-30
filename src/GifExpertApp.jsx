import { useState } from "react";
//usando el archivo de exportación index.js
import { AddCategory , GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {
    // opción 1
    // setCategories(addCategory => addCategory.concat('Naruto'))
    // opción 2
    // setCategories(categories.concat('Naruto'))
    // opción 3
    // setCategories([...categories, 'Naruto'])
    // opción 4
    // setCategories(['Naruto', ...categories, ])
    // opción 5
    // setCategories(['Naruto'])
    // opción 6
    // setCategories(category =>[...category, 'Naruto'])

    if (categories.includes(newCategory.toString().toLowerCase())) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* <button onClick={onAddCategory}></button> */}
      {/* {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })} */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
