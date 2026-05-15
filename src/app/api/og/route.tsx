import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const title = searchParams.get('title') || 'Shiro Bot Documentation';
    const description = searchParams.get('description') || 'Aprenda a configurar e usar a Shiro em seu servidor.';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#050505',
            backgroundImage: 'radial-gradient(circle at 50% 50%, #5865f21a 0%, #050505 100%)',
          }}
        >
          {/* Logo Container */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '120px',
              height: '120px',
              backgroundColor: '#5865f226',
              borderRadius: '24px',
              border: '2px solid #5865f24d',
              marginBottom: '40px',
            }}
          >
             <img
              width="80"
              height="80"
              src="https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/default/Shiro_Icon_Rounded_color.webp"
              style={{ borderRadius: '16px' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0 80px',
            }}
          >
            <h1
              style={{
                fontSize: '70px',
                fontWeight: '900',
                letterSpacing: '-0.05em',
                color: 'white',
                lineHeight: '1.1',
                margin: '0 0 20px 0',
                fontFamily: 'Inter',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '30px',
                color: '#94a3b8',
                lineHeight: '1.4',
                margin: '0',
                maxWidth: '800px',
              }}
            >
              {description}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#5865f2',
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            <span>docs.shirobot.xyz</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
