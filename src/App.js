import { Form } from "./components/Form/Form";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <main className="bg-white min-h-screen dark:text-white dark:bg-black">
      <Navbar />
      <div className="container m-auto">
        <Form />
      </div>
    </main>
  );
}

export default App;
