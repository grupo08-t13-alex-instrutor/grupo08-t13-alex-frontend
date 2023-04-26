import { IoClose } from "react-icons/io5"
import {
    ContainerEditAddress,
    FooterEditAddress,
    FormEditAddress,
    HeaderEditAddress
} from "./styled"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import instanceAxios from "../../services"
import { AxiosResponse } from "axios"
import { useContext } from "react"
import { User } from "../../context"

interface iChildren {
    editAddress: boolean,
    setEditAddress: React.Dispatch<React.SetStateAction<boolean>>
}

interface iAddressResponse {
    data: {
        id: string;
        cep: string;
        state: string;
        city: string;
        street: string;
        number: string;
        complement: string;
    }
}

interface iAddressUpdate {
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: string;
    complement?: string;
}

const addressSchema = yup.object({
    cep: yup.string()
        .matches(/([0-9]{5})([-]{1})([0-9]{3})/, {
            excludeEmptyString: true,
            message: 'O padrão de cep é 00000-000'
        })
        .notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
    street: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired()
})

const EditAddress = ({ editAddress, setEditAddress }: iChildren): JSX.Element => {
    const { idAdressUser } = useContext(User);
    const token = localStorage.getItem('token');

    const { register, handleSubmit, formState: { errors, defaultValues }, reset } = useForm({
        mode: "onSubmit",
        defaultValues: async (): Promise<iAddressResponse | any> => {
            const data: void | AxiosResponse<iAddressResponse> = await instanceAxios.get(
                `adress/${idAdressUser}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            ).catch(error => { const { request: { status, statusText } } = error });

            return data;
        },
        resolver: yupResolver(
            addressSchema,
            {
                stripUnknown: true
            }
        ),
    });

    const onSubmit = async (data: iAddressUpdate) => {
        for (const key in data) {
            if (!data[key as keyof typeof data]) {
                data[key as keyof typeof data] = defaultValues?.data[key];
            }
        }

        const updated = await instanceAxios.patch(
            `adress/${idAdressUser}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).catch(error => { const { request: { status, statusText } } = error })

        reset();

        return updated;
    };

    return (
        <ContainerEditAddress>
            <HeaderEditAddress>
                <h6 className="heading-7-500">Editar endereço</h6>
                <button type="reset" onClick={event => {
                    event.preventDefault();
                    setEditAddress(!editAddress);
                }}>
                    <IoClose />
                </button>
            </HeaderEditAddress>
            <FormEditAddress onSubmit={handleSubmit(onSubmit)}>
                <span className="text-body-2-500">Informações de endereço</span>
                <label htmlFor="cep">CEP</label>
                <input
                    placeholder={defaultValues?.data?.cep}
                    id="cep"
                    type="text"
                    {...register('cep')}
                />
                <div>
                    <div>
                        <label htmlFor="state">Estado</label>
                        <input
                            placeholder={defaultValues?.data.state}
                            id="state"
                            type="text"
                            {...register('state')}
                        />
                    </div>
                    <div>
                        <label htmlFor="city">Cidade</label>
                        <input
                            placeholder={defaultValues?.data.city}
                            id="city"
                            type="text"
                            {...register('city')}
                        />
                    </div>
                </div>
                <label htmlFor="street">Rua</label>
                <input
                    placeholder={defaultValues?.data.street}
                    id="street"
                    type="text"
                    {...register('street')}
                />
                <div>
                    <div>
                        <label htmlFor="number">Número</label>
                        <input
                            placeholder={defaultValues?.data.number}
                            id="number"
                            type="text"
                            {...register('number')}
                        />
                    </div>
                    <div>
                        <label htmlFor="complement">Compemento</label>
                        <input
                            placeholder={defaultValues?.data.complement}
                            id="complement"
                            type="text"
                            {...register('complement')}
                        />
                    </div>
                </div>
                <FooterEditAddress>
                    <button type="reset" onClick={event => {
                        event.preventDefault();
                        setEditAddress(!editAddress);
                    }}>Cancelar</button>
                    <button type="submit">Salvar Alterações</button>
                </FooterEditAddress>
            </FormEditAddress>
        </ContainerEditAddress>
    )
}

export { EditAddress }