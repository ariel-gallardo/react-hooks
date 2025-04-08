import StoreProvider from "./StoreContext";
import UseContextPage from "./UseContextPage";

const Page = () => {

    return (
        <StoreProvider>
            <UseContextPage/>
        </StoreProvider>
    );
}

export default Page;