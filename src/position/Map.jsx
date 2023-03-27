import Xaiyabory from '/image/xaiyabory.png'
import Aos from 'aos'
export default function Map () {
    Aos.init()
    return (
        <>
        <div className="map">
            <div className="map-body">
                <div className="map-goole">
                <h3>ແຜ່ນທີ່ເມືອງໄຊຍະບູລີ</h3>
                <iframe data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49234.01677180228!2d101.68135658602203!3d19.257693082810725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3128a1df75381c1d%3A0x29412fd35295948e!2z4LmE4LiK4Lii4Lia4Li44Lij4Li1!5e0!3m2!1sth!2sla!4v1679856145775!5m2!1sth!2sla" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="seaction-text">
                    <h3>ທີ່ຕັ້ງ</h3>
                    <p>ເມືອງໄຊຍະບູລີເປັນເມືອງໜຶ່ງຂອງແຂວງໄຊຍະບູລີ ປະເທດລາວ ແລະ ແຂວງໄຊຍະບູລີຕັ້ງຢູ່ທາງທິດຕາເວັນຕົກສຸດຂອງປະເທດລາວ ມີພື້ນທີ່ຕິດກັບ ປະເທດໄທຍທາງດ້ານຈັງຫວັດຊຽງລາຍ, ຈັງຫວັດພະເຍົາ, ຈັງຫວັດນານ, ຈັງຫວັດອຸຕະດິດ, ຈັງຫວັດພິດສະນຸໂລກ ແລະ ຈັງຫວັດເລຍ </p>
                    <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" src={Xaiyabory} alt="" className='seaction-image' />
                </div>
            </div>
        </div>
        </>
    )
}