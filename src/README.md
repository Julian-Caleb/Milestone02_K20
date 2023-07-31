# Source Code Milestone Kelompok 20

## Tech Stack

- [React](https://reactjs.org/)
- [Next](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)

## Setup and Installation

1. Clone repo

```
git clone https://github.com/Julian-Caleb/Milestone02_K20.git
```

2. Install dependencies

```
npm install -g yarn
yarn install
```

3. Start the app

```
yarn dev
```

## Contribution

1. Create a new branch

```
git checkout -b <branch-name>
```

2. Make changes
3. Commit and push

```
git add .
git commit -m "<commit-message>"
git push origin <branch-name>
```

4. Create a pull request
5. Wait for approval

## Branching and Commit Messages

Setiap membuat branch baru harus ambil base dari `main`. Untuk penamaan commit dan branch mengikuti format berikut.
Format branch: `<type>/<title>`, contoh `feat/Navbar`.
Format commit: `<type>: <subject>`, contoh `feat: add navbar`.
Penamaan menggunakan camel case

Untuk type mengikuti semantic berikut.

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
