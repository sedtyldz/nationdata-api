// These are the route definitions for the API endpoints.
module.exports = (app) => {

  app.get('/api/health', (req, res) => {
    res.json({ message: 'API is healthy.' });
  });

 
  app.get('/api/countrieList', (req, res) => {
    res.json({ message: 'This endpoint for the country List.' });
  });

  
  app.get('/api/country/:name', (req, res) => {
    res.json({ message: `This endpoint for specific country data.` });
  });


  app.get('/api/countryListwithcontinent', (req, res) => {
    res.json({ message: 'This endpoint for the country List with specific continent.' });
  });


  app.get('/api/continentList', (req, res) => {
    res.json({ message: 'This endpoint for the continent List.' });
  });

  app.get('/api/allCountryData', (req, res) => {
    res.json({ message: 'This endpoint for all the country data.' });
  });


  app.get('/', (req, res) => {
    res.render('index');
  });

};
