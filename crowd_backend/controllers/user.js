const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * =================================================
 * DEV ONLY: Create default admin if DB is empty
 * =================================================
 */
(async function seedAdmin() {
  try {
    const count = await db.User.countDocuments();
    if (count === 0) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash("abc", salt);

      await db.User.create({
        email: "imt_2018109@iiitm.ac.in",
        password: hash,
        isVerified: true,
      });

      console.log("✅ Default admin created");
    }
  } catch (err) {
    console.error("❌ Error creating default admin:", err);
  }
})();

/**
 * =================================================
 * Utility: Email validation
 * =================================================
 */
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    re.test(email) &&
    email.endsWith("@iiitm.ac.in")
  );
}

/**
 * =================================================
 * Add Admin
 * =================================================
 */
const addAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });

    if (!validateEmail(email))
      return res.status(400).json({
        message: "Only iiitm.ac.in domain emails are allowed",
      });

    const existingUser = await db.User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        message: "Email is already registered",
      });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await db.User.create({ email, password: hash });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "10h" }
    );

    return res.status(200).json({
      message: "Admin added successfully",
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * =================================================
 * Login
 * =================================================
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "Please enter email and password",
      });

    if (!validateEmail(email))
      return res.status(400).json({
        message: "Please login with iiitm.ac.in email",
      });

    const user = await db.User.findOne({ email });
    if (!user)
      return res.status(400).json({
        message: "Invalid email or password",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        message: "Invalid email or password",
      });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "10h" }
    );

    return res.status(200).json({
      token,
      userId: user._id,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Login failed",
    });
  }
};

/**
 * =================================================
 * Create Campaign
 * =================================================
 */
const create = async (req, res) => {
  try {
    const campaign = { ...req.body, raised: 0 };

    if (!campaign.title || !campaign.description || !campaign.subTitle)
      return res.status(400).json({
        message: "All fields are required",
      });

    if (campaign.required <= 0)
      return res.status(400).json({
        message: "Required amount must be greater than 0",
      });

    const newCampaign = await db.Campaign.create(campaign);
    return res.status(200).json(newCampaign);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error creating campaign",
    });
  }
};

/**
 * =================================================
 * Update Campaign
 * =================================================
 */
const update = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(404).json({ message: "Invalid campaign ID" });

    const updatedCampaign = await db.Campaign.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    return res.status(200).json(updatedCampaign);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error updating campaign",
    });
  }
};

/**
 * =================================================
 * Delete Campaign
 * =================================================
 */
const deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(404).json({ message: "Invalid campaign ID" });

    await db.Campaign.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Campaign deleted successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error deleting campaign",
    });
  }
};

module.exports = {
  addAdmin,
  login,
  create,
  update,
  deleteCampaign,
};
