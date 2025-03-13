"use client";

import './style.css';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, EditorProvider, useCurrentEditor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Bold, Italic, Underline as UnderlineIcon, AlignLeft, AlignCenter, AlignRight, Image as ImageIcon, List, ListOrdered, Code, Quote, Heading, Eraser, Pilcrow, BoldIcon, ItalicIcon, Strikethrough, StrikethroughIcon, CodeIcon, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, ListIcon, Undo, Redo, Code2 } from "lucide-react";
import CustomImage from '../CustomImage/CustomImage';
import { contentContext } from '@/lib/context/ContentContext';
import TextAlign from "@tiptap/extension-text-align";
import Blockquote from '@tiptap/extension-blockquote';
import { common, createLowlight } from "lowlight";
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import 'highlight.js/styles/github-dark.css'; // Alternative dark theme // Dark theme (Change if needed)
import CustomHeading from '../CustomHeading1/CustomHeading1';
import MetaData from '../MetaData/page';
import { addDoc, collection, Timestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { toast } from 'react-toastify';
import Link from '@tiptap/extension-link';

const lowlight = createLowlight(common);

const MenuBar = () => {
    const { editor } = useCurrentEditor();
    if (!editor) {
        return null;
    }

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        if (url === null) {
            return;
        }

        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
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
                    const response = await axios.post(`/api/image/upload`, formData);
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

    return (
        <div className="control-group">
            <div className="button-group">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    <BoldIcon />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <ItalicIcon />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    <StrikethroughIcon />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    className={editor.isActive('code') ? 'is-active' : ''}
                >
                    <Code />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign("left").run()} >
                    <AlignLeft size={16} />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign("center").run()} >
                    <AlignCenter size={16} />
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign("right").run()} >
                    <AlignRight size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    <Pilcrow />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    <Heading1 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    <Heading2 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    <Heading3 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
                >
                    <Heading4 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
                >
                    <Heading5 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
                >
                    <Heading6 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <ListIcon />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    <ListOrdered />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    <Code2 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    <Quote />
                </button>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                >
                    <Undo />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                >
                    <Redo />
                </button>
                <button
                    onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                    className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
                >
                    Purple
                </button>
                <button onClick={imageHandler} className="p-2 bg-gray-200 rounded">
                    <ImageIcon size={16} />
                </button>
                <button
                    onClick={setLink}
                    className={editor.isActive('link') ? 'is-active' : ''}
                >
                    Link
                </button>
            </div>
        </div>
    );
};

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false,
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false,
        },
    }),
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Blockquote,
    CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
            class: 'code-block',
        },
    }),
    CustomImage,
    CustomHeading,
    Link.configure({
        openOnClick: false,
    }),
];

const CMSForm = () => {
    const { dispatch } = useContext(contentContext);
    const [content, setContentValue] = useState('');
    const [editorContent, setEditorContent] = useState(content);
    const [toggleMetaData, setToggleMetaData] = useState(false);
    const [headerImageFileName, setHeaderImageFileName] = useState("Select a file to upload!")
    const [headerImage, setHeaderImage] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postDesc, setPostDesc] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        console.log("Reloading Component...")
        if (typeof window !== "undefined") {
            let data = JSON.parse(localStorage.getItem("current_post_article"));
            if (data) {
                setContentValue(data.rawContent);
                setEditorContent(data.rawContent);
            }
            if (data) {
                setPostTitle(data.title);
            }
            if (data) {
                setPostDesc(data.description);
            }
            if (data) {
                setHeaderImage(data.headerImg);
            }
            if (data) {
                setCategory(data.category);
            }
        }
    }, []);

    const editor = useEditor({
        extensions,
        content,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            console.log(html, "HTML from onUpdate");
            setEditorContent(html);
        },
        editorProps: {
            renderMode: 'SSR',
            class: "min-h-[500px] p-4 border border-gray-300 rounded-lg focus:outline-none"
        },
        immediatelyRender: false,
    });

    const handleUpdate = ({ editor }) => {
        const html = editor.getHTML();
        console.log(html, "HTML from onUpdate");
        setEditorContent(html);
        const formattedHTML = formatHTMLContent(html, headerImage);
        console.log(formattedHTML, "Formatted HTML");
        dispatch({ type: "create", payload: { contentElements: formattedHTML, rawContent: html } });
    }

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

    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    const postContent = async () => {
        document.getElementById("loader-text").innerHTML = "Posting Blog...";
        document.getElementById("cms-loader").style.display = "flex";

        let data = JSON.parse(localStorage.getItem("current_post_article"));

        if (postTitle === "" || postDesc === "" || headerImage === "" || category === "") {
            toast.error("Please fill all the fields");
            document.getElementById("cms-loader").style.display = "none";
            return;
        }

        try {
            const colRef = collection(db, "posts");
            const slug = createSlug(postTitle);

            // ✅ Save post in Firestore
            const newDoc = await addDoc(colRef, {
                ...data,
                createdAt: Timestamp.now(),
                slug: slug,
                random: Math.random(),
            });

            console.log(newDoc, "Blog posted");
            toast.success("Blog posted successfully!");

            localStorage.removeItem("current_post_article");
            setContentValue("");
            setPostTitle("");
            setPostDesc("");
            setHeaderImage("");
            setCategory("");

            document.getElementById("loader-text").innerHTML = "Requesting indexing on Google...";

            let requestBody = {
                url: slug ? `https://codercrafter.in/blogs/${data.category_ref}/${slug}` : "",
                type: "URL_UPDATED",
            };

            console.log(requestBody, "Request Body");

            // ✅ Send request to Indexing API
            let indexRes = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/indexing`,
                requestBody, // ✅ No need to `JSON.stringify`
                { headers: { "Content-Type": "application/json" } }
            );

            if (indexRes.status >= 400) {
                toast.error(indexRes.data.message || "Indexing request failed");
                document.getElementById("cms-loader").style.display = "none";
                return;
            }

            console.log(indexRes, "Indexing Requested");

            // ✅ Update Firestore doc with `indexed: true`
            const postRef = doc(db, "posts", newDoc.id);
            await updateDoc(postRef, { indexed: true });

            toast.success("Indexing Requested successfully!");
            document.getElementById("cms-loader").style.display = "none";
        } catch (err) {
            console.log(err);

            if (err.response && err.response.status === 400) {
                toast.error(err.response.data.message);
            } else {
                toast.error("Internal Server Error");
            }

            document.getElementById("cms-loader").style.display = "none";
        }
    };


    const clearContent = () => {
        localStorage.removeItem("current_post_article");
        setContentValue("");
        setPostTitle("");
        setPostDesc("");
        setHeaderImage("");
        setCategory("");
    };

    const draftContent = async () => {
        try {
            const colRef = collection(db, "drafts");
            let data = JSON.parse(localStorage.getItem("current_post_article"));
            const newDoc = await addDoc(colRef, { ...data, createdAt: Timestamp.now() });
            console.log(newDoc, "Blog posted");
        } catch (err) {
            console.log(err);
        }
    };

    const getMetaData = (data) => {
        console.log(data, "MetaData");
        dispatch({ type: "create", payload: data });
        console.log(JSON.parse(localStorage.getItem("current_post_article")))
    }

    const handleImageUpload = async (event, setImg, setFileName) => {
        try {
            const file = event.target.files[0]
            const formData = new FormData();
            formData.append("image", file);
            console.log(file.name, "File Name");
            let response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/image/upload`, formData);
            dispatch({ type: "create", payload: { headerImg: response.data.imgUrl } });
            setImg(response.data.imgUrl);
            setFileName(file.name);
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        if (editor) {
            const html = editor.getHTML();
            const formattedHTML = formatHTMLContent(html, headerImage);
            dispatch({ type: "create", payload: { contentElements: formattedHTML, rawContent: html } });
        }
    }, [postTitle]);

    return (
        <>
            {toggleMetaData && <MetaData addMetaData={getMetaData} closeMetaData={setToggleMetaData} />}
            <div className='flex flex-col gap-4' >
                <div className='action_container' >
                    <button style={{ border: "2.5px solid blue" }} className='post_btn' onClick={postContent}>Publish</button>
                    <a style={{ border: "2.5px solid yellow", textDecoration: "none", color: "black" }} className='post_btn' href='/preview' >Preview</a>
                    <button style={{ border: "2.5px solid orange" }} className='post_btn' onClick={draftContent}>Save Draft</button>
                    <button style={{ border: "2.5px solid red" }} className='post_btn' onClick={clearContent} >Clear</button>
                </div>
                <div className='input_container' >
                    <label>Post Title</label>
                    <input defaultValue={postTitle} onChange={(e) => { dispatch({ type: "create", payload: { title: e.target.value } }); setPostTitle(e.target.value) }} type='text' placeholder='Enter title of your post.' />
                </div>
                <div className='input_container' >
                    <label>Description</label>
                    <input value={postDesc} onChange={(e) => { dispatch({ type: "create", payload: { description: e.target.value } }); setPostDesc(e.target.value); }} type='text' placeholder='Enter title of your post.' />
                    <div style={{ width: "100%", textAlign: "right" }} ><a style={{ textAlign: "right", fontSize: 12, color: "blue", cursor: "pointer" }} onClick={() => setToggleMetaData(true)} >Additional Data +</a></div>
                </div>
                <div className="input_container">
                    <label>Header Image [Preferred Size: 900x300]</label>
                    <div className="file_upload_wrapper">
                        <label className="file_input">
                            <span className="file_label">{headerImageFileName}</span>
                            <input
                                type="file"
                                alt={postTitle}
                                onChange={(event) => handleImageUpload(event, setHeaderImage, setHeaderImageFileName)}
                            />
                        </label>
                        {headerImage && (
                            <img src={headerImage} alt="Uploaded" className="image_preview" />
                        )}
                    </div>
                </div>

                <div className='input_container' >
                    <label>Category</label>
                    <select defaultValue="Select Category" value={category} onChange={(e) => { dispatch({ type: "create", payload: { category: e.target.value, category_ref: e.target.value == "React Native" ? "react-native" : e.target.value == "IT Trends" ? "tech" : e.target.value.toLowerCase() } }); setCategory(e.target.value); }} style={{ border: "1px solid #0006 !important" }} >
                        <option value="Select Category" >Select Category</option>
                        <option value="JavaScript" >JavaScript</option>
                        <option value="ReactJS" >ReactJS</option>
                        <option value="NodeJS" >NodeJS</option>
                        <option value="DevOps" >DevOps</option>
                        <option value="Angular" >Angular</option>
                        <option value="Python" >Python</option>
                        <option value="React Native" >React Native</option>
                        <option value="IT Trends" >IT Trends</option>
                    </select>
                    <div style={{ width: "100%", textAlign: "right" }} ><a style={{ textAlign: "right", fontSize: 12, color: "blue", cursor: "pointer" }} onClick={() => setToggleMetaData(true)} >Additional Data +</a></div>
                </div>

                <div className='cms' >
                    {editor && (
                        <>
                            <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content} onUpdate={handleUpdate} editorProps={{ renderMode: "SSR" }} >
                                <EditorContent className="tiptap-editor" />
                            </EditorProvider>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default CMSForm;