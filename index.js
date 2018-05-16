// Code your solution in this file!
function callBack(el) {console.log(el.name)}


function logDriverNames(arr) {
  arr.forEach(callBack)
}

 function logDriversByHometown(drivers, town) {
   drivers.forEach(function(driver){
     if(driver.hometown === town){
       console.log(driver.name);
     }
   })
 }

function driversByRevenue(drivers){
  return drivers.slice().sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(driver1, driver2){
    return (driver1.name).localeCompare(driver2.name)
  })
}

const summer = function (acc, value) {
  console.log(value.revenue)
  return acc + value.revenue
}

function totalRevenue(drivers){
  return drivers.reduce(summer, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
