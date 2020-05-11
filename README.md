This repo is to demonstrate an issue in VSCode, where the order of folders listed in [`project.code-workspace`](./project.code-workspace) affects TS Server's ability to correctly find the relevant type definitions.

Watch the [demo video](https://raw.githubusercontent.com/Merott/demo-vscode-issue/master/recording.mov) to see the issue.

To reproduce:

1. Clone/download the repository
2. Run `yarn install` in both `app` and `api` directories
3. Open [`project.code-workspace`](./project.code-workspace) with VSCode
4. Make sure to have the [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extension installed
   _NOTE: The issue doesn't seem to have anything to do with Vue or the Vetur extension, but I've run into it while working on a Nuxt app, and I don't know how to reproduce it in a basic TS project yet. I've done all I can to setup a demo repo that's as simple as possible._
5. Verify that [`app/pages/index.vue`](./app/pages/index.vue) contains no errors
6. Open [`project.code-workspace`](./project.code-workspace) with a text editor, and change the order of the folders, putting `app` after `api`
7. Back in VSCode, notice [`app/pages/index.vue`](./app/pages/index.vue) reports an error for `asyncData`
