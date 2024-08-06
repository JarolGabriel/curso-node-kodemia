const yup = requir("yup");
function Koders(data) {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
    email: data.email,
    phone: data.phone,
  };
}
