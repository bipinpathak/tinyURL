const store = require("./../model/store");

module.exports.build = async (req, res) => {
  try {
    const short = req.body['url'];
    console.log(req);
    if (short == null) {
      //no URL in req
      return res.send("Short Url Missing");
    }
    var ans = await store.findOne({ key: short });
    if (ans == null) {
      //invalid shortURL
      return res.send("Short URL does not exists");
    }
    return res.redirect(ans.val);
  } catch (err) {
    return res.send("Some error occured");
  }
}