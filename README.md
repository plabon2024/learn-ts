Your markdown looks good, but the formatting has a few issues with extra backticks and numbering. Here's a cleaned-up version:

````markdown
# TypeScript Setup and Running TS Files

## 1. Install TypeScript

You can install TypeScript globally on your system:

```bash
npm install -g typescript
````

Or install it as a development dependency in your project:

```bash
npm install --save-dev typescript
```

## 2. Compile and Run TypeScript Files

1. Navigate to  project folder:

```bash
cd String Number Boolean
```
```bash
cd Object, tuple, enum, array
```

2. Compile a TypeScript file (`app.ts`) to JavaScript:

```bash
tsc app.ts
```

This will generate an `app.js` file in the same folder.

3. Run on Live Server

* Open the HTML file using a **Live Server** (like the VS Code Live Server extension).
* Open the **browser console** to see the output from your TypeScript code.

4. Or run the compiled JavaScript file with Node.js:

```bash
node app.js
```

## 3.  Watch Mode

To automatically compile whenever you save changes:

```bash
tsc app.ts --watch
```

