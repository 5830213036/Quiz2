var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { name: 'John', address: 'Highway 71', role: "admin"},
    { name: 'Peter', address: 'Lowstreet 4', role: "users"},
    { name: 'Amy', address: 'Apple st 652', role: "users"},
    { name: 'Hannah', address: 'Mountain 21', role: "users"},
    { name: 'Michael', address: 'Valley 345', role: "users"},
    { name: 'Sandy', address: 'Ocean blvd 2', role: "users"},
    { name: 'Betty', address: 'Green Grass 1', role: "users"},
    { name: 'Richard', address: 'Sky st 331', role: "users"},
    { name: 'Susan', address: 'One way 98', role: "users"},
    { name: 'Vicky', address: 'Yellow Garden 2', role: "users"},
    { name: 'Ben', address: 'Park Lane 38', role: "users"},
    { name: 'William', address: 'Central st 954', role: "users"},
    { name: 'Chuck', address: 'Main Road 989', role: "users"},
    { name: 'Viola', address: 'Sideway 1633', role: "users"}
  ];
  db.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});