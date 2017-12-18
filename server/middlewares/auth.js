module.exports = ( req, res, next ) => {
  if ( req.path.includes('properties') ) {
    if ( req.session.user ) {
      next();
    } else {
      res.status(403).send({ authorized: false });
    }
  } else {
    next();
  }
};