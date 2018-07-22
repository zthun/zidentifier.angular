# Description

This package is the dynamic id generator for Angular.  

See [@zthun/zidentifier.core](https://www.npmjs.com/package/@zthun/zidentifier.core) for the general problem and solution that this package attempts to solve.  

# How to Use

Install the package from npm into your project.  

```sh
npm install @zthun/identifier.angular --save
```

In your Angular main module, add the ZIdentifierModule to your list of dependencies.

```typescript
import { NgModule } from '@angular/core';
import { ZIdentifierModule } from '@zthun/identifier.angular';

@NgModule({
    bootstrap: [
        // Bootstrap code.
    ],
    declarations: [
        // Components and Directives go here.
    ],
    imports: [
        ZIdentifierModule
    ],
    providers: [
        // Injectables
    ]
})
export class MyModule { }
```

This gives you access to the zid attribute directive.  You can now dynamically generate ids based on your root component.

```html
<div id="root">
    <div zid="component">
        <div zid="child-one"></div>
        <div zid="child-two"></div>
    </div>
</div>
```

The zid attribute can be bound to context data as well.

```html
<div id="root">
    <div zid="component">
        <div *ngFor="let item of items" zid="child-{{item.id}}">
        </div>
    </div>
</div>
```

This will output the following HTML.

```html
<div id="root">
    <div id="root-component">
        <div id="root-component-child-one"></div>
        <div id="root-component-child-two"></div>
    </div>
</div>
```

You can also use this for labels.

```html
<div id="root">
    <form id="root-form">
        <label zfor="input">My Label</label>
        <input zid="input" type="text">
    </form>
</div>
```

# Contribute

You will need the source repository first.

```sh
git clone https://github.com/zthun/zidentifier.angular
```

You can also fork the repository in preparation for a pull request back to the master branch.

Once you have the repository, you can build the solution using the following commands.

```sh
npm install
npm run make
npm pack
```
