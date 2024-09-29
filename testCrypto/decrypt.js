const fs = require('fs');
const tools = require('./tools')

const encryptedFilePath = 'encrypted.txt'; // 加密后文件
const decryptedFilePath = 'decrypted.txt'; // 解密后文件

try {
    // 读取加密文件，并解密
    const encryptedFileContent = tools.readFile(encryptedFilePath);
    const decryptedContent = tools.decrypt(encryptedFileContent, tools.iv, tools.key);
    
    // 写入解密后的内容到新文件
    tools.writeFile(decryptedFilePath, decryptedContent);
    
    console.log('文件已解密并写入:', decryptedFilePath);
} catch (error) {
    console.error('操作失败:', error);
}
