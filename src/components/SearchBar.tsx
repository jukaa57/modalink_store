import { IconSearch } from "@tabler/icons-react";
import { Input } from "./ui/input";

type searchProps = {
    searchTerms: string;
    setSearchTerms: (a: string) => void;
};

export function SearchBar({ searchTerms, setSearchTerms }: searchProps) {

    return (
        <Input
            inputProps={{
                type: "text",
                name: "search",
                placeholder: "Search here",
                maxLength: 100,
                autoComplete: "off",
                autoCapitalize: "off",
                autoCorrect: "off",
                value: searchTerms,
                onChange: ({target}) => { setSearchTerms(target.value)}
            }}
            divProps={{
                
            }}
            IconLeft={IconSearch}
        />
    );
};