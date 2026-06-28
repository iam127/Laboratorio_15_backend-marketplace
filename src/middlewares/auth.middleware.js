const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const auth = req.headers['authorization'];
  if (!auth)
    return res.status(401).json({ success: false, message: 'Token requerido', data: null });

  const token = auth.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Token inválido', data: null });
  }
};

exports.verifyAdmin = (req, res, next) => {
  if (req.user.role !== 'ADMIN')
    return res.status(403).json({ success: false, message: 'Acceso denegado', data: null });
  next();
};