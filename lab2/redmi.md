# EventLoop 

JS is a synchronous and single threaded byfault 
 
 ## there can be async behaviour 

-with  browserAPI-
setTimeout ,setInterval , setImmediate , nextTick<br>
-with Promises<br>
-with Event handlers

## promise 
a function not executed immediately that it must be executed after a while it has some status during the execution and final it may resolve 

## callback function 
that pass as argument or the parameter to another function
<hr>

### Modern java script is divided into two categories

1) common js ( .cjs) ---> support OOPS --> require
 - priority ( nextTick , promise  , setImmediate / setTimeout )
2) moduleJS ( .mjs) ---> follow modular approach  --> import 
- priority ( promise , nextTick , setImmediate / SetTimeout )

<hr>

### Important Topic 
-promises<br>
-synchr and asynchr
# File System (FS module)
FS module directly communicate with operating system rather than browser the common operation on a file or folder are 
- File : Write File , Read File , Append File
- Folder : all function are promise so it must be called with await keyword 
