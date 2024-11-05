const User = require("../model/users");
const Parcel = require("../model/parcel");
const ParcelDetail = require("../model/saveData");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

exports.signupUser = async (req, res) => {
  const { username, email, passwrd } = req.body;

  try {
    let user = await User.findOne({ where: { email } }); // เปลี่ยนจาก newUser เป็น User
    if (user) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // ตรวจสอบว่า username ถูกใช้แล้วหรือยัง
    user = await User.findOne({ where: { username } }); // เปลี่ยนจาก newUser เป็น User
    if (user) {
      return res.status(400).json({ message: "Username already exists!" });
    }

    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await bcrypt.hash(passwrd, 16);

    // สร้าง user ใหม่
    const new_user = await User.create({
      username,
      email,
      passwrd: hashedPassword,
      // role: 'user',
    });

    res.status(201).json({ message: "Signup Successful!", redirect: "/login" });
  } catch (err) {
    console.error("Error in signup:", err); // แสดงข้อผิดพลาดในคอนโซล
    res.status(500).json({ message: "Error 500 | Try again " });
  }
};

exports.idParcel = async (req, res) => {
  const { id_parcel, from } = req.body;

  try {
    let parcel = await Parcel.findOne({ where: { id_parcel } });
    if (parcel) {
      return res.status(400).json({ message: "ID Parcel already!" });
    }

    await Parcel.create({
      id_parcel,
      from,
    });

    res.status(201).json({ message: "Save Parcel Successful!", redirect: "" });
  } catch (err) {
    console.error("500 | ERROR Try again", err);
    res.status(500).json({ message: "Error 500 | Try again ", err });
  }
};

exports.getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.findAll();
    res.status(200).json(parcels);
  } catch (error) {
    console.error("Error fetching parcels: ", error);
    res.status(500).json({ message: "500 ERROR fetch percels | Try again!" });
  }
};

exports.parcelsWait = async (req, res) => {
  try {
    const parcelswait = await ParcelDetail.findAll();
    res.status(200).json(parcelswait);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Error fetch Parcel: ", error });
  }
};

exports.countParcels = async (req, res) => {
  try {
    const count = await Parcel.count();
    res.status(200).json({ total: count });
  } catch (error) {
    res.status(500).json({ message: "500 ERROR Count parcels | Try again!" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, passwrd } = req.body;

  try {
    let user = await User.findOne({
      where: {
        [Op.or]: [{ email: email }, { username: email }],
      },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or email!" });
    }

    const isMatch = await bcrypt.compare(passwrd, user.passwrd);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect Password!" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token,
      message: "Login Successful!",
      username: user.username,
      role: user.role,
      branch: user.branch,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server Error | Try again :<" });
  }
};

exports.saveData = async (req, res) => {
  try {
    const { parcel, detail } = req.body;

    const existingParcel = await Parcel.findOne({
      where: { id_parcel: parcel.id_parcel },
      attributes: ['from'],
    });

    if (existingParcel) {
      const mainParcel = parcel;
      const fromValue = existingParcel.from;

      let price = detail.parcle;

      if(detail.typeParcel === 'Genaral') {
        price = detail.weight * 15000;
      }

      let priceAll = price * detail.amount + ' ກີບ';

      const dataExpress = {
        id_parcel: mainParcel.id_parcel,
        from: fromValue,
        type_tel: mainParcel.type_tel,
        tel: mainParcel.tel,
        type: mainParcel.type,
        note: mainParcel.note,
        branch: mainParcel.branch,
        typeParcel: detail.typeParcel,
        width: detail.width,
        lenght: detail.lenght,
        height: detail.height,
        weight: detail.weight,
        amount: detail.amount,
        price: priceAll,
      };

      const savedParcel = await ParcelDetail.create(dataExpress);

      await Parcel.destroy({
        where: { id_parcel: parcel.id_parcel },
      });

      res.status(201).json({
        message: "Parcel saved successfully!",
        parcel: savedParcel,
      });
      console.log(`Deleted parcel with id_parcel: ${parcel.id_parcel} from OldParcelTable`);
    } else {
      res.status(404).json({ message: "Parcel not found in OldParcelTable" });
    }
  } catch (error) {
    console.error("Error Save | Try again", error);
    res.status(500).json({ message: "Error saving parcel | Try again" });
  }
};
