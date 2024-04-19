# TODO

- [ ] Create Search section
- [ ] Mantain the types file or place types in every file needed?
- [ ] Add favicon and other meta tags
- [x] Add a dark mode toggle button with the manual tailwind
- [x] In place of stocks add weather
- [x] Add a `404 not found` page
- [x] Create Sidebar
- [x] Redo all image placeholders
- [x] Redo all skeletons

---

# NOTE

---

# FIX

- [x] Make the logo center without depending on the side elements
      and only after some time the page is loaded with the right informations
- [x] When closing the Sidebar for reopen it you have to click two times
      ...related with the body `overflow-hidden`
- [x] When move to a section the page is blocked in the previous section
- [x] I have to press two times the menu button to open the Sidebar (1st click remove from DOM 2nd click add to DOM)

---

# OPT

- [ ] What are all script chunks in the web console?
- [x] Check all files and folder system for consistency and clean up
- [x] Make it responsive: mobile(640px - sm) and iPad(1024px - lg) p.s. Tailwind comes with mobile first system

---

# REF

- [x] Create a reusable component for all the hover animation that have these settings:
      `py-1.5 px-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 duration-300 hover:duration-300`

---

# README

- [ ] Explain why this complex file structure for the project
- [ ] Scrivere del perchè ho inserito gli indici in ts al posto che fetcharli da un API
      (perchè, avendo un limite di fecthing, ho preferito che gli indici rimanessero sempre attivi)
