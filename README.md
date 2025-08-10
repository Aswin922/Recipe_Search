# 🍽️ Recipes Search Application

## 📌 Overview
This project consists of **two components**:

1. **Backend API** (Spring Boot) – Orchestrates the loading of recipes from an external API ([dummyjson.com/recipes](https://dummyjson.com/recipes)) into an in-memory **H2 database**, and exposes RESTful endpoints to search and retrieve recipes.
2. **Frontend UI** (ReactJS) – Provides a user-friendly interface with a **global search bar**, allowing free-text search of recipes by name or cuisine, and supports **client-side sorting** and **filtering**.

---

## 🏗️ Backend – Orchestration API

### Features
- Loads recipe data from [dummyjson.com/recipes](https://dummyjson.com/recipes) into **H2 in-memory DB**.
- Provides the following REST endpoints:
  1. **`GET /api/recipes/search?q=<keyword>`**  
     Performs free-text search on recipe **name** and **cuisine**.
  2. **`GET /api/recipes/{id}`**  
     Fetches a specific recipe by its ID.
  3. **`POST /api/recipes/load`**  
     Loads/refreshes recipes from the external dataset into the local DB.
- Implements:
  - Modular code structure
  - Logging & Exception handling
  - Input validations
  - Environment-based configuration
  - Resilient & optimized API calls (retry mechanism, connection timeouts)
  - Unit tests with code coverage
  - Swagger/OpenAPI documentation

### Tech Stack
- **Java 17+**
- **Spring Boot 3+**
- **Spring Data JPA**
- **Hibernate Search** for full-text search
- **H2 Database** (in-memory)
- **Swagger/OpenAPI**
- **JUnit + Mockito** for testing
