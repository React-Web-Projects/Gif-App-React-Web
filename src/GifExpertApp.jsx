//usando el archivo de exportación index.js
import { AddCategory , GifGrid} from "./components";
import { useAddCategory } from "./hooks/useAddCategory";

export const GifExpertApp = () => {
  
  const {onAddCategory, categories} = useAddCategory();

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
