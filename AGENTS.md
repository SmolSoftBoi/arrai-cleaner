## 📦 Project conventions
* Language: TypeScript (strict mode), React +, Next.js App Router.
* Styling: Tailwind CSS; use `shadcn/ui` components first, then custom when necessary.
* State/data: TanStack Query; never use raw `fetch` in React components.

## 🧪 Tests
* Unit tests: `vitest`.  
  ```bash
  pnpm test:unit
````

* E2E tests: `playwright`.

  ```bash
  pnpm test:e2e
  ```

Codex MUST run both commands and ensure **all green** after any change.

## 🛡️ Safety rails

* Do not call any `*arr` delete endpoint unless `--confirm-delete` flag is present in CLI args or the request body includes `"confirm": true`.
* Never commit `.env` or API keys to the repo.

## 📝 Pull-request message template

```
feat(scope): <concise summary>

Why?
- Short bullet of the user value.

Test plan
- Unit ☑️  / E2E ☑️

Closes: #
```

## 📖 Documentation pointers

* Business logic lives under `apps/arrai-cleaner/src/lib`.
* UI pages are colocated under `app/(routes)/*` using the folder-named layout.
