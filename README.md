
# grunt-typopro

Grunt Task for Installing [TypoPRO](http://typopro.org/) Fonts

<p/>
<img src="https://nodei.co/npm/grunt-typopro.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/grunt-typopro.png" alt=""/>

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/)
before, be sure to check out the [Getting
Started](http://gruntjs.com/getting-started) guide, as it explains how
to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```shell
npm install grunt-typopro --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-typopro");
```

## Task Options

- `directory` (default `.`):
  The directory where to store the resulting files.

- `mergecss` (default `false`):
  Whether to merge all `TypoPRO-*-*.css` files into a single `TypoPRO.css`.

- `blurb` (default `true`):
  Whether to keep the `TypoPRO-*-*.txt` "blurb" files.
  They provide meta-information about the font plus license details.

- `fonts` (default `[]`):
  The names of the font families to install.
  At least one has to be given. The available font families are:
  `Aileron`, `Aleo`, `Amble`, `AnonymousPro`, `BebasNeue`, `Bitter`, `Cabin`,
  `CaptureIt`, `ClearSans`, `Courgette`, `CourierPrime`, `CreteRound`,
  `Crimson`, `DancingScript`, `DejaVu`, `Droid`, `EBGaramond`, `FiraMono`,
  `FiraSans`, `Gentium`, `GrandHotel`, `GreatVibes`, `HHSamuel`, `Journal`,
  `KingthingsPetrock`, `KomikaHand`, `KomikaText`, `LatinModern`,
  `Lato`, `LearningCurve`, `LibreBaskerville`, `Lora`, `Merriweather`,
  `NautilusPompilius`, `Neuton`, `OpenSans`, `OstrichSans`, `Oxygen`,
  `Poetsen`, `Pompiere`, `Roboto`, `SourceCodePro`, `SourceSansPro`,
  `TeXGyre`, `TopSecret`, `Ubuntu`, `Vegur`, `VeteranTypewriter`, `Vollkorn`,
  `YanoneKaffeesatz`, `Yellowtail`.

## Task Calling

_Run this task with the `grunt typopro` command._

Task targets, files and options may be specified according to the Grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

## Usage Example

Assuming we have the following environment:

- `Gruntfile.js`:

```js
// [...]
grunt.initConfig({
    typopro: {
        options: {
            directory: "lib/typopro",
            mergecss: true,
            fonts: [ "Aleo", "GreatVibes", "TopSecret" ]
        }
    },
});
// [...]
```

- `index.html`:

```html
<!DOCTYPE html>
<html>
    <head>
        <link href="lib/typopro/TypoPRO.css" rel="stylesheet" type="text/css"/>
        <style type="text/css">
            body {
                font-family: "TypoPRO Aleo";
                font-size:   20pt;
                margin:      20px;
            }
            .tag {
                font-family: "TypoPRO Great Vibes";
                font-size:   40pt;
            }
            .draft {
                font-family: "TypoPRO Top Secret";
                font-size:   60pt;
                position:    absolute;
                top:         120px;
                right:       100px;
                transform:   rotate(-10deg);
                color:       #ff0000;
                opacity:     0.5;
            }
        </style>
    </head>
    <body>
        <div class="draft">{Draft}</div>
        Penultimate: The Quick Brown Fox Jumps Over The Lazy Dog<br/>
        <b>Penultimate: The Quick Brown Fox Jumps Over The Lazy Dog</b><br/>
        <i>Penultimate: The Quick Brown Fox Jumps Over The Lazy Dog</i><br/>
        <b><i>Penultimate: The Quick Brown Fox Jumps Over The Lazy Dog</i></b><br/>
        <p/>
        <div class="tag">Lovely Fonts!</div>
    </body>
</html>
```

Then running `grunt typopro` installs into `lib/` all files neccessary
to use the TypoPRO font families _Aleo_, _Great Vibes_ and _Top Secret_
from within `index.html`.

License
-------

Copyright (c) 2014-2015 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

