import { db } from "@/lib/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";



export async function GET() {
    try {
        let colQuery = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const colRef = await getDocs(colQuery);
        const blogs = colRef.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return new Response(JSON.stringify(blogs), { status: 200 });
    } catch (error) {
        console.error("Error fetching sitemap data:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
}