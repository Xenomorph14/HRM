const jwt = require("jsonwebtoken");
const Staff = require("../../../app/models/staffInformation")

function authenticateToken(req, res, next) {
  console.log(req.headers);
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  // console.log(token);
  if (token == null) return res.json({ data: { status: "Login failed" } });
  Staff.find({ token : token }, (err, staff) => {
    console.log(staff);
    if(staff.length != 0){
      jwt.verify(token, 'a739fda1902a8fa888e2105470e2d96c77bdfb8610456e34d27040491feacad4323b9b4e5df23c795e7a5f6c833bd49017048b1dff022d8f5509dc7b590ffa96', (err, user) => {
        if (err) return res.json({ data: { status: "Login failed" } });
        req.user = user;
        next();
      });
    }else{
      return res.json({ data: { status: "Login failed" } });
    }
  })
 
}

module.exports = authenticateToken;
