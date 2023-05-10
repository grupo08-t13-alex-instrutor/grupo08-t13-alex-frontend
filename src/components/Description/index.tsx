import { useContext, useEffect, useState } from "react";
import { StyledDescription } from "./styled";
import { useLocation } from "react-router-dom";
import { User } from "../../context";

export const Description = () => {

  const { getAdsAmount, } = useContext(User)

  const [infoCar, setInfoCar] = useState({
    description: null
  })

  const location = useLocation()

  const callBAckGetAdAmount = async () => {
    const { description } =  getAdsAmount()
    setInfoCar({
      description: description
    })
  }

  if (location.pathname === "/ad") {
    useEffect(() => {
      callBAckGetAdAmount()
    }, [])
  }

  return (
    <StyledDescription className="descriptionAdds">
      <h6 className="heading-6-600">Descrição</h6>
      <p className="text-body-1">
        {infoCar.description}
      </p>
    </StyledDescription>
  );
};
