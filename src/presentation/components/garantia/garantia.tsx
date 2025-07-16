import S from './garantia.module.scss';

const Garantia = () => {
    return (
        <section className={S.section}>
            <div className={S.grafico7}>
                <span className={S.numero7}>7</span>
                <div className={S.garantiaTexto}>
                    <div>DIAS DE<br />GARANTIA</div>
                    <div className={S.estrelas}>⭐⭐⭐⭐⭐</div>
                </div>
            </div>
            <h2 className={S.title}>GARANTIA</h2>
            <div className={S.detalhamento}>DETALHAMENTO</div>
            <button className={S.cta}>CTA</button>
        </section>
    );
}

export default Garantia;
