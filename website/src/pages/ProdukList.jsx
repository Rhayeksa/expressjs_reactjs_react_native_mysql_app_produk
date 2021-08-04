import { Link } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

export default function ProdukList(props) {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h1>Produk List</h1>
        <Link className="btn btn-outline-warning" to="/produk">
          Goto Produk Detail (^_^)
        </Link>
      </div>
    </div>
  );
}
