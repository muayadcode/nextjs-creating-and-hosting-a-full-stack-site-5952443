export async function GET() {
  console.log("USER:", process.env.MONGODB_USER);
  console.log("PASS:", process.env.MONGODB_PASSWORD ? "✅ Yes" : "❌ Missing");

  return new Response(JSON.stringify({ status: "ok" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}