module.exports = {
  getAll: (req, res) => {
    const db = req.app.get("db");
    db.get_inventory()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log("getALL:", err);
      });
  },

  newProduct: (req, res) => {
    const { productName, price, imageUrl } = req.body;
    const db = req.app.get("db");

    db.create_product([productName, price, imageUrl])
      .then(response => {
        res.status(200).send("Product has been created");
      })
      .catch(err => {
        console.log("newProduct:", err);
      });
  },

  removeProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.remove_product([id])
      .then(response => {
        res.status(200).send("deleted, yo");
      })
      .catch(err => {
        console.log("removeProduct:", err);
      });
  },

  getProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.get_product([id])
      .then(response => {
        res.status(200).send(response[0]);
      })
      .catch(err => {
        console.log("getProduct:", err);
      });
  }
};
