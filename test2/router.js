//"type": "module",

//import {defaultAbiCoder, keccak256, solidityPack} from "ethers/utils";

//import {ecsign} from "ethereumjs-util";

var util = require('ethereumjs-util')
var config = require('./config')
var ethers = require('ethers')



router().then(r=>{}).catch(error => {console.log('error: ',error)})
async function router(){
    /*
    参数：NULL
    返回：address    WETH的地址
    * */
    //let WETH = await config.routerContract.WETH()
    //console.log('',WETH)

    /*
   参数：null
   返回：address
   作用： 返回工厂合约地址
   * */
    //let factory = await config.routerContract.factory()
    //console.log('',factory)

    /*
   参数：(uint amountOut, uint reserveIn, uint reserveOut)
   返回： uint  卖出的A资产的数量
   作用：A/B交易对中买进B资产，计算卖出的A资产的数量  扣除了千之分三的交易手续费
         A0 = A * B0 * 1000 / (( B - B0 ) * 997)
   * */
    //let getAmountIn = await config.routerContract.getAmountIn(100,1000,2000)
    //console.log('',getAmountIn.toString())

    /*
    参数：(uint amountIn, uint reserveIn, uint reserveOut)
    返回：uint  买进的B资产的数量
    作用：A/B交易对中卖出A资产，计算买进的B资产的数量。注意，卖出的资产扣除了千之分三的交易手续费
         B0 = 997 * A0 * B / (1000 * A + 997 * A0 )
    * */
    //let getAmountOut = await config.routerContract.getAmountOut(100,1000,2000)
    //console.log('',getAmountOut.toString())

    /*
       参数：( uint amountOut, address[] memory path)
       返回： uint[]  amounts
       作用：计算链式交易中买进某资产，需要卖出的中间资产和初始资产数量。
            例如 A/B => B/C 买进C，得到AB的数量
       * */
    /*let getAmountsIn = await config.routerContract.getAmountsIn(888,['0xdac17f958d2ee523a2206206994597c13d831ec7','0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2','0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'])
    for(var i=0;i<getAmountsIn.length;i++){
        console.log('',getAmountsIn[i].toString())
    }*/

    /*
        参数：(uint amountIn, address[] memory path)
        返回：uint[]  amounts
        作用：计算链式交易中卖出某资产，得到的中间资产和最终资产的数量。
             例如 A/B => B/C 卖出A，得到BC的数量。
        * */
    /*let getAmountsOut = await config.routerContract.getAmountsOut(888,['0xdac17f958d2ee523a2206206994597c13d831ec7','0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2','0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'])
    for(var i=0;i<getAmountsOut.length;i++){
        console.log('',getAmountsOut[i].toString())
    }*/


    /*
       参数：(uint amountA, uint reserveA, uint reserveB)
       返回：uint amountB
       作用：根据比例由一种资产计算另一种资产的值,B =  amountA.mul(reserveB) / reserveA;
       * */
    //let quote = await config.routerContract.quote(10,50,90)
    //console.log('',quote.toString())




    let walletObject =  await config.wallet(config.accountAddress)
    let contractWithSigner = config.routerContract.connect(walletObject);


    /*
        参数：(address tokenA,address tokenB,uint amountADesired, uint amountBDesired,
              uint amountAMin,uint amountBMin,address to,uint deadline)
              //8个输入参数分别为交易对中两种代币的地址，计划注入的两种代币数量和
              //注入代币的最小值（否则重置）,接收增发流动性的地址，交易最晚时间。
        返回：(uint amountA, uint amountB)
             返回值为优化过的实际注入的代币数量。
        作用：提供流动性
        * */
    /*let addLiquidity = await contractWithSigner.addLiquidity(config.YYYcontractAddr,config.RRRcontractAddr,
         ethers.utils.parseEther('1000'),ethers.utils.parseEther('1702'),ethers.utils.parseEther('100'),ethers.utils.parseEther('100'),config.accountAddress,1805272187)
     console.log('addLiquidity: ',addLiquidity)
 */

    /*
       参数：( address token,uint amountTokenDesired,uint amountTokenMin,
                uint amountETHMin,address to,uint deadline )
       返回：交易详情
       作用：一种初始注入资产为ETH,本函数的参数和addLiquidity函数的参数相比，只是将其中一种代币换成了ETH。
       * */
    /*let addLiquidityETH = await contractWithSigner.addLiquidityETH(config.YYYcontractAddr, ethers.utils.parseEther('62.63'),
                        ethers.utils.parseEther('0.1'),ethers.utils.parseEther('0.001'),
                        config.accountAddress,1705272187,{value:ethers.utils.parseEther('0.1')})
    console.log('addLiquidityETH: ',addLiquidityETH)
*/


    /*
       参数：(address tokenA,address tokenB, uint liquidity,
             uint amountAMin,uint amountBMin,address to, uint deadline )
       返回：交易详情
       作用：移除（燃烧）流动性（代币），从而提取交易对中注入的两种代币。
       * */
    /* let removeLiquidity = await contractWithSigner.removeLiquidity(config.YYYcontractAddr,config.RRRcontractAddr, ethers.utils.parseEther('142'),
                         ethers.utils.parseEther('0.001'),ethers.utils.parseEther('0.001'),
                         config.accountAddress,1905272187)
     console.log('removeLiquidity: ',removeLiquidity)
 */

    /*
      参数： (address token,uint liquidity,uint amountTokenMin,
           uint amountETHMin, address to,uint deadline)
      返回：交易详情
      作用：移除（燃烧）流动性（代币），从而提取交易对中注入的两种代币。
            执行前需要代币授权
      * */

    /* let removeLiquidityETH = await contractWithSigner.removeLiquidityETH(config.YYYcontractAddr,ethers.utils.parseEther('16'),
                 ethers.utils.parseEther('0.001'),ethers.utils.parseEther('0.0001'),
                 config.accountAddress,1905272187)
     console.log('removeLiquidityETH: ',removeLiquidityETH)
 */

    /*
      参数： (address token,uint liquidity,uint amountTokenMin,
           uint amountETHMin, address to,uint deadline)
      返回：交易详情
      作用：移除（燃烧）流动性（代币），从而提取交易对中注入的两种代币。
            从函数名字中可以看到，它支持使用转移的代币支付手续费（支持包含此类代币交易对）。
      * */
    /*let removeLiquidityETHSupportingFeeOnTransferTokens = await contractWithSigner.removeLiquidityETHSupportingFeeOnTransferTokens(config.YYYcontractAddr,ethers.utils.parseEther('10'),
                ethers.utils.parseEther('0.001'),ethers.utils.parseEther('0.0001'),
                config.accountAddress,1905272187)
    console.log('removeLiquidityETHSupportingFeeOnTransferTokens: ',removeLiquidityETHSupportingFeeOnTransferTokens)
*/



    /*
     参数： (address tokenA,address tokenB,uint liquidity,uint amountAMin,
        uint amountBMin,address to,uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s)
     返回：交易详情
     作用：  同样也是移除流动性，同时提取交易对资产池中的两种ERC20代币。
            它和removeLiquidity函数的区别在于本函数支持使用线下签名消息来进行授权验证，
            从而不需要提前进行授权（这样会有一个额外交易），授权和交易均发生在同一个交易里。
            将下面的false设置为true，是授权最大的额度，这样以后不需要每次都授权，可以节省手续费
     * */
    /*
        let DOMAIN_SEPARATOR = await config.pairContract.DOMAIN_SEPARATOR()
        //console.log('DOMAIN_SEPARATOR: ',DOMAIN_SEPARATOR)
        let nonces = await config.pairContract.nonces(config.accountAddress)
        //console.log('',nonces.toString())
        let PERMIT_TYPEHASH = await config.pairContract.PERMIT_TYPEHASH()
        //console.log('',PERMIT_TYPEHASH)
        const digest = await getApprovalDigest(DOMAIN_SEPARATOR,PERMIT_TYPEHASH,
            config.accountAddress,config.routerContractAddr,ethers.constants.MaxUint256,nonces,1905272187)
        //console.log('digest',digest)
        const { v, r, s } = util.ecsign(Buffer.from(digest.slice(2), 'hex'), Buffer.from(walletObject.privateKey.slice(2), 'hex'))

        let removeLiquidityWithPermit = await contractWithSigner.removeLiquidityWithPermit(config.YYYcontractAddr,config.RRRcontractAddr,ethers.utils.parseEther('150'),
                    ethers.utils.parseEther('0.001'),ethers.utils.parseEther('0.0001'),
                    config.accountAddress,1905272187,true,v,r,s)
        console.log('removeLiquidityWithPermit: ',removeLiquidityWithPermit)
    */



    /*
        参数： (address token,uint liquidity,uint amountTokenMin,
           uint amountETHMin,address to,uint deadline,
           bool approveMax, uint8 v, bytes32 r, bytes32 s)
        返回：交易详情
        作用：同样也是移除流动性，同时提取交易对资产池中的两种ERC20代币。
            它和removeLiquidity函数的区别在于本函数支持使用线下签名消息来进行授权验证，
            从而不需要提前进行授权（这样会有一个额外交易），授权和交易均发生在同一个交易里。
             功能同removeLiquidityWithPermit类似，只不过将最后提取的资产由TOKEN变为ETH。
        * */


    /*  let DOMAIN_SEPARATOR = await config.ethYYYPairContract.DOMAIN_SEPARATOR()
      //console.log('DOMAIN_SEPARATOR: ',DOMAIN_SEPARATOR)
      let nonces = await config.ethYYYPairContract.nonces(config.accountAddress)
      //console.log('',nonces.toString())
      let PERMIT_TYPEHASH = await config.ethYYYPairContract.PERMIT_TYPEHASH()
      //console.log('',PERMIT_TYPEHASH)
      const digest = await getApprovalDigest(DOMAIN_SEPARATOR,PERMIT_TYPEHASH,
          config.accountAddress,config.routerContractAddr,ethers.constants.MaxUint256,nonces,1905272187)
      //console.log('digest',digest)
      const { v, r, s } = util.ecsign(Buffer.from(digest.slice(2), 'hex'), Buffer.from(walletObject.privateKey.slice(2), 'hex'))

    let removeLiquidityETHWithPermit = await contractWithSigner.removeLiquidityETHWithPermit(config.YYYcontractAddr,ethers.utils.parseEther('5'),
                ethers.utils.parseEther('0.001'),ethers.utils.parseEther('0.0001'),
                config.accountAddress,1905272187,true,v,r,s)
    console.log('removeLiquidityETHWithPermit: ',removeLiquidityETHWithPermit)
*/


    /*
      参数： (address token,uint liquidity,uint amountTokenMin,
         uint amountETHMin,address to,uint deadline,
         bool approveMax, uint8 v, bytes32 r, bytes32 s)
      返回：交易详情
      作用：同样也是移除流动性，同时提取交易对资产池中的两种ERC20代币。
          它和removeLiquidity函数的区别在于本函数支持使用线下签名消息来进行授权验证，
          从而不需要提前进行授权（这样会有一个额外交易），授权和交易均发生在同一个交易里。
           移除流动性，同时支持使用链下签名消息授权和使用转移代币支付手续费
      * */
    /*

        let DOMAIN_SEPARATOR = await config.ethYYYPairContract.DOMAIN_SEPARATOR()
        //console.log('DOMAIN_SEPARATOR: ',DOMAIN_SEPARATOR)
        let nonces = await config.ethYYYPairContract.nonces(config.accountAddress)
        //console.log('',nonces.toString())
        let PERMIT_TYPEHASH = await config.ethYYYPairContract.PERMIT_TYPEHASH()
        //console.log('',PERMIT_TYPEHASH)
        const digest = await getApprovalDigest(DOMAIN_SEPARATOR,PERMIT_TYPEHASH,
            config.accountAddress,config.routerContractAddr,ethers.constants.MaxUint256,nonces,1905272187)
        //console.log('digest',digest)
        const { v, r, s } = util.ecsign(Buffer.from(digest.slice(2), 'hex'), Buffer.from(walletObject.privateKey.slice(2), 'hex'))

        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = await contractWithSigner.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(config.YYYcontractAddr,ethers.utils.parseEther('5'),
            ethers.utils.parseEther('0.001'),ethers.utils.parseEther('0.0001'),
            config.accountAddress,1905272187,true,v,r,s)
        console.log('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: ',removeLiquidityETHWithPermitSupportingFeeOnTransferTokens)
    */


    /*
       参数：(uint amountIn,uint amountOutMin,address[] calldata path,
                address to,uint deadline)
           参数分别为卖出的初始资产数量，买进的另一种资产的最小值，交易对链，
           接收者地址和最迟交易时间
       返回：交易详情
       作用：指定卖出固定数量的某种资产，买进另一种资产,
            同时支持交易对链（也就是上面讲到的 A => B => C模式)
       * */
    /*
    let swapExactTokensForTokens = await contractWithSigner.swapExactTokensForTokens(ethers.utils.parseEther('1000'),ethers.utils.parseEther('100'),
                         [config.RRRcontractAddr,config.YYYcontractAddr],config.accountAddress,1605272187)
    console.log('swapExactTokensForTokens: ',swapExactTokensForTokens)
*/
    /*
       参数：(uint amountIn,uint amountOutMin,address[] calldata path,
                address to,uint deadline)
           拟买进的资产的数量,指定卖入资产的最大值，交易对链，
           接收者地址和最迟交易时间
       返回：交易详情
       作用：指定卖出固定数量的某种资产，买进另一种资产,
            同时支持交易对链（也就是上面讲到的 A => B => C模式)
       * */

    //let swapTokensForExactTokens = await contractWithSigner.swapTokensForExactTokens(ethers.utils.parseEther('1000'),ethers.utils.parseEther('10000'),
    //    [config.RRRcontractAddr,config.YYYcontractAddr],config.accountAddress,1605272187)
    //console.log('swapTokensForExactTokens: ',swapTokensForExactTokens)

    /*
       参数：(uint amountOutMin, address[] calldata path, address to, uint deadline)
       返回：交易详情
       作用：同swapExactTokensForTokens类似，只不过将初始卖出的Token换成了ETH
       * */
    //let swapExactETHForTokens = await contractWithSigner.swapExactETHForTokens( ethers.utils.parseEther('40'),
    //       [config.WETHAddressRopsten,config.YYYcontractAddr],config.accountAddress,1645272187,{value:ethers.utils.parseEther('0.1')})
    //console.log('swapExactETHForTokens: ',swapExactETHForTokens)


    /*
       参数：(uint amountOut, address[] calldata path, address to, uint deadline)
       返回：交易详情
       作用：卖出一定数量的ETH，买进指定数量的资产（TOKEN）
       * */
    //let swapETHForExactTokens = await contractWithSigner.swapETHForExactTokens(ethers.utils.parseEther('4'),
    //           [config.WETHAddressRopsten,config.YYYcontractAddr],config.accountAddress,1645272187,{value:ethers.utils.parseEther('0.1')})
    //console.log('swapETHForExactTokens: ',swapETHForExactTokens)


    /*
       参数：(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
       返回：交易详情
       作用：同``swapExactTokensForTokens函数类似，只不过将最后获取的ERC20代币改成ETH了
       * */
    //let swapExactTokensForETH = await contractWithSigner.swapExactTokensForETH(ethers.utils.parseEther('5'),ethers.utils.parseEther('0.00001'),
    //                         [config.YYYcontractAddr,config.WETHAddressRopsten],config.accountAddress,1705272187)
    //console.log('swapExactTokensForETH: ',swapExactTokensForETH)


    /*
       参数：(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
       返回：交易详情
       作用：同swapTokensForExactTokens类似，只不过指定买进的不是Token（ERC20代币），而是ETH。
       * */
    //let swapTokensForExactETH = await contractWithSigner.swapTokensForExactETH(ethers.utils.parseEther('0.01'),ethers.utils.parseEther('100'),
    //    [config.YYYcontractAddr,config.WETHAddressRopsten],config.accountAddress,1705272187)
    //console.log('swapTokensForExactETH: ',swapTokensForExactETH)

    /*
       参数：(uint amountOutMin,address[] calldata path,address to,uint deadline)
       返回：交易详情
       作用：和_swap函数的区别是支持使用转移的代币支付手续费
            从名称上看，它和swapExactTokensForTokens函数相同，只不过多了支持FeeOnTransferTokens。
       * */
    /*let swapExactETHForTokensSupportingFeeOnTransferTokens = await contractWithSigner.swapExactETHForTokensSupportingFeeOnTransferTokens(ethers.utils.parseEther('0.01'),
        [config.WETHAddressRopsten,config.YYYcontractAddr],config.accountAddress,1705272187,{value:ethers.utils.parseEther('0.01')})
    console.log('swapExactETHForTokensSupportingFeeOnTransferTokens: ',swapExactETHForTokensSupportingFeeOnTransferTokens)
*/

    /*
      参数：(uint amountIn,uint amountOutMin,address[] calldata path,address to,uint deadline)
      返回：交易详情
      作用：就是卖出指定数量的初始TOKEN，最后得到一定数量的ETH，同时支持使用转移的代币支付手续费。
      * */
    /*let swapExactTokensForETHSupportingFeeOnTransferTokens = await contractWithSigner.swapExactTokensForETHSupportingFeeOnTransferTokens(ethers.utils.parseEther('10'),
                ethers.utils.parseEther('0.01'),[config.YYYcontractAddr,config.WETHAddressRopsten],config.accountAddress,1705272187)
    console.log('swapExactTokensForETHSupportingFeeOnTransferTokens: ',swapExactTokensForETHSupportingFeeOnTransferTokens)
*/

    /*
         参数：(uint amountIn,uint amountOutMin,address[] calldata path,address to,uint deadline)
         返回：交易详情
         作用：从名称上看，它和swapExactTokensForTokens函数相同，只不过多了支持FeeOnTransferTokens，支持使用转移的代币支付手续费。
         * */
    /*  let swapExactTokensForTokensSupportingFeeOnTransferTokens = await contractWithSigner.swapExactTokensForTokensSupportingFeeOnTransferTokens(ethers.utils.parseEther('1000'),
          ethers.utils.parseEther('1200'),[config.YYYcontractAddr,config.RRRcontractAddr],config.accountAddress,1705272187)
      console.log('swapExactTokensForTokensSupportingFeeOnTransferTokens: ',swapExactTokensForTokensSupportingFeeOnTransferTokens)
  */


}































