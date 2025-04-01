import { db } from "@/lib/firebase/config";
import { collection, doc, getDocs, addDoc } from "firebase/firestore";
import axios from "axios";

export async function POST(req) {
    const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID;

    if (!IMGUR_CLIENT_ID) {
        return new Response(JSON.stringify({ error: "Imgur Client ID is missing" }), { status: 400 });
    }

    try {
        // Fetch all blog posts
        const postsSnapshot = await getDocs(collection(db, "posts"));
        const posts = postsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        let addedCount = 0;

        for (const post of posts) {
            if (!post.headerImg) {
                // Add the post as is if there's no header image
                await addDoc(collection(db, "newposts"), post);
                addedCount++;
                continue;
            }

            try {
                // Download image from Vercel Blob
                const imageResponse = await axios.get(post.headerImg, {
                    responseType: "arraybuffer",
                });

                const imageData = Buffer.from(imageResponse.data).toString("base64");

                // Upload to Imgur
                const imgurResponse = await axios.post(
                    "https://api.imgur.com/3/image",
                    { image: imageData, type: "base64" },
                    { headers: { Authorization: `Client-ID ${IMGUR_CLIENT_ID}` } }
                );

                if (imgurResponse.data.success) {
                    const newImageUrl = imgurResponse.data.data.link;
                    const postTitle = post.title || "Untitled Post";

                    const formatHTMLContent = (html, Img) => {
                        return `
                            <div class="h-44 mb-4 md:h-72 overflow-hidden relative rounded-t-lg w-full">
                                <img src="${Img || '/assets/images/blog/img-5.jpg'}" alt="${postTitle}" class="w-full h-full absolute inset-0 object-cover">
                            </div>
                            <div class="md:p-6 p-4">
                            <h1 class="lg:text-2xl text-xl font-semibold mb-6"> ${postTitle} </h1>
                                <div class="space-y-3" >${html}</div>
                            </div>
                        `;
                    };

                    // Add new post to "newposts" collection with updated image
                    await addDoc(collection(db, "newposts"), {
                        ...post,
                        headerImg: newImageUrl,
                        contentElement: formatHTMLContent(post.rawContent, newImageUrl)
                    });
                    console.log(`Post success with imgur upload ${post.title}`)
                } else {
                    // If image upload fails, add the post without modifications


                    await addDoc(collection(db, "newposts"), post);
                    console.log(`Post without imgur upload ${post.title}`)
                }
            } catch (error) {
                console.error("Error uploading image to Imgur:", error);
                // Add the post without modifications if image upload fails
                await addDoc(collection(db, "newposts"), post);
            }

            addedCount++;
        }

        return new Response(JSON.stringify({ message: `Added ${addedCount} posts to newposts collection` }), { status: 200 });
    } catch (error) {
        console.error("Migration error:", error);
        return new Response(JSON.stringify({ error: "Migration failed", details: error.message }), { status: 500 });
    }
}
