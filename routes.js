const router = require("express").Router();
const longToShort = require("./controllers/longToshort");
const shortToLong = require("./controllers/shortToLong");

router.post("", longToShort.build);

router.get("", shortToLong.build);

module.exports = router;