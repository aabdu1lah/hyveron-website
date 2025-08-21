import React from "react";

function Navbar({ activeSection, setActiveSection, colors, assets }) {
    return (
        <nav className="p-4 shadow-md" style={{ backgroundColor: colors.verdigris }}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/*  Company Logo  */}
                <div className="flex items-center">
                    <img
                        src={assets.hyveron_logo_black}
                        alt="Hyveron Logo"
                        className="h-10 w-10 mr-2 rounded-full"
                    />
                    <span className="text-2x1 font-bold" style={{ color: colors.blackTone }}>
                        Hyveron
                    </span>
                </div>
                {/*  Navigation Links  */}
                <ul className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8 text-lg font-medium">
                    <li>
                        <button
                            onClick={() => {
                                setActiveSection('home')
                            }}
                            className="hover:underline focus:outline-none px-3 py-2 rounded-md transition-colors duration-300"
                            style={{
                                color: activeSection === 'home' ? colors.blackTone : colors.whiteTone,
                                backgroundColor: activeSection === 'home' ? colors.whiteTone : 'transparent'
                            }}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setActiveSection('about')
                            }}
                            className="hover:underline focus:outline-none px-3 py-2 rounded-md transition-colors duration-300"
                            style={{
                                color: activeSection === 'about' ? colors.blackTone : colors.whiteTone,
                                backgroundColor: activeSection === 'about' ? colors.whiteTone : 'transparent'
                            }}
                        >
                            About Us
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setActiveSection('products')
                            }}
                            className="hover:underline focus:outline-none px-3 py-2 rounded-md transition-colors duration-300"
                            style={{
                                color: activeSection === 'products' ? colors.blackTone : colors.whiteTone,
                                backgroundColor: activeSection === 'products' ? colors.whiteTone : 'transparent'
                            }}
                        >
                            Products
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setActiveSection('blog')
                            }}
                            className="hover:underline focus:outline-none px-3 py-2 rounded-md transition-colors duration-300"
                            style={{
                                color: activeSection === 'blog' ? colors.blackTone : colors.whiteTone,
                                backgroundColor: activeSection === 'blog' ? colors.whiteTone : 'transparent'
                            }}
                        >
                            Blog
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setActiveSection('contact')
                            }}
                            className="hover:underline focus:outline-none px-3 py-2 rounded-md transition-colors duration-300"
                            style={{
                                color: activeSection === 'contact' ? colors.blackTone : colors.whiteTone,
                                backgroundColor: activeSection === 'contact' ? colors.whiteTone : 'transparent'
                            }}
                        >
                            Contact
                        </button>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar