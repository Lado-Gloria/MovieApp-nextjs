import { MOVIE_API_KEY, MOVIE_BASE_URL } from "@/app/config";
export async function GET() {
    if (!MOVIE_BASE_URL) {
        return new Response("Movie base URL not found", {
            status: 404,
        });
    }
    if (!MOVIE_API_KEY) {
        return new Response("CHARACTER API token not found", {
            status: 400,
        });
    }
    try {
        const request = await fetch('https://hp-api.onrender.com/api/characters', {
            method: 'GET',
            headers: {




                
                "Content-Type": "application/json",
                
            },
        });
        if (!request.ok) {
            throw new Error(`Request failed with status ${request.status}`);
        }
        const responseJson = await request.json();
        return new Response(JSON.stringify(responseJson), {
            status: 200,
            statusText: 'Success',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}