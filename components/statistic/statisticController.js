const { sumOrders, sumImporting, sumCustomers, getRevenue } = require('./statisticService');

const statistic = async (req, res) => {
    try {
        let donhang = 0;
        let nhaphang = 0;
        let khachhang = 0;
        let doanhthu = 0;
        await sumOrders().then((oders) => donhang = oders[0].SODONHANG);
        await sumImporting().then((importing) => nhaphang = importing[0].SOLANNHAPHANG);
        await sumCustomers().then((customers) => khachhang = customers[0].SOKHACHHANG);
        await getRevenue().then((revenue) => doanhthu = Math.ceil(revenue[0].DOANHTHU / 1000000));

        res.render('statistic/statistic', { donhang, nhaphang, khachhang, doanhthu });
    } catch (error) {
        console.log("====" + error);
        res.status(409).json({success: false, data: [], error: error});
    }
}

module.exports = {
    statistic
}