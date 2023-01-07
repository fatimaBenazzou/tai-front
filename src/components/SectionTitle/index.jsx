import React from 'react';
import "./style.scss";

const SectionTitle = ({subtitle, title, description, textAlignment, textColor}) => {
    return (
        <div className={`section-heading ${textAlignment} ${textColor}`}>
            <div className="subtitle" dangerouslySetInnerHTML={{__html: subtitle}}></div>
            <h2 className="title" dangerouslySetInnerHTML={{__html: title}}></h2>
            <p dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
    )
}

export default SectionTitle;