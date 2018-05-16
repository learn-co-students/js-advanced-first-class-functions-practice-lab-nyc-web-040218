// Code your solution in this file!
function logDriverNames(drivers) {
  for (driver of drivers) {
    console.log(driver.name)
  }
}
function logDriversByHometown(drivers, location) {
  for (driver of drivers) {
    if (driver.hometown === location) {
    console.log(driver.name)
  }
  }
}

function driversByRevenue(drivers) {
  let newArray = [...drivers]
  return newArray.sort(function (a,b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  let newArray = [...drivers]
  return newArray.sort(function (a,b) {
    return a.name.localeCompare(b.name)
  })
  }

  function totalRevenue(drivers) {
    return drivers.reduce(function (total, driver) {
      return driver.revenue + total}, 0)
  }

  function averageRevenue(drivers) {
    return (totalRevenue(drivers)/drivers.length)
  }
