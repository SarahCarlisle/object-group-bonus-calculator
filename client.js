/*
Jeff McMahon
Kris Visness
Sarah Carlisle
*/
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// let outputArray = [
//   name: name,
//   bonusPercentage: bonusPercentage,
//   totalCompensation: totalCompensation,
//   totalBonus: totalBonus
// ];

function bonus(employee){

  let bonusObject = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  };

  if( employee.reviewRating <= 2){
      let totalCompensation = employee.annualSalary;
      // outputArray.push(employee.name,  '0%', totalCompensation, (totalCompensation-employee.annualSalary))
      bonusObject.bonusPercentage = 0;
      bonusObject.totalCompensation = employee.annualSalary;
      bonusObject.totalBonus = (employee.annualSalary * 0);
      return bonusObject;
    }
    if ( employee.reviewRating === 3) {
      let totalCompensation = (employee.annualSalary * 1.04);
      bonusObject.bonusPercentage = '4%';
      bonusObject.totalCompensation = totalCompensation;
      bonusObject.totalBonus = (employee.annualSalary * 0.04);
      return bonusObject;
    }
    if (employee.reviewRating === 4) {
      let totalCompensation = (employee.annualSalary * 1.06);
      bonusObject.bonusPercentage = '6%';
      bonusObject.totalCompensation = totalCompensation;
      bonusObject.totalBonus = (employee.annualSalary * 0.06);
      return bonusObject;
    }
    if (employee.reviewRating === 5) {
      let totalCompensation = (employee.annualSalary * 1.10);
      bonusObject.bonusPercentage = '10%';
      bonusObject.totalCompensation = totalCompensation;
      bonusObject.totalBonus = (employee.annualSalary * 0.10);
        return bonusObject;
    }
    if (employee.employeeNumber <= 9999) {
      bonusObject.bonusPercentage = bonusObject.bonusPercentage += '5%');
      bonusObject.totalCompensation = totalCompensation;
      bonusObject.totalBonus = (bonusObject.totalBonus * 1.05)
      return bonusObject;
    }
  }
}

for (i = 0; i < employees.length; i++) {
  console.log((employee[i]));
}
console.log( employees );
console.log(outputArray);