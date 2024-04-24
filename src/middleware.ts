import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (req.cookies.get('uuid')) {
    return res;
  }

  const uuid = Math.random().toString(36).substring(2, 15);
  res.cookies.set('uuid', uuid, {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
  });

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
