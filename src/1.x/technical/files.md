# Files

This article describes how GIFs are loaded from the SD card.

The Pixel Art Frame loads GIFs randomly or sequential. 
Sequential loading is easy because we can utilize the `openNextFile` in `fs::FS`. 
Randomly is a bit harder because to list all the files in a directory we have to loop over them all, which is slow.

## Queue
GIFs are loaded into a queue so that the choosing of what GIF to play next does not have to happen at the moment that the GIF has to change.
The primary reason for this is to make transitions faster.

The queue gets filled by a load strategy on the second core so that it does not interfere with the GIF that is displayed.

## Strategies

To load GIFS the Pixel Art Frame has different strategies which can be set via the config file.

By default the Pixel Art Frame uses the `indexed` strategy.

## Indexed

The indexed load strategy works by first creating index files for the GIFs in the `/gifs` directory.
Those index files are stored on the SD card in the `.index` directory.

When this directory does not exist the indexing process is triggered, this check occurs everytime that a file is loaded.

### Index file

An index file is a file that is stored in the `.index` directory on the SD card.
The filename starts with `index.` and ends with a number.

Each line of this file contains a full path to a GIF on the SD card.

### Indexing

When there is no `.index` folder the indexing process starts.

During this process all the files on the SD card get scanned and put into the index file.

This is a big task for the ESP32 when there are many files, it is recommended to split files into multiple directory with max. 500 GIFs for performance reasons.

Indexing 1000 files in a single directory should take about 6 minutes.

### Loading a file

At startup the indexed strategy will put all the index files into a list. 

Each time that the queue needs to be filled with a new file a random item is retrieved from the list of indexes.

After that the index file is opened and a random line is read and put into the queue.


## Sequential 

With the sequential strategy the files get loaded one by one.

This supports subdirectories but a lot of subdirectories will hurt performance.

This strategy might be useful when you do not have a lot of GIFs.

To activate this strategy you have to upload a config.json file to SPIFFS with the `gif_load_strategy` set to `0`