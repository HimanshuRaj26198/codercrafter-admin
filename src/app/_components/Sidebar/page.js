"use client"
import "@/app/scss/main.scss";
import { useState } from 'react';

const Sidebar = () => {
    // State variables for each submenu
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false);
    const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
    const [isExpenseOpen, setIsExpenseOpen] = useState(false);
    const [isQuotationOpen, setIsQuotationOpen] = useState(false);
    const [isTransferOpen, setIsTransferOpen] = useState(false);
    const [isReturnOpen, setIsReturnOpen] = useState(false);
    const [isPeopleOpen, setIsPeopleOpen] = useState(false);
    const [isPlacesOpen, setIsPlacesOpen] = useState(false);
    const [isErrorPagesOpen, setIsErrorPagesOpen] = useState(false);
    const [isElementsOpen, setIsElementsOpen] = useState(false);
    const [isChartsOpen, setIsChartsOpen] = useState(false);
    const [isIconsOpen, setIsIconsOpen] = useState(false);
    const [isFormsOpen, setIsFormsOpen] = useState(false);
    const [isTableOpen, setIsTableOpen] = useState(false);
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);
    const [isReportOpen, setIsReportOpen] = useState(false);
    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <div className="sidebar" id="sidebar" bis_skin_checked={1}>
            <div
                className="slimScrollDiv"
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: 670
                }}
                bis_skin_checked={1}
            >
                <div
                    className="sidebar-inner slimscroll"
                    bis_skin_checked={1}
                    style={{ overflow: "hidden", width: "100%", height: 670 }}
                >
                    <div id="sidebar-menu" className="sidebar-menu" bis_skin_checked={1}>
                        <ul>
                            <li className="active">
                                <a href="index.html">
                                    <img src="assets/img/icons/dashboard.svg" alt="img" />
                                    <span> Dashboard</span>{" "}
                                </a>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsProductOpen(!isProductOpen)}>
                                    <img src="assets/img/icons/product.svg" alt="img" />
                                    <span> Blogs</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isProductOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="/blogs">All Blogs</a>
                                    </li>
                                    <li>
                                        <a href="/post">Add Blog</a>
                                    </li>
                                    <li>
                                        <a href="categorylist.html">Category List</a>
                                    </li>
                                    <li>
                                        <a href="addcategory.html">Add Category</a>
                                    </li>
                                    <li>
                                        <a href="subcategorylist.html">Sub Category List</a>
                                    </li>
                                    <li>
                                        <a href="subaddcategory.html">Add Sub Category</a>
                                    </li>
                                    <li>
                                        <a href="brandlist.html">Brand List</a>
                                    </li>
                                    <li>
                                        <a href="addbrand.html">Add Brand</a>
                                    </li>
                                    <li>
                                        <a href="importproduct.html">Import Products</a>
                                    </li>
                                    <li>
                                        <a href="barcode.html">Print Barcode</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsSalesOpen(!isSalesOpen)}>
                                    <img src="assets/img/icons/sales1.svg" alt="img" />
                                    <span> Sales</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isSalesOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="saleslist.html">Sales List</a>
                                    </li>
                                    <li>
                                        <a href="pos.html">POS</a>
                                    </li>
                                    <li>
                                        <a href="pos.html">New Sales</a>
                                    </li>
                                    <li>
                                        <a href="salesreturnlists.html">Sales Return List</a>
                                    </li>
                                    <li>
                                        <a href="createsalesreturns.html">New Sales Return</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsPurchaseOpen(!isPurchaseOpen)}>
                                    <img src="assets/img/icons/purchase1.svg" alt="img" />
                                    <span> Purchase</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isPurchaseOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="purchaselist.html">Purchase List</a>
                                    </li>
                                    <li>
                                        <a href="addpurchase.html">Add Purchase</a>
                                    </li>
                                    <li>
                                        <a href="importpurchase.html">Import Purchase</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsExpenseOpen(!isExpenseOpen)}>
                                    <img src="assets/img/icons/expense1.svg" alt="img" />
                                    <span> Expense</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isExpenseOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="expenselist.html">Expense List</a>
                                    </li>
                                    <li>
                                        <a href="createexpense.html">Add Expense</a>
                                    </li>
                                    <li>
                                        <a href="expensecategory.html">Expense Category</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsQuotationOpen(!isQuotationOpen)}>
                                    <img src="assets/img/icons/quotation1.svg" alt="img" />
                                    <span> Quotation</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isQuotationOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="quotationList.html">Quotation List</a>
                                    </li>
                                    <li>
                                        <a href="addquotation.html">Add Quotation</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsTransferOpen(!isTransferOpen)}>
                                    <img src="assets/img/icons/transfer1.svg" alt="img" />
                                    <span> Transfer</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isTransferOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="transferlist.html">Transfer List</a>
                                    </li>
                                    <li>
                                        <a href="addtransfer.html">Add Transfer </a>
                                    </li>
                                    <li>
                                        <a href="importtransfer.html">Import Transfer </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsReturnOpen(!isReturnOpen)}>
                                    <img src="assets/img/icons/return1.svg" alt="img" />
                                    <span> Return</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isReturnOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="salesreturnlist.html">Sales Return List</a>
                                    </li>
                                    <li>
                                        <a href="createsalesreturn.html">Add Sales Return </a>
                                    </li>
                                    <li>
                                        <a href="purchasereturnlist.html">Purchase Return List</a>
                                    </li>
                                    <li>
                                        <a href="createpurchasereturn.html">Add Purchase Return </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsPeopleOpen(!isPeopleOpen)}>
                                    <img src="assets/img/icons/users1.svg" alt="img" />
                                    <span> People</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isPeopleOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="customerlist.html">Customer List</a>
                                    </li>
                                    <li>
                                        <a href="addcustomer.html">Add Customer</a>
                                    </li>
                                    <li>
                                        <a href="supplierlist.html">Supplier List</a>
                                    </li>
                                    <li>
                                        <a href="addsupplier.html">Add Supplier </a>
                                    </li>
                                    <li>
                                        <a href="userlist.html">User List</a>
                                    </li>
                                    <li>
                                        <a href="adduser.html">Add User</a>
                                    </li>
                                    <li>
                                        <a href="storelist.html">Store List</a>
                                    </li>
                                    <li>
                                        <a href="addstore.html">Add Store</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsPlacesOpen(!isPlacesOpen)}>
                                    <img src="assets/img/icons/places.svg" alt="img" />
                                    <span> Places</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isPlacesOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="newcountry.html">New Country</a>
                                    </li>
                                    <li>
                                        <a href="countrieslist.html">Countries list</a>
                                    </li>
                                    <li>
                                        <a href="newstate.html">New State </a>
                                    </li>
                                    <li>
                                        <a href="statelist.html">State list</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="components.html">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-layers"
                                    >
                                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                        <polyline points="2 17 12 22 22 17" />
                                        <polyline points="2 12 12 17 22 12" />
                                    </svg>
                                    <span> Components</span>{" "}
                                </a>
                            </li>
                            <li>
                                <a href="blankpage.html">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-file"
                                    >
                                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                                        <polyline points="13 2 13 9 20 9" />
                                    </svg>
                                    <span> Blank Page</span>{" "}
                                </a>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsErrorPagesOpen(!isErrorPagesOpen)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-alert-octagon"
                                    >
                                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                                        <line x1={12} y1={8} x2={12} y2={12} />
                                        <line x1={12} y1={16} x2="12.01" y2={16} />
                                    </svg>{" "}
                                    <span> Error Pages</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isErrorPagesOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="error-404.html">404 Error </a>
                                    </li>
                                    <li>
                                        <a href="error-500.html">500 Error </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsElementsOpen(!isElementsOpen)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-box"
                                    >
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1={12} y1="22.08" x2={12} y2={12} />
                                    </svg>{" "}
                                    <span>Elements </span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isElementsOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="sweetalerts.html">Sweet Alerts</a>
                                    </li>
                                    <li>
                                        <a href="tooltip.html">Tooltip</a>
                                    </li>
                                    <li>
                                        <a href="popover.html">Popover</a>
                                    </li>
                                    <li>
                                        <a href="ribbon.html">Ribbon</a>
                                    </li>
                                    <li>
                                        <a href="clipboard.html">Clipboard</a>
                                    </li>
                                    <li>
                                        <a href="drag-drop.html">Drag &amp; Drop</a>
                                    </li>
                                    <li>
                                        <a href="rangeslider.html">Range Slider</a>
                                    </li>
                                    <li>
                                        <a href="rating.html">Rating</a>
                                    </li>
                                    <li>
                                        <a href="toastr.html">Toastr</a>
                                    </li>
                                    <li>
                                        <a href="text-editor.html">Text Editor</a>
                                    </li>
                                    <li>
                                        <a href="counter.html">Counter</a>
                                    </li>
                                    <li>
                                        <a href="scrollbar.html">Scrollbar</a>
                                    </li>
                                    <li>
                                        <a href="spinner.html">Spinner</a>
                                    </li>
                                    <li>
                                        <a href="notification.html">Notification</a>
                                    </li>
                                    <li>
                                        <a href="lightbox.html">Lightbox</a>
                                    </li>
                                    <li>
                                        <a href="stickynote.html">Sticky Note</a>
                                    </li>
                                    <li>
                                        <a href="timeline.html">Timeline</a>
                                    </li>
                                    <li>
                                        <a href="form-wizard.html">Form Wizard</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsChartsOpen(!isChartsOpen)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-bar-chart-2"
                                    >
                                        <line x1={18} y1={20} x2={18} y2={10} />
                                        <line x1={12} y1={20} x2={12} y2={4} />
                                        <line x1={6} y1={20} x2={6} y2={14} />
                                    </svg>{" "}
                                    <span> Charts</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isChartsOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="chart-apex.html">Apex Charts</a>
                                    </li>
                                    <li>
                                        <a href="chart-js.html">Chart Js</a>
                                    </li>
                                    <li>
                                        <a href="chart-morris.html">Morris Charts</a>
                                    </li>
                                    <li>
                                        <a href="chart-flot.html">Flot Charts</a>
                                    </li>
                                    <li>
                                        <a href="chart-peity.html">Peity Charts</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsIconsOpen(!isIconsOpen)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-award"
                                    >
                                        <circle cx={12} cy={8} r={7} />
                                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                    </svg>
                                    <span> Icons</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isIconsOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="icon-fontawesome.html">Fontawesome Icons</a>
                                    </li>
                                    <li>
                                        <a href="icon-feather.html">Feather Icons</a>
                                    </li>
                                    <li>
                                        <a href="icon-ionic.html">Ionic Icons</a>
                                    </li>
                                    <li>
                                        <a href="icon-material.html">Material Icons</a>
                                    </li>
                                    <li>
                                        <a href="icon-pe7.html">Pe7 Icons</a>
                                    </li>
                                    <li>
                                        <a href="icon-simpleline.html">Simpleline Icons</a>
                                    </li>
                                    <li>
                                        <a href="icon-themify.html">Themify Icons</a>
                                    </li>
                                    <li>
                                        <a href="icon-weather.html">Weather Icons</a>
                                    </li>
                                    <li>
                                        <a href="icon-typicon.html">Typicon Icons</a>
                                    </li>
                                    <li>
                                        <a href="icon-flag.html">Flag Icons</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsFormsOpen(!isFormsOpen)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-columns"
                                    >
                                        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
                                    </svg>{" "}
                                    <span> Forms</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isFormsOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="form-basic-inputs.html">Basic Inputs </a>
                                    </li>
                                    <li>
                                        <a href="form-input-groups.html">Input Groups </a>
                                    </li>
                                    <li>
                                        <a href="form-horizontal.html">Horizontal Form </a>
                                    </li>
                                    <li>
                                        <a href="form-vertical.html"> Vertical Form </a>
                                    </li>
                                    <li>
                                        <a href="form-mask.html">Form Mask </a>
                                    </li>
                                    <li>
                                        <a href="form-validation.html">Form Validation </a>
                                    </li>
                                    <li>
                                        <a href="form-select2.html">Form Select2 </a>
                                    </li>
                                    <li>
                                        <a href="form-fileupload.html">File Upload </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsTableOpen(!isTableOpen)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-layout"
                                    >
                                        <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                                        <line x1={3} y1={9} x2={21} y2={9} />
                                        <line x1={9} y1={21} x2={9} y2={9} />
                                    </svg>{" "}
                                    <span> Table</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isTableOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="tables-basic.html">Basic Tables </a>
                                    </li>
                                    <li>
                                        <a href="data-tables.html">Data Table </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsApplicationOpen(!isApplicationOpen)}>
                                    <img src="assets/img/icons/product.svg" alt="img" />
                                    <span> Application</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isApplicationOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="chat.html">Chat</a>
                                    </li>
                                    <li>
                                        <a href="calendar.html">Calendar</a>
                                    </li>
                                    <li>
                                        <a href="email.html">Email</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsReportOpen(!isReportOpen)}>
                                    <img src="assets/img/icons/time.svg" alt="img" />
                                    <span> Report</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isReportOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="purchaseorderreport.html">Purchase order report</a>
                                    </li>
                                    <li>
                                        <a href="inventoryreport.html">Inventory Report</a>
                                    </li>
                                    <li>
                                        <a href="salesreport.html">Sales Report</a>
                                    </li>
                                    <li>
                                        <a href="invoicereport.html">Invoice Report</a>
                                    </li>
                                    <li>
                                        <a href="purchasereport.html">Purchase Report</a>
                                    </li>
                                    <li>
                                        <a href="supplierreport.html">Supplier Report</a>
                                    </li>
                                    <li>
                                        <a href="customerreport.html">Customer Report</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsUsersOpen(!isUsersOpen)}>
                                    <img src="assets/img/icons/users1.svg" alt="img" />
                                    <span> Users</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isUsersOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="newuser.html">New User </a>
                                    </li>
                                    <li>
                                        <a href="userlists.html">Users List</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
                                    <img src="assets/img/icons/settings.svg" alt="img" />
                                    <span> Settings</span> <span className="menu-arrow" />
                                </a>
                                <ul style={{ display: isSettingsOpen ? 'block' : 'none' }}>
                                    <li>
                                        <a href="generalsettings.html">General Settings</a>
                                    </li>
                                    <li>
                                        <a href="emailsettings.html">Email Settings</a>
                                    </li>
                                    <li>
                                        <a href="paymentsettings.html">Payment Settings</a>
                                    </li>
                                    <li>
                                        <a href="currencysettings.html">Currency Settings</a>
                                    </li>
                                    <li>
                                        <a href="grouppermissions.html">Group Permissions</a>
                                    </li>
                                    <li>
                                        <a href="taxrates.html">Tax Rates</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="slimScrollBar"
                    bis_skin_checked={1}
                    style={{
                        background: "rgb(204, 204, 204)",
                        width: 7,
                        position: "absolute",
                        top: 0,
                        opacity: "0.4",
                        display: "block",
                        borderRadius: 7,
                        zIndex: 99,
                        right: 1,
                        height: "371.47px"
                    }}
                />
                <div
                    className="slimScrollRail"
                    bis_skin_checked={1}
                    style={{
                        width: 7,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: "none",
                        borderRadius: 7,
                        background: "rgb(51, 51, 51)",
                        opacity: "0.2",
                        zIndex: 90,
                        right: 1
                    }}
                />
            </div>
        </div>
    );
};

export default Sidebar;