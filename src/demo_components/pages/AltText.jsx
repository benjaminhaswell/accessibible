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
                        Ever wondered about those mysterious &quot;alt&quot; attributes in your HTML? They might seem like a tiny detail, but trust me, they play a big role in making the web accessible to everyone.
                    </p>
                    <p className="my-8">
                        Alt text, short for alternative text, is a brief description you provide for images on your website. It&apos;s not just for screen readers; it&apos;s a little snippet that can make a big difference for users with slow internet connections or those who choose not to load images for a faster browsing experience.
                    </p>
                    <p className="my-8">
                        Picture this: a user visits your site, and for some reason, the images don&apos;t load. Without alt text, they&apos;re left in the dark, missing out on crucial information your images might convey. But with well-crafted alt text, you&apos;re ensuring that even if the images don&apos;t show up, the user still gets the gist.
                    </p>
                    <p className="my-8">
                        Now, from a developer&apos;s standpoint, it&apos;s a breeze to add alt text. Just drop an &quot;alt&quot; attribute into your image tag and describe the image. It&apos;s like giving your images a voice!
                    </p>

                    {/* Example */}
                    <div className="bg-darkerGray p-6 rounded-md">
                        <img
                            src="path/to/your/image.jpg"
                            alt="A group of diverse people collaborating on a project"
                            className="w-full"
                        />
                    </div>
                    <br />

                    <p className="my-8">
                        See? Easy as pie! But why should you care? Well, not only does it make your site inclusive, but it also improves your website&apos;s SEO. Search engines love well-described images, and it might just give your site that extra boost in the rankings.
                    </p>

                    <p className="my-8">
                        Imagine you&apos;re using a screen reader, and instead of hearing &quot;image123.jpg,&quot; you get a vivid description of what&apos;s happening in the image. It&apos;s like turning a silent movie into an engaging audiobook!
                    </p>

                    <p className="my-8">
                        So, here&apos;s the deal: the next time you&apos;re adding images to your fantastic website, take a moment to be a hero for all your users. Describe your images with alt text, and let the inclusivity magic happen!
                    </p>

                    <p className="my-8">
                        For a deep dive into creating effective alt text, check out the <a className="underline text-purple" href="https://www.w3.org/WAI/tutorials/images/decision-tree/">W3C guide on alt text decision tree</a>.
                    </p>
                </section>
            </div>
        </>
    );
}

export default AltText;
