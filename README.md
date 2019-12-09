# Sitio web de OIENIV [![Build Status](https://travis-ci.com/davidsdevel/oieniv-website.svg?token=W8NymexqnsnzcJQKjMsx&branch=master)](https://travis-ci.com/davidsdevel/oieniv-website)

En inicio lo que se quiere es dar presencia online a la organizacion. Este archivo es una guia de desarrollo para todos aquellos que quieran ayudar.

## Contenido

- [Desarrollo](#development)

## Desarrollo <a name="development"></a>

El desarrollo del proyecto, en gran medida es con **JavaScript** usando de ser posible de ES6 para arriba, tanto front-end como en backend,
en el cual usa las siguientes tecnologias:

### Font-End

Todo lo relacionado a la **UI** \(Interfaz de usuario\)

#### React

Primeramente para todo el desarrollo de la UI \(Interfaz de usuario\) se usa [React](https://reactjs.org) debido a su modelo reactivo y basado en componentes.

#### Next

[Next](https://nextjs.org) es un **framework de SSR** \(Renderizado del lado del servidor\) el cual usa **React** para generar la Interfaz.

### Back-End

Todo lo relacionado a la capa de datos.

#### NodeJS

[NodeJS](https://nodejs.org) es un entorno de ejecución de JavaScript, con el cual podemos ejecutar JavaScript fuera del navegador.

#### Express

[Express](https://expressjs.com/es/) es un framework para crear **aplicaciones web**, el cual se usa para manejar la parte del servidor \(peticiones, ruteo, redirecciones, autenticacion, Base de datos, etc.\).

#### Firebase

[Firebase](https://firebase.google.com) es una plataforma de datos, que incluye: base de datos en tiempo real, base de datos de archivos, hosting.

#### Postgres

El proyecto usara la base de datos [PostgreSQL](https://www.postgresql.org/), todavia se esta definiendo cual libreria se usara para conectar **Express** con ella.

#### Heroku

[Heroku](https://www.heroku.com) es un servidor en la nube, basado en contenedores.

### Pruebas

#### Jest

[Jest](https://jest.io) es una libreria de pruebas unitarias para JavaScript creada por **Facebook**.

**Nota**: Es necesario conocer de Jest, ya que se usara para evitar errores en produccion.
