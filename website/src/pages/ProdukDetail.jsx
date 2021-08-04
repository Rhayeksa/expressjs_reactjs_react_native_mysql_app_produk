import { Link } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

export default function ProdukDetail(props) {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h1>Produk Detail</h1>
        <Link className="btn btn-outline-primary" to="/">
          (^_^)
        </Link>
      </div>
    </div>
  );
}
