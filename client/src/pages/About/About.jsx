import maineCoonImg from "../../assets/images/coon.jpg";
import Hero from "../../components/Hero/Hero";
import style from "./About.module.scss";

const About = () => 
    <>
        <h1>Maine Coon</h1>
        <div className={style.aboutWrap}>
            <Hero src={maineCoonImg} width="890" alt="Maine Coon" />
            <div className={style.paragraphsWrap}>
                <p>
                    Maine coons are large, affectionate cats who love 
                    to play and hang out with their humans. This cat 
                    breed is typically known for its massive size&ndash;up 
                    to 40 inches in length&ndash;but Maine coon owners know 
                    and prize these cats for being loving family pets.
                </p>
                <p>
                    Maine coons are surprisingly popular, especially 
                    considering at one point this breed almost faced 
                    extinction. In 2019, the Cat Fanciers&apos; Association 
                    listed the Maine coon as the fifth-most popular cat 
                    breed. The average Maine coon kitten costs between 
                    &#36;400 and &#36;1,500, depending on pedigree.
                </p>
                <p>
                    Don&apos;t let their imposing size fool you&ndash;deep down, 
                    Maine coons are soft, gentle giants who love to spend 
                    time with their humans. They very much expect to be 
                    part of the family and aren&apos;t big on personal space 
                    or privacy. These cats are delighted at the thought 
                    of following you from room to room as you go about 
                    your day. 
                </p>
            </div>
        </div> 
    </>;
    

export default About;