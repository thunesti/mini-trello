# Mini-Trello

Velkommen til team 4's repository for mini-Trello!
Dette er en Single Page Application (SPA) bygget med **Nuxt 4**, **TypeScript** og **Pinia**.

---

## 🚀 Slik kommer du i gang (Setup)

Velg metoden som passer deg best for å hente ned prosjektet:

### Alternativ A: Via VS Code Terminal (Anbefalt)

1. Åpne **Visual Studio Code**.
2. Åpne terminalen i VS Code (`Ctrl + \`` eller `Cmd + \`` på Mac).
3. Naviger til mappen der du vil lagre prosjektet (f.eks. `cd Documents`).
4. Klon prosjektet ved å lime inn følgende kommando:
   ```bash
   git clone https://github.com/thunesti/mini-trello.git
   ```
5. Gå inn i den nye prosjektmappen:
   ```bash
   cd mini-trello
   ```
6. Åpne mappen direkte i et nytt VS Code-vindu:
   ```bash
   code .
   ```

### Alternativ B: Via GitHub Desktop

1. Åpne **GitHub Desktop**.
2. Klikk på **File** i toppmenyen og velg **Clone Repository...**
3. Velg fanen **GitHub.com**, finn `mini-trello` i listen over dine repositorier (eller lim inn URL-en under *URL*-fanen).
4. Velg hvor på PC-en du vil lagre prosjektet (*Local path*), og klikk **Clone**.
5. Når den er ferdig klonet, klikker du på den store knappen hvor det står **"Open in Visual Studio Code"**.

---

## 🛠️ Installere avhengigheter og starte appen

Når du har åpnet prosjektet i VS Code, må du kjøre følgende kommandoer i VS Code-terminalen for å installere pakkene og starte den lokale utviklingsserveren:

1. **Installer alle nødvendige pakker (node_modules):**
   ```bash
   npm install
   ```
2. **Start utviklingsserveren (Development Server):**
   ```bash
   npm run dev
   ```
3. **Åpne appen:**
   Terminalen vil nå gi deg en lokal lenke. Klikk på den, eller åpne nettleseren din og gå til:
   `http://localhost:3000`

---

## 📌 Retningslinjer for teamet (Git Workflow)

For å unngå unødvendig krøll og merge-conflicts på GitHub, følger vi disse enkle kjørereglene:

1. **Hent alltid ned siste endringer** før du begynner å kode for dagen:
   * I VS Code terminal: `git pull`
   * I GitHub Desktop: Klikk på **Fetch origin** / **Pull**.
2. **Sjekk Trello-brettet vårt** for å se hvilken oppgave (Card) du eier før du begynner på en ny funksjon.
3. **Skriv forståelige commit-meldinger**, for eksempel:
   * `feat: opprettet userStore for innlogging`
   * `fix: fikset sletteknapp på oppgavekort`
```
