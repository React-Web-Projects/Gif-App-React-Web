import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Primera forma de obtener las imágenes

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false)
  };

  // Segunda forma de obtener las imágenes
  // useEffect(() => {
  //   getGifs(category)
  //     .then( newImages => setImages(newImages));
  // }, []);

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  };
};
