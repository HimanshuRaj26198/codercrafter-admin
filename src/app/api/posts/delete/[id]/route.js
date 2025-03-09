import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase/config"; // Make sure to import your Firebase config

export const DELETE = async ({ params }) => {
    params = await params;
    const { id } = params;
    try {
        // Extract ID from request URL
        if (!id) {
            return new Response(JSON.stringify({ message: "ID is required" }), { status: 400 });
        }

        // Reference to the document
        const docRef = doc(db, "posts", id);

        // Delete document
        await deleteDoc(docRef);

        return new Response(JSON.stringify({ message: "Post deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting the document:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
};
