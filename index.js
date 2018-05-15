// Code your solution in this file!

const callbackName = function (driver, drivers) {
  console.log(driver.name);
};

function logDriverNames(drivers) {
  drivers.forEach(callbackName);
};

// const logDriversByHometown = function (drivers, hometown) {
//   drivers.forEach(function (driver) {
//     if (driver.hometown === hometown) {
//       console.log(driver.name);
//     }
//   });
// };

function logDriversByHometown(drivers, location) {
  for (const driver of drivers) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  };
};

function driversByRevenue(drivers) {
  return drivers.slice().sort((a, b) => a.revenue - b.revenue);
};

// const compare = function (a, b) {
//   return a.revenue - b.revenue;
// };

// function driversByRevenue(drivers) {
//   return drivers.slice().sort(compare);
// };

const compareNames = function (a, b) {
  return (a.name).localeCompare(b.name);
};

function driversByName(drivers) {
  return drivers.slice().sort(compareNames);
};

const reduceRevenue = function (total, driver, i, drivers) {
  return total + driver.revenue;
};

function totalRevenue(drivers) {
  return drivers.reduce(reduceRevenue, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
