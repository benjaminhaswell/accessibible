import SideBar from "../SideBar";
import { useState } from 'react';

function Keyboard() {

    const [showMessage1, setShowMessage1] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);


    const handleClick1 = () => {
        setShowMessage1(true);

        // Hide the message after a short delay (you can adjust the duration)
        setTimeout(() => {
            setShowMessage1(false);
        }, 1000);
    };

    const handleClick2 = () => {
        setShowMessage2(true);

        // Hide the message after a short delay (you can adjust the duration)
        setTimeout(() => {
            setShowMessage2(false);
        }, 1000);
    };

    function goToSection() {
        window.location.hash = 'demo2';
    }

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

                    {/* Working Demo */}
                    <div className="bg-darkerGray p-6 rounded-md" id="demo1">
                        <nav className="mb-8">
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="#demo1" className="outline-purple">Home</a>
                                </li>
                                <li>
                                    <a href="#demo1" className="outline-purple">About</a>
                                </li>
                                <li>
                                    <a href="#demo1" className="outline-purple">Services</a>
                                </li>
                                <li>
                                    <a href="#demo1" className="outline-purple">Contact</a>
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
                            className="block w-full outline-purple py-2 px-4 rounded"
                        >
                            <option value="volvo">Apple</option>
                            <option value="saab">Banana</option>
                            <option value="mercedes">Orange</option>
                            <option value="audi">Pineapple</option>
                        </select>
                        <button onClick={handleClick1}
                            className="text-white px-4 py-2 rounded bg-purple mt-4">Click me!</button>
                        {showMessage1 && (
                            <span
                                className="text-purple ml-4"
                                onAnimationEnd={() => setShowMessage1(false)}
                            >
                                Clicked!
                            </span>
                        )}

                    </div>

                    <p className="my-8">Now try navigating through this seemingly similar interface:</p>

                    {/* Not Working Demo */}
                    <div className="bg-darkerGray p-6 rounded-md" id="demo2">
                        <nav className="mb-8">
                            <ul className="flex space-x-4">
                                <li>
                                    <span href="#demo2" onClick={goToSection} className="cursor-pointer hover:text-purple">Home</span>
                                </li>
                                <li>
                                    <span href="#demo2" onClick={goToSection} className="cursor-pointer hover:text-purple">About</span>
                                </li>
                                <li>
                                    <span href="#demo2" onClick={goToSection} className="cursor-pointer hover:text-purple">Services</span>
                                </li>
                                <li>
                                    <span href="#demo2" onClick={goToSection} className="cursor-pointer hover:text-purple">Contact</span>
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
                            className="block w-full outline-purple py-2 px-4 rounded"
                        >
                            <option value="volvo">Apple</option>
                            <option value="saab">Banana</option>
                            <option value="mercedes">Orange</option>
                            <option value="audi">Pineapple</option>
                        </select>
                        <div className="flex flex-row items-center">

                        <div
                            onClick={handleClick2}
                            className="text-white px-4 py-2 rounded bg-purple mt-4 cursor-pointer w-28"
                            role="button"
                        >
                            Click me!
                        </div>
                        {showMessage2 && (
                            <span
                                className="text-purple ml-4 mt-4"
                                onAnimationEnd={() => setShowMessage2(false)}
                            >
                                Clicked!
                            </span>
                        )}
                        </div>

                    </div>

                    {/* More description */}
                    <p className="my-8">As you can see, these interfaces may appear practically identical, 
                    but one of them is completely keyboard inaccessible! The second interface&apos;s menus and
                    button can&apos;t even be focused, since they are &lt;span&gt; and &lt;div&gt; elements, respectively.</p>

                    <p className="my-8">You&apos;ll also notice that, when used with a mouse, the interface
                    doesn&apos;t have any functional problems.</p>

                </section>
            </div>

        </>
    );
}

export default Keyboard;
