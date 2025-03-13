// Write your solution in this file!

const employee = {name:"Sam",
    streetAddress:"11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

  function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee,key,value){
    delete employee.value;
    return{...employee, [key]: value};

  }
  function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee[key];
    return employee;

  }