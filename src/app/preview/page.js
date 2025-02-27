"use client"

const { useState, useEffect } = require("react")

const PreviewPage = () => {
    const [htmlContent, setHTML] = useState('');

    useEffect(() => {
        if (typeof window !== "undefined") {
            let obj = JSON.parse(localStorage.getItem("current_post_article"));
            console.log(obj.contentElements)
            setHTML(obj.contentElements);
        }
    }, []);

    return <  >
        <div className="container p-0" bis_skin_checked={1}>
            <div className="lg:flex lg:space-x-4 lg:-mx-4" bis_skin_checked={1}>
                <div className="lg:w-9/12 lg:space-y-6" bis_skin_checked={1}>
                    <div className="tube-card" bis_skin_checked={1} dangerouslySetInnerHTML={{ __html: htmlContent }} >

                    </div>
                    {/* related articles */}
                    <div className="tube-card md:p-6 p-3 relative" bis_skin_checked={1}>
                        <h1 className="block text-xl font-semibold"> Related Articales </h1>
                        <div
                            className="relative uk-slider"
                            uk-slider="finite: true"
                            bis_skin_checked={1}
                        >
                            <div className="uk-slider-container px-1 py-3" bis_skin_checked={1}>
                                <ul
                                    className="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-2 uk-grid-small uk-grid"
                                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                                >
                                    <li tabIndex={-1} className="uk-active">
                                        <div bis_skin_checked={1}>
                                            <a
                                                href="/blogs/asdkjan"
                                                className="w-full md:h-32 h-28 overflow-hidden rounded-lg relative block"
                                            >
                                                <img
                                                    src="/assets/images/blog/img-1.jpg"
                                                    alt=""
                                                    className="w-full h-full absolute inset-0 object-cover"
                                                />
                                            </a>
                                            <div className="pt-3" bis_skin_checked={1}>
                                                <a
                                                    href="/blogs/skjdnk"
                                                    className="font-semibold line-clamp-2"
                                                >
                                                    {" "}
                                                    Top Amazing web demos and experiments in 2021 Should Know
                                                    About
                                                </a>
                                                <div className="pt-2" bis_skin_checked={1}>
                                                    <p className="text-sm"> Denise Marie</p>
                                                    <div
                                                        className="flex space-x-2 items-center text-xs"
                                                        bis_skin_checked={1}
                                                    >
                                                        <div bis_skin_checked={1}> Feb 4, 2020 </div>
                                                        <div className="md:block hidden" bis_skin_checked={1}>
                                                            ·
                                                        </div>
                                                        <div className="flex items-center" bis_skin_checked={1}>
                                                            {" "}
                                                            <ion-icon
                                                                name="chatbox-ellipses-outline"
                                                                className="text-base leading-0 mr-2 md hydrated"
                                                                role="img"
                                                                aria-label="chatbox ellipses outline"
                                                            />{" "}
                                                            12{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li tabIndex={-1} className="uk-active">
                                        <div bis_skin_checked={1}>
                                            <a
                                                href="/blogs/askjdnj"
                                                className="w-full md:h-32 h-28 overflow-hidden rounded-lg relative block"
                                            >
                                                <img
                                                    src="/assets/images/blog/img-3.jpg"
                                                    alt=""
                                                    className="w-full h-full absolute inset-0 object-cover"
                                                />
                                            </a>
                                            <div className="pt-3" bis_skin_checked={1}>
                                                <a
                                                    href="/blogs/askjdna"
                                                    className="font-semibold line-clamp-2"
                                                >
                                                    {" "}
                                                    Interesting JavaScript and CSS libraries for 2021 Should
                                                    Know About
                                                </a>
                                                <div className="pt-2" bis_skin_checked={1}>
                                                    <p className="text-sm"> Anoundi hellows</p>
                                                    <div
                                                        className="flex space-x-2 items-center text-xs"
                                                        bis_skin_checked={1}
                                                    >
                                                        <div bis_skin_checked={1}> May 2, 2020 </div>
                                                        <div className="md:block hidden" bis_skin_checked={1}>
                                                            ·
                                                        </div>
                                                        <div className="flex items-center" bis_skin_checked={1}>
                                                            {" "}
                                                            <ion-icon
                                                                name="chatbox-ellipses-outline"
                                                                className="text-base leading-0 mr-2 md hydrated"
                                                                role="img"
                                                                aria-label="chatbox ellipses outline"
                                                            />{" "}
                                                            12{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li tabIndex={-1} className="uk-active">
                                        <div bis_skin_checked={1}>
                                            <a
                                                href="/blogs/askjdn"
                                                className="w-full md:h-32 h-28 overflow-hidden rounded-lg relative block"
                                            >
                                                <img
                                                    src="/assets/images/blog/img-4.jpg"
                                                    alt=""
                                                    className="w-full h-full absolute inset-0 object-cover"
                                                />
                                            </a>
                                            <div className="pt-3" bis_skin_checked={1}>
                                                <a
                                                    href="/blogs/askjdnsaj"
                                                    className="font-semibold line-clamp-2"
                                                >
                                                    {" "}
                                                    Interesting JavaScript and CSS Libraries in 2021 you
                                                    should be know
                                                </a>
                                                <div className="pt-2" bis_skin_checked={1}>
                                                    <p className="text-sm"> Anoundi hellows</p>
                                                    <div
                                                        className="flex space-x-2 items-center text-xs"
                                                        bis_skin_checked={1}
                                                    >
                                                        <div bis_skin_checked={1}> Jun 5, 2020 </div>
                                                        <div className="md:block hidden" bis_skin_checked={1}>
                                                            ·
                                                        </div>
                                                        <div className="flex items-center" bis_skin_checked={1}>
                                                            {" "}
                                                            <ion-icon
                                                                name="chatbox-ellipses-outline"
                                                                className="text-base leading-0 mr-2 md hydrated"
                                                                role="img"
                                                                aria-label="chatbox ellipses outline"
                                                            />{" "}
                                                            12{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li tabIndex={-1} className="">
                                        <div bis_skin_checked={1}>
                                            <a
                                                href="/blogs/akjsd"
                                                className="w-full md:h-32 h-28 overflow-hidden rounded-lg relative block"
                                            >
                                                <img
                                                    src="/assets/images/blog/img-2.jpg"
                                                    alt=""
                                                    className="w-full h-full absolute inset-0 object-cover"
                                                />
                                            </a>
                                            <div className="pt-3" bis_skin_checked={1}>
                                                <a
                                                    href="/blogs/jasndj"
                                                    className="font-semibold line-clamp-2"
                                                >
                                                    {" "}
                                                    Awesome Web Dev Tools and Resources For 2021 in 30 Minutes{" "}
                                                </a>
                                                <div className="pt-2" bis_skin_checked={1}>
                                                    <p className="text-sm"> Anoundi hellows</p>
                                                    <div
                                                        className="flex space-x-2 items-center text-xs"
                                                        bis_skin_checked={1}
                                                    >
                                                        <div bis_skin_checked={1}> May 4, 2020 </div>
                                                        <div className="md:block hidden" bis_skin_checked={1}>
                                                            ·
                                                        </div>
                                                        <div className="flex items-center" bis_skin_checked={1}>
                                                            {" "}
                                                            <ion-icon
                                                                name="chatbox-ellipses-outline"
                                                                className="text-base leading-0 mr-2 md hydrated"
                                                                role="img"
                                                                aria-label="chatbox ellipses outline"
                                                            />{" "}
                                                            12{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <a
                                    className="absolute bg-white top-16 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible"
                                    href="#"
                                    uk-slider-item="previous"
                                >
                                    {" "}
                                    <ion-icon
                                        name="chevron-back-outline"
                                        role="img"
                                        className="md hydrated"
                                        aria-label="chevron back outline"
                                    />{" "}
                                </a>
                                <a
                                    className="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                                    href="#"
                                    uk-slider-item="next"
                                >
                                    {" "}
                                    <ion-icon
                                        name="chevron-forward-outline"
                                        role="img"
                                        className="md hydrated"
                                        aria-label="chevron forward outline"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="tube-card p-6" bis_skin_checked={1}>
                        <h1 className="block text-xl font-semibold mb-4"> Comments (12) </h1>
                        <div className="space-y-5" bis_skin_checked={1}>
                            <div
                                className="flex gap-x-4 relative rounded-md"
                                bis_skin_checked={1}
                            >
                                <img
                                    src="/assets/images/avatars/avatar-4.jpg"
                                    alt=""
                                    className="rounded-full shadow w-12 h-12"
                                />
                                <a
                                    href="#"
                                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm absolute right-5 top-0"
                                >
                                    Replay
                                </a>
                                <div bis_skin_checked={1}>
                                    <h4 className="text-base m-0 font-semibold"> Stella Johnson</h4>
                                    <span className="text-gray-700 text-sm">10th, April 2021</span>
                                    <p className="mt-3 md:ml-0 -ml-16">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                        diam ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                        ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                        lobortis nisl ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex gap-x-4 relative rounded-md"
                                bis_skin_checked={1}
                            >
                                <a
                                    href="#"
                                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm absolute right-5 top-0"
                                >
                                    Replay
                                </a>
                                <img
                                    src="/assets/images/avatars/avatar-3.jpg"
                                    alt=""
                                    className="rounded-full shadow w-12 h-12"
                                />
                                <div bis_skin_checked={1}>
                                    <h4 className="text-base m-0 font-semibold"> Alex Dolgove</h4>
                                    <span className="text-gray-700 text-sm"> 14th, April 2021 </span>
                                    <p className="mt-3 md:ml-0 -ml-16">
                                        elit, sed diam ut laoreet dolore magna aliquam erat volutpat. Ut
                                        wisi enim ad minim ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed diam ut laoreet dolore
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex gap-x-4 relative rounded-md lg:ml-16"
                                bis_skin_checked={1}
                            >
                                <a
                                    href="#"
                                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm absolute right-5 top-0"
                                >
                                    Replay
                                </a>
                                <img
                                    src="/assets/images/avatars/avatar-1.jpg"
                                    alt=""
                                    className="rounded-full shadow w-12 h-12"
                                />
                                <div bis_skin_checked={1}>
                                    <h4 className="text-base m-0 font-semibold"> Stella Johnson</h4>
                                    <span className="text-gray-700 text-sm"> 13th, May 2021 </span>
                                    <p className="mt-3 md:ml-0 -ml-16">
                                        elit, sed diam ut laoreet dolore magna aliquam erat volutpat. Ut
                                        wisi enim ad minim ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed diam ut laoreet dolore
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-9" bis_skin_checked={1}>
                            <a
                                href="#"
                                className="bg-gray-50 border hover:bg-gray-100 px-4 py-1.5 rounded-full text-sm"
                            >
                                More Comments ..
                            </a>
                        </div>
                    </div>
                </div>
                {/*  Sidebar  */}
                <div className="lg:w-80 w-full lg:mt-0 mt-5" bis_skin_checked={1}>
                    <div
                        className="space-y-5 uk-sticky  "
                        uk-sticky="offset:22; bottom:true ; top:30 ; animation: uk-animation-slide-top-small"
                        bis_skin_checked={1}
                        style={{}}
                    >
                        <div className="tube-card p-6" bis_skin_checked={1}>
                            <div
                                className="flex items-start justify-between"
                                bis_skin_checked={1}
                            >
                                <div bis_skin_checked={1}>
                                    <h4 className="text-lg -mb-0.5 font-semibold">
                                        {" "}
                                        Recently Posted{" "}
                                    </h4>
                                </div>
                                <a href="#" className="text-blue-600">
                                    {" "}
                                    <ion-icon
                                        name="refresh"
                                        className="-mt-0.5 -mr-2 hover:bg-gray-100 p-1.5 rounded-full text-lg md hydrated"
                                        role="img"
                                        aria-label="refresh"
                                    />{" "}
                                </a>
                            </div>
                            <ul>
                                <li>
                                    <a
                                        href="/blogs/kjasndjkan"
                                        className="hover:bg-gray-50 rounded-md p-2 -mx-2 block"
                                    >
                                        <h3 className="font-medium line-clamp-2">
                                            {" "}
                                            Awesome Web Dev Tools and Resources For 2021{" "}
                                        </h3>
                                        <div
                                            className="flex items-center my-auto text-xs space-x-1.5 mt-1.5"
                                            bis_skin_checked={1}
                                        >
                                            <div bis_skin_checked={1}> Sep 12, 2020</div>{" "}
                                            <div className="pb-1" bis_skin_checked={1}>
                                                {" "}
                                                .{" "}
                                            </div>
                                            <ion-icon
                                                name="chatbox-ellipses-outline"
                                                role="img"
                                                className="md hydrated"
                                                aria-label="chatbox ellipses outline"
                                            />{" "}
                                            <div bis_skin_checked={1}> 23</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/blogs/askjdnsa"
                                        className="hover:bg-gray-50 rounded-md p-2 -mx-2 block"
                                    >
                                        <h3 className="font-medium line-clamp-2">
                                            {" "}
                                            Awesome Web Dev Tools and Resources For 2021
                                        </h3>
                                        <div
                                            className="flex items-center my-auto text-xs space-x-1.5 mt-1.5"
                                            bis_skin_checked={1}
                                        >
                                            <div bis_skin_checked={1}> Sep 12, 2020</div>{" "}
                                            <div className="pb-1" bis_skin_checked={1}>
                                                {" "}
                                                .{" "}
                                            </div>
                                            <ion-icon
                                                name="chatbox-ellipses-outline"
                                                role="img"
                                                className="md hydrated"
                                                aria-label="chatbox ellipses outline"
                                            />{" "}
                                            <div bis_skin_checked={1}> 23</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/blogs/kjasjk"
                                        className="hover:bg-gray-50 rounded-md p-2 -mx-2 block"
                                    >
                                        <h3 className="font-medium line-clamp-2">
                                            Interesting JavaScript and CSS Libraries in 2021{" "}
                                        </h3>
                                        <div
                                            className="flex items-center my-auto text-xs space-x-1.5 mt-1.5"
                                            bis_skin_checked={1}
                                        >
                                            <div bis_skin_checked={1}> Sep 12, 2020</div>{" "}
                                            <div className="pb-1" bis_skin_checked={1}>
                                                {" "}
                                                .{" "}
                                            </div>
                                            <ion-icon
                                                name="chatbox-ellipses-outline"
                                                role="img"
                                                className="md hydrated"
                                                aria-label="chatbox ellipses outline"
                                            />{" "}
                                            <div bis_skin_checked={1}> 23</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/blogs/akjdajk"
                                        className="hover:bg-gray-50 rounded-md p-2 -mx-2 block"
                                    >
                                        <h3 className="font-medium line-clamp-2">
                                            Awesome Web Dev Tools and Resources For 2021{" "}
                                        </h3>
                                        <div
                                            className="flex items-center my-auto text-xs space-x-1.5 mt-1.5"
                                            bis_skin_checked={1}
                                        >
                                            <div bis_skin_checked={1}> Sep 12, 2020</div>{" "}
                                            <div className="pb-1" bis_skin_checked={1}>
                                                {" "}
                                                .{" "}
                                            </div>
                                            <ion-icon
                                                name="chatbox-ellipses-outline"
                                                role="img"
                                                className="md hydrated"
                                                aria-label="chatbox ellipses outline"
                                            />{" "}
                                            <div bis_skin_checked={1}> 23</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="hover:bg-gray-100 -mb-2 mt-0.5 h-8 flex items-center justify-center rounded-md text-blue-400 text-sm"
                            >
                                See all
                            </a>
                        </div>
                        <div className="mt-6" bis_skin_checked={1}>
                            <h4 className="text-lg mb-2 font-semibold"> Tags </h4>
                            <div
                                className="flex flex-wrap font-medium gap-2"
                                bis_skin_checked={1}
                            >
                                <a
                                    href="#"
                                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                                >
                                    {" "}
                                    JavaScript
                                </a>
                                <a
                                    href="#"
                                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                                >
                                    {" "}
                                    Angular
                                </a>
                                <a
                                    href="#"
                                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                                >
                                    {" "}
                                    Design
                                </a>
                                <a
                                    href="#"
                                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                                >
                                    {" "}
                                    Photography
                                </a>
                                <a
                                    href="#"
                                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                                >
                                    {" "}
                                    Technology
                                </a>
                                <a
                                    href="#"
                                    className="bg-white px-3.5 py-1.5 rounded shadow text-sm"
                                >
                                    {" "}
                                    Music
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="uk-sticky-placeholder"
                        style={{ height: 586, margin: 0 }}
                        bis_skin_checked={1}
                        hidden=""
                    />
                </div>
            </div>
        </div>
    </>
}

export default PreviewPage;