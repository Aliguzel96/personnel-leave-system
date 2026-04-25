FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY src/main/java/com/gzlAli/personel/automation/backend .

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

CMD ["java", "-jar", "target/*.jar"]