import Aside from "./styled";

interface iProps {
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<{}>>;
  adversaments: any[];
  setFiltered: React.Dispatch<React.SetStateAction<object[]>>;
}

const AsideHomePage = ({
  setFilters,
  filters,
  adversaments,
  setFiltered,
}: iProps) => {
  const handleClickBrand = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;
    setFilters({ ...filters, brand: spanText });
    filter();
  };

  const handleClickModel = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;
    setFilters({ ...filters, model: spanText });
    filter();
  };

  const handleClickColor = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;
    setFilters({ ...filters, color: spanText });
  };

  const handleClickYear = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;
    setFilters({ ...filters, year: spanText });
  };

  const handleClickFuel = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;
    setFilters({ ...filters, fuel: spanText });
  };

  const handleClickKm = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;
    setFilters({ ...filters, km: spanText });
  };

  const handleClickPrice = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;
    setFilters({ ...filters, price: spanText });
  };

  const filter = () => {
    const filteredBrand = adversaments.filter((adv) => {
      if (Object.keys(filters).includes("brand")) {
        return adv?.brand.toLowerCase() === filters?.brand.toLowerCase();
      }
    });

    const filteredModel = adversaments.filter((adv) => {
      if (Object.keys(filters).includes("model")) {
        return adv?.model.toLowerCase() === filters?.model.toLowerCase();
      }
    });

    const filteredColor = adversaments.filter((adv) => {
      if (Object.keys(filters).includes("color")) {
        return adv?.color.toLowerCase() === filters?.color.toLowerCase();
      }
    });

    const filteredYear = adversaments.filter((adv) => {
      if (Object.keys(filters).includes("year")) {
        return adv?.year.toLowerCase() === filters?.year.toLowerCase();
      }
    });

    const filteredFuel = adversaments.filter((adv) => {
      if (Object.keys(filters).includes("fuel")) {
        return adv?.fuel.toLowerCase() === filters?.fuel.toLowerCase();
      }
    });

    const filteredKm = adversaments.filter((adv) => {
      if (Object.keys(filters).includes("km")) {
        return adv?.km.toLowerCase() === filters?.km.toLowerCase();
      }
    });

    const filteredPrice = adversaments.filter((adv) => {
      if (Object.keys(filters).includes("price")) {
        return adv?.price.toLowerCase() === filters?.price.toLowerCase();
      }
    });

    setFiltered([
      ...filteredBrand,
      ...filteredModel,
      ...filteredColor,
      ...filteredYear,
      ...filteredFuel,
      ...filteredKm,
      ...filteredPrice,
    ]);
  };
  return (
    <Aside>
      <h4>Marca</h4>
      <div>
        <span
          onClick={() => {
            handleClickBrand;
            filter();
          }}
          className="heading-6-600z"
        >
          General Motors
        </span>
        <span onClick={handleClickBrand} className="heading-6-600">
          Fiat
        </span>
        <span onClick={handleClickBrand} className="heading-6-600">
          Ford
        </span>
        <span onClick={handleClickBrand} className="heading-6-600">
          Honda
        </span>
        <span onClick={handleClickBrand} className="heading-6-600">
          Porsche
        </span>
        <span onClick={handleClickBrand} className="heading-6-600">
          Volswagen
        </span>
      </div>

      <h4>Modelo</h4>
      <div>
        <span onClick={handleClickModel} className="heading-6-600">
          Civic
        </span>
        <span onClick={handleClickModel} className="heading-6-600">
          Corolla
        </span>
        <span onClick={handleClickModel} className="heading-6-600">
          Cruze
        </span>
        <span onClick={handleClickModel} className="heading-6-600">
          Fit
        </span>
        <span onClick={handleClickModel} className="heading-6-600">
          Gol
        </span>
        <span onClick={handleClickModel} className="heading-6-600">
          Ka
        </span>
        <span onClick={handleClickModel} className="heading-6-600">
          Onix
        </span>
        <span onClick={handleClickModel} className="heading-6-600">
          Porsche 718
        </span>
      </div>

      <h4>Cor</h4>
      <div>
        <span onClick={handleClickColor} className="heading-6-600">
          Azul
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
          Branca
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
          Cinza
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
          Prata
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
          Preta
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
          Verde
        </span>
      </div>

      <h4>Ano</h4>
      <div>
        <span onClick={handleClickYear} className="heading-6-600">
          2022
        </span>
        <span onClick={handleClickYear} className="heading-6-600">
          2021
        </span>
        <span onClick={handleClickYear} className="heading-6-600">
          2018
        </span>
        <span onClick={handleClickYear} className="heading-6-600">
          2015
        </span>
        <span onClick={handleClickYear} className="heading-6-600">
          2013
        </span>
        <span onClick={handleClickYear} className="heading-6-600">
          2012
        </span>
        <span onClick={handleClickYear} className="heading-6-600">
          2010
        </span>
      </div>

      <h4>Combustível</h4>
      <div>
        <span onClick={handleClickFuel} className="heading-6-600">
          Disel
        </span>
        <span onClick={handleClickFuel} className="heading-6-600">
          Etanol
        </span>
        <span onClick={handleClickFuel} className="heading-6-600">
          Gasolina
        </span>
        <span onClick={handleClickFuel} className="heading-6-600">
          Flex
        </span>
      </div>

      <h4>Km</h4>
      <div className="km">
        <input type="number" placeholder="Mínimo" />
        <input type="number" className="max" placeholder="Máximo" />
      </div>

      <h4>Preço</h4>
      <div className="price">
        <input type="number" placeholder="Mínimo" />
        <input type="number" className="max" placeholder="Máximo" />
      </div>

      {filters ? (
        <button
          id="cleanFilter"
          onClick={async () => {
            setFilters([]);
            setFiltered(adversaments);
          }}
        >
          Limpar Filtros
        </button>
      ) : null}
    </Aside>
  );
};

export default AsideHomePage;
