
export default function BoxText({ id, titleto, aos, delay, Class, title, text }) {
  return (
    <>
      <div data-aos={aos} data-aos-delay={delay} className={Class}>
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="text">
          <p>{text}</p>
          <a href={"#"+id} alt={titleto}>{titleto}</a>
        </div>
      </div>
    </>
  );
}
