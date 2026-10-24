# Priče iz košnice

Srpski porodični blog napravljen u React-u i Vite-u. Projekat je frontend-only:
nema servera, baze, API-ja, prodavnice ni spoljašnjih biblioteka.

## Pokretanje

Potrebni su Node.js 20.19+ ili 22.12+.

```sh
cd frontend
npm install
npm run build
```

Pokrenite Apache u XAMPP-u, pa otvorite:
`http://localhost/med%20blog/` (ako je projekat smešten u XAMPP `htdocs/med blog`).

Vite developerski server za lokalni rad pokreće se komandom `npm run dev`.

## Build za objavu

```sh
npm run build
npm run preview
```

XAMPP koristi build u `dist/`; posle svake izmene pokrenite `npm run build`
da bi se ažurirao sajt koji se otvara preko `localhost`.

## Struktura

- `src/App.jsx` — sastavlja stranice i animacije pri skrolovanju
- `src/components/` — navigacija, hero, porodična priča, proces meda, kartice i footer
- `src/assets/` — lokalne fotografije
- `src/styles.css` — responzivni izgled i animacije
- `index.html` — Vite ulazna HTML stranica
