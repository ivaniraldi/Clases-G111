import { useState } from "react";

/*

localStorage.setItem("nombreDelItem", valor) <----- guarda un valor en la variable "nombreDelItem"
localStorage.getItem("nombreDelItem") <---- devuelve el valor guardado en esa variable
localStorage.removeItem("nombreDelItem") <----- elimina el valor y la variable "nombreDelItem"
localStorage.clear() <------ elimina TODAS las variables de localStorage

*/

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.setItem("token", data.token);
      alert("Iniciaste sesión correctamente :D ");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="container d-flex ">
      <form action="submit" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <br />
        <label htmlFor="password">Contraseña</label>
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          id=""
        />
        <button className="ms-3 btn btn-dark btn-sm">Iniciar sesión</button>
      </form>
    </div>
  );
};
export default Login;
