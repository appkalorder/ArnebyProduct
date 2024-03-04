import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins:
    {
        tailwindcss: {},
        autoprefixer: {},
        "liveSassCompile.settings.autoprefix": [
        ],
        "liveSassCompile.settings.formats": [
            {
              // compress the css file
              "format": "compressed",
              // add .min.css as the extension
              "extensionName": ".min.css",
            }
          ],
          "liveSassCompile.settings.excludeList": [
            "/_styles/!screen.sass",
          ],
          "liveSassCompile.settings.forceBaseDirectory": "",
    },
};
