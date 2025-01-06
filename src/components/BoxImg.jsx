import './BoxImg.style.css';
export default function BoxImg({ img }) {
  return <div className='boxImg' style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}></div>
};