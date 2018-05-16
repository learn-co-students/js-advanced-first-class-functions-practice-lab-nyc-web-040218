function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if(driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

driver = {name: "ahamed", location: "ny", revenue: 3000};

function driversByRevenue(drivers) {
  return drivers.slice(0).sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

// driversByName() — Receives an array of driver objects and
//  returns a new array of driver objects sorted by their name attribute from A to Z.
//  Here, you may have to use the String.prototype.localeCompare() method.
// // totalRevenue() — Receives an array of driver objects and returns
// the sum of the revenue earned by each driver.
// // averageRevenue() — Receives an array of driver objects and
//  returns the average revenue earned by each driver.
//

function driversByName(drivers) {
  return drivers.slice(0).sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function(accumulator, driver_obj) {
    accumulator += driver_obj.revenue;
    return accumulator;
  }, 0);
}

function averageRevenue(drivers) {
  return drivers.reduce(function(accumulator, driver_obj) {
    accumulator += driver_obj.revenue;
    return accumulator;
  }, 0)/drivers.length;
}
