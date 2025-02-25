"use client";
import { useState, useEffect, useContext } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { contentContext } from "@/lib/context/ContentContext";
import axios from "axios";

function CMSForm() {
    const [content, setContentValue] = useState('');
    const { dispatch, data } = useContext(contentContext);

    useEffect(() => {
        if (data.contentElements) {
            setContentValue(data.contentElements);
            editor?.commands.setContent(data.contentElements);
        }
    }, [data.contentElements]);

    const formatHTMLContent = (html) => {
        return `
            <div class="tube-card">
                <div class="h-44 mb-4 md:h-72 overflow-hidden relative rounded-t-lg w-full">
                    <img src="/assets/images/blog/img-5.jpg" alt="" class="w-full h-full absolute inset-0 object-cover">
                </div>
                <div class="md:p-6 p-4">
                    ${html}
                </div>
            </div>
        `;
    };

    const printContent = (html) => {
        const formattedHTML = formatHTMLContent(html);
        dispatch({ type: "create", payload: { contentElements: formattedHTML } });
        setContentValue(formattedHTML);
    };

    const imageHandler = async () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("image", file);

                try {
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/image/upload`, formData);
                    const imageUrl = response.data.imgUrl;

                    if (editor) {
                        editor.chain().focus().setImage({ src: imageUrl }).run();
                    }
                } catch (error) {
                    console.error("Error uploading image:", error);
                }
            }
        };
    };

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Image.configure({ allowBase64: false }),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            printContent(editor.getHTML());
        },
    });

    if (!editor) {
        return <p>Loading editor...</p>;
    }

    return (
        <div style={{ height: "90%" }}>
            <button onClick={imageHandler} className="p-2 bg-blue-500 text-white rounded mb-2">Upload Image</button>
            <EditorContent editor={editor} style={{ height: "100%" }} />
        </div>
    );
}

export default CMSForm;
