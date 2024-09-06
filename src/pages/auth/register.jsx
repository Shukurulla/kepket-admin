import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/auth.service";

const Register = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [brand, setBrand] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const val = {
      name,
      address,
      password,
      brand,
      phone,
    };
    console.log(val);

    AuthService.signUp(dispatch, navigate, val);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
    }
  }, []);

  return (
    <div className="py-5">
      <main className="form-signin py-5 w-25 m-auto">
        <form onSubmit={(e) => submitHandler(e)}>
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control mb-3"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-3"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              required
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="form-control mb-3"
              id="floatingBrand"
              placeholder="Password"
            />
            <label htmlFor="floatingBrand">Brand</label>
          </div>
          <div className="form-floating">
            <input
              required
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control mb-3"
              id="floatingAddress"
              placeholder="Password"
            />
            <label htmlFor="floatingAddress">Address</label>
          </div>
          <div className="form-floating">
            <input
              required
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control mb-3"
              id="floatingPhone"
              placeholder="Password"
            />
            <label htmlFor="floatingPhone">Phone</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign up
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
