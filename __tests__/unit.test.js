// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// 1st Unit test for isPhoneNumber -- true
test('validates phone number with area code and dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

// 2nd Unit test for isPhoneNumber -- true
test('validates phone number with area code and parantheses and dashes', () => {
  expect(isPhoneNumber('(789) 123-5000')).toBe(true);
});

// 3rd Unit test for isPhoneNumber -- false
test('rejects letters with parantheses and dashes', () => {
  expect(isPhoneNumber('(abc) def-ghij')).toBe(false);
});

// 4th Unit test for isPhoneNumber -- false
test('rejects phone number without dashes or parantheses', () => {
  expect(isPhoneNumber('123 789 4560')).toBe(false);
});


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


// 1st Unit test for isEmail -- true
test('validates email with @ and TLD of 3 characters', () => {
  expect(isEmail('thisisemail@email.com')).toBe(true);
});

// 2nd Unit test for isEmail -- true
test('validates email with numbers and @ and TLD of 3 characters', () => {
  expect(isEmail('iamemail777@domain.org')).toBe(true);
});

// 3rd Unit test for isEmail -- false
test('rejects email with TLD of 4 characters', () => {
  expect(isEmail('user@gmail.orggg')).toBe(false);
});

// 4th Unit test for isEmail -- false
test('rejects email with 2 TLDs', () => {
  expect(isEmail('user3@outlook.com.org')).toBe(false);
});


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


// 1st Unit test for isStrongPassword -- true
test('validates strong password with 4 letters', () => {
  expect(isStrongPassword('LLLL')).toBe(true);
});

// 2nd Unit test for isStrongPassword -- true
test('validates strong password with 15 characters that starts with letters and contains underscores and number', () => {
  expect(isStrongPassword('good_password_5')).toBe(true);
});

// 3rd Unit test for isStrongPassword -- false
test('reject password with less than 4 characters', () => {
  expect(isStrongPassword('GgG')).toBe(false);
});

// 4th Unit test for isStrongPassword -- false
test('reject password that doesn\'t start with a letter', () => {
  expect(isStrongPassword('1LL1T')).toBe(false);
});


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


// 1st Unit test for isDate -- true
test('validates date with 2 digits in day and month, and 4 digits in year', () => {
  expect(isDate('07/27/2004')).toBe(true);
});

// 2nd Unit test for isDate -- true
test('validates date with 1 digit in day and month, and 4 digits in year', () => {
  expect(isDate('1/1/1111')).toBe(true);
});

// 3rd Unit test for isDate -- false
test('rejects date with 2 digits in year', () => {
  expect(isDate('02/14/24')).toBe(false);
});

// 4th Unit test for isDate -- false
test('rejects date letters', () => {
  expect(isDate('MAY/04/2024')).toBe(false);
});


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


// 1st Unit test for isHexColor -- true
test('validates hex color in letters for white', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

// 2nd Unit test for isHexColor -- true
test('validates hex color in numbers', () => {
  expect(isHexColor('#123')).toBe(true);
});

// 3rd Unit test for isHexColor -- false
test('rejects hex color input lesst than 3 characters', () => {
  expect(isHexColor('12')).toBe(false);
});

// 4th Unit test for isHexColor -- false
test('rejects invalid hex characters', () => {
  expect(isHexColor('Blue')).toBe(false);
});