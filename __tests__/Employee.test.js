const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');
test('add a name to an Employee', () => {
  let employee = new Employee('Rob', 23, 'rob@gmail.com');  
  expect(employee.name).toBe('Rob');
})