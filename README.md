# imdone-api

A plugin api for [imdone: Kanban with extreme context](https://imdone.io/).
Starting in Imdone 2.0, you will be able to search and download plugins. In the mean time, you can get started creating and sharing plugins with the community.

## Creating a plugin for Imdone
1. Create a `plugins` folder under your project's `.imdone` folder.
   `/my/project/path/.imdone/plugins`
1. Create a folder for your plugin under `plugins` and give it a name like `MyPlugin`.
   My directory structure looks like this...
   ```bash
   .imdone
   ├── config.yml
   └── plugins
       └── myPlugin
           ├── index.js
           ├── node_modules
           ├── package-lock.json
           └── package.json
   ```
1. Look at [imdone/imdone-sample-plugin: A sample plugin for Imdone](https://github.com/imdone/imdone-sample-plugin) for inspiration.
2. To make your plugin available for all imdone users, open a PR at [imdone/imdone-api](https://github.com/imdone/imdone-api). 

## Join the discussion on [discord](https://discord.gg/ZAETw2dC)