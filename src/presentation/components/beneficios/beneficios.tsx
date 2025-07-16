import S from './beneficios.module.scss';

const Beneficios = () => {
    return (
        <section className={S.section}>
            <h2 className={S.title}>
                BENEFÍCIOS <span className={S.titleBlue}>DO SEU PRODUTO</span>
            </h2>
            <div className={S.complemento}>COMPLEMENTO</div>
            <div className={S.lista}>
                <div className={S.item}><span className={S.icon}>✅</span>BENEFÍCIO FORTE 01</div>
                <div className={S.item}><span className={S.icon}>✅</span>BENEFÍCIO FORTE 02</div>
                <div className={S.item}><span className={S.icon}>✅</span>BENEFÍCIO FORTE 03</div>
                <div className={S.item}><span className={S.icon}>✅</span>BENEFÍCIO FORTE 04</div>
            </div>
        </section>
    );
}

export default Beneficios;
