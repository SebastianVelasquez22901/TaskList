# TaskList

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.0.4.

## Servidor de desarrollo

Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Generación de código

Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de pruebas end-to-end

Ejecuta `ng e2e` para ejecutar las pruebas end-to-end a través de una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de pruebas end-to-end.

## Estructura del proyecto

La estructura básica del proyecto es la siguiente:

```
task-list/
├── e2e/                        # Pruebas end-to-end
├── node_modules/               # Dependencias del proyecto
├── src/                        # Código fuente de la aplicación
│   ├── app/                    # Módulos y componentes principales
│   ├── assets/                 # Recursos estáticos
│   ├── environments/           # Configuraciones de entorno
│   ├── index.html              # Archivo HTML principal
│   ├── main.ts                 # Punto de entrada principal de la aplicación
│   ├── polyfills.ts            # Polyfills necesarios para navegadores antiguos
│   ├── styles.css              # Estilos globales
│   └── test.ts                 # Configuración de pruebas unitarias
├── angular.json                # Configuración del Angular CLI
├── package.json                # Dependencias y scripts del proyecto
├── README.md                   # Documentación del proyecto
└── tsconfig.json               # Configuración del compilador TypeScript
```

## Endpoints de la API

La aplicación TaskList interactúa con una API para gestionar las tareas. A continuación se describen los endpoints disponibles:

### Obtener todas las tareas

**Endpoint:** `/api/tasks`  
**Método:** `GET`  
**Descripción:** Obtiene una lista de todas las tareas.

### Crear una nueva tarea

**Endpoint:** `/api/tasks`  
**Método:** `POST`  
**Descripción:** Crea una nueva tarea.  
**Cuerpo de la solicitud:**
```json
{
  "name": "Tarea 1"
}
```

### Eliminar una tarea

**Endpoint:** `/api/tasks/{id}`  
**Método:** `DELETE`  
**Descripción:** Elimina una tarea existente por su ID.

## Configuración adicional

Luego, actualiza el archivo `angular.json` para incluir esta configuración:

```json
"architect": {
  "serve": {
    "options": {
      "proxyConfig": "proxy.conf.json"
    }
  }
}
```

### Variables de entorno

Puedes definir variables de entorno específicas para diferentes entornos (desarrollo, producción, etc.) en los archivos dentro del directorio `src/environments/`. Por ejemplo, `environment.ts` para desarrollo y `environment.prod.ts` para producción.

## Ayuda adicional

Para obtener más ayuda sobre Angular CLI, usa `ng help` o consulta la [página de referencia de comandos y visión general de Angular CLI](https://angular.dev/tools/cli).
