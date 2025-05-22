# nw-fork-issue

Run node-run.js to see it work for node

Run `yarn start` to see it break for nw

Seems like it's some kind of issue with certain modules being required in the fork

If you comment out fse and dcmjs inside of fork.js, it runs.
If you leave either of them in, it breaks
