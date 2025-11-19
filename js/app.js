// app.js - utilidades de frontend
window.__env = {
  //API_BASE_URL: 'http://localhost:8081', // cambiar si corresponde
  API_BASE_URL: 'https://Ms-clientes-visitas-env2.eba-ie2e5n2t.us-east-1.elasticbeanstalk.com',
  GOOGLE_MAPS_API_KEY: 'AIzaSyAkxLcCxxcH3u81ofoTGlKGz9zvYW1I8gQ' // opcional, se usa luego
};

function getToken() { return sessionStorage.getItem('jwt'); }
function setToken(t){ sessionStorage.setItem('jwt', t); }
function clearAuth(){ sessionStorage.clear(); }
function isAuthenticated(){ return !!getToken(); }

// simple helper to redirect to login if not auth
function requireAuth() {
  if (!isAuthenticated()) window.location = '../index.html';

}
