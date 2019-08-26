const app = require('./api.js');
/*creation du server sur le port par defaut */
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});