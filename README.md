# Equal Power Crossfade Table

Generate sine and cosine gain pairs for an equal-power audio crossfade.

![Sample run from Equal Power Crossfade Table](docs/demo.webp)

## Run

Install Node.js 22 or newer. Run these commands from the repository root.

```sh
node app.mjs sample.json
```

Replace `sample.json` with a JSON file following the same structure. The app prints a JSON report to standard output.

steps is the number of intervals, producing steps plus one gain pairs. The equal-power assumption applies to uncorrelated signals of similar level. Correlated signals can sum louder at the midpoint.

## Verify

Run `python check.py` with Python 3.11 or newer after the build step when applicable. The check verifies the bundled scenario and confirms that an invalid input returns an error.
