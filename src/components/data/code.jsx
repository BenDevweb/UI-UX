export const code = {
    "App.jsx": `
        import {useState} from "react";
        import { code } from "@CodingSpace/ai";

        function App() {
        const [code, setCode] = useState("");

        const handleAICompletion = async () => {
            const suggestion = await CodingSpace.complete(code);
            setCode[suggestion];
            };

            return (
                <div className="app">
                    <CodeEditor 
                        onChange={setCode}
                        onAI={handleAICompletion}
                </div>
            );
        }
    `,

    "Hero.jsx": `
        import {useState} from "react";
        import { code } from "@CodingSpace/ai";

        function App() {
        const [code, setCode] = useState("");

        const handleAICompletion = async () => {
            const suggestion = await CodingSpace.complete(code);
            setCode[suggestion];
            };

            return (
                <div className="app">
                    <CodeEditor 
                        onChange={setCode}
                        onAI={handleAICompletion}
                </div>
            );
        }
    `,

    "Navbar.jsx": `
        import {useState} from "react";
        import { code } from "@CodingSpace/ai";

        function App() {
        const [code, setCode] = useState("");

        const handleAICompletion = async () => {
            const suggestion = await CodingSpace.complete(code);
            setCode[suggestion];
            };

            return (
                <div className="app">
                    <CodeEditor 
                        onChange={setCode}
                        onAI={handleAICompletion}
                </div>
            );
        }
    `
}