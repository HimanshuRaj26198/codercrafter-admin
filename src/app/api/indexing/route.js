import { google } from "googleapis";
import fs from "fs";

export async function POST(req, res) {
    const body = await req.json();
    console.log("Received body:", body);

    const { url, type } = body;



    if (!url || url == "") {
        return new Response(JSON.stringify({ message: "URL is required" }), { status: 400 });
    }
    let googleCredential = JSON.parse(process.env.GOOGLE_CLOUD_KEY)
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: googleCredential,
            scopes: ["https://www.googleapis.com/auth/indexing"],
        });

        const client = await auth.getClient();

        const apiUrl = "https://indexing.googleapis.com/v3/urlNotifications:publish";
        const response = await client.request({
            url: apiUrl,
            method: "POST",
            data: {
                url,
                type: type || "URL_UPDATED",
            },
        });
        return new Response(JSON.stringify({ message: "URL Submitted Successfully", data: response.data }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}
