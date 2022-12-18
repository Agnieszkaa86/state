const warningStyles = {
    background: "green",
    color: "red",
};

const Warning = ({ children }) => (
    <section sttyle = {warningStyles}>
        <h2>Warning!!!</h2>
        <div>{children}</div>
    </section>
);

export default Warning;