import arrowIcon from "../assets/images/icon-arrow-down.svg";
import eggImgMob from "../assets/images/mobile/image-transform.jpg";
import eggImgDesk from "../assets/images/desktop/image-transform.jpg";
import cupImgMob from "../assets/images/mobile/image-stand-out.jpg";
import cupImgDesk from "../assets/images/desktop/image-stand-out.jpg";
import emilyImg from "../assets/images/image-emily.jpg";
import thomasImg from "../assets/images/image-thomas.jpg";
import jennieImg from "../assets/images/image-jennie.jpg";
import bottlesImgDesk from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import bottlesImgMob from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import orangeImgDesk from "../assets/images/desktop/image-gallery-orange.jpg";
import orangeImgMob from "../assets/images/mobile/image-gallery-orange.jpg";
import coneImgDesk from "../assets/images/desktop/image-gallery-cone.jpg";
import coneImgMob from "../assets/images/mobile/image-gallery-cone.jpg";
import sugarImgDesk from "../assets/images/desktop/image-gallery-sugar-cubes.jpg";
import sugarImgMob from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";

function Section(props) {
  return (
    <section className={`main__${props.type || "section"}`}>
      {props.type == "intro" && (
        <>
          <h1 className="sr-only">Sunnyside agency landing page</h1>
          <h2 className="section__title">We are creatives</h2>
          <img srcSet={arrowIcon} alt="" className="arrow" />
        </>
      )}
      {props.type == "feature left" && (
        <>
          <picture className="feature__image">
            <source media="(min-width: 768px)" srcSet={eggImgDesk} />
            <img srcSet={eggImgMob} alt="" />
          </picture>
          <article className="feature__body">
            <h2 className="section__title">Transform your brand</h2>
            <p className="section__text">
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients
              through compelling visuals that do most of the marketing for you.
            </p>
            <a href="#" className="section__link">
              Learn more
            </a>
          </article>
        </>
      )}
      {props.type == "feature right" && (
        <>
          <picture className="feature__image">
            <source media="(min-width: 768px)" srcSet={cupImgDesk} />
            <img srcSet={cupImgMob} alt="" />
          </picture>
          <article className="feature__body">
            <h2 className="section__title">Stand out to the right audience</h2>
            <p className="section__text">
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
              we’ll build and extend your brand in digital places.
            </p>
            <a href="#" className="section__link">
              Learn more
            </a>
          </article>
        </>
      )}
      {props.type == "visuals" && (
        <>
          <article className="visuals__article">
            <h2 className="section__title">Graphic design</h2>
            <p className="section__text">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures
              potential clients’ attention.
            </p>
          </article>
          <article className="visuals__article">
            <h2 className="section__title">Photography</h2>
            <p className="section__text">
              Increase your credibility by getting the most stunning, high-quality photos that improve your business
              image.
            </p>
          </article>
        </>
      )}
      {props.type == "testimonials" && (
        <>
          <h3 className="section__title">Client testimonials</h3>
          <ul className="section__list">
            <li className="list__item">
              <div>
                <img srcSet={emilyImg} alt="" className="item__img" />
                <p className="item__text">
                  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were
                  always hit.
                </p>
              </div>
              <p className="account">
                <span className="account__name">Emily R.</span>
                <span className="account__role">Marketing Director</span>
              </p>
            </li>
            <li className="list__item">
              <div>
                <img srcSet={thomasImg} alt="" className="item__img" />
                <p className="item__text">
                  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying
                  and enjoyable experience.
                </p>
              </div>
              <p className="account">
                <span className="account__name">Thomas S.</span>
                <span className="account__role">Chief Operating Officer</span>
              </p>
            </li>
            <li className="list__item">
              <div>
                <img srcSet={jennieImg} alt="" className="item__img" />
                <p className="item__text">
                  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly
                  recommended!
                </p>
              </div>
              <p className="account">
                <span className="account__name">Jennie F.</span>
                <span className="account__role">Business Owner</span>
              </p>
            </li>
          </ul>
        </>
      )}
      {props.type == "gallery" && (
        <>
          <picture className="gallery__image">
            <source media="(min-width: 768px)" srcSet={bottlesImgDesk} />
            <img srcSet={bottlesImgMob} alt="" />
          </picture>
          <picture className="gallery__image">
            <source media="(min-width: 768px)" srcSet={orangeImgDesk} />
            <img srcSet={orangeImgMob} alt="" />
          </picture>
          <picture className="gallery__image">
            <source media="(min-width: 768px)" srcSet={coneImgDesk} />
            <img srcSet={coneImgMob} alt="" />
          </picture>
          <picture className="gallery__image">
            <source media="(min-width: 768px)" srcSet={sugarImgDesk} />
            <img srcSet={sugarImgMob} alt="" />
          </picture>
        </>
      )}
    </section>
  );
}

export default Section;
