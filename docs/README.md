# VTEX Store Maintenance
## Description

VTEX Store Maintenance is a small app that puts your side into a maintenance mode when installed.
As soon as it is active, any route will redirect to /maintenance
Uninstall to put the store back live.

:loudspeaker: **Disclaimer:** Don't fork this project; use, contribute, or open issue with your feature request.

## Table of Contents

- [Usage](#usage)
- [CSS Handles](#css-handles)


## Usage

Just install the app in order to put your page into a maintenance mode.

```bash
  vtex install vtex.store-maintenance
```
The app then will redirect any user browsing the page to /maintenance.
If you have no content at /maintenance, this app will make sure to render at least a minimal message.
It's up to you to design the /maintenance page the way you like to have it.

We do offer a theme that takes care of the basics. You can clone it from [here](https://github.com/vtex-apps/store-maintenance-theme) and install it alongside your native store theme. This is not mandatory to do, but offers a basic layout that you can start working on.
