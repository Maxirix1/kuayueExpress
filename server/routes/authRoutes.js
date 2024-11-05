const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authControl = require("../controller/authController");

const auth = (req, res, next) => {
    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).json({ message: "Unauthorization | Try again!"});
    }

    jwt.verify(token, process.env.JWT_SECRET, ( err, decoded ) => {
        if(err) {
            return res.status(401).json({ message: "Unauthorization | Try again!"});
        }

        req.user = decoded;
        next();
    })
}

router.post("/signup", authControl.signupUser);
router.post("/login", authControl.loginUser);
router.post("/parcel", authControl.idParcel);

router.get("/parcels", authControl.getAllParcels);
router.get("/parcelswait", authControl.parcelsWait);
router.get("/parcels/count", authControl.countParcels);
router.post("/saveData", authControl. saveData);

router.get("/homeAdmin/main", auth, (req, res) => {
    res.json({ message: "Hi, Admin" , user: req.user });
});
router.get("/homeAdmin/list", auth, (req,res) => {
    res.json({ message: "List Data", user: req.user });
});
router.get("/homeAdmin/distribution", auth, (req,res) => {
    res.json({ message: "Hi, Admin" , user: req.user});
});
router.get("/homeAdmin/branch", auth, (req,res) => {
    res.json({ message: "Hi, Admin" , user: req.user});
});


module.exports = router;
