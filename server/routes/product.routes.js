const express = require("express");
const router = express.Router({ mergeParams: true });
const axios = require("axios");

router.post("/", async function (req, res) {
  try {
    const { data } = await axios("https://api.valantis.store:41000/", {
      method: "post",
      headers: {
        "X-Auth": "cd0bfbcb48b87cbb908ce771120bb507",
      },
      data: {
        action: "get_ids",
      },
    });
    res.json(data.result);

    console.log("data", data);
  } catch (error) {
    console.log("ERROR!!", error);
  }
});

module.exports = router;
