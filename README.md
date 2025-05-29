# nw-fork-issue

Run node-run.js to see it work for node

Run `yarn start` to see it break for nw

Seems like it's some kind of issue with certain modules being required in the fork

If you comment out fse and dcmjs inside of fork.js, it runs.
If you leave either of them in, it breaks

I've pivoted to trying to make archiver work in nw.js.
This is the minimal setup to reproduce the issue:
* archiver-index.js -> node_modules/archiver/index.js
* plugins-zip.js -> node_modules/archiver/lib/plugins/zip.js 
* archiver-utils-index.js -> node_modules/archiver-utils/index.js
* readable-stream-ours-index.js -> node_modules/readable-stream/lib/index.js (line 32 is where it breaks and I can't figure out why. I've renamed the stream folder. I've commented out all the code in that file. That's where it seems like a framework issue.)
