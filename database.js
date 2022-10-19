var Datastore = require("nedb");
var db = new Datastore({ filename: "datafile", autoload: true });

var doc = [
  {
    name: "Satish",
    phone: "9999999",
    dob: "14/07/2002",
    month: "July",
  },
  {
    name: "Akhila",
    phone: "9999999",
    dob: "10/12/2001",
    month: "December",
  },
  {
    name: "Navya",
    phone: "9999999",
    dob: "19/05/2002",
    month: "May",
  },
];

db.insert(doc, function (err, newDoc) {
  console.log("inserted succefully");
});
