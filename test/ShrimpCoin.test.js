/* global describe test expect beforeEach beforeAll */

import eth from './helpers/eth'
import { getShrimpCoin } from 'helpers/contracts'

/*
TODO: need to get this working with ethjs instead of web3
import lkTestHelpers from 'lk-test-helpers'
const { increaseTime, latestTime } = lkTestHelpers(web3)
*/

describe('ShrimpCoin', () => {
  let ShrimpCoin, accounts, shrmp

  beforeAll(async () => {
    ShrimpCoin = await getShrimpCoin()
    accounts = await eth.accounts()
    console.log('accounts: ', accounts)
  })

  beforeEach(async () => {
    shrmp = await ShrimpCoin.new()
  })

  test('should have a shrimpy symbol', async () => {
    const res = await shrmp.SYMBOL()
    expect(res[0]).toBe('SHRMP')
  })
})
