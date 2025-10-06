export async function GET () {
  return new Response ('Hello From a Next.js route Handler', {
    status: 200
  });
}