import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    sagimhane: "",
    dogum: "",
    alan: "",
    inek: "1",
  });

  const calculatePrice = () => {
    const kurulum = 50000;
    const { sagimhane, dogum, alan } = formData;
    const totalPrice =
      kurulum +
      (parseInt(dogum) || 0) * 10000 +
      (parseInt(alan) || 0) * 50 +
      (parseInt(sagimhane) || 0) * 10000;
    return Math.floor(totalPrice);
  };

  const calculatePricePerCow = () => {
    const { sagimhane, dogum, alan, inek } = formData;
    const totalPrice = calculatePrice(sagimhane, dogum, alan);
    return parseInt(inek) > 0 ? Math.floor(totalPrice / parseInt(inek)) : 0;
  };

  return (
    <>
      <section className="form-card">
        <img
          src="/teknoSurumLogo.png"
          alt="tekno sürüm logosu"
          className="mx-auto w-20 mb-6"
        />
        <h1 className="form-title">Tekno Sürüm Fiyat Hesaplama</h1>
        <div className="relative">
          <input
            autoFocus
            className="form-input peer"
            type="number"
            name="sagimhane"
            id="sagimhane"
            placeholder=" "
            onChange={(e) =>
              setFormData({ ...formData, sagimhane: e.target.value })
            }
          />
          <label className="form-label" htmlFor="sagimhane">
            Sağımhane Kamera Sayısı
          </label>
        </div>
        <div className="relative">
          <input
            className="form-input peer"
            type="number"
            name="dogum"
            id="dogum"
            placeholder=" "
            onChange={(e) =>
              setFormData({ ...formData, dogum: e.target.value })
            }
          />
          <label className="form-label" htmlFor="dogum">
            Doğum Kamera Sayısı
          </label>
        </div>
        <div className="relative">
          <input
            className="form-input peer"
            type="number"
            name="alan"
            id="alan"
            placeholder=" "
            onChange={(e) => setFormData({ ...formData, alan: e.target.value })}
          />
          <label className="form-label" htmlFor="alan">
            Alan Genişliği (m²)
          </label>
        </div>
        <div className="relative">
          <input
            className="form-input peer"
            type="number"
            name="inek"
            id="inek"
            placeholder=" "
            onChange={(e) => setFormData({ ...formData, inek: e.target.value })}
          />
          <label className="form-label" htmlFor="inek">
            İnek Sayısı
          </label>
        </div>

        <div className="text-primary-900 text-right text-sm">
          Toplam Fiyat:{" "}
          <span className="font-bold text-base">
            {Intl.NumberFormat("tr-TR").format(calculatePrice())}₺
          </span>
        </div>
        <div className="text-primary-900 text-right text-sm">
          İnek Başı Fiyat:{" "}
          <span className="font-bold text-base">
            {Intl.NumberFormat("tr-TR").format(calculatePricePerCow())}₺
          </span>
        </div>
      </section>
    </>
  );
}

export default Form;
