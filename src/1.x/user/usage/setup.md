# Inital Setup

To setup your Pixel Art Frame you first have to load all the GIFS onto the SD card.

After that you can, optionally, connect it to WiFi so that you can control it.

## Art (GIFS)

First of all you have to put your art (GIFs) on the SD card. 
To do this, plug your SD card into a computer and create a directory with the name `gifs` at the root of the SD card.

::: tip
In order to organize your GIF you can create **one** level of subdirectory inside your `gifs` folder.

For example:
```
/gifs/art_1/
/gifs/art_2/
/gifs/art_3/
/gifs/art_4/
```

But **NOT**:
```
/gifs/landscapes/animated/
/gifs/landscapes/stills/
/gifs/landscapes/favorites/
```
:::

After you've loaded your art onto your SD card you can plug the SD card in and power up your Pixel Art Frame.
The Pixel Art Frame should now start indexing. 

Indexing is the process of listing all the files on the SD card and putting that list into an index file.
This is neccecary to randomly display art.

You'll see the text indexing on the matrix with a number that keeps going up, this number is the total of counted files on your SD card.

Indexing can take a while depending on how many files you have.

::: tip
Indexing will become slow if you have lots of GIFs in a single directory, to speed this up you can spread your GIFS into multiple directories.
For example if you have 1000 GIFs:

```
/gifs/art_1/ - 250 GIFS
/gifs/art_2/ - 250 GIFS
/gifs/art_3/ - 250 GIFS
/gifs/art_4/ - 250 GIFS
```

The fewer files in a directory the faster that directory is indexed. The maximum recommended amount of GIFs per directory around 400.
:::

After indexing is done the Pixel Art Frame should start displaying your art.

## WiFi

If you haven't configured WiFi the Pixel Art Frame will create it's own access point with the name `Pixel Art Frame` and password `PixelArt`.

You can use your smartphone, laptop or PC to connect to this access point.

When you're connected you can open your web browser and go to `http://192.168.4.1`. You should see the Pixel Art Frame web interface.

In the menu you can navigate to `WiFi` and connect to your own access point. 
After that, reboot the Pixel Art Frame and it should connect to your network.

Check your DHCP server to find out which IP adress the Pixel Art Frame got to connect to the web interface.