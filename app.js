
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.static("Public"))
let items=[];
let workItems=[];
app.get("/", function(req,res){
    let today = new Date();

let options = {
    weekday:"long", day:"numeric", month:"long"
};
let day = today.toLocaleDateString("en-US", options)

res.render("list", {listTitle: day, newListItems: items, route:"/"})

});

app.post("/", function(req,res) {
    items.push(req.body.task);
    res.redirect("/");
});

app.get("/work", function(req,res) {
    res.render("list", {listTitle:"Work Tasks", newListItems:workItems,route:"/work"});
});

app.post("/work", function(req,res) {
    let item = req.body.task;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000,function(){
    console.log("Server started on port 3000")
});