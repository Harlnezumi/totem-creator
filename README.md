# Custom Minecraft Totem Generator
## Description
A fully client-side web application that allows users to instantly generate custom Minecraft Resource Packs for the "Totem of Undying". The tool processes images and audio directly in the browser, packaging them into a downloadable `.zip` file formatted for specific Minecraft versions.

## Usage
- Follow the link [harlnezumi.github.io/totem-creator](harlnezumi.github.io/totem-creator/)
- Drop an image into the Texture zone.
- Drop an audio file into the Sound zone.
- Open Advanced Settings to apply a custom Pack Icon, Name, and Description.
- Select the target Minecraft version from the dropdown.
- Click Download Resource Pack.

## Dependencies
- `JSZip` - For generating the resource pack .zip archive.
- `FileSaver.js` - For triggering the client-side download.
- `.js` - For encoding audio arrays to .ogg format.
