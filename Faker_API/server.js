//import express and faker
const express = require('express');
const app = express();
const  faker  = require('faker');

//create a function thaat returns a user object
const createUser = () => {
    const newUser = {
        _id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return newUser;
}

// create a function thaat returns a company object
const createCompany = () => {
    const newCompany = {
        _id: faker.random.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
    return newCompany;
}

const newFakeUser = createUser();
const newFakeCompany = createCompany();
//I am using POST
app.post("/api/users/new", (req, res) => {
    return res.json(newFakeUser);
});
//I am using POST
app.post("/api/companies/new", (req, res) => {
    return res.json(newFakeCompany);
});
//I did this with GET to try it too
app.get("/api/user/company", (req, res) => {
    return res.json([newFakeUser,newFakeCompany]);
});

const server = app.listen(8000, () =>
console.log(`Server is listening on ${server.address().port}!`)
);