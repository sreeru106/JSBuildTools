var express=require("express"),router=express.Router(),MongoClient=require("mongodb").MongoClient,assert=require("assert"),ObjectId=require("mongodb").ObjectID,url="mongodb://localhost:27017/test";router.post("/",function(e,o,t){MongoClient.connect(url,function(e,o){assert.equal(null,e),n(o,function(){o.close()})});var n=function(t,n){t.collection("employee").insertOne({details:{name:e.body.name,id:e.body.id,desg:e.body.dese}},function(e,t){assert.equal(e,null),console.log("Inserted a document into the employee collection."),o.render("success",{title:"Employee registration"}),n()})}}),module.exports=router;