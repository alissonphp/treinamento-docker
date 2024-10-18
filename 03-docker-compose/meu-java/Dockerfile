# Usar uma imagem base do Maven para construir a aplicação
FROM maven:3.8.5-openjdk-17 AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Usar uma imagem base do OpenJDK para rodar a aplicação
FROM openjdk:17
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]