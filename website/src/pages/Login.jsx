import { Button, Form, Input, Label } from "reactstrap";
import { FaUserCircle } from "react-icons/fa";

const Login = (props) => {
  // const handleLogin = () => {};
  return (
    <div>
      <div className="position-absolute top-50 start-50 translate-middle border border-3 rounded border-primary p-5">
        <div className="mb-5 row">
          <div className="col"></div>
          <div className="col">
            <FaUserCircle size="100px" />
          </div>
          <div className="col"></div>
        </div>
        <Form>
          <div className="form-floating mb-3">
            <Input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <Label for="floatingInput">Email address</Label>
          </div>
          <div className="form-floating mb-3">
            <Input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <Label for="floatingPassword">Password</Label>
          </div>
          <Button
            onClick={() => {
              console.log("berhasil disubmit");
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
