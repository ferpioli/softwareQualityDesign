const express = require('express')
const auth = require('./auth')

module.exports = function (server) {

    /*
    *Rotas abertas
    */

    const openApi = express.Router()
    server.use('/oapi', openApi)


    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)


    /*
    * Rotas protegidas por token JWT
    */

    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)





    // rotas da API

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(protectedApi, '/billingCycles')

    const billigCycleSummaryService = require('../api/billingSummary/billingSummaryService')
    protectedApi.route('/billingSummary').get(billigCycleSummaryService.getSummary)

}