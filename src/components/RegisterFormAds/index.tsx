import { HeaderRegisterFormAd, FormRegisterFormAd, ContainerRegisterFormAd } from "./styled"
import Remove from "../../assets/svg/x.svg";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { iAdRequest } from "../../interfaces/ads";

interface iChildren {
    openRegisterAdForm: boolean,
    setOpenRegisterAdForm: React.Dispatch<React.SetStateAction<boolean>>
}

const RegisterFormAds = ({ openRegisterAdForm, setOpenRegisterAdForm }: iChildren) => {

    const [galleryImages, setGalleryImages] = useState([
        { id: 0, label: "Imagem da capa", value: "" },
        { id: 1, label: "1ª Imagem da galeria", value: "" },
        { id: 2, label: "2ª Imagem da galeria", value: "" }
    ]);


    const { register, handleSubmit, formState: { errors, defaultValues }, reset } = useForm<iAdRequest>({
        mode: "onBlur",
        values: {
            brand: '',
            model: '',
            year: '',
            fuel: '',
            mileage: 1,
            color: '',
            price: 1,
            description: '',
            images: []
        }
    });

    const registerAd = async (data: iAdRequest) => {
    }


    const handleAddImageField = () => {

        const newImageField = {
            id: galleryImages.length + 1,
            label: `${galleryImages.length}ª Imagem da galeria`,
            value: ""
        };

        setGalleryImages([...galleryImages, newImageField]);
    };

    const handleChangeImage = (event: React.FormEvent<HTMLInputElement>, id: number) => {

        const { value }: any = event.target;

        const updatedGalleryImages = galleryImages.map(image => {
            if (image.id === id) {
                return { ...image, value };
            }
            return image;
        });

        setGalleryImages(updatedGalleryImages);
    };

    return (
        <ContainerRegisterFormAd>
            <HeaderRegisterFormAd>
                <span>Criar de anuncio</span>
                <button onClick={event => {
                    event.preventDefault()
                    setOpenRegisterAdForm(!openRegisterAdForm)
                }}>
                    <img src={Remove} />
                </button>
            </HeaderRegisterFormAd>
            <FormRegisterFormAd action="" onSubmit={handleSubmit(registerAd)}>
                <p>Informações do veículo</p>

                <label htmlFor="">Marca</label>
                <input type="text" />

                <label htmlFor="">Modelo</label>
                <input type="text" />

                <div>
                    <fieldset>
                        <label htmlFor="">Ano</label>
                        <input type="text" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="">Combustível</label>
                        <input type="text" />
                    </fieldset>
                </div>

                <div>
                    <fieldset>
                        <label htmlFor="">Quilometragem</label>
                        <input type="text" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="">Cor</label>
                        <input type="text" />
                    </fieldset >
                </div >

                <div>
                    <fieldset>
                        <label htmlFor="">Preço tabela FIPE</label>
                        <input type="text" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="">Preço</label>
                        <input type="text" />
                    </fieldset >
                </div >

                <div className="description">
                    <label htmlFor="">Descrição</label>
                    <textarea name="" id="" ></textarea>
                </div>

                <div className="addImageGalery">

                    {galleryImages.map((image) => {
                        return (
                            <React.Fragment key={image.id}>
                                <label htmlFor={`image-${image.id - 1}`}>{image.label}</label>
                                <input
                                    name={`image-${image.id}`}
                                    id={`image-${image.id}`}
                                    value={image.value}
                                    onChange={event => handleChangeImage(event, image.id)}
                                />
                            </React.Fragment>
                        )
                    })}

                    <button onClick={handleAddImageField}>
                        Adicionar campo para imagem da galeria
                    </button>
                </div>

                <div className="alteration">
                    <button onClick={event => {
                        event.preventDefault()
                        setOpenRegisterAdForm(!openRegisterAdForm)
                    }}>Cancelar</button>
                    <button className="save" type="submit">Criar anúncio</button>
                </div>
            </FormRegisterFormAd>
        </ContainerRegisterFormAd >
    )
}

export default RegisterFormAds