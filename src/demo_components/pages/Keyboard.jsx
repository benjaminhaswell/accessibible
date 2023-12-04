import SideBar from "../SideBar";

function Keyboard() {
    return (

        <>

            <SideBar />

            <div className="text-left px-48">
                <h1 className="mb-12">Keyboard Accessibility</h1>

                <section>
                    <p className="my-8">
                        You probably know that you can use the tab key to navigate through elements on a webpage.
                        Whether it be tabbing through fields in a form or links in a menu, keyboard controls allow for a
                        smoother, more convenient navigation through a webpage for the average user.
                    </p>
                    <p className="my-8">However, to many people it is more than just a quality of life feature, and they actually rely on
                        keyboard controls to navigate through the webpage at all.
                    </p>
                    <p className="my-8">The most common keyboard controls for navigation include:</p>

                    {/* Keyboard control list */}
                    <ul className="px-8">
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">Tab</span> Move forward through interactive elements on the page (links, buttons, form fields).
                        </li>
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">Shift + Tab</span> Move backward through interactive elements on the page.
                        </li>
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">Enter</span> Activate a selected link or button.
                        </li>
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">Spacebar</span> Scroll down in the page.
                        </li>
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">Shift + Spacebar</span> Scroll up in the page.
                        </li>
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">Arrow Keys</span> Navigate within certain elements, like dropdown menus or lists.
                        </li>
                    </ul>
                    <p className="my-8">
                        Using those controls only, navigate through this interface:
                    </p>

                    {/* Demo */}
                    <div className="bg-darkerGray p-6">
                        <nav className="mb-8">
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="#" className="hover:text-gray-300 outline-purple outline-8">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300 outline-purple">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300 outline-purple">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300 outline-purple">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <label htmlFor="username" className="block">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="text-black px-4 py-2 rounded outline-purple"
                        />
                        <br />
                        <label htmlFor="fruits">Favorite fruit:</label>
                        <select
                            name="fruits"
                            id="fruits"
                            className="block appearance-none w-full outline-purple py-2 px-4 rounded"
                        >
                            <option value="volvo">Apple</option>
                            <option value="saab">Banana</option>
                            <option value="mercedes">Orange</option>
                            <option value="audi">Pineapple</option>
                        </select>
                        <button className="text-white px-4 py-2 rounded bg-purple mt-4">Click me!</button>

                    </div>
                </section>
            </div>

        </>
    );
}

export default Keyboard;
