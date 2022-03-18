function calculateAge(dateOfBirth) {
  let dob = new Date(dateOfBirth);
  const yearInMs = 1000 * 60 * 60 * 24 * 365;
  let d = Date.parse(dob);
  let age = Math.floor((Date.now() - d) / yearInMs);
  return age;
}

console.log(calculateAge("1999-09-09"));
