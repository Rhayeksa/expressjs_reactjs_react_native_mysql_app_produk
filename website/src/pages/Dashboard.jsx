import { Button } from "reactstrap";
import NavbarComponent from "../components/NavbarComponent";

export default function Dashboard(props) {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h1>Dasboard</h1>
        <Button color="danger">Hello (^_^)</Button>
      </div>
    </div>
  );
}
