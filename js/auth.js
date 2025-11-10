const ADMIN = { email: "admin@abc.edu.co", password: "123456" };

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  if (email === ADMIN.email && password === ADMIN.password) {
    localStorage.setItem("auth", JSON.stringify({ logged: true, email }));
    window.location.href = "dashboard.html";
  } else {
    alert("Credenciales incorrectas");
  }
});

// Proteger páginas admin
if (window.location.pathname.includes("dashboard") || 
    window.location.pathname.includes("cursos") || 
    window.location.pathname.includes("docentes") || 
    window.location.pathname.includes("administrativos")) {
  const auth = JSON.parse(localStorage.getItem("auth") || "{}");
  if (!auth.logged) window.location.href = "index.html";
}