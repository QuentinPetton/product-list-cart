# ProductListCart

## 🛠️ Disclaimer

This project was a training to use **Angular 19+** and experiment with component-based architecture using **modern Angular syntax**.  
It allowed me to use **recent Angular features**, including:

- **Signals** (`signal()`, `computed()`)
- **Observables and toSignal()**
- **Standalone components**
- **Modern directives** (`@for`, `@if`)
- **Type-safe communication with `input()` and `output()`**

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

---

## 🚀 Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to <http://localhost:4200/>. The application will automatically reload whenever you modify any of the source files.

---

## Project Architecture

This project follows a component-based architecture with a clea separation of concerns:

```bash
src/
 ├── app/
 │   ├── components/  # Reusable Angular components
 │   │   ├── cart/  # Cart management
 │   │   ├── product-list/  # Displays the list of products
 │   │   ├── product-cart/  # Individual product card
 │   │   ├── confirm-order-modal/  # Confirmation modal
 │   ├── models/  # Data models
 │   ├── services/  # API / Data services
 ├── assets/  # Static assets (images, styles)
```
