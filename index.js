// Code your solution here:
function driversWithRevenueOver(drivers, driverRevenue) {
  return drivers.filter(function (driver) {
    driver.revenue > driverRevenue
  })
}