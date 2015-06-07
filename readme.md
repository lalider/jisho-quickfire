# Jisho-Quickfire (for Node-Webkit)

This is a Node-Webkit version of [Jisho Quickfire](https://github.com/sheodox/jisho-quickfire), that can allow users to get the app in a standalone version.

Jisho-Quickfire is a utility that runs on a NodeJS server for doing quick look-ups of multiple words in succession using [Jisho.org](http://jisho.org).

**[Here's a demonstration](http://imgur.com/a/XkNDo)**

# How to build the Node-Webkit app

1. Clone the repository
2. Go to the project folder in your Terminal
3. Run 'npm install'
4. Run 'gulp build' (it might take some minutes)
5. You will find the executable Node-Webkit apps of Jisho-Quickfire in the 'build' folder, under your platform (osx, windows, linux)

## Running Node-Webkit app

If you already built the Node-Webkit app, just open the .nw, .sh or .exe in the 'build' folder as you would normally do.
Otherwise, you can also run 'gulp run' to open the Node-Webkit app. This way can be more comfortable to test the app while developing.
