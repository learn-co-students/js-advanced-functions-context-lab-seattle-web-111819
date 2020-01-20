/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


const createEmployeeRecord = record => {return {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: []
}}
const createEmployeeRecords = records => {
    let employees = []
    records.forEach(record => employees.push(createEmployeeRecord(record)))
    return employees
}
function createTimeInEvent(punch) {
    let times = punch.split(' ')
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(times[1]), date: times[0]})
    return this
}
function createTimeOutEvent(punch) {
    let times = punch.split(' ')
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(times[1]), date: times[0]})
    return this
}
function hoursWorkedOnDate(date) {
    let inTime = this.timeInEvents.find(event => event.date == date).hour
    let outTime = this.timeOutEvents.find(event => event.date == date).hour
    return (outTime - inTime) / 100
}
function wagesEarnedOnDate(date) {return hoursWorkedOnDate.call(this, date) * this.payPerHour}
const findEmployeeByFirstName = (employees, name) => employees.find(emp => emp.firstName == name)
const calculatePayroll = employees => employees.reduce((m, emp) => allWagesFor.call(emp) + m, 0)
