const calculatePay = (yearSalary, bonus = 0) => //bonus = 0 default value
    yearSalary + bonus;

console.log(calculatePay(22000));


//-------------------------------------//
const calculatePay2 = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
   return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

console.log(calculatePay2(25000, {teamBonus: 12, employeeBonus: 20}));