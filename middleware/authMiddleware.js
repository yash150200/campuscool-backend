// // // // const jwt = require("jsonwebtoken");

// // // // const authMiddleware = (req, res, next) => {
// // // //   const token = req.headers.authorization?.split(" ")[1];
// // // //   if (!token) return res.status(401).json({ msg: "Unauthorized" });

// // // //   try {
// // // //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // //     req.user = decoded;
// // // //     next();
// // // //   } catch {
// // // //     res.status(401).json({ msg: "Token is invalid" });
// // // //   }
// // // // };

// // // // module.exports = authMiddleware;

// // // // middleware/authMiddleware.js
// // // const jwt = require("jsonwebtoken");

// // // // Auth middleware: verifies token and attaches user payload to req.user
// // // const authMiddleware = (req, res, next) => {
// // //   const token = req.headers.authorization?.split(" ")[1];
// // //   if (!token) return res.status(401).json({ msg: "Unauthorized" });

// // //   try {
// // //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // //     req.user = decoded; // { id, role, name, iat, exp }
// // //     next();
// // //   } catch (err) {
// // //     console.error("Auth middleware error:", err);
// // //     res.status(401).json({ msg: "Token is invalid" });
// // //   }
// // // };

// // // // Admin middleware: requires auth and admin role
// // // const adminMiddleware = (req, res, next) => {
// // //   if (!req.user) return res.status(401).json({ msg: "Unauthorized" });
// // //   if (req.user.role !== "admin") {
// // //     return res.status(403).json({ msg: "Forbidden: Admins only" });
// // //   }
// // //   next();
// // // };

// // // module.exports = {
// // //   authMiddleware,
// // //   adminMiddleware,
// // // };
// // //const jwt = require("jsonwebtoken"); const authMiddleware = (req, res, next) => { const token = req.headers.authorization?.split(" ")[1]; if (!token) return res.status(401).json({ msg: "Unauthorized" }); try { const decoded = jwt.verify(token, process.env.JWT_SECRET); req.user = decoded; next(); } catch { res.status(401).json({ msg: "Token is invalid" }); } }; module.exports = authMiddleware;
// // const jwt = require("jsonwebtoken");

// // const authMiddleware = (req, res, next) => {
// //   const token = req.headers.authorization?.split(" ")[1];

// //   if (!token) {
// //     return res.status(401).json({ msg: "Unauthorized" });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded;
// //     next();
// //   } catch (err) {
// //     console.error("JWT Verification Error:", err.message);
// //     return res.status(401).json({ msg: "Token is invalid" });
// //   }
// // };

// // module.exports = authMiddleware;
 const jwt = require("jsonwebtoken");

 //Auth middleware: verifies token and attaches user payload to req.user
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role, name, iat, exp }
    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    res.status(401).json({ msg: "Token is invalid" });
  }
};

 //Admin middleware: requires auth and admin role
const adminMiddleware = (req, res, next) => {
   if (!req.user) return res.status(401).json({ msg: "Unauthorized" });
   if (req.user.role !== "admin") {
     return res.status(403).json({ msg: "Forbidden: Admins only" });
   }
   next();
 };

 module.exports = {
  authMiddleware,
   adminMiddleware,
 };
