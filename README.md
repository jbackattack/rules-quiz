# Rules Quiz

A single-page practice quiz for baseball and softball umpire rules tests.

- Pick a sport and a length (20, 40, 60 or 100 questions) and answer; each answer shows right or wrong right away.
- Every test is a random draw from a larger question bank. Questions you have not seen, or missed last time, are favored.
- **My progress** shows what you have seen, answered and missed, per sport, with a review list.
- Progress is saved in the browser (`localStorage`). Inside Claude, signed-in progress also saves to your account.

## Where the questions come from

Questions live in a Google Sheet, so you can edit them without touching code.

1. Import `bank.sample.csv` into a new Google Sheet (File > Import), then replace the examples with your questions. One row per question: `sport` (baseball/softball), `pool` (rules/nj), `id` (any unique short text, used to remember progress), `question`, up to six choices in columns A-F, `answer` (the letter of the correct choice), and `fixed_order` (`yes` to keep the choices in order, for True/False).
2. Share the sheet as "Anyone with the link: Viewer".
3. Copy the sheet ID (the long text between `/d/` and `/edit` in its URL) into `config.js`.

The page loads the sheet each time it opens and keeps a copy on the device, so it still works offline. If no sheet is set, it uses a `bank.js` file next to the page (see `bank.sample.js`).

## Run it

Open `index.html` in a browser, or serve the folder with any static host.

`bank.js` is listed in `.gitignore` on purpose. The questions in the author's bank are derived from NFHS case book and rules text, which is copyrighted, so the bank is not published here.
