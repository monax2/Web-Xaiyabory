export default function BoxImage({aos, delay, Class, src}) {
    return(
        <>
        <div data-aos={aos}  data-aos-delay={delay} className={Class}>
            <img className="image" src={src} alt="" />
        </div>
        </>
    )
} 