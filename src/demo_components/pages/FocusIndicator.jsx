import SideBar from "../SideBar";
import './FocusIndicatorStyles.css'

function FocusIndicator() {
    document.title = 'AccessiBible - Focus Indicator'

    return (
        <>
            <SideBar activeLink={"focus"} />

            <div className="text-left px-48">
                <h1 className="mb-12">Focus Indicator</h1>

                <p className="my-8">The focus indicator is the UI element that allows you to <strong>see what element keyboard focus is currently on</strong>. Its primary purpose is to provide a visual cue when navigating through a page via keyboard. Tab through these elements to see it in action:</p>

                <div className="bg-darkerGray p-6 rounded-md" id="focusDemo">
                    <nav className="mb-4">
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
                    <label htmlFor="social security" className="block">Social Security Number:</label>
                    <input
                        type="text"
                        id="social security"
                        className="text-black px-4 py-2 rounded outline-purple"
                        autoComplete="off"
                    />
                    <br />
                    <label htmlFor="languages">Best programming language:</label>
                    <select
                        name="languages"
                        id="languages"
                        className="block w-full outline-purple py-2 px-4 rounded"
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="C++">C++</option>
                    </select>
                    <button className="text-white px-4 py-2 rounded bg-purple mt-4">Most useful button on the planet</button>

                </div>

                <p className="my-8">As you can see, not all elements have the exact same focus indicator; the focus indicator can be styled using CSS, specifically using the <strong>focus-visible</strong> pseudo-class:</p>

                {/* Example */}
                <div className="bg-darkerGray p-6 rounded-md flex flex-row justify-between">
                    <p>
                        <code>
                            button:<strong>focus-visible</strong> {'{'}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;outline: 8px dashed black;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;border-radius: 0px;
                            <br />
                            {'}'}
                        </code>
                    </p>
                    <button className="text-white px-4 py-2 rounded bg-purple w-1/3" id="styledBtn">
                        Click Me For Good Luck
                    </button>
                </div>

                <p className="my-8">Use the <strong>focus-visible</strong> pseudo-class to make sure your UI
                    elements are clear and visible (and <a className="underline text-purple" href="https://webaim.org/resources/contrastchecker/">make sure they conform to contrast guidelines</a>).</p>

                <p className="my-8">As discussed in the keyboard demonstration, most HTML elements come
                    default with pretty good focus indicators; depending on your page content and color schemes
                    you may need to modify the focus indicator for respective elements, but 8/10 times
                    it <em>should</em> be fine, <strong>test it anyway</strong>.</p>

                <p className="my-8">Where the property really shines is in the case that you are using
                    unorthodox elements like &lt;div&gt; elements for buttons or &lt;span&gt; elements for links.
                    With <strong>tabindex</strong> values of 0, usually these elements have poor default focus
                    indicators since they&apos;re such generic tags. Applying custom styles to the focus indicators
                    of these elements are crucial to ensuring usability for all.</p>

                <p className="my-8">Another key component of focus on webpages is <strong>focus order</strong>; the order
                    that the focus indicator follows when navigating through a page.</p>

                <p className="my-8">WCAG declares that the focus order of a page needs to be logical. In most cases
                    this means it needs to follow the standard western convention of reading from <strong>top left to bottom right</strong>,
                    but this could vary depending on the interface.</p>

            </div>
        </>
    );
}

export default FocusIndicator;
