let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let system = require("../../system");

/* GET api list. */
router.get('/', /*system.validateAuthentication,*/ function(req, res, next) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "masterkey",
        database: "dbtodolist"
    });

    con.connect(function(err) {
        try {
            if (err) throw err;
            let fdUserID = req.query.fdUserID;
            let sql = "SELECT * FROM tblListItem WHERE fdUserID = ?";
            con.query(sql, [fdUserID],
                function (err, result) {
                    if (err) throw err;
                    res.status(200).send(result).end();
                });
        }catch (e) {
            res.status(401).json({message: e.message});
        }
    });
});

module.exports = router;