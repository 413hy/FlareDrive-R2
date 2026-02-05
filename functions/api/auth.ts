import { is_authenticated } from "@/utils/auth";

export async function onRequest(context) {
  if (!is_authenticated(context)) {
    const headers = new Headers();
    headers.set("WWW-Authenticate", 'Basic realm="需要登录"');
    return new Response("没有操作权限", { status: 401, headers });
  }

  return new Response("access", { status: 200 });
}
