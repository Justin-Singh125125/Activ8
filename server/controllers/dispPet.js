var db = require("../db/models");

module.exports = {
    filterPet: function (req, res) {
        db.Petition
            .find(req.query)
        db.Petition.find({
            keyword: req.params.id
        }).then((petition) => {
            console.log(`This is the charity response \n ${petition}`);
            res.json(petition);
        })
    }
}