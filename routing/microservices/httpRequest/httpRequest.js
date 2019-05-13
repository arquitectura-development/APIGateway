const apiAdapter = require('../../apiAdapter')

module.exports = {
    request: (req, res, BASE_URL, method)=>{
        const api = apiAdapter(BASE_URL, method)
        console.log("makin' request to ", BASE_URL + req.path + "?userId=" + req.query.userId)
        api(req.path +  "?userId=" + req.query.userId, req.body ).then((resp) => {
            console.log("data", resp.data)
            res.send(resp.data)
        }).catch(error =>{
            console.log("error", error.response.status)
            res.sendStatus(error.response.status)
        })
    }
}