// EdgeOne Pages 基础测试
export async function onRequest(context) {
    const { request, env } = context;
    
    return new Response('EdgeOne Pages 适配测试成功！\n\n' + 
        `请求URL: ${request.url}\n` +
        `请求方法: ${request.method}\n` +
        `User-Agent: ${request.headers.get('User-Agent') || '未知'}\n` +
        `时间: ${new Date().toISOString()}`, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
