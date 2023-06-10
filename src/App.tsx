import InputWithSelect from "@/components/Input/InputWithSelect.tsx";

function App() {
    return (
        <section
            className={
                "flex flex-col justify-center px-20 h-screen  items-center"
            }
        >
            <InputWithSelect options={["Option1", "Option2"]} />
        </section>
    );
}

export default App;
