import { useContext, useEffect, useState } from "react";
import {
  AsideHomePage,
  Cards,
  FooterHomePage,
  Header,
  Banner,
} from "../../components";
import { Section, Ul } from "../../styled";
import SectionHome from "./styled";
import instanceAxios from "../../services";
import { useLocation, useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [adversaments, setAdversaments] = useState<object[]>([]);
  const [filters, setFilters] = useState({});
  const [filtered, setFiltered] = useState<object[]>([]);

  const getAdversaments = async () => {
    const responseAdress = await instanceAxios.get(`ads`);
    setAdversaments(responseAdress.data);
  };

  if (location.pathname === "/homepage") {
    useEffect(() => {
      getAdversaments();
      setAdversaments(adversaments);
    }, [location.pathname]);
  }
  return (
    <SectionHome>
      <Header />
      <Banner />
      <Section>
        <AsideHomePage
          setFilters={setFilters}
          filters={filters}
          filtered={filtered}
          adversaments={adversaments}
          setFiltered={setFiltered}
          setAdversaments={setAdversaments}
        />
        <Ul>
          {
            filtered.length > 0 ?

              filtered.map((e: any) => {
                let siglaName = "";

                if (e.user.name.includes(" ")) {
                  const sigla = e.user.name.split(" ");
                  siglaName += sigla[0][0] + sigla[1][1];
                } else {
                  siglaName += e.user.name[0];
                }

                return (
                  <Cards
                    onClick={() => navigate("/profile/user")}
                    idAmount={e.user.id}
                    src={e.images[0]}
                    marca={e.brand}
                    descricao={e.description}
                    km={e.mileage}
                    name={e.user.name}
                    ano={e.year}
                    preco={e.price}
                    siglaNanme={siglaName}
                  >
                    <span className="cifrao">$</span>
                  </Cards>
                );
              })
              :
              adversaments.map((e: any) => {
                let siglaName = "";

                if (e.user.name.includes(" ")) {
                  const sigla = e.user.name.split(" ");
                  siglaName += sigla[0][0] + sigla[1][1];
                } else {
                  siglaName += e.user.name[0];
                }

                return (
                  <Cards
                    onClick={() => navigate("/profile/user")}
                    idAmount={e.user.id}
                    src={e.images[0]}
                    marca={e.brand}
                    descricao={e.description}
                    km={e.mileage}
                    name={e.user.name}
                    ano={e.year}
                    preco={e.price}
                    siglaNanme={siglaName}
                  >
                    <span className="cifrao">$</span>
                  </Cards>
                );
              })
          }
        </Ul>
      </Section>
      <FooterHomePage />
    </SectionHome>
  );
};
