const express = require("express");
const Faimely = require("../models/faimely");

const router = new express.Router();

router.post("/faimely", (req, res) => {
  const faimelydata = new Faimely(req.body);
  faimelydata
    .save()
    .then(() => {
      res.status(201).send(faimelydata);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

router.get("/faimely", async (req, res) => {
  try {
    const faimelyData = await Faimely.find();
    res.send(faimelyData);
  } catch (e) {
    res.send(e);
  }
});

router.get("/faimely/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const faimelyData = await Faimely.findById(_id);

    if (!faimelyData) {
      return res.status(404).send();
    } else {
      res.send(faimelyData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/faimely/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateFaimelyData = await Faimely.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!updateFaimelyData) {
      return res.status(404).send();
    } else {
      res.send(updateFaimelyData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.put("/faimely/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateFaimelyData = await Faimely.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!updateFaimelyData) {
      return res.status(404).send();
    } else {
      res.send(updateFaimelyData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/faimely/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const DelateData = await Faimely.findByIdAndDelete(_id);
    if (!DelateData) {
      return res.status(404).send();
    } else {
      res.send(DelateData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
