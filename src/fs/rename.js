// implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
import { resolve } from 'node:path';
import { constants, rename as fsRename, } from 'node:fs/promises';
import { getDirName } from '../../utils/getDirName.js';
import { checkIfFileExist } from '../../utils/checkIfFileExist.js';

const rename = async () => {
    const __dirname = getDirName(import.meta.url);
    const sourceFilePath = resolve(__dirname, 'files', 'wrongFilename.txt');
    const renamedFilePath = resolve(__dirname, 'files', 'properFilename.md');
    const isRenamedFileExists = await checkIfFileExist(renamedFilePath, constants.R_OK)

    if (isRenamedFileExists) throw new Error('FS operation failed')

    try {
        await fsRename(sourceFilePath, renamedFilePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();