# Farma meda — Priče iz košnice

Porodični blog na srpskom jeziku, napravljen pomoću React-a i Vite-a. Sajt
predstavlja porodičnu priču, rad pčela i proces nastanka domaćeg meda kroz
fotografije, animacije i zasebne stranice.

## Pokretanje lokalno

Potrebni su Node.js 20.19+ ili 22.12+.

```sh
cd frontend
npm install
npm run dev
```

Vite će prikazati lokalnu adresu u terminalu. Za produkcioni build pokrenite:

```sh
npm run build
```

## XAMPP

Projekat sadrži i početnu stranicu za lokalno korišćenje kroz Apache/XAMPP.
Pokrenite Apache, pa otvorite `http://localhost/med%20blog/`. Posle svake
izmene frontend-a pokrenite `npm run build` iz direktorijuma `frontend`.

## Struktura projekta

- `frontend/src/App.jsx` — izbor početne stranice, stranice priče i procesa meda
- `frontend/src/components/` — React komponente i sadržaj stranica
- `frontend/src/assets/` — fotografije i uvodni video
- `frontend/src/styles.css` — izgled, responzivnost i animacije
- `frontend/package.json` — skripte i zavisnosti

## Tehnologije

- React
- Vite
- JavaScript
- CSS

Projekat je frontend-only i ne koristi bazu podataka, serverski API ni
tajne/ključeve za pristup.
