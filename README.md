Product API
This is a RESTful API built with Node.js, Express, and MongoDB (Mongoose) for managing product data in an inventory system. It supports full CRUD operations, search, filtering, pagination, authentication via API key, and error handling.

 Features
Create, Read, Update, and Delete products

Filter products by category

Search products by name (case-insensitive)

Pagination support for listing

Get statistics (e.g., count by category)

Custom middleware for:

Request logging

API key authentication

Product data validation

Global error handling

 Project Structure
bash
Copy
Edit
product-api/
│
├── server.js                  # App entry point
├── models/
│   └── product.js             # Mongoose schema
├── routes/
│   └── productRoutes.js       # All product-related endpoints
├── middleware/
│   ├── logger.js              # Logs requests with timestamps
│   ├── auth.js                # Validates API key
│   └── validateProduct.js     # Validates input using express-validator
├── errors/
│   └── CustomErrors.js        # NotFoundError, ValidationError
├── package.json
└── README.md
📦 API Endpoints
Base URL: http://localhost:3000/api


 Create Product
bash
Copy
Edit
POST /product
Body:

json
Copy
Edit
{
  "id": 1,
  "name": "Smartphone",
  "description": "Latest model",
  "price": 20000,
  "category": "electronics",
  "instock": 20
}
Get Product by ID
bash
Copy
Edit
GET /product/:id
Get Products (with filters, search & pagination)
pgsql
Copy
Edit
GET /products?category=electronics&name=phone&page=1&limit=5
Update Product by ID
bash
Copy
Edit
PUT /product/:id
Body: (Must include full product object)

json
Copy
Edit
{
  "id": 1,
  "name": "Updated Phone",
  "description": "Newer version",
  "price": 22000,
  "category": "electronics",
  "instock": 15
}
 Delete Product
bash
Copy
Edit
DELETE /product/:id
Product Statistics
bash
Copy
Edit
GET /products/stats
Returns:

json
Copy
Edit
[
  { "_id": "electronics", "count": 5 },
  { "_id": "furniture", "count": 2 }
]

cd product-api
Install dependencies:

bash
Copy
Edit
npm install
Start MongoDB (make sure it's running on mongodb://localhost:27017)

Run the server:

bash
Copy
Edit
node server.js
Test with Postman using:

Base URL: http://localhost:3000/product



 Requirements
Node.js

MongoDB

Author
Your Name – murangiri robert murungi

