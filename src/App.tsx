import './App.css'

import Link from "./components/Link.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import MixOfTheMonth from "./components/MixOfTheMonth.tsx";

function App() {


  return (
      <>
        <header className={"headerClass"}>
          <Header />
        </header>
        <main>
          <Link />
            <MixOfTheMonth />
        </main>
        <footer className={"footerClass"}>
          <Footer />
        </footer>
      </>

  )
}

export default App
