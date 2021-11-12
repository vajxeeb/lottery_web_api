
const { Connection } = require('pg')
const connection = require('../DBConfig/connection')
const logger = require('../LogConfig/logger')
let branch = require('../models/branch.model')
const process = require('../Processes')

//............CREATE.................//
exports.Create = async (req, res) => {
    branch = req.body

    //.....Get date now.........//
    let date_ob = new Date();
    let _date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    const date = year + '-' + month + '-' + _date

    SQL = `SELECT * FROM public.tbl_branch_code WHERE branch_id =$1`

    await connection.query(SQL, [branch.branch_id], (error, results) => {

        if (error) logger.error(error)
        if (results.rowCount > 0) {
            res.status(403).send({ message: 'ສາຂານີ້ມີ້ຢູ່ໃນລະບົບແລ້ວ' })
        }
        else {
            
            SQL = `INSERT INTO public.tbl_branch_code (branch_id, create_by, create_date, phone, branch_name)
                                    VALUES ($1, $2, $3, $4, $5)`
                process.POST(
                    res,
                    'POST/api/branch',
                    req.body,
                    SQL,
                    [branch.branch_id, branch.create_by, date, branch.phone, branch.branch_name]
                )

        }
    })
}
//............PUT.................//
exports.Update = async (req, res) => {

    branch_id = req.body

    logger.info('PUT/api/branch')
    logger.info(req.body)

    SQL = `UPDATE tbl_branch_code SET phone = $1, branch_name = $2 WHERE branch_id = $3`

    await connection.query(SQL, [branch.phone, branch.branch_name, branch.branch_id], (error, results) => {
        if(error) {
            logger.error(error)
            res.status(403).send({error: error})
        }
        else {
            res.send({message: "Updated"})
        }
    })
}

//............DELETE.................//

exports.Delete = async (req, res) => {
    branch = req.params

    SQL = `DELETE FROM public.tbl_branch_code WHERE branch_id = $1`

    process.DELETE(
        res,
        'DELETE/api/branch/'+branch.branch_id,
        '',
        SQL,
        [branch.branch_id],
    )
}

//............GET................./
exports.Get = async (req, res) => {

    SQL = `SELECT * FROM public.tbl_branch_code `

    process.GET(
        res,
        'GET/api/branch',
        '',
        SQL,
        '',
    )
}


