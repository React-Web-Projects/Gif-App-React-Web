
import { useState } from 'react'

export const useAddCategory = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toString().toLowerCase())) return;

    setCategories([newCategory, ...categories]);
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
  };
  return {
    onAddCategory,
    categories
  };
};
