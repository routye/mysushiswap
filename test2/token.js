

var util = require('ethereumjs-util')
var config = require('./config')
var ethers = require('ethers')


ethYYYPairContract()
async function ethYYYPairContract(){
    /*
      参数：(address _owner, address _spender)
      返回：uint256
      作用：
      * */
    //let allowance = await config.ethYYYPairContract.allowance(config.accountAddress,config.routerContractAddr)
    //console.log('ethYYYPaircontract-allowance: ',ethers.utils.formatEther(allowance.toString()))


    let walletObject =  await config.wallet(config.accountAddress)
    let contractWithSigner = config.ethYYYPairContract.connect(walletObject);

    /*
      参数：(address _spender, uint256 _value)
      返回：
      作用：
      * */
    //let approve = await contractWithSigner.approve(config.routerContractAddr,ethers.utils.parseEther('10000'))
    //console.log('ethYYYPaircontract-approve: ',approve)

}


RRRcontract()
async function RRRcontract() {
    /*
       参数：(address _owner)
       返回：uint256
       作用：查询余额
       * */
    let balanceOf = await config.RRRContract.balanceOf(config.pairContractAddr)
    console.log('RRRcontract-balanceOf: ',ethers.utils.formatEther(balanceOf.toString()))


    /*
       参数：(address _owner, address _spender)
       返回：uint256
       作用：
       * */
    //let allowance = await config.RRRContract.allowance(config.accountAddress,config.routerContractAddr)
    //console.log('RRRcontract-allowance: ',ethers.utils.formatEther(allowance.toString()))

    let walletObject =  await config.wallet(config.accountAddress)
    let RRRcontractWithSigner = config.RRRContract.connect(walletObject);


    /*
       参数：(address _owner, address uint256)
       返回：交易详情
       作用：代币转账
       * */
    //let r =await RRRcontractWithSigner.transfer(config.pairContractAddr,ethers.utils.parseEther("1"))
    //console.log('RRRcontract-transfer: ',r)

    /*
          参数：(address _owner, address uint256)
          返回：交易详情
          作用：代币转账
          * */
    //let r =await RRRcontractWithSigner.transfer('0xc500aFF9E4a63A7667F3E6b6efF91Cc9daE7753e',ethers.utils.parseEther("100"))
    //console.log('RRRcontract-transfer: ',r)

}
YYYcontract()
async function YYYcontract() {
    /*
      参数：(address _owner)
      返回：uint256
      作用：查询余额
      * */
    //let balanceOf = await config.YYYContract.balanceOf(config.pairContractAddr)
    //console.log('YYYcontract-balanceOf: ',ethers.utils.formatEther(balanceOf.toString()))



    //let allowance = await config.YYYContract.allowance(config.accountAddress,config.routerContractAddr)
    //console.log('YYYcontract-allowance: ',ethers.utils.formatEther(allowance.toString()))
}






























