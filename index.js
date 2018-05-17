// Code your solution in this file!
logDriverNames = (drivers) => {
  drivers.forEach(driver => {
    console.log(driver.name)
  });
}

logDriversByHometown = (drivers, location) => {
  drivers.forEach(driver => {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  });
}

driversByRevenue = (drivers) => {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  })
}

driversByName = (drivers) => {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

totalRevenue = (drivers) => {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
}

averageRevenue = (drivers) => {
  return totalRevenue(drivers) / drivers.length
}
