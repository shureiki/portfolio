// IMPORT STYLE
import './styles/Card.css';

export default function Card({ id, title, description, list, links, tags }) {
    return (
        <div id={id} className='card'>
            <h3 className='title'>{title}</h3>
            <div className='content'>
                <p className='description'>{description}</p>
                {list && (<ul className='technicalSheet'>{list.map((item, i) => (<li key={i}>{item}</li>))}</ul>)}
            </div>

            {links && (<div className='links'>
                {links && ([links].flat().map((link, i) => (<a key={i} className='link' target='_blank' href={link.href}>{link.title}</a>)))}
            </div>)}

            { tags && (<div className='tags'>
                {tags.sort((a, b) => b.name.length - a.name.length).map((tag, i) => (
                    <span className='tag' data-alias={tag.alias} key={i}>{tag.name}</span>
                ))}
            </div>)}
        </div>
    );
};