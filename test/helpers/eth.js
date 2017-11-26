const Eth = require('ethjs')
const eth = new Eth(new Eth.HttpProvider('http://localhost:8546'))
export default eth
