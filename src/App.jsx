// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
