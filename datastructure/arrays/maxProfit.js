/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let dailyMaxProfit = []
    for(let i = 0; i < prices.length; i++){
        dailyMaxProfit.push(maxProfitOfTheDay(i, prices))
    }
  
  
    let maxProfit = 0
    for(let i = 0; i < dailyMaxProfit.length; i++){
       if(dailyMaxProfit[i] > maxProfit){
           maxProfit = dailyMaxProfit[i]
       }
    }

      return maxProfit
    
    
};

var maxProfitOfTheDay = function(buyDay, prices) {
    
 
    const buyPrice = prices[buyDay]
    let maxProfit = 0
    for(let i = buyDay + 1; i < prices.length; i++){
       let profit = prices[i] - buyPrice
       // console.log(profit)
        if(profit > maxProfit ){
            maxProfit = profit
        }
    }
    return maxProfit
    
};