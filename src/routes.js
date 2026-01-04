// this is the Endpoints file

module.exports = (app) => {

  app.get('/api/first', (req, res) => {
    res.json({ message: 'Hello this is the first endPoint' });
  });

};


