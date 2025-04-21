const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// 读取签名配置
const config = require('./sign-config.json');

// 检查是否存在keystore文件
if (!fs.existsSync(config.keystorePath)) {
  console.log('正在生成keystore文件...');
  const keytoolCmd = `keytool -genkey -v \
    -keystore ${config.keystorePath} \
    -alias ${config.keystore.alias} \
    -keyalg RSA \
    -keysize 2048 \
    -validity ${config.keystore.validity} \
    -storepass ${config.keystore.password} \
    -keypass ${config.keystore.keyPassword} \
    -dname "CN=${config.keystore.distinguishedName.commonName}, OU=${config.keystore.distinguishedName.organizationUnit}, O=${config.keystore.distinguishedName.organizationName}, L=${config.keystore.distinguishedName.localityName}, ST=${config.keystore.distinguishedName.stateName}, C=${config.keystore.distinguishedName.countryCode}"`;

  try {
    execSync(keytoolCmd, { stdio: 'inherit' });
    console.log('keystore文件生成成功！');
  } catch (error) {
    console.error('生成keystore文件失败:', error);
    process.exit(1);
  }
}

// 签名APK
console.log('正在签名APK...');
const apksignerCmd = `apksigner sign \
  --ks ${config.keystorePath} \
  --ks-key-alias ${config.keystore.alias} \
  --ks-pass pass:${config.keystore.password} \
  --key-pass pass:${config.keystore.keyPassword} \
  ${config.apkPath}`;

try {
  execSync(apksignerCmd, { stdio: 'inherit' });
  console.log('APK签名成功！');

  // 验证签名
  console.log('正在验证签名...');
  execSync(`apksigner verify ${config.apkPath}`, { stdio: 'inherit' });
  console.log('签名验证通过！');
} catch (error) {
  console.error('APK签名失败:', error);
  process.exit(1);
}