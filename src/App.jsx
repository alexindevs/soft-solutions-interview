import React, { useState } from "react";
import {
  Home,
  Users,
  Menu,
  OptionIcon,
  EllipsisIcon,
  EyeIcon,
  ShareIcon,
  Trash2,
  XIcon,
} from "lucide-react";
import CustomMap from "./assets/map.png";
import "./index.css";
import Logo from "./assets/Logo.png";
import Profile from "./assets/profile.png";
import {
  AnalyticsIcon,
  ChartIcon,
  CustomerIcon,
  CustomerIcon2,
  DashboardIcon,
  DashboardIcon2,
  DropdownIcon,
  MenuIcon,
  MenuIcon2,
  Message,
  MiniMessageIcon,
  MiniNotificationIcon,
  Notification,
  OrderIcon,
  OrderIcon2,
} from "./assets/icons/icons";
import SearchInput from "./components/Input";
import BarChart from "./components/Barchart";
import PieChart from "./components/PieChart";
import MenuSection from "./components/Sections/Menu";
import Ana from "./assets/profile/Ana.png";
import George from "./assets/profile/George.png";
import John from "./assets/profile/John.png";
import Jane from "./assets/profile/Jane.png";
import Mezei from "./assets/profile/Mezei.png";
import Kotana from "./assets/profile/Kotana.png";
import Halász from "./assets/profile/Halász.png";

export default function Dashboard() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const menu = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      active: "bg-[#6C5DD3] text-white",
    },
    {
      name: "Orders",
      icon: <OrderIcon />,
      active: "text-[#8F95B2] justify-between",
      after: <DropdownIcon />,
    },
    { name: "Analytics", icon: <AnalyticsIcon />, active: "text-[#8F95B2]" },
    { name: "Customer", icon: <CustomerIcon />, active: "text-[#8F95B2]" },
    { name: "Menu", icon: <MenuIcon />, active: "text-[#8F95B2]" },
  ];

  const customers = [
    { name: "Ana Black", email: "ana@gmail.com", image: Ana },
    { name: "George Litz", email: "georgelitz@gmail.com", image: George },
    { name: "John Miller", email: "jmiller@gmail.com", image: John },
    { name: "Jane Johnson", email: "jane.j@gmail.com", image: Jane },
    { name: "Mezei Agnes", email: "feketafark@gmail.com", image: Mezei },
    { name: "Katona Beatrix", email: "edobram@gmail.com", image: Kotana },
    { name: "Halász Emese", email: "jiloputri@yahoo.com", image: Halász },
  ];

  return (
    <div className="flex h-full bg-[#F8F9FF] relative">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 bg-white shadow-sm fixed h-full z-40 transition-transform duration-300 ease-in-out`}
      >
        <img src={Logo} alt="logo" className="w-[80%] block m-auto my-9" />
        <ul className="w-full">
          {menu.map((item) => (
            <li
              key={item.name}
              className={`flex items-center w-[90%] rounded-xl m-auto p-4 cursor-pointer ${item.active}`}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="font-[600]">{item.name}</span>
              </div>
              <span>{item.after}</span>
            </li>
          ))}
        </ul>

        {/* Subscription Widget */}
        <div className="p-4">
          <div className="p-4 bg-[#e7edf7]/50 backdrop-blur-lg rounded-lg hover:shadow-lg transition-shadow duration-300 absolute bottom-2 right-1">
            <ChartIcon />
            <h4 className="font-[600] text-[15px] mt-2 text-[#272D37]">
              Subscription Plan
            </h4>
            <p className="text-[#5F6D7E] text-[14px] font-[400]">
              Your subscription plan will expire soon. Please upgrade!
            </p>
            <button className="mt-2 text-[#6C5DD3] text-[14px] font-[600]">
              Upgrade
            </button>
            <button className="absolute top-2 right-2">
              <XIcon size={20} color="#5F6D7E" />
            </button>
          </div>
        </div>
      </aside>

      {/* Header */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center fixed right-0 left-0 lg:left-64 p-4 bg-gray-50 shadow-sm z-20">
        <div className="hidden md:block ml-12 lg:ml-0">
          <h1 className="text-xl font-semibold">Hi, Taylor!</h1>
          <p className="text-[#718096] text-[14px] font-[400]">
            Let's check your store today
          </p>
        </div>
        <div className="flex flex-row items-start lg:items-center lg:space-y-0 lg:space-x-4 w-full lg:w-auto mt-4 lg:mt-0">
          <div className="hidden md:block">
            <SearchInput />
          </div>
          <div className="hidden md:flex items-center justify-center space-x-4">
            <Message />
            <Notification />
          </div>

          <div className="flex md:hidden items-center justify-between space-x-4 w-full">
            <img
              src={Profile}
              alt="Profile"
              className="block md:hidden h-14 w-14 rounded-full"
            />
            <MiniMessageIcon />
            <MiniNotificationIcon />
            <div className="block md:hidden">
              <SearchInput />
            </div>
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 bg-white rounded-md shadow-md"
            >
              {isSidebarOpen ? <XIcon size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden lg:block w-[1px] h-[30px] bg-[#EEEFF2]" />
          <div className="rounded-full flex items-center space-x-2">
            <img
              src={Profile}
              alt="Profile"
              className="hidden md:block h-8 w-8 rounded-full"
            />
            <span className="text-[#111827] text-[16px] font-[600] w-[130px] hidden md:block">
              Tynisha Obey
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 ml-0 lg:ml-64 mt-32 lg:mt-24">
        {/* Stats Cards */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Total Menu", value: "345", icon: <MenuIcon2 /> },
            {
              title: "Total Revenue",
              value: "$37,193.00",
              icon: <DashboardIcon2 />,
            },
            {
              title: "Total Customers",
              value: "1,349",
              icon: <CustomerIcon2 />,
            },
            { title: "Total Orders", value: "3,500", icon: <OrderIcon2 /> },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <span className="my-10">{stat.icon}</span>
              <h3 className="text-[14px] font-[400] text-[#64748B] mt-5">
                {stat.title}
              </h3>
              <p className="text-[30px] text-[#1E293B] font-[650]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Revenue and Customers */}
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg relative">
            <div className="w-full text-[18px] text-[#081735] font-[630] p-4 border-b border-b-[#E6E8F0] flex items-center justify-between relative">
              <p>Revenue</p>
              <EllipsisIcon
                color="#8F95B2"
                size={20}
                onClick={handleToggleDropdown}
                cursor={"pointer"}
              />
              <div
                className={`z-20 bg-white shadow-md rounded-md h-[116px] w-[150px] space-y-3 absolute pl-3 pt-3 right-4 top-[40px] border border-[#E6E8F0] ${
                  isDropdownVisible ? "block" : "hidden"
                }`}
              >
                {[
                  {
                    icon: <EyeIcon color="#8F95B2" size={18} />,
                    delete: "text-[#8F95B2]",
                    text: "View",
                  },
                  {
                    icon: <ShareIcon color="#8F95B2" size={18} />,
                    delete: "text-[#8F95B2]",
                    text: "Export",
                  },
                  {
                    icon: <Trash2 color="#FF754C" size={18} />,
                    delete: "text-[#FF754C]",
                    text: "Delete",
                  },
                ].map((option, i) => (
                  <div
                    key={i}
                    className={`${option.delete} flex items-center text-[14px] font-[400] space-x-2`}
                  >
                    {option.icon}
                    <span>{option.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <BarChart />
          </div>

          <div className="bg-white shadow-md rounded-lg relative">
            <div className="w-full text-[18px] text-[#081735] font-[630] p-4 border-b border-b-[#E6E8F0] flex items-center justify-between relative">
              <div>
                <h1 className="text-[18px] font-[630] text-[#081735]">
                  Customers
                </h1>
                <p className="text-[#8F95B2] text-[12px] font-[400]">
                  Customers that buy our products
                </p>
              </div>
              <EllipsisIcon
                color="#8F95B2"
                size={20}
                onClick={handleToggleDropdown}
                cursor={"pointer"}
              />
              <div
                className={`z-20 bg-white shadow-md rounded-md h-[116px] w-[150px] space-y-3 absolute pl-3 pt-3 right-4 top-[40px] border border-[#E6E8F0] ${
                  isDropdownVisible ? "block" : "hidden"
                }`}
              >
                {/* Dropdown content remains the same */}
              </div>
            </div>
            <PieChart />
          </div>
        </div>

        {/* Map and Customer List */}
        <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg relative lg:col-span-2">
            <div className="w-full text-[18px] text-[#081735] font-[630] p-4 py-6 border-b border-b-[#E6E8F0] flex items-center justify-between relative">
              <p>Customer Map</p>
            </div>
            <div className="p-2 py-3">
              <img
                src={CustomMap}
                alt="map"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg relative p-3">
            <div className="w-full text-[18px] text-[#081735] font-[630] py-2 flex items-center justify-between relative">
              <p>Customer List</p>
            </div>
            <ul className="divide-y divide-gray-100">
              {customers.map((customer, index) => (
                <li
                  key={index}
                  className="flex items-center py-[5px] hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                >
                  <img
                    src={customer.image}
                    alt="profile images"
                    className="w-[40px] mr-2"
                  />
                  <div>
                    <p className="text-[#1E293B] text-[14px] font-[700]">
                      {customer.name}
                    </p>
                    <p className="text-[14px] font-[400] text-[#64748B]">
                      {customer.email}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Menu Section */}
        <div className="bg-white shadow-md rounded-lg mx-4 mb-4">
          <div className="w-full text-[18px] text-[#081735] px-4 font-[630] border-b border-b-[#E6E8F0] flex flex-col lg:flex-row items-start lg:items-center justify-between relative">
            <p className="py-4">Menu</p>
            <div className="w-full lg:w-auto overflow-x-auto">
              <ul className="flex items-center space-x-4 min-w-max">
                {[
                  {
                    link: "All Categories",
                    active:
                      "text-[#6C5DD3] border-b-2 border-[#6C5DD3] font-[600]",
                  },
                  { link: "Breakfast" },
                  { link: "Lunch" },
                  { link: "Dinner" },
                ].map((menu, i) => (
                  <li
                    key={i}
                    className={`${menu.active} py-4 text-[15px] mt-1 font-[500] text-[#5F6D7E] whitespace-nowrap`}
                  >
                    {menu.link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <MenuSection />
        </div>
      </main>
    </div>
  );
}
