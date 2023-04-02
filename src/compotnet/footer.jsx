import { FaCopyright, FaFacebook, FaWhatsappSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
        <footer>
            <div className="box-flxe">
            <div className="kayde">
                <div className="title">ເຄດີ</div>
                <ul>
                    <li>Saiyalad PS</li>
                    <li>JSPH</li>
                </ul>
            </div>
            <div className="tel">
                <div className="title">ຕິດຕໍ່ທີ</div>
                <ul>
                    <li><a href=''>Facebook <FaFacebook className='font-fa'/></a></li>
                    <li><a href=''>Whatsapp <FaWhatsappSquare/></a></li>
                </ul>
            </div>
            <div className="devport">
                <div className="title">
                    ກຽ່ວກັບ
                </div>
                <ul>
                    <li>react and dom</li>
                    <li>BCT</li>
                    <li>Xaiyaboury</li>
                </ul>
            </div>
            </div>
            <div className="yaer">
            <FaCopyright/> 2023
            </div>
        </footer>
        </>
    )
}