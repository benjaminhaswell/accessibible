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
                    <br />

                    <div className="bg-purple p-6 rounded-md">
                        <h2 className="text-center font-bold">This text has a color contrast ratio of 2.57:1</h2>
                    </div>

                    <p className="my-8">When you take into account people with visual impairments, contrast ratio becomes
                    significantly more important.</p>

                    <p className="my-8">Here are those same UI elements again, this time through the lens of somebody
                    with tritanopia:</p>

                    <div className="bg-darkerGray p-6 rounded-md">
                        <h2 className="text-center text-tri-text font-bold">This text has a color contrast ratio of 9.37:1</h2>
                    </div>
                    <br />

                    <div className="bg-tri-purple p-6 rounded-md">
                        <h2 className="text-center text-tri-text font-bold">This text has a color contrast ratio of 2.57:1</h2>
                    </div>

                    <p className="my-8">As you can see, the first UI element is practically unchanged, but the second is completely different.
                    You can imagine how this must impact somebody&apos;s experience exploring the web when contrast isn&apos;t taken into account at all.</p>

                    <p className="my-8">Users with impaired contrast sensitivity issues are especially subjected to these design (in)decisions,
                    leaving some elements completely imperceivable.</p>

                    <p className="my-8">There are tons of developer tools you can use to check t    he contrast ratios of your UI elements. Whether it be
                     browser extensions like <a className="underline text-purple" href="https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/">WCAG Color Contrast Checker for Firefox</a> which scans your current page and provides a report on
                    failing elements, or tools built into Chrome&apos;s Developer Tools like <a className="underline text-purple" href="https://developer.chrome.com/docs/lighthouse/overview">Lighthouse</a>, there are countless
                    ways to ensure that your UI is perceivable by everyone using it!</p>

                    <p className="my-8">
                        For more detailed information on color contrast guidelines and tools, refer to the <a className="underline text-purple" href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">WCAG guidelines on color contrast</a>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default ColorContrast;
