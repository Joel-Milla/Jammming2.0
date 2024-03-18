// External components
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

function SearchBar() {
    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <div className="w-full max-w-64 md:max-w-md">
                <Input type="text" label="Song" fullWidth />
            </div>
                <Button color="primary">
                    Search
                </Button>
        </div>
    )
}

export default SearchBar;