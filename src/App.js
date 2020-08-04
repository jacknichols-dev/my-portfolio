import React from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import "./styles/_variables.scss";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
