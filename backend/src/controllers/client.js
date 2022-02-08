exports.getClients = (req, res, next) => {
  res.status(200).json({
    clients: [{ name: 'Nicolas Thompson', email: 'mail@nicolasthompson.com', createdDate: new Date(), company: 'Thompson Software Ltd' }]
  });
};

exports.createClient = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const createdDate = new Date();
  const company = req.body.company;

  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), name: name, email: email, createdDate: createdDate, company: company }
  });
};