# shopify-dev-intellisense README

:warning: This repo is still experimental

This project is a prototype from the [Admin Design Foundations team](https://vault.shopify.io/teams/612-Admin-Design-Foundations/overview?teamProjectRelationshipType=contributing&subteams=yes&order=progress_desc&page=first_25&progress=Explore_Build). Currently, it is a proof of concept for a VSCode extension that provides autocomplete and other intellisense features for the [Polaris](https://polaris.shopify.com/) design system

## Installation

We don't want to publish this extension to the VSCode Extensions Marketplace yet, so we have to install the package directly from the compiled `.vsix` file.

1. (Install the `vsce` package)[https://code.visualstudio.com/api/working-with-extensions/publishing-extension#vsce]
2. `cd` to the `polaris-intellisense` directory in the project.
3. From the `polaris-intellisense` directory run the (`vsce package`)[https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions] command in your terminal. After running you should have a new `.vsix` file in the directory (ex. `polaris-intellisense-0.0.1.vsix`)
4. To install the extension run `code --install-extension EXTENSION_FILENAME.vsix`

```bash
# example of running install command
❯ code --install-extension shopify-dev-intellisense-0.0.1.vsix
```

![Success message of installed package in the terminal](docs/sample-install.png)
3.After running the code command you should see a success message. To ensure the extension was installed, open your VSCode Extension manager from the sidebase and search `@installed shopify-dev-intellisense`.
![Installed extension from the VSCode extensions menu](docs/install-extension.png)