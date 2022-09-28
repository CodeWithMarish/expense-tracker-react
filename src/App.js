import { Navigate, Route, Routes } from "react-router-dom";
import Transactions from "./features/Transactions";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import ViewIE from "./pages/ViewIE";

function App() {
  return (
    <Routes>
      <Route path="/viewAll" element={<ViewIE />}>
        <Route index element={<Navigate to={"all"}/>} />
        <Route path=":category" element={<Transactions />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
