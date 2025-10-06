export async function GET () {
  return new Response ('Hello From a Next.js route Handler', {
    status: 200
  });
}


export async function POST () {
  return new Response ('COMING FROM FUTURE, GOD IS GREAT', {
    status: 200
  });
}
