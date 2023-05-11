import SectionBgForm from "./styled";
import * as yup from "yup";
import Remove from "../../assets/svg/x.svg";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { iAdRequest } from "../../interfaces/ads";
import instanceAxios from "../../services";
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
  openUpateAdForm: boolean;
  setOpenUpateAdForm: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  adversaments: any[];
  setAdversaments: React.Dispatch<React.SetStateAction<any[]>>;
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
  openUpateAdForm,
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
    resolver: yupResolver(adRequestSchema, {
      stripUnknown: true,
    }),
  });

  const [galleryImages, setGalleryImages] = useState([
    { id: 1, label: "Imagem da capa", value: "" },
    { id: 2, label: "1ª Imagem da galeria", value: "" },
    { id: 3, label: "2ª Imagem da galeria", value: "" },
  ]);

  const [year, setYear] = useState<string>("2022");
  const [fuel, setFuel] = useState<number>(3);
  const [fipe, setFipe] = useState<number>(282045);
  const [published, setPublished] = useState(true);
  const [adData, setAdData] = useState<any>({});

  if (openUpateAdForm) {
    const setData = async () => {
      const data = await (await instanceAxios.get(`ads/${id}`)).data;
      setAdData(data);
    };

    setData()
  }

  const registerAd = async (data: iAdRequest) => {
    const token = localStorage.getItem("token");

    const resGetAdId = await instanceAxios.get(`ads/${id}`);

    setAdData(resGetAdId.data)
    setFuel(resGetAdId.data.fuel)
    setYear(resGetAdId.data.year)

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
      .then((res) => {
        const newAds = adversaments.filter((e: any) => e.id !== id)
        setAdversaments([...newAds, res.data])

      })
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

  return (
    <SectionBgForm onClick={() => null}>
      <form action="" onSubmit={handleSubmit(registerAd)}>
        <div>
          <span>Editar de anuncio</span>
          <img src={Remove} onClick={() => setOpenUpateAdForm(false)} />
        </div>

        <p>informações do veículo</p>

        <div>
          <fieldset>
            <label htmlFor="">Ano</label>
            <input
              type="text"
              id="year"
              {...register("year")}
              value={year}
              disabled
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Combustível</label>
            <input
              type="text"
              id="fuel"
              {...register("fuel")}
              value={fuel}
              disabled
            />
          </fieldset>
        </div>

        <div>
          <fieldset>
            <label htmlFor="">Quilometragem</label>
            <input
              type="text"
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
          <button type="submit" className="save" >
            Salvar alterações
          </button>
        </div>
      </form>
    </SectionBgForm>
  );
};

export default EditFormAds;
