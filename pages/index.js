import { Main } from "./components/Main/Main";
import { Navbar } from "./components/navbar/Navbar";
import Head from "next/head";

function App() {
  return (
    <div>
      <Head>
        <title>TextUtilise - Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="bg-white min-h-screen dark:text-white dark:bg-black overflow-x-hidden">
        <Navbar />
        <div className="container m-auto px-5 sm:px-10">
          <Main />
        </div>
      </main>
    </div>
  );
}

export default App;
