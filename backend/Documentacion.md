# Documentación para levantar el proyecto

## Requisitos previos

1. JDK (Java Development Kit) 8 o superior
2. Maven (versión 3.6 o superior)
3. MySQL (versión 5.7 o superior)

## Pasos para levantar el proyecto

### Backend (Spring Boot)

1. Clonar el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navegar al directorio del backend:
    ```bash
    cd <NOMBRE_DEL_DIRECTORIO>/backend
    ```

3. Configurar la base de datos MySQL:
    - Crear una base de datos llamada `db_tasklist`.
    - Actualizar las credenciales de la base de datos en el archivo `application.properties` si es necesario.

4. Compilar y empaquetar el proyecto:
    ```bash
    mvn clean install
    ```

5. Ejecutar la aplicación:
    ```bash
    mvn spring-boot:run
    ```

6. El backend estará disponible en:
    ```
    http://localhost:8080
    ```

## Comandos útiles

- Para ejecutar pruebas unitarias:
    ```bash
    mvn test
    ```

## Estructura del proyecto

- `backend/`: Contiene el código fuente del backend (Spring Boot).
- `pom.xml`: Configuración del proyecto Maven.
- `src/main/resources/application.properties`: Configuración de la aplicación.

## Configuración del archivo `application.properties`

El archivo `application.properties` contiene la configuración necesaria para conectar la aplicación a la base de datos MySQL. A continuación se muestra un ejemplo de configuración:

```properties
spring.application.name=tasklist
spring.datasource.url=jdbc:mysql://localhost:3306/db_tasklist
spring.datasource.username=root
spring.datasource.password=sasa
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql=true
logging.level.org.hibernate.SQL=DEBUG
```

Asegúrate de actualizar `spring.datasource.username` y `spring.datasource.password` con las credenciales correctas de tu base de datos MySQL.

## Notas adicionales

- Tener las versiones correctas de JDK, Maven y MySQL para evitar problemas de compatibilidad, en dado de no tenerlas se puede usar docker.
- Si encuentras algún problema, revisa los logs de la consola para obtener más detalles.