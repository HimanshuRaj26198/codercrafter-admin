"use client"
const CmsLoader = () => {
    return <>
        <div id="cms-loader" bis_skin_checked={1} style={{ display: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "space-between", height: "10%" }} >
                <div className="whirly-loader" bis_skin_checked={1}>
                </div>
                <div id="loader-text" bis_skin_checked={1}><strong>Loading...</strong></div>
            </div>

        </div>
    </>
}

export default CmsLoader;