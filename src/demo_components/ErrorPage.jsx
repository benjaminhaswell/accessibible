import HomeLink from "./HomeLink";

function ErrorPage() {
    return (
        <>
            <HomeLink />

            <h1>Oops. That page doesn&apos;t exist.</h1>
            <br />
            <h2>Please navigate home.</h2>
        </>
    );
}

export default ErrorPage;