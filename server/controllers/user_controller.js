module.exports = {
  login: ( req, res, next ) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    db.find_user([ username, password ]).then( data => {
      if ( data.length !== 0 ) {
        const user = data[0];

        req.session.user = {
          id: user.userid,
          username: user.username
        };

        res.status(200).send( req.session.user );
      } else {
        res.status(500).send('Invailed username/password.');
      }
    }).catch( err => res.status(500).send( err ) );
  },

  register: ( req, res, next ) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    db.register_user([ username, password ]).then( data => {
      const user = data[0];

      req.session.user = {
        id: user.userid,
        username: user.username
      };

      res.status(200).send( req.session.user );
    }).catch( err => {
      console.log( err );
      res.status(500).send( err ) 
    });
  },

  logout: ( req, res, next ) => {
    req.session.destroy();
    res.status(200).send('Session destroyed.');
  }
};