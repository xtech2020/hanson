const Conf = require('config');
const mongodb = require("mongodb");
const mongoclient = mongodb.MongoClient;
const connectOption = { useNewUrlParser: true, useUnifiedTopology: true, };

exports.findAll = async function() {
    try {
        var client = await mongoclient.connect(Conf.DB.URL, connectOption);
        const db = client.db(Conf.DB.NAME);
        const collection = db.collection(Conf.DB.COL_LIST);
        const result = await collection.find().toArray();
        return result;
    } catch (err) {
        console.log(err);
    } finally {
        if (client) client.close();
    }
}

exports.findList = async function(name) {
    try {
        var client = await mongoclient.connect(Conf.DB.URL, connectOption);
        const db = client.db(Conf.DB.NAME);
        const collection = db.collection(Conf.DB.COL_LIST);
        const result = await collection.find({name:name}).toArray();
        return result;
    } catch (err) {
        console.log(err);
    } finally {
        if (client) client.close();
    }
}