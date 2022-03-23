# Root RPG Character Sheet for Roll20
Root RPG Character Sheet development for the Roll20 platform.

The sheet is split out into separate files to better manage the different modules of the character sheet. The `build.py` script is used to compose them all into one HTML and one CSS file with everything properly contained.

The parts may refer to any submodule in their folder using the custom command
```
<!--:external: src="module name"[ only="html/css/js"]:-->
```
which the build script identifies and handles.

## tmp & prod directories
* `tmp` is the directory `build.py` uses to work through and post process the files in.  
* `prod` is where the generated sheet files go once done.

# TODO
* Integrate all the core material:
  * Moves lists
  * Drives lists
  * Items lists
  * Starting character sheet values
  * etc. ...
* Character creator interface for choosing vagabond class and starting values
* NPC character sheet for the DM to use
* Probably a lot more ...

