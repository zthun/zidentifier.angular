# Description

ZIdentifier is a DOM helper for dynamically generating ids based on a root
component.  

The purpose of this is to give QA quick access to DOM elements in automated testing.  Component reuse makes adding ids to the DOM somewhat dangerous because of the possibility of duplicate ids.

## Example

Suppose you have a component named my-sample that expanded to the following template html.

```
<div>
    <input type="text">
    <input type="date">
    <button>OK</button>
</div>
```

Now assume that you had the following DOM elements.

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
        <label>Sample A</label>
        <my-sample></my-sample>
        <label>Sample B</label>
        <my-sample></my-sample>
        <script src="scripts/my-sample.min.js"></script>
    </body>
</html>
```

In the above scenario, it will be very difficult to distinguish between the two samples and which one they are for.  You can write some complex CSS selectors that will automatically select it by index in frameworks like Selenium, but it would be a lot easier if you could just grab the elements by ID.  However, setting IDs on the component template would produce duplicate ids in this case.

```
<div>
    <input id="sample-text-input" type="text">
    <input id="sample-date-input" type="date">
    <button id="sample-button">OK</button>
</div>
```

# Contribute

You will need the source repository first.

```
git clone https://github.com/zthun/zidentifier.angular
```

You can also fork the repository in preparation for a pull request back to the master branch.

# Build and Test

TODO
