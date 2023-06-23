import { LazyImage } from "./components";
import { useImageItem } from "./hooks/useImageItem";
import { random } from "lodash";

function App() {
  const [images, addImageItem] = useImageItem();
  const getRandomNumber = (): number => Math.floor(Math.random() * 123) + 1;
  const generateRandomId = (): string =>
    random(1, 123).toString(36).substring(2, 15);

  const addNewCutieFox: React.MouseEventHandler<HTMLButtonElement> = () => {
    const newCutieFox: IFoxItem = {
      id: generateRandomId(),
      url: `https://randomfox.ca/images/${getRandomNumber()}.jpg`,
    };

    addImageItem(newCutieFox);
  };

  return (
    <>
      <h1>Hello World</h1>

      <button
        onClick={addNewCutieFox}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add a new cutie Fox!
      </button>

      {images.map(({ url, id }) => (
        <figure className="p-4" key={id}>
          <LazyImage
            src={url}
            alt="an image of a fox"
            className="rounded dark:bg-gray-400"
            width="320"
            height="auto"
          />
        </figure>
      ))}
    </>
  );
}

export { App };
