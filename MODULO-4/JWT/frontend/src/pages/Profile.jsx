import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        });
        const data = await res.json();
        console.log(data)
        if (data.error) {
          throw new Error(data.error);
        }
        setUser(data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
    getUser()
  }, []);

  return (
    <div className="container my-3">
      {user ? (
        <div>
          <h3>Bienvenido! {user.email}</h3>
          <h5>Tu ID es: {user.id}</h5>
        </div>
      ) : (
        <p>No estas autenticado, no puedes ver esta página.</p>
      )}
    </div>
  );
};
export default Profile;
