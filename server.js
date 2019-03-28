const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api/customers", (request, response) => {
    const customers = [
        {id: 1, firstName: "John", lastName: "Doe"},
        {id: 2, firstName: "Steve", lastName: "Smith"},
        {id: 3, firstName: "Mary", lastName: "Swanson"},
    ];

    response.json(customers);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));