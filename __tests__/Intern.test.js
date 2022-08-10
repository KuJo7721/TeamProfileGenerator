const Intern = require('../lib/Intern');
test('add a name to an Employee', () => {
  let employee = new Intern('Rob', 23, 'rob@gmail.com');  
  expect(employee.name).toBe('Rob');
})
test('set an ID to an Employee', () => {
  let employee = new Intern('Rob', 23, 'rob@gmail.com');
  expect(employee.id).toBe(23);
})
test('set an email to an Employee', () => {
  let employee = new Intern('Rob', 23, 'rob@gmail.com');
  expect(employee.email).toBe('rob@gmail.com') 
})
test('set an School to an Employee', () => {
  let employee = new Intern('Rob', 23, 'rob@gmail.com','school');
  expect(employee.school).toBe('school') 
})
test('use get name method', () => {
  let employee = new Intern('Rob', 23, 'rob@gmail.com');
  expect(employee.getName()).toBe('Rob') 
})
test('use getId method', () => {
  let employee = new Intern('Rob', 23, 'rob@gmail.com');
  expect(employee.getId()).toBe(23) 
})
test('use getId method', () => {
  let employee = new Intern('Rob', 23, 'rob@gmail.com');
  expect(employee.getEmail()).toBe('rob@gmail.com') 
})
test('use getId Role', () => {
  let employee = new Intern('Rob', 23, 'rob@gmail.com');
  expect(employee.getRole()).toBe('Intern');
})
test('use get getSchool method', () => {
  let employee = new Intern('Rob', 23, 'rob@gmail.com', 'school');
  expect(employee.getSchool()).toBe('school');
})
