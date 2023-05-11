import * as yup from "yup";
import { HeaderRegisterFormAd, FormRegisterFormAd, ContainerRegisterFormAd } from "./styled"
import Remove from "../../assets/svg/x.svg";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { iAdRequest } from "../../interfaces/ads";
import instanceAxios from "../../services";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Options } from "../ModalOptions";

interface iChildren {
    openRegisterAdForm: boolean,
    setOpenRegisterAdForm: React.Dispatch<React.SetStateAction<boolean>>,
    brands: string[] | null
    adversaments: any,
    setAdversaments: React.Dispatch<React.SetStateAction<any>>
}

interface iDataResponse {
    id: string;
    name: string;
    brand: string;
    year: string;
    fuel: number;
    value: number;
}

const imageRequestSerializer = yup.object().shape({
    link: yup.string().required()
});

const adRequestSchema = yup.object().shape({
    brand: yup.string().max(250).required({ brand: 'Este campo é obrigatório!' }),
    model: yup.string().max(250).required({ model: 'O campo model é obrigatório!' }),
    year: yup.string()
        .matches(/[0-9]{4}/, { message: { year: 'Deve conter apenas números (0000)' } })
        .required({ year: 'Este campo é obrigatório!' }),
    fuel: yup
        .string()
        .required({ fuel: 'Este campo é obrigatório!' }),
    mileage: yup.number().required({ mileage: 'Este campo é obrigatório!' }),
    color: yup.string().max(50).required({ color: 'Este campo é obrigatório!' }),
    price: yup.number().required({ price: 'Este campo é obrigatório!' }),
    description: yup.string().max(300).required({ description: 'Este campo é obrigatório!' }),
    published: yup.boolean().default(true),
    images: yup.array(imageRequestSerializer).max(250).required({ images: 'Este campo é obrigatório!' }),
});

const RegisterFormAds = ({ openRegisterAdForm, setOpenRegisterAdForm, brands, adversaments, setAdversaments }: iChildren) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<iAdRequest>({
        mode: "onSubmit",
        resolver: yupResolver(
            adRequestSchema,
            {
                stripUnknown: true
            }
        )
    });

    const [searchBrand, setSearchBrand] = useState<string>("");
    const [searchModel, setSearchModel] = useState<string>('');
    const [galleryImages, setGalleryImages] = useState([
        { id: 0, label: "Imagem da capa", value: "" },
        { id: 1, label: "1ª Imagem da galeria", value: "" },
        { id: 2, label: "2ª Imagem da galeria", value: "" }
    ]);
    const [filterBrands, setFilterBrands] = useState<any>(null);
    const [models, setModels] = useState<string[]>([]);
    const [filterModels, setFilterModels] = useState<string[]>([]);
    const [allInformations, setAllinformations] = useState<iDataResponse[]>([]);
    const [year, setYear] = useState<string>('2022');
    const [fuel, setFuel] = useState<string>("3");
    const [fipe, setFipe] = useState<number>(282045);
    const [openBrandOptions, setOpenBrandOptions] = useState(false);
    const [openModelOptions, setOpenModelOptions] = useState(false);

    useEffect(
        () => {
            if (!brands) {
                return
            }

            let res: string[] = []
            for (const brand of brands) {
                if (brand.startsWith(searchBrand)) {
                    res.push(brand);
                }
            }
            return setFilterBrands(res);
        },
        [searchBrand]
    )


    const getModels = async (brand: string) => {
        const { data } = await axios.get(`https://kenzie-kars.herokuapp.com/cars?brand=${brand}`)
        setAllinformations(data);

        const res = data.map((e: any) => e.name);

        setModels(res)
    }

    useEffect(
        () => {
            let list: string[] = []
            for (const item of models) {
                if (item.startsWith(searchModel)) {
                    list.push(item)
                }
            }
            setFilterModels(list)
        },
        [searchModel]
    )

    const setDetails = () => {
        for (const item of allInformations) {
            if (item.name === searchModel) {
                const { year, fuel, value } = item

                setYear(year)
                setFuel(`${fuel}`)
                setFipe(value)

                break
            }
        }
    }

    const registerAd = async (data: iAdRequest) => {
        const token = localStorage.getItem('token');

        await instanceAxios.post('/ads', data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setAdversaments([...adversaments, res.data])
                localStorage.removeItem("adversamentsPageAdmin")
                localStorage.setItem("adversamentsPageAdmin", JSON.stringify([...adversaments, res.data]))

            })
            .catch(error => `Message: ${error.response.statusText}; Status: ${error.response.status}`)

        reset();
        setOpenRegisterAdForm(!openRegisterAdForm);
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
                    reset();
                    setOpenRegisterAdForm(!openRegisterAdForm)
                }}>
                    <img src={Remove} />
                </button>
            </HeaderRegisterFormAd>
            <FormRegisterFormAd onSubmit={handleSubmit(registerAd)}>
                <span>Informações do veículo</span>

                <label htmlFor="brand">Marca</label>
                <input
                    type="text"
                    id="brand"
                    placeholder={"chevrolet"}
                    value={searchBrand}
                    {...register("brand")}
                    onClick={() => setOpenBrandOptions(!openBrandOptions)}
                    onChange={(event) => setSearchBrand(event.target.value)}
                />
                {openBrandOptions ? <Options options={brands} filter={filterBrands} id="brand" setState={setSearchBrand} /> : <></>}

                <label htmlFor="model">Modelo</label>
                <input
                    type="text"
                    id="model"
                    placeholder="bolt ev premier 203cv (elétrico)"
                    value={searchModel}
                    {...register("model")}
                    onClick={(event) => {
                        event.preventDefault();
                        getModels(searchBrand)
                        setOpenModelOptions(!openModelOptions)
                    }}
                    onChange={(event) => setSearchModel(event.target.value)}
                />
                {openModelOptions ? <Options options={models} filter={filterModels} id="model" setState={setSearchModel} /> : <></>}

                <div>
                    <fieldset>
                        <label htmlFor="year">Ano</label>
                        <input type="text" id="year" {...register("year", { value: year })} value={year} disabled />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="fuel">Combustível</label>
                        <input type="text" id="fuel" {...register("fuel", { value: fuel })} value={fuel} disabled />
                    </fieldset>
                </div>

                <div>
                    <fieldset>
                        <label htmlFor="mileage">Quilometragem</label>
                        <input type="text" onClick={setDetails} id="mileage" {...register("mileage")} placeholder="10000" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="color">Cor</label>
                        <input type="text" id="color" {...register("color")} placeholder="branco" />
                    </fieldset >
                </div >

                <div>
                    <fieldset>
                        <label htmlFor="priceFIPE">Preço tabela FIPE</label>
                        <input type="text" id="priceFIPE" value={fipe} disabled />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="price">Preço</label>
                        <input type="text" id="price" {...register("price")} placeholder="300000" />
                    </fieldset >
                </div >

                <div className="description">
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" {...register("description")} placeholder="Informe as características do veículo"></textarea>
                </div>

                <div className="addImageGalery">

                    {galleryImages.map((image, index) => (
                        <React.Fragment key={image.id}>
                            <label htmlFor={`image-${image.id - 1}`}>{image.label}</label>
                            <input
                                placeholder="Insira o link da imagem do veículo"
                                id={`image-${image.id}`}
                                {...register(`images.${index}.link`)}
                                onSubmit={event => handleChangeImage(event, image.id)}
                            />
                        </React.Fragment>
                    ))}

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