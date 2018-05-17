// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function(driver, i, drivers) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, location) {
  let matches = drivers.filter(driver => driver.hometown === location)
  return matches.forEach(driver => console.log(driver.name))
}

const driversByRevenue = function(drivers) {
  let newArr = [...drivers]
  newArr.sort(function(a,b) {
    return a.revenue - b.revenue
  })
  return newArr
}

const driversByName = function(drivers) {
  let newArr = [...drivers]
  newArr.sort(function(a,b) {
    return a.name.localeCompare(b.name)
  })
  return newArr
}

const totalRevenue = function(drivers) {
  let total = 0
  drivers.forEach(driver => total += driver.revenue)
  return total
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
