import { useState } from "react";

type useImageItemReturn = [
  IFoxItem[],
  (imageItem: IFoxItem) => void,
];

const useImageItem = (): useImageItemReturn => {
  const [images, setImages] = useState<IFoxItem[]>([]);

  const addImageItem = (imageItem: IFoxItem): void => {
    setImages([...images, imageItem]);
  };

  return [images, addImageItem];
};

export { useImageItem };
