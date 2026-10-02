# =========================
# STAGE 1: Build
# =========================
FROM eclipse-temurin:25-jdk AS builder

WORKDIR /app

# Install Maven
RUN apt-get update \
    && apt-get install -y maven \
    && rm -rf /var/lib/apt/lists/*

# Copy Maven configuration
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build Spring Boot application
RUN mvn clean package -DskipTests


# =========================
# STAGE 2: Runtime
# =========================
FROM eclipse-temurin:25-jre

WORKDIR /app

# Copy generated JAR
COPY --from=builder /app/target/*.jar app.jar

# Render web service port
EXPOSE 10000

ENTRYPOINT ["java", "-jar", "app.jar"]