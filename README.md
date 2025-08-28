# yacoub-ui

📦 **Librería de componentes Vue 3 reutilizables para la WebApp de Yacoub.**

Este paquete contiene los **componentes base y comunes** de la organización Yacoub, pensados para mantener consistencia visual y acelerar el desarrollo en múltiples proyectos.

---

## 🚀 Características

- ⚡ Construido con **Vue 3** (`<script setup>`)
- 🎨 Estilos con **TailwindCSS**
- 🧩 **Componentes base**: `BaseInput`, `BaseSelect`, `BaseModal`, `BaseResponsiveTable`, etc.
- 📚 Compatibilidad con **Storybook** para documentación y pruebas visuales
- 🔒 Distribución como **paquete privado** en GitHub Packages

---

## 📦 Instalación

Agregá el repo privado como dependencia en tu proyecto:

```bash
pnpm add yacoub-ui@github:YacoubDevelopers/yacoub-ui#release
```

## 🛠 Uso

Importá los componentes que necesites:

```vue
<script setup lang="ts">
import { BaseInput, BaseModal } from 'yacoub-ui'
</script>

<template>
  <BaseModal title="Ejemplo">
    <BaseInput label="Nombre" placeholder="Escribí tu nombre" />
  </BaseModal>
</template>
```

Importá también los estilos base una sola vez (por ejemplo en `main.ts`):

```ts
import 'yacoub-ui/dist/yacoub-ui.css'
```

Notas importantes sobre estilos:
- La librería usa utilidades de Tailwind. Si tu app NO usa Tailwind, importar `yacoub-ui/dist/yacoub-ui.css` es obligatorio para que los componentes se vean bien.
- Si tu app usa Tailwind, igualmente importá `yacoub-ui/dist/yacoub-ui.css` para cargar los tokens (`@theme`) y ajustes base (fuentes, focus, etc.).
- Si usás Tailwind y notás utilidades faltantes, asegurate de que tu build incluya las clases usadas por la librería. En Vite + Tailwind v4 normalmente alcanza con el import de arriba; en setups con extracción estricta, podés necesitar safelist o incluir `node_modules/yacoub-ui` en el escaneo.

## 📚 Storybook

Podés correr Storybook para ver y probar los componentes en modo aislado:

```bash
pnpm storybook
```

## 👨‍💻 Desarrollo

Cloná el repo y corré en modo desarrollo:

```bash
pnpm install
pnpm dev
```

Para generar el build de la librería:

```bash
pnpm build
```
