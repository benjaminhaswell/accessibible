import SideBar from "../SideBar";

function Template () {

    document.title = 'AccessiBible - name'

    return (
        <>
        {/* Don't forget to update SideBar.jsx */}
        <SideBar activeLink={"pagename"} />

        <div className="text-left px-48">
                <h1 className="mb-12">Name</h1>
        </div>
        
        
        </>
    );
}

export default Template;