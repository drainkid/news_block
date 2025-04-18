import NewsBlock from "./components/NewsBlock/NewsBlock.tsx";
import './styles/globals.css'
import {newsData} from "./utils/data.ts";

const App = () => {
    return (
        <div>
            <NewsBlock newsData={newsData} />
        </div>
    );
};

export default App;