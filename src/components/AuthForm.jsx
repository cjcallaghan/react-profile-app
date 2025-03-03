import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const AuthForm = ({ isRegister = false }) => {
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(isRegister)
    console.log(login)
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
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
      const data = await response.json();
      if (data.success) {
        setData({
          username: "",
          password: "",
          email: "",
        });
        setSuccessMessage(data.success);
        setError("");
        login();
        navigate("/");
      } else {
        setError(data.error);
        setSuccessMessage("");
      }
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
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