// API helper function to fetch a random motivational quote
export async function fetchQuote() {
    try {
        const res = await fetch("https://zenquotes.io/api/random");

        if (!res.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await res.json();

        // ZenQuotes returns an array
        return {
            text: data[0].q,
            author: data[0].a
        };

    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}