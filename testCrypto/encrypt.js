const tools = require('./tools')

// 主流程
const inputFilePath = 'input.txt'; // 输入文件
const encryptedFilePath = 'encrypted.txt'; // 加密后文件

try {
    // 读取文件内容
    const fileContent = tools.readFile(inputFilePath);
    
    // 加密内容
    const { iv, encryptedData, key } = tools.encrypt(fileContent);
    
    // 写入加密内容到新文件
    tools.writeFile(encryptedFilePath, encryptedData);
    
    console.log('文件已加密并写入:', encryptedFilePath);
} catch (error) {
    console.error('操作失败:', error);
}
