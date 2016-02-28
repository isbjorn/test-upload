Test code for meteor autoform file upload fix
=============================================

Create project
--------------

```
meteor create test-upload
cd test-upload/

meteor remove insecure
meteor remove autopublish

meteor add twbs:bootstrap

meteor add cfs:gridfs
meteor add cfs:standard-packages
meteor add aldeed:autoform
```

Add fixed version of meteor-autoform-file from here:
https://github.com/isbjorn/meteor-autoform-file


Run from project root:

```
mkdir packages
cd packages/
git clone https://github.com/isbjorn/meteor-autoform-file.git
cd ..
meteor add yogiben:autoform-file
```


Write code
----------

Get sources from this repo or write your own

Start meteor from project root:

```
meteor
```

Test upload button in IE
------------------------

Open http://localhost:3000 and click upload button - file selection dialog must appear.

Select file - upload must start.

Upload process will be canceled.

You can test fix here: http://oa-testupload.meteor.com
