// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { appendFile, createWriteStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToWritePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');
    const writableStream = createWriteStream(fileToWritePath)

    writableStream.on('data', (chunck) => {
        appendFile(fileToWritePath, chunck)
    })

    await pipeline (
        process.stdin,
        writableStream
    )
    
};

await write();