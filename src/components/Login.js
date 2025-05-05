import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await api.get(`/users?email=${email}&password=${password}`);
    if (res.data.length > 0) {
      localStorage.setItem("user", JSON.stringify(res.data[0]));
      navigate("/books");
    } else {
      alert("Грешни данни за вход!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Вход</h2>
      <input placeholder="Имейл" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Парола" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Вход</button>
    </form>
  );
}
