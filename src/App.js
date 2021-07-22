import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { QuotesProvider } from "./context/QuotesContext";
import Quote from "./pages/Quote";
export default function App() {
  return (
    <>
      <QuotesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/quote" component={Quote} />
            <Redirect from="/" to="/home" />
          </Switch>
        </BrowserRouter>
      </QuotesProvider>
    </>
  );
}
