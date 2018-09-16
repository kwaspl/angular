const path = require('path')
const fs = require('fs')
const solc = require('solc')

var input = {
	'Inbox.sol': fs.readFileSync(path.resolve(__dirname,'contracts','Inbox.sol'), 'utf-8'),
	'Lottery.sol': fs.readFileSync(path.resolve(__dirname,'contracts','Lottery.sol'), 'utf-8'),
	'MultiSig2of3.sol': fs.readFileSync(path.resolve(__dirname,'contracts','MultiSig2of3.sol'), 'utf-8')
}

var compiled = solc.compile({ sources: input }, 1);

module.exports = compiled
