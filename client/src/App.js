import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;







// import "./App.css";
// import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
// import ProductScreen from "./screens/ProductScreen";
// import CartScreen from "./screens/CartScreen";
// import Navbar from "./components/Navbar";
// import Backdrop from "./components/Backdrop";
// import SideDrawer from "./components/SideDrawer";

// function App() {
//   const [sidetoggle, setsidetoggle] = useState(false);
//   return (
//     <Router>
//       <Navbar click={() => setsidetoggle(true)} />
//       <SideDrawer show={sidetoggle} click={() => setsidetoggle(false)} />
//       <Backdrop show={sidetoggle} click={() => setsidetoggle(false)} />

//       <main>
//         <Switch>
//           <Route exact path="/" component={HomeScreen} />

//           <Route exact path="/product/:id" component={ProductScreen} />
//           <Route exact path="/cart" component={CartScreen} />
//         </Switch>
//       </main>
//     </Router>
//   );
// }

// export default App;
