import SideBar from "../SideBar";

function ColorContrast() {

    document.title = 'AccessiBible - Color Contrast'

    return (
        <>
            <SideBar activeLink={"contrast"} />

            <div className="text-left px-48">
                <h1 className="mb-12">Color Contrast</h1>

                <section>
                    <p className="my-8">
                        Have you ever struggled to read text because its color isn&apos;t different enough from that of the background? That&apos;s color contrast.
                    </p>

                    <p className="my-8">Color contrast is the difference in luminance or color between two elements. Good color contrast ensures that text, images, and interactive elements
                        on a page are easily distinguishable from the background.
                    </p>

                    <p className="my-8">Without getting too technical, color contrast is measured using a contrast ratio, calculated by taking the luminance of the lighter color
                    and dividing it by the luminance of the darker color. There are tons of tools online you can use to <a className="underline text-purple" href="https://webaim.org/resources/contrastchecker/">calculate contrast ratio</a> given two colors.
                    </p>

                    <p className="my-8">Generally, you want all elements on your page to sport a contrast ratio of <strong>at least 4:5:1</strong>. For reference:</p>

                    <div className="bg-darkerGray p-6 rounded-md">
                        <h2 className="text-center font-bold">This text has a color contrast ratio of 9.37:1</h2>
                    </div>

                    <div className="bg-darkerGray p-6 rounded-md">
                        <h2 className="text-center font-bold">This text has a color contrast ratio of 9.37:1</h2>
                    </div>

                    <p className="my-8">Here are some key considerations for implementing effective color contrast:</p>

                    {/* Color Contrast Tips */}
                    <ul className="px-8">
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">1.</span> Use sufficient contrast between text and background colors to ensure readability.
                        </li>
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">2.</span> Check color contrast ratios to comply with accessibility standards (e.g., WCAG guidelines).
                        </li>
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">3.</span> Avoid relying solely on color to convey important information; use additional visual cues or text labels.
                        </li>
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">4.</span> Test color combinations for common color vision deficiencies to ensure inclusivity.
                        </li>
                        <li className="my-4">
                            <span className="font-bold bg-purple text-bgGray p-1.5 rounded">5.</span> Consider using high-contrast themes or providing customizable color options for users with specific needs.
                        </li>
                    </ul>

                    <p className="my-8">
                        Ensuring proper color contrast is not only an accessibility requirement but also contributes to a better overall design aesthetic. It enhances visibility,
                        reduces eye strain, and creates a more enjoyable experience for all users.
                    </p>

                    {/* Examples and Demonstrations */}
                    <div className="bg-darkerGray p-6 rounded-md">
                        <p className="mb-4 font-bold text-purple">Example: Adequate Color Contrast</p>
                        <div className="bg-white text-black p-4 rounded">
                            <p>Sample Text</p>
                        </div>
                    </div>

                    <div className="bg-darkerGray p-6 rounded-md mt-8">
                        <p className="mb-4 font-bold text-purple">Example: Insufficient Color Contrast</p>
                        <div className="bg-white text-white p-4 rounded">
                            <p>Sample Text</p>
                        </div>
                    </div>

                    <p className="my-8">
                        Test and evaluate your color choices to ensure that your design meets accessibility standards and provides an inclusive experience for all users.
                    </p>

                    <p className="my-8">
                        For more detailed information on color contrast guidelines and tools, refer to the <a className="underline text-purple" href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">WCAG guidelines on color contrast</a>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default ColorContrast;
