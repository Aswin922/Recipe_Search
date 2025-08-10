# Recipes Backend (Spring Boot + H2)

## Build & Run

Requirements: JDK 17, Maven

1. Build:
   mvn -f backend/pom.xml clean package

2. Run:
   java -jar backend/target/recipes-backend-0.0.1-SNAPSHOT.jar

3. Endpoints:
   - POST /api/v1/recipes/load?url=https://dummyjson.com/recipes  -> load data from remote into H2
   - GET  /api/v1/recipes?q=chicken                              -> search by name or cuisine
   - GET  /api/v1/recipes/{id}                                    -> get by id

Swagger UI will be available at http://localhost:8080/swagger-ui.html when running.
