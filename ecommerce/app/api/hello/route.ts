export async function GET() {
 
  return new Response(JSON.stringify({ message: "hello from NExt.JS route" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}