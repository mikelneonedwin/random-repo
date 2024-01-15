import { toHetzotd } from '../Hetzotd/translator.js'
import { writeFileSync } from 'fs'
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let txt = `English -> Hetzotd\n`;
for(const char of chars){
    txt += `${char} -> ${toHetzotd(char)}\n`
}
writeFileSync('trans.txt', txt, 'utf-8');