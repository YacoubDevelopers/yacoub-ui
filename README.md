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
pnpm add git+ssh://git@github.com:YacoubDevelopers/yacoub-ui.git
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
