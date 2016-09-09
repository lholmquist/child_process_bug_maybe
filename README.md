## Test repo for a possible Child Process bug on OS X, but it might be expected behavior


First set a custom DYLD_ env var

    export DYLD_TEST=hi

Then run `npm run foo`

The output will be `undefined`

If you run just `node index.js`  the output should be `hi`

the `index-child-process.js` is essentially what the npm scripts does, i actually copied the code.

So running `node index-child-process.js` will give you the same `undefined` result
