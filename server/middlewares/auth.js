import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: 'Not authorised. Login again' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // ✅ decode token
    req.userID = decoded.id;  // ✅ attach user ID to request
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
