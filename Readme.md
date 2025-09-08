# Node.js basics

You can read task assignment [here](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md)

## Prerequesties
Node js >= 22.14.00 should be installed

## Get started
1. Clone this repository
```
  git clone https://github.com/VoitehovichXenia/node-nodejs-basics
```
2. Checkout to ``task-1-node-js-basics`` branch
```
  git checkout task-1-node-js-basics
```
3. To run application use following commands described in [Usage](#usage) section

## Usage

### File system (src/fs)
- create.js - implement function that creates new file ``fresh.txt`` with content "I am fresh and young" inside of the ``files`` folder
(if file already exists Error with message FS operation failed must be thrown)

  To check this part, please run next command:
```
    npm run fs:create
```
- copy.js - implement function that copies folder ``files`` files with all its content into folder ``files_copy`` at the same level (if files folder doesn't exist or files_copy has already been created Error with message FS operation failed must be thrown)

  To check this part, please run next command:
```
    npm run fs:copy
```
- rename.js - implement function that renames file ``wrongFilename.txt`` to ``properFilename`` with extension ``.md`` (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)

  To check this part, please run next command:
```
    npm run fs:rename
```
- delete.js - implement function that deletes file ``fileToRemove.txt`` (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

  To check this part, please run next command:
```
    npm run fs:delete
```
- list.js - implement function that prints array of all filenames from ``files`` folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

  To check this part, please run next command:
```
    npm run fs:list
```
- read.js - implement function that prints content of the ``fileToRead.txt`` into console (if there's no file ``fileToRead.txt`` Error with message FS operation failed must be thrown)

  To check this part, please run next command:
```
    npm run fs:read
```

### Command line interface(src/cli)
- env.js - implement function that parses environment variables with prefix ``RSS_`` and prints them to the console in the format ``RSS_name1=value1; RSS_name2=value2``

  To check this part, please run next command:
```
    npm run cli:env
```
- args.js - implement function that parses command line arguments (given in format ``--propName value --prop2Name value2``, you don't need to validate it) and prints them to the console in the format ``propName is value, prop2Name is value2``

  To check this part, please run next command:
```
    npm run cli:args
```

### Modules(src/modules)
- cjsToEsm.cjs - rewrite it to it's equivalent in ECMAScript notation (and rename it to esm.mjs)

  To check this part, please run next command:
```
    npm run modules
```

### Hash (src/hash)
- calcHash.js - implement function that calculates SHA256 hash for file ``fileToCalculateHashFor.txt`` and logs it into console as hex using Streams API

  To check this part, please run next command:
```
    npm run hash
```

### Streams (src/streams)
- read.js - implement function that reads file ``fileToRead.txt`` content using ``Readable Stream`` and prints it's content into process.stdout

  To check this part, please run next command:
```
    npm run streams:read
```
- write.js - implement function that writes process.stdin data into file ``fileToWrite.txt`` content using Writable Stream

  To check this part, please run next command:
```
    npm run streams:write
```
- transform.js - implement function that reads data from ``process.stdin``, reverses text using ``Transform Stream`` and then writes it into ``process.stdout``

  To check this part, please run next command:
```
    npm run streams:transform
```

### Zlib (src/zip)
- compress.js - implement function that compresses file ``fileToCompress.txt`` to ``archive.gz`` using zlib and Streams API

  To check this part, please run next command:
```
    npm run zip:compress
```
- decompress.js - implement function that decompresses ``archive.gz`` back to the ``fileToCompress.txt`` with same content as before compression using zlib and Streams API

  To check this part, please run next command:
```
    npm run zip:decompress
```

### Worker Threads (src/wt)
- worker.js - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
- main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file ``worker.js`` and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
data - value from worker in case of success or null in case of error in worker
The results in the array must be in the same order that the workers were created

  To check this part, please run next command:
```
    npm run wt
```

### Child Processes (src/cp)
- cp.js - implement function spawnChildProcess that receives array of arguments args and creates child process from file script.js, passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
child process stdin should receive input from master process stdin
child process stdout should send data to master process stdout

  To check this part, please run next command:
```
    npm run cp
```
