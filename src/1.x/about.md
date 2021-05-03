# About

The Pixel Art Frame is a project that is hugely inspired by the [Game Frame](https://www.kickstarter.com/projects/jerware/game-frame-the-art-of-pixels).
By combining a RGB LED Matrix and a microcontroller we can display our favorite (animated) pixel art. 


## Similair projects
There are a few similair projects to this one:

- [Game Frame](https://www.kickstarter.com/projects/jerware/game-frame-the-art-of-pixels)
- [RPI2DMD](https://www.neo-arcadia.com/forum/viewtopic.php?t=66819)
- [DMDClock](https://gitlab.com/modernhackerspace/dmdclock)

## Roadmap

There are a few features on the roadmap:

- MQTT support

For integrating with smart home systems to for example show a weather GIF based on the actual weather.

- Better/more fonts

Right now there is only one, not so fancy, font

- Better SD error handling

When the SD is removed or when the mounting fails it tries to automatically recover. 
But this doesn't work very smoothly yet.

- SD on the PCB

Right now the SD is on a seperate PCB, the idea behind this was that you are able to mount it somewhere that's accesible.
But it would be nice to have it on the PCB because uploading images is possible via the web interface.

- 3D print files for casing

- Schedule indexing

For large collections of art it would be beneficial to schedule the indexing to run for example at night.

- SD card optimizer

To speed up indexing you can spread your files over multiple folders. 
A script / tool to do this automatically from a PC would be great.

- mDNS

To easily access the web interface.

- Transitions

For example fade out / fade in