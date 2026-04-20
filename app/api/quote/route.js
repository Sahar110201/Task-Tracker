// Backend API route to fetch quote, resolves CORS issues
export async function GET() {
  try {
    const res = await fetch("https://zenquotes.io/api/random");

    const data = await res.json();

    return Response.json({
      text: data[0].q,
      author: data[0].a
    });

  } catch (error) {
    return Response.json(
      { error: "Failed to fetch quote" },
      { status: 500 }
    );
  }
}