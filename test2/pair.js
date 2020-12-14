//"type": "module",

var config = require('./config')
var ethers = require('ethers')




RRRYYYtokenpair()
async function RRRYYYtokenpair(){
    /*
        参数：null
        返回：bytes32
        作用：用来在不同Dapp之间区分相同结构和内容的签名消息，该值也有助于用户辨识哪些为信任的Dapp
        * */
    //let DOMAIN_SEPARATOR = await config.pairContract.DOMAIN_SEPARATOR()
    //console.log('DOMAIN_SEPARATOR: ',DOMAIN_SEPARATOR)

    /*
       参数：null
       返回：uint256
       作用：定义了最小流动性
       * */
    //let MINIMUM_LIQUIDITY = await config.pairContract.MINIMUM_LIQUIDITY()
    //console.log('',MINIMUM_LIQUIDITY.toString())

    /*
        参数：null
        返回：bytes32
        作用：根据事先约定使用permit函数的部分定义计算哈希值，重建消息签名时使用。
        * */
    //let PERMIT_TYPEHASH = await config.pairContract.PERMIT_TYPEHASH()
    //console.log('',PERMIT_TYPEHASH)

    /*
        参数：address owner, address spender
        返回：uint
        作用：查询剩余授权额度
        * */
    //let allowance = await config.pairContract.allowance(config.accountAddress,config.routerContractAddr)
    //console.log('tokenpair-allowance: ',ethers.utils.formatEther(allowance.toString()))

    /*
        参数：address
        返回：uint
        作用：返回余额
       * */
    //let balanceOf = await config.pairContract.balanceOf(config.pairContractAddr)
    //console.log('tokenBalance: ',ethers.utils.formatEther(balanceOf.toString()))

    /*
        参数：null
        返回：uint
        作用：返回代币精度
        * */
    //let decimals = await config.pairContract.decimals()
    //console.log('',decimals)

    /*
        参数：null
        返回：address
        作用：返回工厂合约地址
        * */
    //let factory = await config.pairContract.factory()
    //console.log('',factory)

    /*
        参数：null
        返回：(uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)
        作用：用来获取当前交易对的资产信息及最后交易的区块时间
        * */
    /*let getReserves = await config.pairContract.getReserves()
    console.log('reserve0: ',ethers.utils.formatEther(getReserves._reserve0.toString()))
    console.log('reserve1: ',ethers.utils.formatEther(getReserves._reserve1.toString()))
    console.log('blockTimestampLast: ',getReserves._blockTimestampLast.toString())
*/
    /*
        参数：null
        返回：uint
        作用：记录某一时刻恒定乘积中积的值，主要用于开发团队手续费计算。
        * */
    //let kLast = await config.pairContract.kLast()
    //console.log('',kLast.toString())

    /*
        参数：null
        返回：Uniswap V2
        作用：没作用，用不到
        * */
    //let name = await config.pairContract.name()
    //console.log('',name)

    /*
        参数：address
        返回：uint
        作用：每个地址使用链下签名消息交易的nonces，用来防止重放攻击。
        * */
    //let nonces = await config.pairContract.nonces(config.accountAddress)
    //console.log('',nonces.toString())

    /*
        参数：null
        返回：uint256
        作用：记录交易对中第一个代币币种价格的累计值
        * */
    //let price0CumulativeLast = await config.pairContract.price0CumulativeLast()
    //console.log('',price0CumulativeLast.toString())

    /*
        参数：null
        返回：uint256
        作用：记录交易对中第二个代币币种价格的累计值
        * */
    //let price1CumulativeLast = await config.pairContract.price1CumulativeLast()
    //console.log('',price1CumulativeLast.toString())

    /*
        参数：null
        返回："UNI-V2"
        作用：没作用，用不到
        * */
    //let symbol = await config.pairContract.symbol()
    //console.log('',symbol)

    /*
        参数：null
        返回：address
        作用：交易对中第一个代币币种的合约地址
        * */
    //let token0 = await config.pairContract.token0()
    //console.log('token0: ',token0)

    /*
        参数：null
        返回：address
        作用：交易对中第二个代币币种的合约地址
        * */
    //let token1 = await config.pairContract.token1()
    //console.log('',token1)

    /*
        参数：null
        返回：uint256
        作用：当前代币的总供应量，即是已经挖出数量
        * */
    let totalSupply = await config.pairContract.totalSupply()
    console.log('totalSupply: ',ethers.utils.formatEther(totalSupply.toString()))


    let walletObject =  await config.wallet(config.accountAddress)
    let contractWithSigner = config.pairContract.connect(walletObject);



    /*
        参数：(address spender, uint value )
        返回：交易结果
        作用：进行额度授权
        * */
    //let approve = await contractWithSigner.approve(config.routerContractAddr,ethers.utils.parseEther('1000000'))
    //console.log('approve: ',approve)

    /*
        参数：（address to）
        返回：交易详情
        作用：强制交易对合约中两种代币的实际余额和保存的恒定乘积中的资产数量一致
        * */
    //let skim = await contractWithSigner.skim(config.accountAddress)
    //console.log('skim： ',skim)

    /*
        参数：null
        返回：交易详情
        作用：强制保存的恒定乘积的资产数量为交易对合约中两种代币的实际余额
        * */
    //let sync = await contractWithSigner.sync()
    //console.log('sync: ',sync)

    /*
        参数：(address from, address to, uint value)
        返回：交易详情
        作用：代币授权转移函数
        * */
    //let transferFrom = await contractWithSigner.transferFrom(config.accountAddress,'0xc500aFF9E4a63A7667F3E6b6efF91Cc9daE7753e',ethers.utils.parseEther('10'))
    //console.log('transferFrom: ',transferFrom)

    /*
        参数：(address to, uint value)
        返回：交易详情
        作用：代币转移函数,可将交易对中的份额进行转移
        * */
    //let transfer = await contractWithSigner.transfer(config.pairContractAddr,ethers.utils.parseEther('100'))
    //console.log('transfer: ',transfer)

    /*
        参数：(address to)
        返回：交易详情
        作用：增加流动性时，增加其份额
        * */
    //let mint = await contractWithSigner.mint(config.accountAddress)
    //console.log('mint: ',mint)

    /*
        参数：(address to)
        返回：交易详情
        作用：通过燃烧流动性代币的形式来提取相应的两种资产，从而减小该交易对的流动性
        * */
    //let burn = await contractWithSigner.burn(config.accountAddress)
    //console.log('burn: ',burn)

    /*-----------------------------------------------
            参数：(uint amount0Out, uint amount1Out, address to, bytes calldata data))
                四个参数，分别为购买的token0的数量，购买的token1的数量，接收者地址，接收后执行回调时的传递数据
            返回：交易详情
            作用：代币转移函数,可将交易对中的份额进行转移
            * */

    //let swap = await contractWithSigner.swap(ethers.utils.parseEther('400'),0,config.accountAddress, [])
    //console.log('swap: ',swap)

    /*
        参数：(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s)
        返回：交易详情
        作用：使用线下签名消息进行授权操作
        * */
    //let permit = await contractWithSigner.permit()
    //console.log('permit: ',permit)

}


























