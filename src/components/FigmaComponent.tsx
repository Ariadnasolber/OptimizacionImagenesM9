const FigmaComponent = () => {
    return (
        <div
            data-layer="JJKFIGMATRY"
            className="Jjkfigmatry w-[500px] h-[242px] relative"
        >
            <img
                data-layer="JJKBackground"
                className="Jjkbackground w-[500px] h-[242px] left-0 top-0 absolute"
                src="https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2023/11/08/imagen-promocional-de-jujutsu-kaisen.jpeg"
            />
            <div
                data-layer="BUTTONSDIV"
                className="Buttonsdiv w-[319px] h-[21px] left-[90px] top-[199px] absolute"
            >
                <div
                    data-layer="BUTTON3"
                    className="Button3 w-[99px] h-[21px] left-[220px] top-0 absolute"
                >
                    <div
                        data-layer="BUTTONLAYER"
                        className="Buttonlayer w-[99px] h-[21px] left-0 top-0 absolute bg-white/20 rounded-[3px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                    />
                    <div
                        data-layer="BUTTONTEXT"
                        className="Buttontext w-[99px] h-[21px] left-0 top-0 absolute text-center text-white text-[10px] font-normal font-['Avenir Next']"
                    >
                        BOTÓN 3
                    </div>
                </div>
                <div
                    data-layer="BUTTON2"
                    className="Button2 w-[99px] h-[21px] left-[110px] top-0 absolute"
                >
                    <div
                        data-layer="BUTTONLAYER"
                        className="Buttonlayer w-[99px] h-[21px] left-0 top-0 absolute bg-white/20 rounded-[3px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                    />
                    <div
                        data-layer="BUTTONTEXT"
                        className="Buttontext w-[99px] h-[21px] left-0 top-0 absolute text-center text-white text-[10px] font-normal font-['Avenir Next']"
                    >
                        BOTÓN 2
                    </div>
                </div>
                <div
                    data-layer="BUTTON1"
                    className="Button1 w-[99px] h-[21px] left-0 top-0 absolute"
                >
                    <div
                        data-layer="BUTTONLAYER"
                        className="Buttonlayer w-[99px] h-[21px] left-0 top-0 absolute bg-white/20 rounded-[3px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                    />
                    <div
                        data-layer="BUTTONTEXT"
                        className="Buttontext w-[99px] h-[21px] left-0 top-0 absolute text-center text-white text-[10px] font-normal font-['Avenir Next']"
                    >
                        BOTÓN 1
                    </div>
                </div>
            </div>
            <img
                data-layer="JJKLogo"
                className="Jjklogo w-[492px] h-[124px] left-[4px] top-[59px] absolute"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Jujutsu_Kaisen_logo.png/1200px-Jujutsu_Kaisen_logo.png"
            />
        </div>
    );
};
export default FigmaComponent;
