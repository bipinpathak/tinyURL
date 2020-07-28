const store = require("./../model/store");

module.exports.build = async (req, res) => {
  try {
    const long = req.body['url'];
    if (long == null) {
      //URL not found in request
      return res.send("URL missing");
    }
    var add = await store.findOne({val: long});
    if (add == null) {
      //ShortURL does not exist already
      var n = await store.countDocuments();
      var s = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var ans = "";
      n++;
      while (n) {
        ans = ans + s.charAt(Math.floor(n % 62));
        n = Math.floor(n / 62);
      }
      var add = new store({ key: ans, val: long });
      await add.save();
    }
    return res.send("Your Short URl : " + add.key);
  } catch (err) {
    return res.send("Some error occured");
  }
}