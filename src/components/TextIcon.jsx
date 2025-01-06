// IMPORT STYLE
import './styles/TextIcon.css';

export default function TextIcon({ type, icon, size, children }) {
  return (
    <div className='textIcon'>
        {
          type == 'svg' ? (<>{{
            ...icon,
            ...({
              props: {
                ...icon.props,
                height: size.toString() ?? '16',
                width: size.toString() ?? '16',
              }
            })
          }}</>) :
          type == 'css' ? (<div className={icon}></div>) :
          type == 'file' && (<img width='24' src={icon} alt={`icon ${children}`} />)
        }
        <span>{children}</span>
    </div>
  )
}