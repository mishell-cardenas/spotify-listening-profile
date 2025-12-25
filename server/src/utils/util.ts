// .env variables
const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;

/**
 * Token refresh helper
 */
export async function refreshAccessToken(refreshToken: string) {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken
  });

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basic}`,
    },
    body: body.toString(),
  });

  const tokenJson = await tokenRes.json();

  if (!tokenRes.ok) {
    return {
      ok: false as const,
      status: tokenRes.status,
      data: tokenJson
    };
  }

  return {
    ok: true as const,
    data: tokenJson as {
      access_token: string;
      expires_in: number
    }};
}