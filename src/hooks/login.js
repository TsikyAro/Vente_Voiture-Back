
const baseUrl = process.env.REACT_APP_BACK_URL;
console.log('baseUrl:', baseUrl);

export default function useAddObjectLogin(apiName, data) {
  fetch(`${baseUrl}/${apiName}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
        console.log(response.text().then(response=>{
            console.log(response+" tokennnnn");
            localStorage.setItem("token", "Bearer "+response);
            return response;
        }));
    } else {
      console.log(data);
      console.log("Error");
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }
  })
  .then(token => {
    console.log("Réponse réussie:", token);
   
    window.location.href='#/dashboard';  // Recharger la page (c'est peut-être une approche à améliorer)
  })
  .catch(error => {
    console.log(data+"erreur "+error.message);
    console.error('Erreur lors de la requête:', error.message);
  });
}
