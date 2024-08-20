import "./style.css";

const Section = ({ title, extraHeaderContent, body }) => (
    <div className="section">
        <div className="section__header">
            <h2>{title}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </div>
);

export default Section;