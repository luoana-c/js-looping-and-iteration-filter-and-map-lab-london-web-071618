// Code your solution here:
function driversWithRevenueOver(drivers, driverRevenue) {
  return drivers.filter(function (driver) {
    return driver["revenue"] > driverRevenue
  })
}

function driverNamesWithRevenueOver(drivers, driverRevenue) {
  return driversWithRevenueOver(drivers, driverRevenue).map(
     (driver) => driver.name)
}