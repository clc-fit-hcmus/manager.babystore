const config = require('../../config/dbconfig');
const sql = require('mssql');

const sumOrders = async () => {
    const month = (m = new Date().getMonth() + 1) == 1 ? 12 : m - 1;
    const year = (month == 12) ? new Date().getFullYear() - 1 : new Date().getFullYear();
    const pool = await sql.connect(config);
    const res = await pool.request().query(`EXEC SODONHANGTRONGTHANG ${month}, ${year}`);
    return res.recordset;
}

const sumImporting = async () => {
    const month = (m = new Date().getMonth() + 1) == 1 ? 12 : m - 1;
    const year = (month == 12) ? new Date().getFullYear() - 1 : new Date().getFullYear();
    const pool = await sql.connect(config);
    const res = await pool.request().query(`EXEC SOLANNHAPHANGTRONGTHANG ${month}, ${year}`);
    return res.recordset;
}

const sumCustomers = async () => {
    const month = (m = new Date().getMonth() + 1) == 1 ? 12 : m - 1;
    const year = (month == 12) ? new Date().getFullYear() - 1 : new Date().getFullYear();
    const pool = await sql.connect(config);
    const res = await pool.request().query(`EXEC SOKHACHHANGTRONGTHANG ${month}, ${year}`);
    return res.recordset;
}

const getRevenue = async () => {
    const month = (m = new Date().getMonth() + 1) == 1 ? 12 : m - 1;
    const year = (month == 12) ? new Date().getFullYear() - 1 : new Date().getFullYear();
    const pool = await sql.connect(config);
    const res = await pool.request().query(`EXEC DOANHTHUTRONGTHANG ${month}, ${year}`);
    return res.recordset;
}

module.exports = {
    getRevenue,
    sumCustomers,
    sumImporting,
    sumOrders
}