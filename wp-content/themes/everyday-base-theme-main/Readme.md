# Base Theme

## Introduction

Our Base Theme is designed to enhance the capabilities of WordPress by integrating custom Gutenberg blocks. These blocks allow for greater flexibility and customization, enabling you to create unique and dynamic content layouts. By leveraging the power of Gutenberg, we can build tailored solutions that meet specific design and functionality requirements, ensuring a seamless and engaging user experience.

## Install Dependencies

[Why should we use pnpm?](https://medium.com/pnpm/why-should-we-use-pnpm-75ca4bfe7d93)

[Install pnpm](https://pnpm.io/installation)
[Install eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[Install Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

##  Getting started

1. Check out the Repo to your local wordpress installation
2. Install node.js and pnpm on your local machine
3. run pnpm install

```bash
pnpm install
```

4. for local development.

```bash
pnpm run dev
```

5. After finishing your work run

```bash
pnpm run build
```

6. If some styles not in the stylesheet, add the styles in the purge.php file or purge ignore

##  Set Node Engine

[How to set a node engine and update it](https://stackoverflow.com/questions/29349684/how-can-i-specify-the-required-node-js-version-in-package-json)

I decided to require the newest node version. At the moment it's node 20.x.x
Update node and switching between difference node version you should install nvm

[Documentation nvm](https://github.com/nvm-sh/nvm)

## Set env Variables

For the build and development workflow we had env variables.
To Install env varibles on Windows, please Install this node module global

[win-node-env](https://www.npmjs.com/package/win-node-env)

## Webpack

We use Webpack for our workflow, specifically for handling WordPress blocks, and we add our custom configuration on top. Every configuration is managed inside the `webpack.config.js` file.

To build CSS, we import the `main.scss` file into the `index.js` file. Using the `MiniCssExtractPlugin`, the CSS is built into its own CSS file. Additionally, we have added build notifications to alert us if there are any errors during the development or build tasks.

## Postcss

In the postcss.config.js we had our config for the preprocessing of the css file.
In this file is the condition if the build is production or an development task.

## Important Notice

To Reduce the CSS Filesizes, we Purge the css Files.
When we had css class that added only via JavaScript.
We musst include the classname in the purge.html file.

## Visual Regression Tests

[Visual Regression Tools - Medium Post](https://medium.com/loftbr/visual-regression-testing-eb74050f3366)

To get a better quality of updates in terms of styles, we use a visual regression tool. This should show us at an early stage whether there are global changes in the widgets as a result of our update.
There for we use backstop.js

## Test Commands

To ensure the quality and functionality of our code, we have set up several test commands. These commands help us run visual regression tests and build processes in a controlled environment.

-   `build:test`: Builds the project in production mode and runs visual regression tests.
    ```bash
    NODE_ENV=production wp-scripts build src/js/index.js blocks/utilities/**/*.jsx blocks/components/**/*.jsx && cd test && backstop test --configPath=backstop.config.js
    ```
-   `test:reference`: Generates reference images for visual regression testing.
    ```bash
    cd test && backstop reference --configPath=backstop.config.js
    ```
-   `test:approve`: Approves the visual regression test results.
    ```bash
    cd test && backstop approve --configPath=backstop.config.js
    ```
-   `test`: Runs the visual regression tests.

    ```bash
    cd test && backstop test --configPath=backstop.config.js
    ```

    ## Adding a New Test

    To set up a new test, follow these steps:

    1. **Add a Scenario**: In the `test/scenarios` folder, create a new scenario file or update an existing one. Define the label and the selector for the new test case.

    2. **Update Dynamic PHP**: In the `dynamic.php` file, add a class name prefixed with `bs-` followed by the component name. This ensures that the component is correctly identified during the test.

    Example:

    ```json
    {
        "label": "component-name",
        "selectors": [".bs-component-name"]
    }
    ```

    ```php
    <div class="bs-component-name">
        <!-- Component HTML -->
    </div>
    ```

    3. **Run Test Commands**: Use the test commands to generate reference images and run the visual regression tests.

    -   Generate reference images:

        ```bash
        cd test && backstop reference --configPath=backstop.config.js
        ```

    -   Run visual regression tests:

        ```bash
        cd test && backstop test --configPath=backstop.config.js
        ```

    -   Approve test results:
        ```bash
        cd test && backstop approve --configPath=backstop.config.js
        ```

    By following these steps, you can ensure that your new component is tested for visual regressions effectively.

## How to use useEffect

[You Are Using useEffect the Wrong Way—Please Stop](https://medium.com/@letscodefuture/you-are-using-useeffect-the-wrong-way-please-stop-27b67e627195)

## Source

Gutenberg Hacks [Gutenberg Hacks - Medium](https://medium.com/geekculture/gutenberg-hacks-richtext-made-simple-with-examples-70c9ffae706a)

## TODO

-   [ ] Setup correct alias.
