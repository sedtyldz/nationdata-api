const app = require('./app');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});