const mongoose = require('mongoose');

// Supprime l'avertissement de dépréciation
mongoose.set('strictQuery', true);

// Vérifie que l'URL est définie
const connectionString = process.env.CONNECTION_STRING;
if (!connectionString) {
  console.error("La variable d'environnement CONNECTION_STRING n'est pas définie!");
  process.exit(1);
}

// Se connecte à MongoDB
mongoose.connect(connectionString)
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));