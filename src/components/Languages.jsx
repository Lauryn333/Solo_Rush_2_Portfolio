import { arrayLanguages } from "../data/languages";

function Languages() {
    return (
        <section className="section_languages">
            {
                arrayLanguages.map((language) => (
                    <div className="div_languages">
                        <p className="p_languages">{language.nameLanguage}</p>
                        <img src={language.image} alt={language.nameLanguage} />
                    </div>
                ))

            }
        </section>

    )

}
export default Languages;