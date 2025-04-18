# imdone-api

A plugin api for [imdone: Kanban for Developers: In Your Markdown and Code](https://imdone.io/).

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
1. Review the plugin [api docs](https://imdone.github.io/imdone-api/)
2. To make your plugin available for all imdone users, open a PR at [imdone/imdone-plugins](https://github.com/imdone/imdone-plugins). 

## Naming your plugin

To identify your plugin imdone requires an implementation of the Plugin class `get pluginName` method. This method should return a string that is the name of your plugin. The name should follow these guidelines:

- Use camelCase for the name of your plugin. For example, `myPlugin`.
- Don't use the name `imdone` in your plugin name. This is reserved for the imdone core.
- Use a name that describes what your plugin does.
- Use a name that is unique to your plugin. This will help avoid conflicts with other plugins.
## Join the discussion on [discord](https://discord.gg/ZAETw2dC)