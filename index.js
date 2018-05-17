function logDriverNames(drivers) {
    for (const driver of drivers){
        console.log(driver.name);
    }
}

function logDriversByHometown(drivers, location) {
    for (const driver of drivers){
        if (driver.hometown === location){
            console.log(driver.name);
        }
    }
}

function driversByRevenue(drivers) {
    let newArray = [...drivers];
    newArray.sort(function (a,b){
        return a.revenue - b.revenue;
    });
    return newArray;
}

function driversByName(drivers) {
    const newArray = [...drivers];
    newArray.sort(function (a,b){
        return a.name.localeCompare(b.name);
    });
    return newArray;
}

function totalRevenue(drivers) {
    let total = 0;
    drivers.forEach(function(driver){
        total += driver.revenue;
    });
    return total;
}

function averageRevenue(drivers) {
    let total = 0;
    let i = 0;
    drivers.forEach(function(driver){
        ++i
        total += driver.revenue;
    });
    return total/i;
}