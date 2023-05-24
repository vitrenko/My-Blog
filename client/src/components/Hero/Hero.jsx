const Hero = ({src, width, alt}) => {
    return (
        <div>
            <img src={src} width={width} alt={alt} />
        </div>
    );
};

export default Hero;