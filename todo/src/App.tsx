import { Provider } from "react-redux";
import { Header } from "./components/Header/Header";
import { RouterSection } from "./components/RouterSection/RouterSection";
import { store } from "./state/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <RouterSection />
        <footer></footer>
      </div>
    </Provider>

  );
}

export default App;
