import '../css/chacha.css';
import '../css/Header.css';
import logo from '../img/homelogo.svg';

export default function Aheader() {
  return (
    <div className="container-fluid px-0">
      <header id='hd' className='border-bottom py-4 px-5 d-flex justify-content-between align-items-center'>
        <a href='#none' className='col-1'>
          <img src={logo} className='image-fluid' />
        </a>
        <div className='gnb mx-auto'>
            <li className='px-3' onClick={ (e) => { alert('이게 다 뭐다냐'); } } >
                소개합니다
            </li>
            <li className='port px-3' onClick={ (e) => { alert('이게 다 뭐다냐'); } } >
                포트폴리오
                <div className='position-absolute'>
                  <li>AWESOME</li>
                  <li>cafe24EC</li>
                </div>
            </li>
            <li className='px-3' onClick={ (e) => { alert('이게 다 뭐다냐'); } } >
                사전인터뷰
            </li>
        </div>
        <button className='d-flex flex-row-reverse' onClick={ (e) => { alert('궁금한 사항이 있으실 경우 연락 주세요 010-xxxx-xxxx'); } }>?</button>
      </header>
    </div>
  );
}
export function Bheader() {
  return (
    <div className="container-fluid px-0">
            <header id='hd' className='bg-dark py-5'></header>
    </div>
  );
}

// export default Activeapp;
