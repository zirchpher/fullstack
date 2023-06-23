import { useEffect, useRef, useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

function LazyImage({ src, ...Props }: Props): JSX.Element {
  const node = useRef<HTMLImageElement>(null);
  const [image, setImage] = useState("");

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
      {...Props}
    />
  );
}

export { LazyImage };
