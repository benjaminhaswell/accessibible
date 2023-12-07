import SideBar from "../SideBar";

function AltText() {

    document.title = 'AccessiBible - Alt Text'

    return (
        <>
            {/* Don't forget to update SideBar.jsx */}
            <SideBar activeLink={"alt-text"} />

            <div className="text-left px-48">
                <h1 className="mb-12">Alt Text</h1>

                <section>

                    <p className="my-8">
                        Certain HTML elements can make use of the <strong>alt</strong> attribute to describe their content in the case that it would otherwise
                        not be able to be perceieved. For example, an image&apos;s <strong>alt text</strong> value is displayed in case the image fails to load:
                    </p>

                    {/* Example */}
                    <div className="bg-darkerGray p-6 rounded-md flex flex-row justify-between space-x-12">
                        <p><code>&lt;img
                            src=&quot;bad/path/to/image.jpg&quot;
                            alt=&quot;Image of a dog running away with a legendary artifact&quot;/&gt;</code></p>
                        <img
                            src="bad/path/to/image.jpg"
                            alt="A white dog running away with a legendary artifact"
                            className="text-white bg-purple p-4 rounded-md"
                        />
                    </div>

                    <p className="my-8">
                        This is helpful, but its certainly not the only use case for alt text. <strong>Screen reader users</strong>, for instance, <strong>rely on alt text to describe images and graphics</strong> that they are unable to perceive otherwise.
                        Without alt text, the image might as well not even be there for these users, potentially restricting countless people from taking in all the content your project has to offer.
                    </p>

                    <p className="my-8">Alt text descriptions are usually short and sweet, especially when the surrounding content already provides a decent amount of context. Make sure to find
                        the right balance between detailed and to the point, and don&apos;t be afraid to check out the countless online resources providing information
                        on <a href="https://accessibility.huit.harvard.edu/describe-content-images" className="underline text-purple">how to write good alt text</a>.
                    </p>

                    <p className="my-8">Writing <em>good</em> alt text also <strong>boosts your project&apos;s Search Engine Optimization (SEO)</strong>, allowing it to appear
                    more frequently in relevant searches and improving your rankings. Search engines love well-described images!</p>

                    <p>There are cases, however, when you want to leave alt values empty, such as when the image is purely decorative, or when alt text
                        wouldn&apos;t provide anything new.
                        W3 have also constructed an <a className="underline text-purple" href="https://www.w3.org/WAI/tutorials/images/decision-tree/">Alt Decision Tree</a> you can walk through when brainstorming alt text for your images.
                    </p>

                    <p className="my-8">
                        So just remember, writing good alt text (when appropriate) takes just a moment of time and goes a long way in your project&apos;s accessibility, user experience,
                        and SEO performance. In the wise words of Shia LaBeouf:
                    </p>

                    <img
                            src="i/dont/actually/have/this/image.jpg"
                            alt="Shia LaBeouf shouting 'Just Do It!'"
                            className="text-white bg-purple p-4 rounded-md"
                        />

                </section>
            </div>
        </>
    );
}

export default AltText;
