import { useState } from "react";
import Aside from "./styled";

interface iProps {
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<{}>>;
  adversaments: any[];
  setFiltered: React.Dispatch<React.SetStateAction<object[]>>;
  setAdversaments: React.Dispatch<React.SetStateAction<object[]>>;
  filtered: object[];
}

const AsideHomePage = ({
  setFilters,
  filters,
  adversaments,
  setFiltered,
  setAdversaments,
  filtered,
}: iProps) => {
  const [filterBtn, setFilterBtn] = useState(false);

  const handleClickBrand = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;
    setFiltered(adversaments);

    const filteredBrand = adversaments.filter((adv) => {
      return adv.brand.toLowerCase() === spanText.toLowerCase();
    });

    const uniqueBrands = new Set([...filtered, ...filteredBrand]);

    const arrayUniqueBrands = Array.from(uniqueBrands);

    setFiltered(arrayUniqueBrands);

    setFilterBtn(true);
  };

  const handleClickModel = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;

    const filteredModel = adversaments.filter((adv) => {
      return adv.model.toLowerCase() === spanText.toLowerCase();
    });

    const uniqueModel = new Set([...filtered, ...filteredModel]);

    const arrayUniqueModel = Array.from(uniqueModel);

    setFiltered(arrayUniqueModel);
    setFilterBtn(true);
  };

  const handleClickColor = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;

    const filteredColor = adversaments.filter((adv) => {
      return adv.color.toLowerCase() === spanText.toLowerCase();
    });

    const uniqueColor = new Set([...filtered, ...filteredColor]);

    const arrayUniqueColor = Array.from(uniqueColor);

    setFiltered(arrayUniqueColor);
    setFilterBtn(true);
  };

  const handleClickYear = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;
    const filteredYear = adversaments.filter((adv) => {
      return adv.year.toLowerCase() === spanText.toLowerCase();
    });

    const uniqueYear = new Set([...filtered, ...filteredYear]);

    const arrayUniqueYear = Array.from(uniqueYear);

    setFiltered(arrayUniqueYear);
    setFilterBtn(true);
  };

  const handleClickFuel = (e: React.MouseEvent) => {
    const spanText: string = (e.target as HTMLElement).innerText;

    let fuelNumber = 0;

    if (spanText === "Disel") {
      fuelNumber = 1;
    } else if (spanText === "Etanol") {
      fuelNumber = 2;
    } else if (spanText === "Gasolina") {
      fuelNumber = 3;
    } else {
      fuelNumber = 4;
    }

    const filteredFuel = adversaments.filter((adv) => {
      return adv.fuel === fuelNumber;
    });

    const uniqueFuel = new Set([...filtered, ...filteredFuel]);

    const arrayUniqueFuel = Array.from(uniqueFuel);

    setFiltered(arrayUniqueFuel);
    setFilterBtn(true);
  };

  const handleClickPriceMin = (e: string) => {
    const filteredPrice = adversaments.filter((adv) => {
      return adv.price >= parseInt(e);
    });

    const uniquePrice = new Set([...filtered, ...filteredPrice]);

    const arrayUniquePrice = Array.from(uniquePrice);

    setFiltered(arrayUniquePrice);
    setFilterBtn(true);
  };

  const handleClickPriceMAx = (e: string) => {
    const filteredPrice = adversaments.filter((adv) => {
      return adv.mileage <= parseInt(e);
    });

    const uniquePrice = new Set([...filtered, ...filteredPrice]);

    const arrayUniquePrice = Array.from(uniquePrice);

    setFiltered(arrayUniquePrice);
    setFilterBtn(true);
  };

  const handleClickKmMin = (e: string) => {
    const filteredKm = adversaments.filter((adv) => {
      return adv.mileage >= parseInt(e);
    });

    const uniqueKm = new Set([...filtered, ...filteredKm]);

    const arrayUniqueKm = Array.from(uniqueKm);

    setFiltered(arrayUniqueKm);
    setFilterBtn(true);
  };

  const handleClickKmMAx = (e: string) => {
    const filteredKm = adversaments.filter((adv) => {
      return adv.mileage <= parseInt(e);
    });

    const uniqueKm = new Set([...filtered, ...filteredKm]);

    const arrayUniqueKm = Array.from(uniqueKm);

    setFiltered(arrayUniqueKm);
    setFilterBtn(true);
  };

  // const filter = () => {
  //   for(let i = 0; i < filters.length(); i ++)
  //     const teste = adversaments.filter((adv) => {
  //       const key = Object.keys(filters[i])
  //         if(Object.keys(filters[i]) === Object.keys(adversaments[i])){
  //           return adversaments.(Object.keys(filters[i])) === filters[i]
  //         }
  //     }
  //   )
  // }
  return (
    <Aside>
      <h4>Marca</h4>
      <div>
        <span
          onClick={() => {
            setAdversaments(adversaments);
          }}
          className="heading-6-600"
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
        <span onClick={handleClickColor} className="heading-6-600">
          2021
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
          2019
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
          2015
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
          2013
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
          2012
        </span>
        <span onClick={handleClickColor} className="heading-6-600">
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
        <input
          type="number"
          placeholder="Mínimo"
          onChange={(e) => handleClickKmMin(e.target.value)}
        />
        <input
          type="number"
          className="max"
          placeholder="Máximo"
          onChange={(e) => handleClickKmMAx(e.target.value)}
        />
      </div>

      <h4>Preço</h4>
      <div className="price">
        <input
          type="number"
          placeholder="Mínimo"
          onChange={(e) => handleClickPriceMin(e.target.value)}
        />
        <input
          type="number"
          className="max"
          placeholder="Máximo"
          onChange={(e) => handleClickPriceMAx(e.target.value)}
        />
      </div>

      {filterBtn ? (
        <button
          id="cleanFilter"
          onClick={async () => {
            setFilters([]);
            setFiltered(adversaments);
            setFilterBtn(false);
          }}
        >
          Limpar Filtros
        </button>
      ) : null}
    </Aside>
  );
};

export default AsideHomePage;
