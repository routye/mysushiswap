//"type": "module",

//import {defaultAbiCoder, keccak256, solidityPack} from "ethers/utils";

//import {ecsign} from "ethereumjs-util";
var config = require('./config')
const BigNumber=require("bignumber.js")
//var constants = require('ethers/constants')

factory()
async function factory(){
    /*
    参数：uint     数组索引
    返回：合约交易对数组对应索引的交易对地址
    作用： 查找指定索引的交易对地址
     */
    //let allPairs = await config.factoryContract.allPairs(1)
    //console.log('',allPairs)

    /*
    参数：null
    返回：合约交易对数组的总长
    作用： 获取总的交易对数量
    * */
    let allPairsLength = await config.factoryContract.allPairsLength()
    console.log('allPairsLength: ',allPairsLength.toString())

    /*
    参数：null
    返回： 地址类型
    作用：接收手续费分红的地址  （不为零地址(默认值)，则代表开关打开，此时会在手续费中分1/6给开发团队）
    * */
    //let feeTo = await config.factoryContract.feeTo()
    //console.log('',feeTo)

    /*
    参数：null
    返回：地址类型
    作用：手续费接收地址的设置人
    * */
    //let feeToSetter = await config.factoryContract.feeToSetter()
    //console.log('',feeToSetter)

    /*
    参数：（address , address） 两种ERC20代币合约的地址
    返回： address    交易对地址
    作用：查询对应交易对地址
    * */
    //let getPair = await config.factoryContract.getPair(config.RRRcontractAddr,config.YYYcontractAddr)
    //console.log('getPair: ',getPair)

    let walletObject =  await  config.wallet(config.accountAddress)
    let contractWithSigner = config.factoryContract.connect(walletObject);

    /*
   参数：新的设置手续的人
   返回：交易祥情
        {
          nonce: 62,
          gasPrice: BigNumber { _hex: '0x7961bfb8' },
          gasLimit: BigNumber { _hex: '0x6ead' },
          to: '0x74E2533847f25f5F91a8C88dF79078f5964d069f',
          value: BigNumber { _hex: '0x00' },
          data: '0xa2e74af600000000000000000000000057729d93b75b78b400c3f2d44b2d62070d97d7da',
          chainId: 3,
          v: 42,
          r: '0x200c2f762208afaf0a242b0657245f2e263a0174c6cb1ae36638afa131bb548e',
          s: '0x411ae0c54171ad3c34b688960a4b9e0b6bb0c14e4f3a6a0f9948bd58fe28cea1',
          from: '0xc500aFF9E4a63A7667F3E6b6efF91Cc9daE7753e',
          hash: '0x5b691efe2a206052eb4349e028b508b74b192a557854bf4dfa76cc4e2cd83739',
          wait: [Function]
        }

   作用：更换可设置手续费的地址的管理员
   * */
    //let setFeeToSetter = await contractWithSigner.setFeeToSetter('0x57729D93B75b78B400c3F2D44B2D62070d97d7DA')
    //console.log('',setFeeToSetter)

    /*
    参数： 接收手续费分红的地址
    返回： 交易详情
    作用： 设置接收手续费分红的地址
    * */
    //let setFeeTo = await contractWithSigner.setFeeTo('0x0000000000000000000000000000000000000000')
    //console.log('',setFeeTo)

    /*
    参数：address tokenA, address tokenB
    返回：交易详情
    作用：创建交易对
    * */
    //let createPair = await contractWithSigner.createPair(config.RRRcontractAddr,config.YYYcontractAddr)
    //console.log('',createPair)
}

































