# States

The matrix is controller by states. There are several states available but only one active.

The states van be found in [Global.h](https://github.com/pixel-art-frame/firmware/blob/main/include/Global.h).

There is a global variable called `target_state` to control state changes. 
When the `target_state` is valid the matrix state is switched.