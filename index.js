// Code your solution in this file!
const logDriverNames = function (drivers){
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function (driver){
    if (driver.hometown === hometown){
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function(drivers){
  let newArray = [...drivers];
  newArray.sort(function (driverone, drivertwo){
    return (driverone.revenue - drivertwo.revenue)
  })
  return newArray
}

const driversByName = function(drivers){
  let newArray = [...drivers];
  newArray.sort(function (driverone, drivertwo){
    return driverone.name.localeCompare(drivertwo.name)
  })
  return newArray
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(total, driver){
    return driver.revenue + total;
  }, 0);
}

const averageRevenue = function(drivers){
  // debugger
  return (totalRevenue(drivers) / drivers.length)
}
