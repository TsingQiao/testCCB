const fs = require('fs');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc'; // 加密算法
const key = Buffer.from("548765cf74b977bc88adcb5fb83372a8b8222810e70f8e2001dc9985932dafed", 'hex');
const iv = Buffer.from("bf5567c35edec3e1e8afd53521c4abac", 'hex');
// console.log('key:', key)
// console.log('iv:',iv)

// 加密函数
function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted, key: key.toString('hex') };
}

// 解密函数
function decrypt(encryptedData, iv, key) {
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// 读取文件
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

// 写入文件
function writeFile(filePath, data) {
    fs.writeFileSync(filePath, data, 'utf8');
}

module.exports = {encrypt, decrypt, readFile, writeFile, key, iv}