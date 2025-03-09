"use client"
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip"
const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/api/posts")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error(err));
    }, []);

    function getTimeFromFirebaseTimestamp(timestamp) {
        if (!timestamp || !timestamp.seconds) return "Invalid time";

        // Convert seconds to milliseconds and create Date object
        const date = new Date(timestamp.seconds * 1000);

        // Format time with AM/PM
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true, // Ensures AM/PM format
        });
    }




    function formatFirebaseTimestamp(timestamp) {
        if (!timestamp || !timestamp.seconds) return "Invalid date";

        // Convert seconds to milliseconds
        const date = new Date(timestamp.seconds * 1000);

        // Format the date
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    }

    return <>
        <div className="content" bis_skin_checked={1}>
            <div className="page-header" bis_skin_checked={1}>
                <div className="page-title" bis_skin_checked={1}>
                    <h4>All Blogs</h4>
                    <h6>Manage your blogs</h6>
                </div>
                <div className="page-btn" bis_skin_checked={1}>
                    <a href="addpurchase.html" className="btn btn-added">
                        <img src="assets/img/icons/plus.svg" alt="img" />
                        Add New Blog
                    </a>
                </div>
            </div>
            {/* /product list */}
            <div className="card" bis_skin_checked={1}>
                <div className="card-body" bis_skin_checked={1}>
                    <div className="table-top" bis_skin_checked={1}>
                        <div className="search-set" bis_skin_checked={1}>
                            <div className="search-path" bis_skin_checked={1}>
                                <a className="btn btn-filter" id="filter_search">
                                    <img src="assets/img/icons/filter.svg" alt="img" />
                                    <span>
                                        <img src="assets/img/icons/closes.svg" alt="img" />
                                    </span>
                                </a>
                            </div>
                            <div className="search-input" bis_skin_checked={1}>
                                <a className="btn btn-searchset">
                                    <img src="assets/img/icons/search-white.svg" alt="img" />
                                </a>
                                <div
                                    id="DataTables_Table_0_filter"
                                    className="dataTables_filter"
                                    bis_skin_checked={1}
                                >
                                    <label>
                                        {" "}
                                        <input
                                            type="search"
                                            className="form-control form-control-sm"
                                            placeholder="Search..."
                                            aria-controls="DataTables_Table_0"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="wordset" bis_skin_checked={1}>
                            <ul>
                                <li>
                                    <a
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="pdf"
                                        aria-label="pdf"
                                    >
                                        <img src="assets/img/icons/pdf.svg" alt="img" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="excel"
                                        aria-label="excel"
                                    >
                                        <img src="assets/img/icons/excel.svg" alt="img" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="print"
                                        aria-label="print"
                                    >
                                        <img src="assets/img/icons/printer.svg" alt="img" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* /Filter */}
                    <div className="card" id="filter_inputs" bis_skin_checked={1}>
                        <div className="card-body pb-0" bis_skin_checked={1}>
                            <div className="row" bis_skin_checked={1}>
                                <div className="col-lg col-sm-6 col-12" bis_skin_checked={1}>
                                    <div className="form-group" bis_skin_checked={1}>
                                        <input
                                            type="text"
                                            className="datetimepicker cal-icon"
                                            placeholder="Choose Date"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-sm-6 col-12" bis_skin_checked={1}>
                                    <div className="form-group" bis_skin_checked={1}>
                                        <input type="text" placeholder="Enter Reference" />
                                    </div>
                                </div>
                                <div className="col-lg col-sm-6 col-12" bis_skin_checked={1}>
                                    <div className="form-group" bis_skin_checked={1}>
                                        <select
                                            className="select select2-hidden-accessible"
                                            data-select2-id={1}
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <option data-select2-id={3}>Choose Supplier</option>
                                            <option>Supplier</option>
                                        </select>
                                        <span
                                            className="select2 select2-container select2-container--default"
                                            dir="ltr"
                                            data-select2-id={2}
                                            style={{ width: "100%" }}
                                        >
                                            <span className="selection">
                                                <span
                                                    className="select2-selection select2-selection--single"
                                                    role="combobox"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    tabIndex={0}
                                                    aria-disabled="false"
                                                    aria-labelledby="select2-jgrr-container"
                                                >
                                                    <span
                                                        className="select2-selection__rendered"
                                                        id="select2-jgrr-container"
                                                        role="textbox"
                                                        aria-readonly="true"
                                                        title="Choose Supplier"
                                                    >
                                                        Choose Supplier
                                                    </span>
                                                    <span
                                                        className="select2-selection__arrow"
                                                        role="presentation"
                                                    >
                                                        <b role="presentation" />
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="dropdown-wrapper" aria-hidden="true" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg col-sm-6 col-12" bis_skin_checked={1}>
                                    <div className="form-group" bis_skin_checked={1}>
                                        <select
                                            className="select select2-hidden-accessible"
                                            data-select2-id={4}
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <option data-select2-id={6}>Choose Status</option>
                                            <option>Inprogress</option>
                                        </select>
                                        <span
                                            className="select2 select2-container select2-container--default"
                                            dir="ltr"
                                            data-select2-id={5}
                                            style={{ width: "100%" }}
                                        >
                                            <span className="selection">
                                                <span
                                                    className="select2-selection select2-selection--single"
                                                    role="combobox"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    tabIndex={0}
                                                    aria-disabled="false"
                                                    aria-labelledby="select2-heo3-container"
                                                >
                                                    <span
                                                        className="select2-selection__rendered"
                                                        id="select2-heo3-container"
                                                        role="textbox"
                                                        aria-readonly="true"
                                                        title="Choose Status"
                                                    >
                                                        Choose Status
                                                    </span>
                                                    <span
                                                        className="select2-selection__arrow"
                                                        role="presentation"
                                                    >
                                                        <b role="presentation" />
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="dropdown-wrapper" aria-hidden="true" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg col-sm-6 col-12" bis_skin_checked={1}>
                                    <div className="form-group" bis_skin_checked={1}>
                                        <select
                                            className="select select2-hidden-accessible"
                                            data-select2-id={7}
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <option data-select2-id={9}>Choose Payment Status</option>
                                            <option>Payment Status</option>
                                        </select>
                                        <span
                                            className="select2 select2-container select2-container--default"
                                            dir="ltr"
                                            data-select2-id={8}
                                            style={{ width: "100%" }}
                                        >
                                            <span className="selection">
                                                <span
                                                    className="select2-selection select2-selection--single"
                                                    role="combobox"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    tabIndex={0}
                                                    aria-disabled="false"
                                                    aria-labelledby="select2-7gpw-container"
                                                >
                                                    <span
                                                        className="select2-selection__rendered"
                                                        id="select2-7gpw-container"
                                                        role="textbox"
                                                        aria-readonly="true"
                                                        title="Choose Payment Status"
                                                    >
                                                        Choose Payment Status
                                                    </span>
                                                    <span
                                                        className="select2-selection__arrow"
                                                        role="presentation"
                                                    >
                                                        <b role="presentation" />
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="dropdown-wrapper" aria-hidden="true" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-sm-6 col-12" bis_skin_checked={1}>
                                    <div className="form-group" bis_skin_checked={1}>
                                        <a className="btn btn-filters ms-auto">
                                            <img src="assets/img/icons/search-whites.svg" alt="img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Filter */}
                    <div className="table-responsive" bis_skin_checked={1}>
                        <div
                            id="DataTables_Table_0_wrapper"
                            className="dataTables_wrapper dt-bootstrap4 no-footer"
                            bis_skin_checked={1}
                        >
                            <table
                                className="table datanew dataTable no-footer"
                                id="DataTables_Table_0"
                                role="grid"
                                aria-describedby="DataTables_Table_0_info"
                            >
                                <thead>
                                    <tr role="row">
                                        <th
                                            className="sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-sort="ascending"
                                            aria-label="
													
														
														
													
												: activate to sort column descending"
                                            style={{ width: "47.2625px" }}
                                        >
                                            <label className="checkboxs">
                                                <input type="checkbox" id="select-all" />
                                                <span className="checkmarks" />
                                            </label>
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label="Supplier Name: activate to sort column ascending"
                                            style={{ width: "130.25px" }}
                                        >
                                            Title
                                        </th>

                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label="Status: activate to sort column ascending"
                                            style={{ width: "76.35px" }}
                                        >
                                            Category
                                        </th>

                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label="Date: activate to sort column ascending"
                                            style={{ width: "79.925px" }}
                                        >
                                            Date
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label="Date: activate to sort column ascending"
                                            style={{ width: "79.925px" }}
                                        >
                                            Time
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label="Grand Total: activate to sort column ascending"
                                            style={{ width: "94.0125px" }}
                                        >
                                            Indexing Rquest
                                        </th>



                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label="Action: activate to sort column ascending"
                                            style={{ width: "71.3625px" }}
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.map((blog, i) => {
                                        const truncatedTitle = blog.title?.length > 50 ? blog.title.slice(0, 50) + '...' : blog.title;
                                        return (
                                            <tr className={`${i % 2 === 0 ? "odd" : "even"}`} key={i} data-tooltip-id="blog-tooltip" data-tooltip-content={blog.title} >
                                                <td className="sorting_1">
                                                    <label className="checkboxs">
                                                        <input type="checkbox" />
                                                        <span className="checkmarks" />
                                                    </label>
                                                </td>
                                                <td className="text-bolds"  >{truncatedTitle}</td>
                                                <td>{blog.category}</td>
                                                <td>{formatFirebaseTimestamp(blog.createdAt)}</td>
                                                <td>{getTimeFromFirebaseTimestamp(blog.createdAt)}</td>
                                                <td>{blog.indexingRequested == true ? "Requested" : blog.indexingRequested == false ? "Not Requested" : "Unknown"}</td>
                                                <td>
                                                    <a className="me-3" href="editpurchase.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img" />
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img" />
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Tooltip id="blog-tooltip" place="top" effect="solid" delayShow={1000} />
                            <div
                                className="dataTables_length"
                                id="DataTables_Table_0_length"
                                bis_skin_checked={1}
                            >
                                <label>
                                    <select
                                        name="DataTables_Table_0_length"
                                        aria-controls="DataTables_Table_0"
                                        className="custom-select custom-select-sm form-control form-control-sm"
                                    >
                                        <option value={10}>10</option>
                                        <option value={25}>25</option>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                    </select>
                                </label>
                            </div>
                            <div
                                className="dataTables_paginate paging_numbers"
                                id="DataTables_Table_0_paginate"
                                bis_skin_checked={1}
                            >
                                <ul className="pagination">
                                    <li className="paginate_button page-item active">
                                        <a
                                            href="#"
                                            aria-controls="DataTables_Table_0"
                                            data-dt-idx={0}
                                            tabIndex={0}
                                            className="page-link"
                                        >
                                            1
                                        </a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a
                                            href="#"
                                            aria-controls="DataTables_Table_0"
                                            data-dt-idx={1}
                                            tabIndex={0}
                                            className="page-link"
                                        >
                                            2
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="dataTables_info"
                                id="DataTables_Table_0_info"
                                role="status"
                                aria-live="polite"
                                bis_skin_checked={1}
                            >
                                1 - 10 of 14 items
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /product list */}
        </div>

    </>
}

export default BlogsPage;