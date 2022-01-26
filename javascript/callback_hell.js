let stocks = {
  fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocalte', 'peanuts']
};

let order = (call_proudction)=> {call_proudction()};

let production = () => {
  setTimeout(()=>{
    console.log('production has started');
      setTimeout(()=>{
        console.log('fruit has been chopped');
          setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);
              setTimeout(()=>{
                console.log('Machine has been started');
                  setTimeout(()=>{
                    console.log(`Ice cream has been placed on ${stocks.holder[1]}`);
                      setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} as toppings`);
                          setTimeout(()=>{
                            console.log('serve Ice Cream');
                          }, 2000);
                      }, 3000);
                  }, 2000);
              }, 1000);
          }, 1000);
      }, 2000);
  }, 0000);
};

order(production);