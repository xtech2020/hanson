const _dbModel = require("./common/_dbModel");

exports.exec = async function (req, res, next) {
    const result = await _dbModel.findList(req.body.name);
    res.send(result);
};