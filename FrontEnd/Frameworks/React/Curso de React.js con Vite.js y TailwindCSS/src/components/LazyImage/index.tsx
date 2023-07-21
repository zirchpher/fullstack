import { useEffect, useRef, useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export function LazyImage({ src, ...Props }: Props): JSX.Element {
  const node = useRef<HTMLImageElement>(null);
  const [image, setImage] = useState("");

  const handleError = () => {
    if (node.current) {
      node.current.src =
        "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImage(src);
        }
      });
    });

    if (node.current) observer.observe(node.current);

    return () => observer.disconnect();
  }), [src];

  return (
    <img
      src={image}
      ref={node}
      onError={handleError}
      {...Props}
    />
  );
}
