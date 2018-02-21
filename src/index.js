module.exports = function makeExchange(currency) {
// Return an object containing the minimum number of coins needed to make change
let sum = {}
if (!currency) return sum;
if (currency > 10000) return  {error: "You are rich, my friend! We don't have so much coins for exchange"};


const money = {
  'H': 50,
  'Q': 25,
  'D': 10,
  'N': 5,
  'P': 1
}

for (let i = 1; currency >= money['H']; i++)  {
  currency = currency - money['H'];
  sum[Object.keys(money)[0]] = i;
}

for (let i = 1; currency >= money['Q']; i++)  {
  currency = currency - money['Q'];
  sum[Object.keys(money)[1]] = i;
}

for (let i = 1; currency >= money['D']; i++)  {
  currency = currency - money['D'];
  sum[Object.keys(money)[2]] = i;
}

for (let i = 1; currency >= money['N']; i++)  {
  currency = currency - money['N'];
  sum[Object.keys(money)[3]] = i;
}

for (let i = 1; currency >= money['P']; i++)  {
  currency = currency - money['P'];
  sum[Object.keys(money)[4]] = i;
}


return sum;

}
