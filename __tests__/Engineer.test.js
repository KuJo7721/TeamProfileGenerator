const Engineer = require('../lib/Engineer');
test('add a name to an Employee', () => {
  let employee = new Engineer('Rob', 23, 'rob@gmail.com');  
  expect(employee.name).toBe('Rob');
})
test('set an ID to an Employee', () => {
  let employee = new Engineer('Rob', 23, 'rob@gmail.com');
  expect(employee.id).toBe(23);
})
test('set an email to an Employee', () => {
  let employee = new Engineer('Rob', 23, 'rob@gmail.com');
  expect(employee.email).toBe('rob@gmail.com') 
})
test('set an github to an Employee', () => {
  let employee = new Engineer('Rob', 23, 'rob@gmail.com','username');
  expect(employee.github).toBe('username') 
})
test('use get name method', () => {
  let employee = new Engineer('Rob', 23, 'rob@gmail.com');
  expect(employee.getName()).toBe('Rob') 
})
test('use getId method', () => {
  let employee = new Engineer('Rob', 23, 'rob@gmail.com');
  expect(employee.getId()).toBe(23) 
})
test('use getId method', () => {
  let employee = new Engineer('Rob', 23, 'rob@gmail.com');
  expect(employee.getEmail()).toBe('rob@gmail.com') 
})
test('use getId Role', () => {
  let employee = new Engineer('Rob', 23, 'rob@gmail.com');
  expect(employee.getRole()).toBe('Engineer') 
})
test('use get github method', () => {
  let employee = new Engineer('Rob', 23, 'rob@gmail.com', 'username');
  expect(employee.getGithub()).toBe('username');
})
