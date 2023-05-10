import SectionBgForm from "./styled";
import * as yup from "yup";
import Remove from "../../assets/svg/x.svg";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { iAdRequest } from "../../interfaces/ads";
import instanceAxios from "../../services";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { Options } from "../ModalOptions";

interface iDataResponse {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

interface a {
  setOpenUpateAdForm: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  adversaments: never[];
  setAdversaments: React.Dispatch<React.SetStateAction<never[]>>;
  brands: string[] | null;
}

const imageRequestSerializer = yup.object().shape({
  link: yup.string().notRequired(),
});

const adRequestSchema = yup.object().shape({
  brand: yup.string().max(250).notRequired(),
  model: yup.string().max(250).notRequired(),
  year: yup
    .string()
    .matches(/[0-9]{4}/, {
      message: { year: "Deve conter apenas números (0000)" },
    })
    .notRequired(),
  fuel: yup.string().notRequired(),
  mileage: yup.number().notRequired(),
  color: yup.string().max(50).notRequired(),
  price: yup.number().notRequired(),
  description: yup.string().max(300).notRequired(),
  published: yup.boolean().default(true),
  images: yup.array(imageRequestSerializer).max(250).notRequired(),
});

const EditFormAds = ({
  setOpenUpateAdForm,
  id,
  adversaments,
  setAdversaments,
  brands,
}: a) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iAdRequest>({
    // mode: "onSubmit",
    resolver: yupResolver(adRequestSchema, {
      stripUnknown: true,
    }),
  });

  const [galleryImages, setGalleryImages] = useState([
    { id: 1, label: "Imagem da capa", value: "" },
    { id: 2, label: "1ª Imagem da galeria", value: "" },
    { id: 3, label: "2ª Imagem da galeria", value: "" },
  ]);

  const [searchBrand, setSearchBrand] = useState<string>("");
  const [searchModel, setSearchModel] = useState<string>("");
  const [filterBrands, setFilterBrands] = useState<any>(null);
  const [allInformations, setAllinformations] = useState<iDataResponse[]>([]);
  const [year, setYear] = useState<string>("2022");
  const [fuel, setFuel] = useState<string>("3");
  const [fipe, setFipe] = useState<number>(282045);
  const [models, setModels] = useState<string[]>([]);
  const [filterModels, setFilterModels] = useState<string[]>([]);
  const [openBrandOptions, setOpenBrandOptions] = useState(false);
  const [openModelOptions, setOpenModelOptions] = useState(false);
  const [published, setPublished] = useState(true);
  const [adData, setAdData] = useState<any>({});

  const setData = async () => {
    const data = await (await instanceAxios.get(`ads/${id}`)).data;
    setAdData(data);
  };

  useEffect(() => {
    setData();
    setSearchBrand(adData.brand);
    setSearchModel(adData.model);
  }, [setOpenUpateAdForm]);

  useEffect(() => {
    if (!brands) {
      return;
    }

    let res: string[] = [];
    for (const brand of brands) {
      if (brand.startsWith(searchBrand)) {
        res.push(brand);
      }
    }
    return setFilterBrands(res);
  }, [searchBrand]);

  const getModels = async (brand: string) => {
    const { data } = await axios.get(
      `https://kenzie-kars.herokuapp.com/cars?brand=${brand}`
    );
    setAllinformations(data);

    const res = data.map((e: any) => e.name);

    setModels(res);
  };

  useEffect(() => {
    let list: string[] = [];
    for (const item of models) {
      if (item.startsWith(searchModel)) {
        list.push(item);
      }
    }
    setFilterModels(list);
  }, [searchModel]);

  const setDetails = () => {
    for (const item of allInformations) {
      if (item.name === searchModel) {
        const { year, fuel, value } = item;

        setYear(year);
        setFuel(`${fuel}`);
        setFipe(value);

        break;
      }
    }
  };

  const registerAd = async (data: iAdRequest) => {
    const token = localStorage.getItem("token");

    const resGetAdId = await instanceAxios.get(`ads/${id}`);

    await instanceAxios
      .patch(
        `ads/${id}`,
        { ...resGetAdId.data, ...data, published: published },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => "Cadastro realizado com sucesso")
      .catch(
        (error) =>
          `Message: ${error.response.statusText}; Status: ${error.response.status}`
      );

    reset();
    setOpenUpateAdForm(false);
  };

  const handleAddImageField = () => {
    const newImageField = {
      id: galleryImages.length + 1,
      label: `${galleryImages.length}ª Imagem da galeria`,
      value: "",
    };

    setGalleryImages([...galleryImages, newImageField]);
  };

  const handleChangeImage = (
    event: React.FormEvent<HTMLInputElement>,
    id: number
  ) => {
    event.preventDefault();

    const { value }: any = event.target;

    const updatedGalleryImages = galleryImages.map((image) => {
      if (image.id === id) {
        return { ...image, value };
      }
      return image;
    });

    setGalleryImages(updatedGalleryImages);
  };

  const editAd = async (data: any) => {
    console.log("aaaaaa", data);
  };

  return (
    <SectionBgForm onClick={() => null}>
      <form action="" onSubmit={handleSubmit(editAd)}>
        <div>
          <span>Editar de anuncio</span>
          <img src={Remove} onClick={() => setOpenUpateAdForm(false)} />
        </div>

        <p>informações do veículo</p>

        <label htmlFor="">Marca</label>
        <input
          type="text"
          id="brand"
          placeholder={adData.brand}
          value={searchBrand}
          {...register("brand")}
          onClick={() => setOpenBrandOptions(!openBrandOptions)}
          onChange={(event) => {
            setSearchBrand(event.target.value);
            // const model = document.querySelector("#model");
            // console.log(model);
            // model?.value = "";
            // model.placeholder = "";
            // model.innerText = "";
            getModels(searchBrand);
          }}
        />
        {openBrandOptions ? (
          <Options
            options={brands}
            filter={filterBrands}
            id="brand"
            setState={setSearchBrand}
          />
        ) : (
          <></>
        )}

        <label htmlFor="">Modelo</label>
        <input
          type="text"
          id="model"
          placeholder={adData.model}
          value={searchModel}
          {...register("model")}
          onClick={(event) => {
            event.preventDefault();
            // console.log(event.target.value);
            // event.target.value = "";
            // event.target.placeholder = "";
            // event.target.innerText = "";

            // getModels(searchBrand);
            setOpenModelOptions(!openModelOptions);
          }}
          onChange={(event) => setSearchModel(event.target.value)}
        />
        {openModelOptions ? (
          <Options
            options={models}
            filter={filterModels}
            id="model"
            setState={setSearchModel}
          />
        ) : (
          <></>
        )}

        <div>
          <fieldset>
            <label htmlFor="">Ano</label>
            <input
              type="text"
              id="year"
              {...register("year", { value: year })}
              value={adData.year}
              disabled
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Combustível</label>
            <input
              type="text"
              id="fuel"
              {...register("fuel", { value: fuel })}
              value={adData.fuel}
              disabled
            />
          </fieldset>
        </div>

        <div>
          <fieldset>
            <label htmlFor="">Quilometragem</label>
            <input
              type="text"
              onClick={setDetails}
              id="mileage"
              {...register("mileage")}
              placeholder={adData.mileage}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Cor</label>
            <input
              type="text"
              id="color"
              {...register("color")}
              placeholder={adData.color}
            />
          </fieldset>
        </div>

        <div>
          <fieldset>
            <label htmlFor="">Preço tabela FIPE</label>
            <input type="text" id="priceFIPE" value={fipe} disabled />
          </fieldset>
          <fieldset>
            <label htmlFor="">Preço</label>
            <input
              type="text"
              id="price"
              {...register("price")}
              placeholder={adData.price}
            />
          </fieldset>
        </div>

        <div className="description">
          <label htmlFor="">Descrição</label>
          <textarea
            id="description"
            {...register("description")}
            placeholder={adData.description}
          ></textarea>
        </div>

        <div className="yesOrNo">
          <span>Publicado</span>
          <div>
            <button type="button" onClick={() => setPublished(true)}>
              Sim
            </button>
            <button
              className="no"
              type="button"
              onClick={() => setPublished(false)}
            >
              Não
            </button>
          </div>
        </div>

        <div className="addImageGalery">
          {galleryImages.map((image: any, index: any) => (
            <React.Fragment key={image.id}>
              <label htmlFor={`image-${image.id}`}>{image.label}</label>
              <input
                id={`image-${image.id}`}
                value={image.value}
                {...register(`images.${index}.link`)}
                onChange={(event) => handleChangeImage(event, image.id)}
                // placeholder={adData.images[index].link}
              />
            </React.Fragment>
          ))}

          <button type="button" onClick={handleAddImageField}>
            Adicionar campo para imagem da galeria
          </button>
        </div>

        <div className="alteration">
          <button
            type="button"
            onClick={async () => {
              await instanceAxios.delete(`ads/${id}`);
              const newAds = adversaments.filter((e: any) => e.id !== id);
              setAdversaments(newAds);
              setOpenUpateAdForm(false);
            }}
          >
            Excluir Anúncio
          </button>
          <button className="save" onClick={editAd}>
            Salvar alterações
          </button>
        </div>
      </form>
    </SectionBgForm>
  );
};

export default EditFormAds;
