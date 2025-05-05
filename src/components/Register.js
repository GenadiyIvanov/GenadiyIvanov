import { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await api.get(`/users?email=${email}`);
    if (res.data.length > 0) {
      alert("Този имейл вече съществува!");
      return;
    }
    await api.post("/users", { email, password });
    alert("Успешна регистрация!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Регистрация</h2>
      <input placeholder="Имейл" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Парола" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Регистрация</button>
    </form>
  );
}
