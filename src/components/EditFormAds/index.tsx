import SectionBgForm from "./styled";
import Remove from "../../assets/svg/x.svg";
import { HeaderRegisterFormAd } from "../RegisterFormAds/styled";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { iAdRequest } from "../../interfaces/ads";
import instanceAxios from "../../services";
import { toast } from "react-toastify";

interface a {
  setOpenUpateAdForm: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const EditFormAds = ({ setOpenUpateAdForm, id }: a) => {
  const [galleryImages, setGalleryImages] = useState([
    { id: 1, label: "Imagem da capa", value: "" },
    { id: 2, label: "1ª Imagem da galeria", value: "" },
    { id: 3, label: "2ª Imagem da galeria", value: "" },
  ]);
  const [adData, setAdData] = useState({});

  const handleAddImageField = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newImageField = {
      id: galleryImages.length + 1,
      label: `${galleryImages.length}ª Imagem da galeria`,
      value: "",
    };
  }

  const handleChangeImage = (event: React.FormEvent<HTMLInputElement>, id: number) => {

    event.preventDefault();

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
    < SectionBgForm onClick={() => null}>
      <form action="" >
        <div>
          <span>Editar de anuncio</span>
          <img src={Remove} onClick={() => setOpenUpateAdForm(false)} />
        </div>

        <p>informações do veículo</p>

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

        <div className="yesOrNo">
          <span>Publicado</span>
          <div>
            <button>Sim</button>
            <button className="no">Não</button>
          </div>
        </div>

        <div className="addImageGalery">

          {galleryImages.map(image => (
            <React.Fragment key={image.id}>
              <label htmlFor={`image-${image.id}`}>{image.label}</label>
              <input
                name={`image-${image.id}`}
                id={`image-${image.id}`}
                value={image.value}
                onChange={event => handleChangeImage(event, image.id)}
              />
            </React.Fragment>
          ))}

          <button onClick={(e: any) => handleAddImageField(e)}>
            Adicionar campo para imagem da galeria
          </button>
        </div>

        <div className="alteration">
          <button >Excluir Anúncio</button>
          <button className="save">Salvar alterações</button>
        </div>
      </form >
    </SectionBgForm >

  )


}


/* setGalleryImages([...galleryImages, newImageField]);

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

const setData = async () => {
  const data = await (await instanceAxios.get(`ads/${id}`)).data;
  setAdData(data);
  console.log("!!!!", adData);
};

useEffect(() => {
  setData();
}, [setOpenUpateAdForm]);

const deleteAd = async () => {
  try {
    await instanceAxios.delete(`ads/${id}`);
  } catch {
    toast.error("Algo deu errado!");
  }
};

const { register, handleSubmit } = useForm();

const onSubmit = (data: iAdRequest) => { };

return (
  <SectionBgForm>
    <form action="">
      <div>
        <span>Editar de anuncio</span>
        <img src={Remove} onClick={() => setOpenUpateAdForm(false)} />
      </div>

      <p>informações do veículo</p>

      <label htmlFor="">Marca</label>
      <input type="text" {...register("brand")} placeholder={adData.brand} />

      <label htmlFor="">Modelo</label>
      <input type="text" {...register("model")} placeholder={adData.model} />

      <div>
        <fieldset>
          <label htmlFor="">Ano</label>
          <input
            type="text"
            {...register("model")}
            placeholder={adData.year}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Combustível</label>
          <input
            type="text"
            {...register("model")}
            placeholder={adData.fuel}
          />
        </fieldset>
      </div>

      <div>
        <fieldset>
          <label htmlFor="">Quilometragem</label>
          <input
            type="text"
            {...register("model")}
            placeholder={adData.mileage}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Cor</label>
          <input
            type="text"
            {...register("model")}
            placeholder={adData.color}
          />
        </fieldset>
      </div>

      <div>
        <fieldset>
          <label htmlFor="">Preço tabela FIPE</label>
          <input type="text" {...register("model")} />
        </fieldset>
        <fieldset>
          <label htmlFor="">Preço</label>
          <input
            type="text"
            {...register("model")}
            placeholder={adData.price}
          />
        </fieldset>
      </div>

      <div className="description">
        <label htmlFor="">Descrição</label>
        <textarea
          id=""
          {...register("model")}
          placeholder={adData.description}
        ></textarea>
      </div>

      <div className="yesOrNo">
        <span>Publicado</span>
        <div>
          <button {...register("model")}>Sim</button>
          <button className="no" {...register("model")}>
            Não
          </button>
        </div>
      </div>

      <div className="addImageGalery">
        {galleryImages.map((image) => (
          <React.Fragment key={image.id}>
            <label htmlFor={`image-${image.id}`}>{image.label}</label>
            <input
              name={`image-${image.id}`}
              id={`image-${image.id}`}
              value={image.value}
              onChange={(event) => handleChangeImage(event, image.id)}
              placeholder={image.src}
            />
          </React.Fragment>
        ))}

        <button onClick={() => handleAddImageField}>
          Adicionar campo para imagem da galeria
        </button>
      </div>

      <div className="alteration">
        <button onClick={deleteAd}>Excluir Anúncio</button>
        <button className="save">Salvar alterações</button>
      </div>
    </form>
  </SectionBgForm>
);

 */
export default EditFormAds;
