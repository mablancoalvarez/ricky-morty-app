# Web App de Ricky Morty

Esta aplicación web utiliza la API de Ricky Morty para proporcionar una experiencia interactiva que permite a los usuarios explorar información sobre episodios y localizaciones de la popular serie de televisión.

## Características Principales 💅🏻

### Página de Episodios (/episodes)

- Muestra un listado completo de episodios, cada uno con su información relevante.
- Permite a los usuarios hacer clic en un episodio para ver más detalles.
- En la página de detalle de cada episodio, se muestra información detallada junto con un carrusel de los personajes presentes en el episodio.
- Incluye un formulario interactivo que permite a los usuarios enviar comentarios sobre el episodio, con validaciones de campos requeridos y manejo de errores.

### Página de Localizaciones (/locations)

- Ofrece un listado completo de localizaciones, cada una con detalles específicos.
- Los usuarios pueden hacer clic en una localización para ver información detallada.
- La página de detalle de cada localización muestra información específica junto con un carrusel de los personajes asociados con esa localización.

## Tecnologías Utilizadas ⚙️

- **React**: Para la creación de componentes interactivos y la gestión del estado de la aplicación.
- **API de Ricky Morty**: Para obtener datos actualizados sobre episodios, localizaciones y personajes.
- **Validación de Formularios**: Utilizando la librería react-hook-form, se realizan validaciones sobre campos requeridos y se limita el número de caracteres máximos.
- **Vite**: Para el entorno de desarrollo ya que proporciona un tiempo de compilación más eficiente y productivo.
- **Routing**: React Router.
- **Gestión del estado global**: React Context.
- **Formatting**: Prettier y ESlint

## Instalación 🏁

1. Clona el repositorio: `git clone https://github.com/mablancoalvarez/ricky-morty-app.git`
   ```sh
   npm install
   ```
2. Inicia la app en modo development:

   ```sh
   npm run dev
   ```

Abrela en [http://localhost:5173](http://localhost:5173) para visualizarla en el navegador.

## Consideraciones técnicas 🕶️

- **Arquitectura principal del proyecto**: Esta esturcutra busca facilitar el mantenimiento y la escalabilidad, de esta forma contendremos la mayor parte del código de la aplicación dentro de la carpeta screens. Cada carpeta de características de producto debe contener código específico del dominio para una característica determinada, de esta forma a medida que crezca la aplicación seguiremos teniendo un código mantenible y también de cara a que futuros desarrolladores puedan colaborar.

  ```
  └── src
  ├── assets
  ├── components
  │ └── UI
  ├── context
  │ ├── EpisodesContext.jsx
  │ └── LocationContext.jsx
  ├── hooks
  ├── screens
  │ ├── Episodes
  │ │ ├── EpisodesList.jsx
  │ │ ├── EpisodeDetails.jsx
  │ │ └── Form.jsx
  │ └── Locations
  │ ├── LocationList.jsx
  │ └── LocationDetails.jsx
  ├── services
  ├── styles
  └── utils
  ├── constanst
  └── helpers

  ```





- **Uso de los contextos**: Se crean dos contextos diferentes uno que envuelve los componentes referentes a los episodios, EpisodesContext y otro para las localizaciones, LocationContext. De esta manera cada uno maneja su propio estado global y provee los datos solo a aquellos componentes que lo necesitan. Fragmentando esta lógica y abstrayendola para que sean totalmente independientes.

```sh
    <LocationsProvider>
       <LocationList />
    </LocationsProvider>
```

- **Llamadas a la API**: Para hacer peticiones se usa fetch al ser un método nativo de javascript, asi evitamos instalar otra dependencia al proyecto, si tuvieramos que manejar una mayor complejidad barajariamos otras opciones.
  Creamos un CustomHook para encapsular la lógica de la llamada, de esta manera podemos hacer reutilizable la devolución de los datos, si está pending y el manejo de errores.
  Ademas podemos renombrar esos datos para que sean más específicos según donde lo utilicemos, manteniendo la coherencia.
  Se usa directamente en cada contexto para tener cada llamada también separada, manteniendo el rendimiento de forma adecuada.

- **Lazy loading**: Creación de un componente LazyImg para hacer una carga diferida en el carrusel de imágenes. Se utiliza IntersectionObserver como método nativo para detectar la visibilidad en el viewport y entonces mostrarla.
  Con esto hay una mejora sustancial en el rendimiento de la app.

- **Accesibilidad**: Para hacer la web mas accesible se ha tenido en cuenta:
  -- Título descriptivo en la tab de la web
  -- Uso de atributo alt para las imágenes
  -- Todas las pantallas cuentan con un encabezado (H1)
  -- Comprobación de que el contraste de color cumple con las recomendaciones, usando como herramienta: https://webaim.org/resources/contrastchecker/
  -Formulario con el uso adecuado de etiquetas html para asociar campos (label y htmlFor), atributos descriptivos como aria-label y aria-describedby y cambio de color para la gestión de errores.

## Próximas iteraciones 🚀

La propuesta para seguir iterando sobre esta web sería hacer las siguientes mejoras:

1. **Features para mejorar la experiencia del usuario:**

- Posibilidad de buscar por el nombre de cada localización o episodio. Incorporar un componente searcher para ello.
- Filtrar por orden acendente o descendente cada listado de episodios o localización.
- Poder marcar un episodio como visto o marcar favoritos.
- Diseños para los loadings de carga.
- Manejo de empty states para los casos en los que no tenemos determinados datos.

2. **Testing**

- Instalar testing unitario para asegurarnos de que ciertas funcionalidades trabajan como se esperaría. Por ejemplo para el filtrado de orden acendente.
- Testing e2e para las validaciones del formulario, ahora mismo son muy reducidas pero si escalara podriamos observar los casos de usos y como el usuario interactua en cada uno. Así podríamos validar caso en el haya datos válidos, datos inválidos y flujos de trabajo completo.
  Al igual que hacer testing de la navegación entre rutas y chequear que mostramos el contenido adecuado.

3. **Rendimiento**

- Paginación para los listados y una opción de cargar más, de esta forma hacer una carga parcial de los datos.
- Posibilidad de usar bibliotecas como SWR para el manejo de datos cacheados en las peticiones a la API.
- Minimizar archivos css y javascript en el bundle para producción. De cara a ampliar el proyecto debemos tener esto en cuenta para que los archivos generados sean lo más pequeños posible y optimizados.

## Contribution 🤝

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu contribución: `git checkout -b my-contribution`
3. Haz tus cambios y haz commit: `git commit -m "My contribution"`
4. Haz push de la rama: `git push origin my-contribution`
5. Abre un pull request en este repositorio.

## License

This project is licensed under the MIT License. For more information, see the LICENSE file.

## Contact

- Author: María Blanco
- Email: mablancoalvarez@gmail.com
- GitHub: [mablancoalvarez](https://github.com/mablancoalvarez)

##

##
