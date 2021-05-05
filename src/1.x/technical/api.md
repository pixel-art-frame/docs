# API

The Pixel Art Frame has a HTTP API which you can use to control it.
This API is used by the [web interface](./web).

[[toc]]

## Endpoints

### GIFs
- `POST /gif` - Play a specific GIF
::: details Details
**Response:** text/plain, `OK`

**Arguments:**
- `name` Full path to the GIF.

For example:
`POST /gif?name=/gifs/pinball/MM.gif`
:::


- `GET /gif/name` - Get the current playing GIF name
::: details Details
**Response:** text/plain, current GIF name

**Arguments:** none
:::

- `GET /gif/next` - Advance to the next GIF
::: details Details
**Response:** text/plain, current GIF name

**Arguments:** none
:::

- `GET /gif/autoplay` - Get the state of autoplay
::: details Details
**Response:** text/plain, `1` or `0`

**Arguments:** none
:::

- `POST /gif/autoplay` - Set the state of autoplay
::: details Details
**Response:** text/plain, `1` or `0`

**Arguments:**
- `value` `1` or `0`
:::

### Configuration

- `POST /config/wifi` - Set the WiFi credentials
::: details Details
**Response:** text/plain, `Restart to apply changes`

**Arguments:**
- `ssid` SSID of the WiFi network
- `pass` Password of the WiFi network
:::

- `GET /wifi/scan` - Get a list of available AP's
::: details Details
**Response:** application/json

Example:

``` json
[
    {
        "ssid": "SSID",
        "rssi": "74",
        "auth": "WPA2_PSK"
    }
]
```

**Arguments:** none
:::

- `GET /restart` - Restart the device
::: details Details
**Response:** none

**Arguments:** none
:::

- `GET /ota` - Start OTA mode
::: details Details
When called it starts the Over The Air (OTA) mode for updating the firmware.

This mode does not automatically end, a restart or firmware update is required.

**Response:** text/plain, `Started OTA mode`

**Arguments:** none
:::


### Panel
- `GET /panel/brightness` - Get the current brightness
::: details Details
**Response:** text/plain, the current brightness as a percentage.

**Arguments:**
- `value` brightness value as a byte (0-255)

:::

- `POST /panel/brightness` - Set the current brightness
::: details Details
**Response:** text/plain, the current brightness as a byte (0-255).

**Arguments:** none
:::


### Files

- `GET /files` - Get a list of files
::: details Details
This lists the files per page. 

Pagination is sequential. To restart at page 0 pass the parameter `firstPage`.

If you do not pass the `firstPage` parameter the Pixel Art Frame will return the next page after each request.
For example, the first request will return page 0, the second request returns page 1 and so on.

**Response:** application/json, List of files

Example response:

``` json
{
    "page": "1",
    "pageSize": "250",
    "files": [
        "/gifs/file1.gif",
        "/gifs/file2.gif",
        "/gifs/file3.gif"
    ]
}
```

**Arguments:**
- `firstPage` Return the first page (optional) 
:::

- `GET /file/delete` - Delete a file from the SD card
::: details Details

**Response:** text/plain, `Deleted File:` with the filename

**Arguments:**
- `name` The full path to the file

For example: `/gifs/file1.gif`
:::

- `GET /file` - Get a file
::: details Details

**Response:** application/octet-stream, the requested file

**Arguments:**
- `name` The full path to the file

For example: `/gifs/file1.gif`
:::

- `POST /upload` - Upload a file
::: details Details

Based on [esp32-asyncwebserver-fileupload-example](https://github.com/smford/esp32-asyncwebserver-fileupload-example)

**Response:** none

**Arguments:**
- `data` The file
:::

- `POST /spiffs/upload` - Upload a file to SPIFFS
::: details Details

This is intended to upload the web interface when it's missing.

Based on [esp32-asyncwebserver-fileupload-example](https://github.com/smford/esp32-asyncwebserver-fileupload-example)

**Response:** none

**Arguments:**
- `data` The file
:::

### Indexes
- `GET /index/reset` - Reset the index
::: details Details

This deletes the `.index` directory which triggers the indexing process

**Response:** text/plain, `Indexes deleted`

**Arguments:** none
:::

- `GET /index/count` - Get the amount of indexes
::: details Details

This is the amount of index files in the `.index` directory.

**Response:** text/plain, Size of the index directory

**Arguments:** none
:::


- `GET /index/{indexFile}` - Get a specific index
::: details Details

**Response:** text/plain, Contents of the index file. Or 404 if the file does not exist

For example:

```
/gifs/file1.gif
/gifs/file2.gif
/gifs/file3.gif
```

**Arguments:**
- `indexFile`

Index filenames start with `index.` and end with an integer.

For example:

```
index.0
index.1
```

:::

### Time

- `GET /time/show` - Show to time now
::: details Details

**Response:** text/plain

**Arguments:** none
:::

- `GET /time/settings` - Get the time settings
::: details Details

**Response:** application/json

Example:

```
{
    "enable": "1",
    "interval": "60",
    "offset": "3600",
    "show": "3"
}
```

**Arguments:** none
:::

- `POST /time/settings` - Set the time settings
::: details Details

**Response:** text/plain

**Arguments:**
- `enable` `1` or `0`
- `interval` The interval in seconds. (How often should we display the time?)
- `offset` The timezone offset in seconds. For example:

GMT +1 = 3600
GMT +8 = 28800
GMT -1 = -3600
GMT 0 = 0

- `show` How long the time should be displayed in seconds

:::

### Text
- `POST /text` - Display text on the panel
::: details Details

**Response:** text/plain, `OK`

**Arguments:**

**Required:**
- `text` Text to show

**Optional:**
- `color` RGB565 color as integer, defaults to red.

To get the RGB565:

`Rgb565 = (((red & 0xf8)<<8) + ((green & 0xfc)<<3)+(blue>>3))`

[Want to know more about RGB565?](http://www.barth-dev.de/online/rgb565-color-picker/)

- `size` Text size, defaults to 1

Size 1 is 6x8

Size 2 is 12x16

Size 3 is 18x24

And so on

- `x` X position of the text, defaults to 4
- `y` Y position of the text, defaults to 4
- `wrap` `1` or `0` if the text should be wrapped, defaults to 1
- `clearScreen` `1` or `0` if the screen should be cleared, defaults to 1

- `scroll` `1` or `0` if the text should be scrolling, defaults to 0

- `speed` ONLY if **scroll = 1**, amount in ms between each text movement

- `delay` ONLY if **scroll = 0**, the time in ms to show the text

:::

### State

To learn more about states read [this](./states)

- `GET /state` - Get the current state
::: details Details

**Response:** text/plain, index of the state

**Arguments:** none
:::

- `POST /state` - Set the current state
::: details Details

**Response:** text/plain, `Changing state to:` + new state index

**Arguments:**
- `state` State index, to see an overview of the states go to [states](./states)
:::