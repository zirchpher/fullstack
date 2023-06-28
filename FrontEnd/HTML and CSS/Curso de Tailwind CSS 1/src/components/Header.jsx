import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="bg-secondary-color text-white flex justify-between items-center p-2">
      <figure>
        <img src={logo} alt="smile svg" className="h-6" />
      </figure>
      <div className="text-white text-3xl cursor-pointer">&equiv;</div>
    </header>
  );
}

export { Header };
