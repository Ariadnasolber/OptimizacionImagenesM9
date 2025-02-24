import { useRef, useState } from "react";

const ImageEditor = () => {
    const [image, setImage] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

    // Manejo de subida de imagen
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
                drawImage(reader.result as string); // Llamamos a la función para dibujar
            };
            reader.readAsDataURL(file);
        }
    };

    // Dibuja la imagen en el canvas
    const drawImage = (src: string) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        img.src = src;
        img.crossOrigin = "Anonymous"; // Evita errores con imágenes externas

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctxRef.current = ctx; // Guardamos el contexto
        };
    };

    // Aplica el filtro seleccionado
    const applyFilter = (filter: string) => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!canvas || !ctx) return;

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            if (filter === "grayscale") {
                let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                data[i] = avg; // Rojo
                data[i + 1] = avg; // Verde
                data[i + 2] = avg; // Azul
            } else if (filter === "invert") {
                data[i] = 255 - data[i]; // Rojo
                data[i + 1] = 255 - data[i + 1]; // Verde
                data[i + 2] = 255 - data[i + 2]; // Azul
            }
        }

        ctx.putImageData(imageData, 0, 0);
    };

    return (
        <div className="text-center p-4">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
            
            <div className="mb-4">
                <button
                    onClick={() => applyFilter("grayscale")}
                    className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
                >
                    Escala de Grises
                </button>
                <button
                    onClick={() => applyFilter("invert")}
                    className="bg-red-500 text-white px-4 py-2 m-2 rounded"
                >
                    Invertir Colores
                </button>
            </div>

            <canvas ref={canvasRef} className="border mt-4"></canvas>
        </div>
    );
};

export default ImageEditor;