import { Card, Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-2 tracking-snug border-blue-500 text-2xl flex-row-reverse items-end">
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
