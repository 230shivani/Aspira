const fs = require('fs');
const content = fs.readFileSync('.env', 'utf8');
const keyLine = content.split('\n').find(line => line.startsWith('GEMINI_API_KEY'));
if (keyLine) {
    const key = keyLine.split('=')[1].trim();
    console.log('Key length:', key.length);
    console.log('Key (hex):', Buffer.from(key).toString('hex'));
}
