import SideBar from "../SideBar";
import { useState } from 'react';

function Keyboard() {

    document.title = 'AccessiBible - Keyboard'

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

            <SideBar activeLink={"keyboard"} />

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
                        <label htmlFor="usernameOne" className="block">Username:</label>
                        <input
                            type="text"
                            id="usernameOne"
                            className="text-black px-4 py-2 rounded outline-purple"
                            autoComplete="off"
                        />
                        <br />
                        <label htmlFor="fruitsOne">Favorite fruit:</label>
                        <select
                            name="fruitsOne"
                            id="fruitsOne"
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
                        <label htmlFor="usernameTwo" className="block">Username:</label>
                        <input
                            type="text"
                            id="usernameTwo"
                            className="text-black px-4 py-2 rounded outline-purple"
                            autoComplete="off"
                        />
                        <br />
                        <label htmlFor="fruitsTwo">Favorite fruit:</label>
                        <select
                            name="fruitsTwo"
                            id="fruitsTwo"
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
                        doesn&apos;t have any functional problems: you can freely select the menu items to navigate to their
                        intended destinations, and the &apos;button&apos; still does something thanks to an onlick listener.</p>

                    <p className="my-8">This kind of behavior can be found on many websites across the internet which don&apos;t take
                        keyboard accessibility into account when designing their UI and instead focus on aesthetics and basic functionality.</p>

                    <p className="my-8">Generally, the more &apos;custom&apos; an element is, the less likely it is that the element will be
                        keyboard accessible. There are ways to definitively make custom elements (like &lt;div&gt; buttons) keyboard accessible, most
                        of the time involving the <strong>tabindex</strong> attribute which allows developers to alter the sequence of focusable elements
                    </p>

                    <p className="my-8">Try entering your browser developer tools and adding <strong>tabindex=&quot;0&quot;</strong> as an attribute to any the unfocusable
                        elements above to demonstrate its functionality. These elements will still not function like their vanilla HTML counterparts - you would likely need
                        event listeners to replicate the desired behavior - but that&apos;s one step in the right direction.</p>

                    <a className="underline text-purple" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">You can learn more about how tabindex here.</a>

                    <p className="my-8">The bottom line is, instead of spending precious time building UI elements out of unintended tags, just use the boundless
                        tags and their functionalities HTML already has built in! It will dramatically increase keyboard accessibility, save you
                        time, and improve your skills as a developer in the long run.</p>

                </section>
            </div>

        </>
    );
}

export default Keyboard;
