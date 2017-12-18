module.exports = {
  create: ( req, res, next ) => {
    const db = req.app.get('db');
    const b = req.body;
    const { id } = req.session.user;

    db.create_property(id, b.name, b.description, b.address, b.city, b.state, b.zip, b.image, b.loan_amount, b.monthly_mortgage, b.desired_rent, b.recommended_rent).then(properties => {
      db.get_all_properties(id).then(properties => {
          res.status(200).send( properties );
      }).catch( err => console.log( err ) );
    }).catch( err => console.log( err ) );
  },

  readAll: ( req, res, next ) => {
    const db = req.app.get('db');
    const { id } = req.session.user;

    db.get_all_properties(id).then(properties => {
        res.status(200).send( properties );
    }).catch( err => console.log( err ) );
  },

  delete: ( req, res, next ) => {
    const db = req.app.get('db');
    const deleteId = req.params.id;
    const userId = req.session.user.id;

    db.delete_property( deleteId ).then( () => {
      db.get_all_properties( userId ).then(properties => {
          res.status(200).send( properties );
      }).catch( err => console.log( err ) );
    }).catch( err => console.log( err ) );
  },

  filter: ( req, res, next ) => {
    const db = req.app.get('db');
    const { amount } = req.query;

    db.filter_properties([ amount, req.session.user.id ]).then( properties => {
      res.status(200).send(properties);
    }).catch( err => console.log( err ) );
  }
};
