// API helper function to fetch a random motivational quote
export async function fetchQuote() {
    try {
        const res = await fetch("/api/quote");

        if (!res.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await res.json();

        // Date return from backend routing
        return data;;

    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}