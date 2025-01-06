// IMPORT STYLE
import './styles/LinkIcon.css';

export default function LinkIcon({ type, icon, size, href, orientation, children }) {
  return (
    <a data-orientation={orientation} href={href} target='_blank' className='linkIcon'>
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
          type == 'file' && (<img width={size ?? '16'} src={icon} alt={`icon `} />)
        }
        {children && (<span>{children}</span>)}
    </a>
  )
}