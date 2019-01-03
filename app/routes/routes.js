var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {

  //////////////////////////////// APPOINTMENTS /////////////////////////////////////

  // Post an APPOINTMENT to the server
  app.post("/appointment", (req, res) => {
    const appointmentObject = {
      relatedCustomerId: req.body.relatedCustomerId,
      date: req.body.date,
      notes: req.body.notes,
      relatedCustomerFullName: req.body.relatedCustomerFullName
    };

    db.collection("appointment").insert(appointmentObject, (err, result) => {
      if (err) {
        res.send({
          error: "An error has occurred"
        });
        console.log(err);
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // Get all APPOINTMENTS from the server
  app.get("/appointments", (req, res) => {
    var cursor = db.collection("appointment");
    cursor.find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  // Get a specific APPOINTMENT from the server

  app.get("/appointment/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("appointment").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
        console.log(details);
      } else {
        res.send(item);
      }
    });
  });

  // Delete an APPOINTMENT from the server

  app.delete("/appointment/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("appointment").remove(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send("Appointment is deleted!");
      }
    });
  });

  // Update an APPOINTMENT on the server.
  app.put("/appointment/:id", (req, res) => {
    const id = req.params.id;

    const details = { _id: new ObjectID(id) };

    const appointmentObject = {
      relatedCustomerId: req.body.relatedCustomerId,
      date: req.body.date,
      notes: req.body.notes,
      relatedCustomerFullName: req.body.relatedCustomerFullName
    };

    db.collection("appointment").update(details, appointmentObject, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(appointmentObject);
      }
    });
  });



//////////////////////////////// CUSTOMERS /////////////////////////////////////



  // Post an CUSTOMER to the server
  app.post("/customer", (req, res) => {
    const customerObject = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      phone: req.body.phone,
      email: req.body.email,
      note: req.body.note,
      birthYear: req.body.birthYear,
      currentWeight: req.body.currentWeight,
      startWeight: req.body.startWeight,
      height: req.body.height,
      appointmentCredit: req.body.appointmentCredit,
      totalPayment: req.body.totalPayment,
      paymentDid: req.body.paymentDid,
      paymentLeft: req.body.paymentLeft
    };

    db.collection("customer").insert(customerObject, (err, result) => {
      if (err) {
        res.send({
          error: "An error has occurred"
        });
        console.log(err);
      } else {
        console.log("Successfull!");
        res.send(result.ops[0]);
      }
    });
  });

  // Get all CUSTOMERS from the server
  app.get("/customers", (req, res) => {
    var cursor = db.collection("customer");
    cursor.find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  // Get a specific CUSTOMER from the server

  app.get("/customer/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("customer").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
        console.log(details);
      } else {
        res.send(item);
      }
    });
  });

  // Delete an CUSTOMER from the server

  app.delete("/customer/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("customer").remove(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send("Customer is deleted!");
      }
    });
  });

  // Update an CUSTOMER on the server.
  app.put("/customer/:id", (req, res) => {
    const id = req.params.id;

    const details = { _id: new ObjectID(id) };

    const customerObject = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      phone: req.body.phone,
      email: req.body.email,
      note: req.body.note,
      birthYear: req.body.birthYear,
      currentWeight: req.body.currentWeight,
      startWeight: req.body.startWeight,
      height: req.body.height,
      appointmentCredit: req.body.appointmentCredit,
      totalPayment: req.body.totalPayment,
      paymentDid: req.body.paymentDid,
      paymentLeft: req.body.paymentLeft
    };

    db.collection("customer").update(details, customerObject, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(customerObject);
      }
    });
  });

};



