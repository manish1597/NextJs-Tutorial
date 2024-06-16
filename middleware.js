export function middleware(request) {
    return Response.json({ msg: 'hello there' });
  }
  
  export const config = {
    matcher: '/about',
  };