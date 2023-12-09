
const AccessibleForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        // Submission logic
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            
            {/* Text Input */}
            <div className="mb-4 transition-all duration-300">
                <label htmlFor="text-input" className="block text-sm font-bold mb-2">
                    Text Input:
                </label>
                <input
                    type="text"
                    id="text-input"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter text"
                />
            </div>

            {/* Radio Buttons */}
            <div className="mb-4 transition-all duration-300">
                <p className="text-sm font-bold mb-2">Radio Buttons:</p>
                <div>
                    <label htmlFor="radio-option1">
                        <input
                            type="radio"
                            id="radio-option1"
                            name="radio-group"
                            className="mr-2"
                        />
                        Option 1
                    </label>
                </div>
                <div>
                    <label htmlFor="radio-option2">
                        <input
                            type="radio"
                            id="radio-option2"
                            name="radio-group"
                            className="mr-2"
                        />
                        Option 2
                    </label>
                </div>
            </div>

            {/* Dropdown/Select */}
            <div className="mb-4 transition-all duration-300">
                <label htmlFor="select-input" className="block text-sm font-bold mb-2">
                    Select Dropdown:
                </label>
                <select
                    id="select-input"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300"
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>

            {/* Checkbox */}
            <div className="mb-4 transition-all duration-300">
                <label htmlFor="checkbox" className="flex items-center">
                    <input type="checkbox" id="checkbox" className="mr-2" />
                    Check me
                </label>
            </div>

            {/* Textarea */}
            <div className="mb-4 transition-all duration-300">
                <label htmlFor="textarea-input" className="block text-sm font-bold mb-2">
                    Textarea:
                </label>
                <textarea
                    id="textarea-input"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter text"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-4 focus:border-blue-900 transition-all duration-300"
            >
                Submit
            </button>
        </form>
    );
};

export default AccessibleForm;
