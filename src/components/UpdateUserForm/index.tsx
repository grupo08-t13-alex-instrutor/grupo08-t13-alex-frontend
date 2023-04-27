import { useForm } from "react-hook-form";
import StyledForm from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { iUserUpate } from "../../interfaces/register";
import { validacaoUpdated } from "../../validations/user";
import { useContext, useState } from "react";
import { User } from "../../context";

interface iChildren {
  editUser: boolean,
  setEditUser: React.Dispatch<React.SetStateAction<boolean>>
}


const UpdateUserForm = ({ setEditUser, editUser }: iChildren) => {

  const { updateUser, infoUserLogin } = useContext(User)

  const [userUpdate, setUserUpdate] = useState({})

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iUserUpate>({
    resolver: yupResolver(validacaoUpdated, { stripUnknown: true }),
  });

  const onSubmitFunction = (data: iUserUpate) => {

    setUserUpdate({ ...infoUserLogin, ...data })

    updateUser(data)

    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
      <div className="form-inputs">
        <span className="text-body-2-500">Informações pessoais</span>

        <label >Nome</label>
        <input id="name" type="text" placeholder="Ex: Fulano Silva" defaultValue={infoUserLogin?.name} {...register("name")} />
        <p>{errors.name?.message}</p>
        <label>Email</label>
        <input
          id="email"
          type="text"
          placeholder="Ex: fulano@email.com"
          defaultValue={infoUserLogin?.email}
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label>Cpf</label>
        <input id="cpf" type="text" placeholder="000.000.000-00" {...register("cpf")} defaultValue={infoUserLogin?.cpf} />
        <p>{errors.cpf?.message}</p>
        <label htmlFor="telephone">Celular</label>
        <input
          id="telephone"
          type="text"
          placeholder="(DDD) 90000-0000"
          {...register("telephone")}
          defaultValue={infoUserLogin?.telephone}
        />
        <p>{errors.telephone?.message}</p>

        <label htmlFor="birth">Data de nascimento</label>
        <input
          id="date_of_birth"
          type="text"
          placeholder="00/00/00"
          {...register("date_of_birth")}
          defaultValue={infoUserLogin?.date_of_birth}
        />

        <p>{errors.date_of_birth?.message}</p>
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          placeholder="Digitar descrição"
          maxLength={300}
          {...register("description")}
          defaultValue={infoUserLogin?.description}
        />
      </div>
      <p>{errors.description?.message}</p>
      <div className="form-footer">
        <button
          className="cancel"
          onClick={(el) => {
            el.preventDefault;
            const modal = document.querySelector(".modal");
            modal?.classList.toggle("");
          }}
        >
          Cancelar
        </button>
        <button>Exluir perfil</button>
        <button className="submit">Salvar alteracões</button>
      </div>

    </StyledForm>
  );
};

export default UpdateUserForm;
