const express = require('express')

module.exports = function (server) {

    /*
    *Rotas abertas
    */

    const openApi = express.Router()
    server.use('/oapi', openApi)


    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('signup', AuthService.signup)
    openApi.post('validateToken', AuthService.validateToken)


    /*
    * Rotas protegidas por token JWT
    */

    const protectedApi = express.Router()
    server.user('/api', protectedApi)

    protectedApi.use(auth)





    // rotas da API

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    const billigCycleSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billigCycleSummaryService.getSummary)

}