// IMPORT STYLE
import './styles/ImgFrame.css';

export default function ImgFrame({ img }) {
    return (
        <div className='imgFrame' style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
        </div>
    )
}