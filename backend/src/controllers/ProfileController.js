const connection = require('./../database/connection');

module.exports = {
    async index(req, res) {
        const { authorization: ong_id } = req.headers;

        const incidents = await connection('incidents')
        .select('*')
        .where('ong_id', ong_id);

        return res.json(incidents);
    }
}