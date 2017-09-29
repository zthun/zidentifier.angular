# Description

ZIdentifier is a DOM helper for dynamically generating ids based on a root
component.  

The purpose of this is to give QA quick access to DOM elements in automated testing.  Component reuse makes adding ids to the DOM somewhat dangerous because of the possibility of duplicate ids.

## Example

Suppose you have the following DOM structure.

```
<!DOCTYPE html>
<html>
    <head>
    <title>My Sample</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link href="css/my-sample.css" rel="stylesheet" />
    </head>
    <body>
        <my-sample id="my-sample-a"></my-sample>
        <my-sample id="my-sample-b"></my-sample>
        <script src="scripts/my-sample.min.js"></script>
    </body>
</html>
```

# Contribute

You will need the source repository first.

```
git clone https://github.com/zthun/zidentifier.angular
```

You can also fork the repository in preparation for a pull request back to the master branch.

# Build and Test

TODO
