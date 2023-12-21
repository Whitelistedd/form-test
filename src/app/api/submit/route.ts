export async function POST() {
  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
    return Response.json({ status: "success" });
  } else {
    return Response.json({ status: "error" });
  }
}
