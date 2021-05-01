# Hardware

The Pixel Art Frame is build upon the [I2S DMA](https://github.com/mrfaptastic/ESP32-HUB75-MatrixPanel-I2S-DMA) library by mrfaptastic.

To build one you need the following components:

- A 64x64 or two 64x32 RGB LED Matrices
- ESP32
- SD card PCB
- Power supply

## Matrix

The matrix is what you see, it is the grid of RGB LED's where the images get displayed.

Currently only two 64x32 panels (128x32 in total) and 64x64 panels are supported.

### Connecting the Matrix

The Pixel Art Frame firmware does not differ from the standard wiring of the I2S DMA library.
You can find a guide on the [GitHub page](https://github.com/mrfaptastic/ESP32-HUB75-MatrixPanel-I2S-DMA#2-wiring-esp32-with-the-led-matrix-panel) on how to connect the matrix to your ESP32.

::: warning
Not all matrixes are supported!
Take a look [here](https://github.com/mrfaptastic/ESP32-HUB75-MatrixPanel-I2S-DMA#panels-supported) to find out if your matrix is support
:::

::: tip
You are not limited to 64x64 or 128x32!
The [I2S DMA library](https://github.com/mrfaptastic/ESP32-HUB75-MatrixPanel-I2S-DMA#panels-supported) has excelent instructions on what matrix sizes are supported
:::

### Power requirements

These panels can draw a lot of current and having a good power supply is critical. It is recommended to add a 1000-2000uf capacitor on each panel across the GND and VCC pins.

See [Power, Power and Power](https://github.com/mrfaptastic/ESP32-HUB75-MatrixPanel-I2S-DMA#power-power-and-power) for more information.

## ESP32

The ESP32 is the brain of the Pixel Art Frame. An ESP32 is a tiny microcontroller that will control the matrix.

Depending on what you are going to do with this project you might buy a pre-assembled and pre-flashed board or a development board.

::: tip
Just want to build a Pixel Art Frame? 

[Buy the Pixel Art Frame pre-assembled and pre-flashed on Tindie!](https://tindie.com)
:::

### Why the ESP32?

The ESP32 is a powerful microcontroller. The main reason why this project uses a ESP32 is for the build-in WiFi.

This makes it easy to add external cont rol via a web interface.

The existance of good libraries is also a primary reason for choosing the ESP32.

Another great feature of the ESP32 is that it has two cores. One core can be used to drive the matrix and the other for more intensive or scheduled tasks.

### Development boards

You can use any ESP32 development board but to make your life easier there are existing development boards specific for this type of panels:
- Brian Lough's [ESP32 I2S Matrix Shield](http://blough.ie/i2smat/)
- Charles Hallard's [WeMos Matrix Shield](https://github.com/hallard/WeMos-Matrix-Shield-DMA)

The Pixel Art Frame was initially developed with Brian Lough's I2S Matrix Shield.

## SD card

All the images are stored on the SD card.

The SD card is on a seperate PCB which can be ordered cheaply from Chinese manufactureres.

The reason for this is so that you can mount it in an easy accessible locations.

There seem to be multiple names for the same PCB, here is a picture of it:

![Micro SD PCB](/microsd_board.jpg)

Connect the SD PCB to your ESP:

| ESP32         | SD PCB        |
| ------------- |:-------------:|
| IO22          | CS            |
| IO32          | MISO          |
| IO21          | MOSI          |
| IO33          | SCK           |
| Any 3.3V pin  | VCC           |
| Any GND pin   | GND           |

## Power supply

These panels can draw a lot of current, there is a great article on powering these matrixes to find out what power supply you need.

[A word about power](https://github.com/hzeller/rpi-rgb-led-matrix/blob/master/wiring.md#a-word-about-power)

## Where to get the parts

There are a lot of places you can buy the hardware, but getting it directly from China seems to be the cheapest on sites like [AliExpress](http://aliexpress.com/).

