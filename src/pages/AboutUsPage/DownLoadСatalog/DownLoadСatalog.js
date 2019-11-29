import React from "react";
import Button from "../../../components/Button/Button";
import mod from "./DownLoadСatalog.module.sass";

const DownLoadСatalog = () => {
  return (
    <article className={mod.DownloadСatalog}>
      <h3 className="Title min">
        Скачайте
        <span className={mod.span}> полный каталог</span> нашей продукции
      </h3>
      <Button
        name="скачать каталог"
        classis={mod.Btn}
        href="http://localhost:3000/data/catalog/catalogBelHalTraid.docx"
        download="true"
        link="true"
      />
    </article>
  );
};

export default DownLoadСatalog;
