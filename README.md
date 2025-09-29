## Hexagonal Architecture (Fast & Simple)

Hexagonal architecture = **keep the important stuff (your business rules) separate from everything else**.

- **Domain** → the brains. Your rules and logic. Doesn’t care about DBs or APIs.
- **Application** → tells the domain what to do. Runs use cases.
- **Presentation** → how people or apps talk to you (controllers, REST, GraphQL).
- **Infrastructure** → all the boring stuff: databases, external APIs, files.

```
        [Presentation]
              │
              ▼
         [Application]
              │
              ▼
           [Domain]
          /        \

  [Infrastructure] [Adapters]
```

Why? So you can change tech (DB, REST, etc.) **without breaking your core logic**.
Clean boundaries = less headache, less spaghetti.

# NestJS Hexagonal Module Generator

I got tired of creating the same folder structure every time I wanted to write code in a proper hexagonal way.
So I wrote a dumb script that automates the boring part.

It’s not a framework, it’s not “enterprise magic” — it’s just a script that runs a couple of NestJS commands and makes some folders. Done.

---

## Run with

| Package Manager | Command              |
| --------------- | -------------------- |
| **npm**         | `npm run g:hex User` |
| **yarn**        | `yarn g:hex User`    |
| **pnpm**        | `pnpm g:hex User`    |
| **bun**         | `bun run g:hex User` |

---

## What this script does

- Generates a NestJS module.
- Adds a service in `application/` and a controller in `presentation/`.
- Creates the folders you’ll need later:
  - `domain/dtos`
  - `domain/ports`
  - `infrastructure/adapters`
  - `infrastructure/entities`

**Your result**
src/
└── user/
├── application/
│ └── user.service.ts
├── presentation/
│ └── user.controller.ts
├── domain/
│ ├── dtos/
│ └── ports/
└── infrastructure/
├── adapters/
└── entities/

So you don’t spend your time typing mkdir like a caveman.

---

## Usage

1. Drop the script into `scripts/generate-hex-module.ts`.

2. Add this to your `package.json`:
   ```json
   "scripts": {
     "g:hex": "ts-node scripts/generate-hex-module.ts"
   }
   ```

```

## Which modules should use hexagonal architecture?

Not every module needs it. Use hexagonal **only where it makes sense**:

- Modules with real business logic that will live beyond simple CRUD.
- Modules that might change underlying tech (DBs, APIs, messaging).
- Modules that need to be **testable and isolated**.

Small utility modules or trivial CRUD modules? Don’t over-engineer. Keep them simple.

Rule of thumb: **use hexagonal where complexity justifies it, not everywhere**.
Less spaghetti, more sanity.
```
