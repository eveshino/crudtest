import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { AddCompany } from "./components/companyAdd/AddCompany";
import { CompanyList } from "./components/companyList/CompanyList";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Switch>
          <Route path="/" exact component={AddCompany} />;
          <Route path="/get" component={CompanyList} />
        </Switch>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
