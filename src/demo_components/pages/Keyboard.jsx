

function Keyboard() {
    return (
        <div>
            <h1>Keyboard Accessibility: The Unsung Hero of Web Inclusivity</h1>
            
            <section>
                <h2>Why Keyboard Functionality Matters</h2>
                <p>
                    Imagine navigating the web without a mouse. Thats the reality for many users relying on keyboards,
                    and making your site keyboard accessible is crucial for inclusivity.
                </p>
            </section>

            <section>
                <h2>Demo: Can Your Site Play Nice with Keyboards?</h2>
                <p>
                    Try navigating these elements using only your keyboard:
                </p>
                <ul>
                    <li>Can you tab through all interactive elements?</li>
                    <li>Can you activate buttons and links with the Enter key?</li>
                    <li>Does the focus indicator stay visible and clear?</li>
                </ul>
                <p>
                    If any of these are a struggle, your site might need some keyboard-friendly tweaks.
                </p>
            </section>

            <section>
                <h2>Code Samples for a Keyboard-Friendly Web</h2>
                <p>
                    Lets make your site shine with keyboard accessibility. Here are some code snippets to get you started:
                </p>

                <h3>1. Ensure Focus Styles</h3>
                <pre>
                    {`/* Ensure clear and visible focus styles */\n
:focus {\n
    outline: 2px solid #007bff;\n
    outline-offset: 2px;\n
}`}
                </pre>

                <h3>2. Make Interactive Elements Accessible</h3>
                <pre>
                    {`/* Ensure buttons and links are keyboard accessible */\n
button, a {\n
    tabindex: 0;\n
}`}
                </pre>

                <h3>3. Test Your Sites Keyboard Accessibility</h3>
                <pre>
                    {`/* Test with real users and automated tools */\n
# Pro tip: Use tools like axe Accessibility Checker for detailed reports\n
# on your site's accessibility status.`}
                </pre>
            </section>
        </div>
    );
}

export default Keyboard;
