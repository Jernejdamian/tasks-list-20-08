const Buttons = ({ tasks, hideDoneTasks }) => (

    tasks.length > 0 && (
        <div class="js-buttons">
            <button>{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
            <button
                disabled={tasks.every(({ done }) => done)}
            >Ukończ wszystkie</button>
        </div>)
);

export default Buttons;


