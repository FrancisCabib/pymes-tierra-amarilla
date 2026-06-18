# WordPress Headless — Guía de configuración

## 1. Custom Post Type `pyme`

Registra en `functions.php` o con CPT UI:

```php
register_post_type('pyme', [
  'labels' => ['name' => 'PYMES', 'singular_name' => 'PYME'],
  'public' => true,
  'show_in_rest' => true,
  'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
  'menu_icon' => 'dashicons-store',
]);
```

## 2. Campos ACF recomendados

| Campo | Tipo | REST |
|-------|------|------|
| descripcion | Textarea | Sí |
| logo | Image | Sí |
| rubro | Select | Sí |
| sitio_web | URL | Sí |
| telefono | Text | Sí |
| whatsapp | Text | Sí |

## 3. Variables de entorno en Astro

```env
PUBLIC_WP_URL=https://tu-wordpress.com
PUBLIC_SITE_URL=https://www.pymestierramarilla.cl
```

## 4. Webhook de rebuild

En Netlify: Site settings → Build hooks → crear hook y configurarlo en WordPress (plugin WP Webhooks o similar) al publicar posts o pymes.

## 5. Endpoints usados

- `GET /wp-json/wp/v2/posts?per_page=20&_embed=wp:featuredmedia`
- `GET /wp-json/wp/v2/pyme?per_page=100`

Si `PUBLIC_WP_URL` no está configurado, el sitio usa Content Collections locales en `src/content/`.
