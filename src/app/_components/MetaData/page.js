"use client"
import Color from "@tiptap/extension-color";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const MetaData = ({ addMetaData, closeMetaData }) => {

    const [ogTitle, setOgTitle] = useState("");
    const [ogDesc, setOgDesc] = useState("");
    const [ogImg, setOgImg] = useState("");
    const [ogFileName, setOgFilename] = useState("Click to upload a file!")

    const [twitterTitle, setTwitterTitle] = useState("");
    const [twitterDesc, setTwitterDesc] = useState("");
    const [twitterImg, setTwitterImg] = useState("");
    const [twitterFileName, setTwitterFilename] = useState("Click to upload a file!")


    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("current_post_article"));
        setOgTitle(data.ogTitle);
        setOgDesc(data.ogDesc);
        setTwitterTitle(data.twitterTitle);
        setTwitterDesc(data.twitterDesc);
        setOgImg(data?.ogImg || "");
        setTwitterImg(data?.twitterImg || "")
    }, []);

    const handleImageUpload = async (event, setImg, setFileName) => {
        try {
            const file = event.target.files[0]
            const formData = new FormData();
            formData.append("image", file);
            let response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/image/upload`, formData);
            setImg(response.data.imgUrl);
            setFileName(file.name);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = { ogTitle: ogTitle, ogDesc: ogDesc, ogImg, twitterTitle: twitterTitle, twitterDesc: twitterDesc, twitterImg };
        console.log(obj);
        addMetaData(obj);
        handleClose();
    }

    const handleClose = () => {
        closeMetaData(false);
    }

    return <>
        <section className="popup_container" >
            <div className="metadata_popup" >
                <span style={{ textAlign: "right" }} >< p style={{ color: "red", cursor: "pointer" }} onClick={handleClose} >Close</p></span>

                <h2>Additional MetaData</h2>
                <div>
                    <form onSubmit={handleSubmit} className="metadata_form" >
                        <div className="input_container" >
                            <label>Opengraph Title</label>
                            <input value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} type="text" />
                        </div>
                        <div className="input_container" >
                            <label>Opengraph Description</label>
                            <input value={ogDesc} onChange={(e) => setOgDesc(e.target.value)} type="text" />
                        </div>
                        <div className="input_container" >
                            <label>Opengraph Image</label>
                            <label className="file_input">
                                <span className="file_label">{ogFileName}</span>
                                <input type="file" onChange={(event) => handleImageUpload(event, setOgImg, setOgFilename)} />
                            </label>
                        </div>
                        <div className="input_container" >
                            <label>Twitter Title</label>
                            <input value={twitterTitle} onChange={(e) => setTwitterTitle(e.target.value)} type="text" />
                        </div>
                        <div className="input_container" >
                            <label>Twitter Description</label>
                            <input value={twitterDesc} onChange={(e) => setTwitterDesc(e.target.value)} type="text" />
                        </div>
                        <div className="input_container" >
                            <label>Twitter Image</label>
                            <label className="file_input">
                                <span className="file_label">{twitterFileName}</span>
                                <input type="file" onChange={(event) => handleImageUpload(event, setTwitterImg, setTwitterFilename)} />
                            </label>
                        </div>
                        <div className="action_container" >
                            <button type="submit" >Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}


export default MetaData;