# Code Quality & Pre-Commit Checks

This document explains the automatic error-catching system in place to prevent bad code from being pushed.

## Pre-Commit Hooks

The repository uses **Husky** with pre-commit hooks that run automatically before each commit. These hooks ensure:

### 1. **Linting & Formatting** (`lint-staged`)

- **ESLint**: Checks for code style violations, unused variables, and best practices
- **Prettier**: Enforces consistent code formatting
- Runs only on staged files for speed

**Command**: `npx lint-staged`

### 2. **TypeScript Type Checking**

- Validates all TypeScript files for type safety
- Catches missing types, incorrect usage, and compilation errors
- Prevents runtime errors from type issues

**Command**: `npm run type-check`

## How It Works

When you commit code:

```bash
git commit -m "Your commit message"
```

The following checks run **automatically** (in `.husky/pre-commit`):

1. ✅ `ESLint --fix` - Fixes auto-correctable linting issues
2. ✅ `Prettier --write` - Auto-formats code
3. ✅ `TypeScript type-check` - Validates types

**If any check fails**, the commit is blocked and the error is shown:

```
❌ Pre-commit failed: ESLint error on src/components/Button.tsx line 45
❌ Pre-commit failed: TypeScript: Type 'string' is not assignable to type 'number'
```

You must fix the errors and try committing again.

## Bypassing Pre-Commit Hooks (Not Recommended)

If absolutely necessary, you can skip pre-commit checks:

```bash
git commit --no-verify -m "Your commit message"
```

⚠️ **Warning**: This bypasses all safety checks and is **not recommended**.

## Manual Checks Before Committing

You can run these checks manually to catch errors early:

```bash
# Run ESLint on all files
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting without changing files
npm run format:check

# Run TypeScript type check
npm run type-check

# Run full build
npm run build

# Run tests
npm run test
```

## What Errors Are Caught?

### ESLint Catches:

- Unused variables and imports
- Missing semicolons or incorrect spacing
- Accessibility violations (a11y issues)
- Common programming mistakes
- Security issues

### Prettier Catches:

- Inconsistent indentation
- Wrong quote styles (single vs double)
- Line length violations
- Trailing commas
- Spacing issues

### TypeScript Catches:

- Type mismatches
- Missing required properties
- Incorrect function signatures
- Null/undefined errors
- Missing imports

## Example Error Prevention

**Bad Code** (caught before commit):

```tsx
// ❌ Unused variable
const unusedVar = 'hello';

// ❌ Type error
const count: number = 'five';

// ❌ Missing required prop
<MyComponent name="John" />  // email prop missing

// ❌ Accessibility issue
<button>Click me</button>  // missing aria labels
```

**After fixing** (passed checks):

```tsx
// ✅ No unused variables
const welcomeMsg = 'hello';

// ✅ Correct type
const count: number = 5;

// ✅ All required props provided
<MyComponent name="John" email="john@example.com" />

// ✅ Accessible button
<button aria-label="Submit form">Click me</button>
```

## Commit Flow with Checks

```
You run: git commit -m "Fix button styling"
          ↓
Husky pre-commit hook triggers
          ↓
1. lint-staged runs ESLint + Prettier
   ├─ Fixes auto-correctable issues
   ├─ Shows errors that need manual fixing
   └─ Returns 0 (success) or 1 (failure)
          ↓
2. TypeScript type-check runs
   ├─ Validates all .ts and .tsx files
   └─ Returns 0 (success) or 1 (failure)
          ↓
If any check failed:
   └─ ❌ Commit is rejected, errors shown to console
   └─ You fix the errors
   └─ You run: git commit -m "..." again
          ↓
If all checks passed:
   └─ ✅ Commit is created successfully
   └─ Git can now push the code
```

## CI/CD Integration

For production deployments, add similar checks to your CI/CD pipeline (GitHub Actions, GitLab CI, etc.):

```yaml
- name: ESLint
  run: npm run lint

- name: Format Check
  run: npm run format:check

- name: TypeScript
  run: npm run type-check

- name: Build
  run: npm run build

- name: Tests
  run: npm run test
```

## Troubleshooting

### "Command not found: npm"

Make sure Node.js and npm are installed:

```bash
node --version
npm --version
```

### "Husky hooks not running"

Reinstall Husky:

```bash
npm install husky
npx husky install
```

### "Pre-commit still failing after fixing"

Try running the command directly to debug:

```bash
npm run lint:fix
npm run type-check
```

### "Can't commit despite fixing errors"

Clear git cache and re-stage files:

```bash
git add .
git commit -m "Your message"
```

## Best Practices

1. ✅ Run `npm run format` before committing
2. ✅ Run `npm run lint:fix` to auto-fix issues
3. ✅ Run `npm run type-check` to catch type errors
4. ✅ Run `npm run build` before major commits
5. ✅ Never bypass pre-commit hooks (`--no-verify`)
6. ✅ Address all linting/type errors, don't ignore them

## Summary

| Tool           | Purpose                     | Runs On             |
| -------------- | --------------------------- | ------------------- |
| **ESLint**     | Code style & best practices | Pre-commit          |
| **Prettier**   | Code formatting consistency | Pre-commit          |
| **TypeScript** | Type safety                 | Pre-commit + Build  |
| **Jest**       | Unit testing                | Manual (`npm test`) |

All code must pass these checks before being committed and pushed!
