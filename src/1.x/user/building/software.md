# Software

There are two ways to put the firmware on the ESP32:

- Uploading the .bin files
- Compiling it yourself

## Uploading the bin files

There are two bin files, one for the firmware itself and one for the contents of the ESP32's build-in flash memory (SPIFFS).

You can download the [latest release](https://github.com/pixel-art-frame/firmware/releases) and use [esptool](https://github.com/espressif/esptool) to upload the files to the ESP32.

::: warning
The releases in the [firmware repo](https://github.com/pixel-art-frame/firmware) are build for the Pixel Art Frame PCB!

If you have for example wired your matrix differently you have to compile the firmware yourself.
:::

## Compiling it yourself

The Pixel Art Frame is built with [platformio](https://platformio.org/).
To start using platformio, install VS code and install the platformio extension.

After that, clone the firmware repo:

```
git clone https://github.com/pixel-art-frame/firmware.git
```

Open the project in platformio and click on build!

A compiled version should appear in the `.pio/build/wemos_d1_mini32` directory