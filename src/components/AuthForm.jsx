import { useState, useEffect, useContext, useRef, useLayoutEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import {initialState, authReducer} from "../reducers/authReducer"

const AuthForm = ({ isRegister = false }) => {
  const { login } = useContext(AuthContext);
  // const [data, setData] = useState({
  //   username: "",
  //   password: "",
  //   email: "",
  // });
  // const [error, setError] = useState("");
  // const [submitting, setSubmitting] = useState(false);
  // const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(authReducer, initialState);
  const {data, error, submitting, successMessage} = state

  const nameRef = useRef(null);
  useLayoutEffect(() => {
    nameRef.current.focus();
    //console.log(nameRef)
  }, [])

  const handleChange = (e) => {
    //setData({ ...data, [e.target.name]: e.target.value });
    dispatch({type: "SET_DATA", payload: {data: data, field: e.target.name, value: e.target.value}})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setSubmitting(true);
    dispatch({type: "SET_SUBMITTING", payload: true})
    const formData = new FormData();
    formData.append("username", data.username.trim());
    formData.append("password", data.password.trim());
    if (isRegister) formData.append("email", data.email.trim());
    formData.append("action", isRegister ? "register" : "login");

    try {
      const response = await fetch(
        "https://web.ics.purdue.edu/~ccallag/profile-app/auth.php",
        {
          method: "POST",
          body: formData,
        }
      );
      const res = await response.json();
      if (res.success) {
        // setData({
        //   username: "",
        //   password: "",
        //   email: "",
        // });
        // setSuccessMessage(res.success);
        // setError("");
        dispatch({type: "FETCH_SUCCESS", payload: res.success})
        login();
        navigate("/");
      } else {
        // setError(res.error);
        // setSuccessMessage("");
        dispatch({type: "FETCH_ERROR", payload: res.error})
      }
    } catch (error) {
      // setError(error.message);
      // setSuccessMessage("");
      dispatch({type: "FETCH_ERROR", payload: error.message})
    } finally {
      // setSubmitting(false);
      dispatch({type: "SET_SUBMITTING", payload: false})
    }
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
        ref={nameRef}
        type="text"
        name="username"
        placeholder="Username"
        required
        value={data.username}
        onChange={handleChange}
      />
      {isRegister && (
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={data.email}
          onChange={handleChange}
        />
      )}
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        minLength="8"
        value={data.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        disabled={
          submitting ||
          data.username.trim() === "" ||
          (isRegister && data.email.trim() === "") ||
          data.password.trim() === ""
        }
      >
        Submit
      </button>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};
export default AuthForm;