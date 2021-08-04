import NavbarComponent from "../components/NavbarComponent";
import { Link } from "react-router-dom";

export default function ProdukCreateOrUpdate(props) {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        {props.id ? <h1>Edit Produk</h1> : <h1>Tambah Produk</h1>}
        <Button color="primary">
          <Link to="/">(^_^)</Link>
        </Button>
      </div>
    </div>
  );
}
