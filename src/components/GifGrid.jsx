import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { CircularIndeterminate } from "./Loading";

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <CircularIndeterminate/>
        // isLoading && (<h2>Cargando...</h2>)
      }

      {/* // primera forma de obtener las propiedades de images
      <div className="card-grid">
        {
        images.map(({ id, title, url }) => (
          <GifItem 
          key={id}
          title={title}
          url={url}
          />
        ))
        }
      </div> */}

      {/* segunda forma de obtener las propiedades de images */}
      <div className="card-grid">
        {
            images.map((image) => (
              <GifItem 
                key={image.id}
                { ...image }
              />
            ))
          }
      </div>
    </>
  );
};  
