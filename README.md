# EdgeOne Pages 部署指南

## 部署步骤

### 1. 准备工作
- 确保你有 EdgeOne 控制台的访问权限
- 准备好你的 Git 仓库或项目文件

### 2. 创建 EdgeOne Pages 项目
1. 登录 EdgeOne 控制台
2. 进入 Pages 服务
3. 点击"创建项目"
4. 选择部署方式：
   - 从 Git 仓库部署（推荐）
   - 直接上传文件

### 3. 配置项目设置
- **项目名称**：EdgeOne-Pages-BestIP2SUB
- **构建设置**：
  - 预设框架：`Other`
  - 根目录：`./`
  - 编译命令：`node build-index.js`

### 4. 环境变量配置

#### 基础配置
- `TOKEN`：访问令牌，多个用英文逗号分隔
- `HOST`：主机域名
- `UUID`：用户ID（VLESS/VMess协议）
- `PASSWORD`：密码（Trojan协议）
- `PATH`：请求路径，默认 `/?ed=2560`

#### 高级配置
- `SUBAPI`：订阅转换API，默认 `SUBAPI.cmliussss.net`
- `SUBCONFIG`：订阅转换配置文件URL
- `SUBNAME`：订阅名称，默认 `优选订阅生成器`
- `SNI`：SNI设置
- `ALPN`：ALPN设置

#### 通知配置
- `TGTOKEN`：Telegram机器人令牌
- `TGID`：Telegram聊天ID

#### 节点配置
- `ADD`：TLS节点地址，多个用英文逗号分隔
- `ADDAPI`：TLS节点API接口，多个用英文逗号分隔
- `ADDNOTLS`：非TLS节点地址
- `ADDNOTLSAPI`：非TLS节点API接口
- `ADDCSV`：CSV测速结果接口

#### 代理IP配置
- `PROXYIP`：代理IP地址，多个用英文逗号分隔
- `PROXYIPAPI`：代理IP接口

#### 其他配置
- `DLS`：测速下限，默认 `7`
- `NOTLS`：是否禁用TLS，默认 `false`
- `PS`：节点名称后缀
- `ICO`：网站图标URL
- `PNG`：网站头像URL
- `IMG`：网站背景图片URL，多个用英文逗号分隔
- `BEIAN`：网站备案信息

### 5. 部署完成
1. 点击"部署"按钮
2. 等待部署完成
3. 访问分配的域名测试功能

### 6. 自定义域名（可选）
1. 在 EdgeOne Pages 控制台中添加自定义域名
2. 配置 DNS 记录
3. 等待 SSL 证书生成

## 使用说明

### 订阅链接格式
```
https://your-domain.com/sub?host=HOST&uuid=UUID&path=PATH
```

### 支持的客户端
- Clash
- Sing-box
- Surge
- V2Ray
- Shadowrocket
- QuantumultX

### API 端点
- `/` - 主页界面
- `/sub` - 订阅生成接口
- `/test` - 测试接口

## 故障排查

### 常见问题
1. **部署失败**：检查代码语法和环境变量配置
2. **订阅无效**：检查HOST和UUID配置
3. **节点无法连接**：检查防火墙和网络设置

### 调试方法
1. 访问 `/test` 接口检查基础功能
2. 检查浏览器控制台错误信息
3. 查看 EdgeOne Pages 部署日志

## 安全建议
1. 定期更新 UUID 和密码
2. 使用 HTTPS 访问
3. 不要在公共场所暴露订阅链接
4. 建议使用自定义域名

## 支持
如遇问题，请查看项目 README 或提交 Issue。
