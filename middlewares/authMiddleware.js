const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const authorizationToken = req.header('Authorization');
  
  if (!authorizationToken) {
    return res.status(401).json({ message: 'Access denied, token missing' });
  }

  const token = authorizationToken.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied, invalid token format' });
  }

  try {
    // Decode the JWT token
    const decoded = jwt.verify(token, 'gH73JkD9XpR4kLZtQ9mB8VdWxY7nF5pX');
    console.log(decoded);

    // Find the user in the database using the ID from the decoded token
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Attach user data to the request object
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
